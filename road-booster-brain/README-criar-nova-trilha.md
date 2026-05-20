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
     - `tools`: Array com `{ name, why }` para Linguagens & Ferramentas.
     - `sites`: Array com `{ label, url, type }` para Sites de Prática & Referência. Os tipos aceitos são "practice", "docs", "site".
     - `resources`: Array com `{ label, url, type }` para Trilha de Estudo. Os tipos aceitos são "youtube", "course".
5. **Integração com Vagas:**
   - A aplicação base possui uma variável `jobRoles` com vagas reais cadastradas.
   - Ao gerar o código do tópico, o componente visual já conta com uma lógica de contagem e cruzamento de vagas ("Vagas compatíveis com esta stack"). Você não precisa injetar as vagas direto no tópico, mas deve garantir que as `tools` e o escopo da trilha façam sentido para que o algoritmo de *match* da aplicação (que busca palavras no `description` e `tools`) encontre as vagas corretamente.

### REGRAS DE DESIGN E INJEÇÃO (HTML/CSS/JS):

- **NÃO** altere a lógica de `render()` ou as funções principais do `script.js`. Você deve apenas fornecer os **objetos JavaScript puros** (arrays e dicionários) que o usuário copiará e colará nas variáveis (ex: `trailSubItems`, `roadmaps`, `extraRoadmaps` e os arrays de fases como `mobilePhases`, etc).
- Siga exatamente este formato para o objeto da fase:
```javascript
{
  id: "fundamentos_mobile", label: "01 · Fundamentos", color: "var(--color-6366f1)", dim: "var(--color-1e1b4b22)", icon: "smartphone",
  topics: [
    {
      title: "Arquitetura Mobile",
      tagline: "A base de todo aplicativo escalável.",
      description: "Entender o ciclo de vida do aplicativo, gerenciamento de estado e arquiteturas como MVVM e Clean Architecture.",
      tools: [ { name: "Swift", why: "Padrão Apple" } ],
      sites: [ { label: "iOS Docs", url: "...", type: "docs" } ],
      resources: [ { label: "Curso Dev", url: "...", type: "youtube" } ]
    }
    // ... mínimo de 2 topics
  ]
}
```
- Cores: Utilize a paleta dark theme em CSS vars já adotada no projeto, como `var(--color-111122)` ou tons de primary (ex: `#3b82f6` ou `var(--color-3b82f6)`).

**Seu Retorno Deve Ser:**
O trecho de código exato que deve ser colado em `script.js` para registrar a nova trilha, as variáveis das fases (`phases`) populadas com todo o conhecimento e a atualização do menu `trailSubItems`.
