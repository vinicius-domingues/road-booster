# Atualizar Trilha

Copie o prompt abaixo e envie para a IA quando quiser atualizar os tópicos de estudo da trilha.

---
**PROMPT:**

Aja como um Arquiteto de Software e atualize a trilha de estudos do meu projeto baseada na estrutura do arquivo `road-booster-center/script.js`.

**Instruções:**
1. Leia a estrutura da variável `backendPhases` ou `frontendPhases` (ou `extraRoadmaps` para outras trilhas).
2. Adicione novos objetos na lista `topics` das fases, representando tecnologias modernas (ex: novos frameworks, novos conceitos arquiteturais).
3. Respeite estritamente a seguinte estrutura de objeto:
```javascript
{
  title: "Nome da Tecnologia",
  tagline: "Resumo de 1 linha",
  description: "Por que estudar isso e qual a importância.",
  tools: [{ name: "Nome", why: "Por que usar" }],
  sites: [{ label: "Site", url: "https://...", type: "docs" }],
  resources: [{ label: "Curso/Vídeo", url: "https://...", type: "youtube" }]
}
```
4. Gere o código javascript pronto para eu substituir a fase correspondente.
