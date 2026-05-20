# Adicionar Nova Trilha ou Tópico Principal

Este arquivo contém o prompt padrão para ser enviado à IA (como o Claude, ChatGPT ou Gemini) quando você quiser criar e inserir uma **nova trilha completa** (ex: "Mobile", "Data Science", "DevOps") ou um **novo grande tópico** dentro de uma trilha.

Copie o prompt abaixo e cole no chat da IA informando qual o tema desejado:

---

**PROMPT PARA A IA:**

Aja como um Arquiteto de Soluções e Especialista em Ensino Tech. O usuário está construindo uma aplicação chamada `road-booster`, que exibe roadmaps de estudos técnicos no formato de "trilhas" interativas. 

O usuário solicitará a criação de uma NOVA TRILHA (ex: "Back-end", "Data Science") ou a inclusão de um NOVO TÓPICO em uma trilha vazia.

Sua tarefa é gerar o código JavaScript estático no formato exato que a aplicação utiliza, preenchendo todos os dados reais baseados no estado da arte atual do mercado. Não utilize placeholders, faça pesquisas reais sobre tecnologias modernas, metodologias atuais e competências requeridas em vagas reais.

### REGRAS DA ESTRUTURA DE TRILHAS E TÓPICOS:

1. **Localização:** Cada trilha adicionada deve ser registrada na variável global `trailSubItems` e na variável de estado `extraRoadmaps` ou `roadmaps` do arquivo `script.js`. O submenu lateral da aplicação lerá essas variáveis.
2. **Quantidade de Fases (Tópicos Principais):** Cada trilha deve conter, no mínimo, 4 fases (ex: "01 - Fundamentos", "02 - Linguagens") e, no máximo, 20 fases.
3. **Estrutura da Trilha (Roadmap Object):**
   - Deve conter os campos: `id`, `label`, `title`, `eyebrow` (ex: "Roadmap NomeDaTrilha"), `description` (rodapé de explicação adaptado ao contexto e estilo épico, ex: "Do zero à arquitetura de dados que as maiores empresas usam..."), `icon` (nome de um ícone do Lucide) e `color` (uma variável CSS ou hex code).
   - E o array `phases`.
4. **Subtópicos (Assuntos Expandíveis/Dropbox):**
   - Dentro de cada fase, deve haver um array de `topics` contendo, no mínimo, 2 itens.
   - Cada tópico é exibido no frontend como um "dropbox" (accordion).
   - **Campos obrigatórios de cada tópico:**
     - `title`: Título chamativo (ex: "HTTP, HTTPS & Protocolos").
     - `tagline`: Uma frase de impacto que justifica o tema (ex: "Entender HTTP profundamente é o que separa o junior do senior").
     - `description`: Explicação técnica e aprofundada do conceito. **MUITO IMPORTANTE:** Seguindo os princípios do projeto, adicione ao final da descrição uma "Micro Solução Sugerida" ou "Evidência de Aprendizado" (ex: "Crie uma API simples e faça deploy para gerar um post no LinkedIn", ou um problema real isolado para resolver). Evite sugerir projetos gigantes.
     - `tools`: Array com `{ name, why }` para a **Parte para Linguagens & Ferramentas**. Nunca deixe vazio.
     - `sites`: Array com `{ label, url, type }` para a **Parte para Sites de Prática & Referência**. Nunca deixe vazio. Os tipos aceitos são "practice", "docs", "site".
     - `resources`: Array com `{ label, url, type }` para a **Parte para Trilha de Estudo** (youtube ou algum site grátis). Nunca deixe vazio. Os tipos aceitos são "youtube", "course".
5. **Integração com Vagas e a UI:**
   - A aplicação base possui uma variável `jobRoles` com vagas reais cadastradas.
   - O componente visual já conta com uma lógica de contagem e cruzamento de vagas ("Vagas compatíveis com esta stack"). Você não precisa injetar as vagas direto no tópico, mas deve garantir que as `tools` e o escopo da trilha façam sentido para o algoritmo de *match*.
   - **Regra Visual:** O sistema renderiza as vagas que já estão na parte de "Busca de vagas" no formato `"VAGAS PEDIRIAM ISSO (TOTAL X)"` se houver relação com o tema. Caso não haja vaga encontrada, o sistema manterá o espaço dela, mas falando `"VAGAS PEDIRIAM ISSO (0)"`. Você deve preencher bem os arrays de `tools` para maximizar as chances de match (ex: colocar 'Node.js', 'AWS', 'Python').

### REGRAS DE DESIGN E INJEÇÃO (HTML/CSS/JS):

- **ATENÇÃO MÁXIMA:** Você NÃO deve gerar HTML, CSS ou funções JavaScript. O motor visual (engine) da aplicação já possui todo o CSS e JS para renderizar os "dropboxes" (accordions), os botões, os ícones, os badges e as cores perfeitamente, imitando 100% o design original.
- O seu único trabalho é **FORNECER OS DADOS** preenchendo RIGOROSAMENTE os arrays abaixo. Se você fornecer os arrays `tools`, `sites` e `resources` corretamente formatados, a engine da aplicação desenhará a seção "Linguagens & Ferramentas", "Sites de Prática" e "Trilha de Estudo" automaticamente!
- Siga exatamente este formato para o objeto da fase. NUNCA pule ou omita `tools`, `sites` ou `resources`:
```javascript
{
  id: "fundamentos_mobile", label: "01 · Fundamentos", color: "var(--color-6366f1)", dim: "var(--color-1e1b4b22)", icon: "smartphone",
  topics: [
    {
      title: "Arquitetura Mobile",
      tagline: "A base de todo aplicativo escalável.",
      description: "Entender o ciclo de vida do aplicativo, gerenciamento de estado e arquiteturas como MVVM e Clean Architecture. **Micro Solução Sugerida:** Crie uma tela simples com gerenciamento de estado isolado.",
      tools: [ 
        { name: "Swift", why: "Linguagem Padrão Apple" },
        { name: "Kotlin", why: "Linguagem Padrão Android" }
      ],
      sites: [ 
        { label: "iOS Docs", url: "https://developer.apple.com/", type: "docs" },
        { label: "Android Codelabs", url: "https://developer.android.com/", type: "practice" }
      ],
      resources: [ 
        { label: "Curso Dev Mobile", url: "https://youtube.com/...", type: "youtube" }
      ]
    }
    // ... mínimo de 2 topics por fase, SEMPRE com tools, sites e resources preenchidos!
  ]
}
```
- Cores: Utilize a paleta dark theme em CSS vars já adotada no projeto, como `var(--color-111122)` ou tons de primary (ex: `#3b82f6` ou `var(--color-3b82f6)`).

**Seu Retorno Deve Ser:**
O trecho de código exato que deve ser colado em `script.js` para registrar a nova trilha, as variáveis das fases (`phases`) populadas com todo o conhecimento e a atualização do menu `trailSubItems`. NÃO INVENTE HTML! Apenas retorne as arrays.
