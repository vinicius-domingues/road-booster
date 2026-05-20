# Preencher / Atualizar Busca de Vagas

Este arquivo contém o prompt padrão para ser enviado à IA quando você quiser **popular a seção de vagas do zero** (em um projeto recém baixado) ou **atualizar as vagas** atuais.

Copie o prompt abaixo e envie para a IA:

---

**PROMPT PARA A IA:**

Aja como um Tech Recruiter Senior. O usuário possui uma aplicação chamada `road-booster`, que exibe roadmaps técnicos e cruza as competências das trilhas com vagas reais do mercado. O repositório está vazio de vagas e você deve criá-las.

Sua tarefa é gerar o código JavaScript populando a variável global `jobRoles` com oportunidades de emprego reais ou altamente realistas, baseando-se no mercado atual de tecnologia.

### REGRAS PARA CRIAÇÃO DE VAGAS:

1. **Fontes de Busca Obrigatórias:**
   - Você DEVE basear a sua busca e extração de vagas ativas exclusivamente nos seguintes portais: **LinkedIn**, **Vagas.com** e **Gupy**.
2. **Quantidade e Diversidade:**
   - Crie no mínimo 10 vagas reais retiradas destas plataformas.
   - Distribua os níveis de experiência no campo `level`: "estagiario", "junior", "pleno" e "senior".
   - Cubra os escopos no campo `scope` correspondentes às trilhas existentes. **De acordo com o README principal**, dê preferência para os seguintes nichos de arquitetura e tecnologia: **Backend geral, TOTVS, .NET/C#, Protheus, ADVPL, Cloud, DevOps e Integrações**.
2. **Estrutura do Objeto (Obrigatória):**
   - Cada item do array `jobRoles` deve ter exatamente o seguinte formato:
```javascript
{
  scope: "backend", // DEVE ser o ID de alguma trilha (ex: backend, frontend, security)
  level: "senior", // "estagiario", "junior", "pleno", "senior"
  title: "[Backend] Engenheiro de Software Sênior - Node.js",
  url: "https://link-da-vaga.com/aplicar", // Link real de um portal (LinkedIn, Gupy)
  competencies: ["Node.js", "TypeScript", "AWS", "Microserviços", "Docker", "Jest", "CI/CD"]
}
```
3. **Mapeamento de Competências (MUITO IMPORTANTE):**
   - O campo `competencies` é o mais crítico. O algoritmo do sistema fará um "match" destas palavras com as ferramentas ensinadas nas trilhas.
   - Extraia as tecnologias **EXATAS** (ex: não coloque "banco de dados", coloque "PostgreSQL", "MongoDB"). 
   - Inclua no mínimo 6 a 12 competências por vaga.

**Seu Retorno Deve Ser:**
Apenas o array `jobRoles` completo em código puro (JS) pronto para ser injetado em `script.js`. Não altere nenhuma outra função ou lógica.
