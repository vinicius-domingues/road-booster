# Atualizar Vagas

Copie o prompt abaixo e envie para a IA quando quiser incluir novas vagas e retroalimentar as competências.

---
**PROMPT:**

Aja como um Recrutador Técnico e atualize a lista de vagas reais do meu projeto baseada na estrutura do arquivo `road-booster-center/script.js`.

**Instruções:**
1. Leia a estrutura da variável `jobRoles`.
2. Busque na web (ou considere os dados que eu te enviar) 5 novas vagas recentes para desenvolvimento (Junior, Pleno, Senior) nos escopos 'backend', 'frontend' ou 'cloud'.
3. Respeite estritamente a seguinte estrutura de objeto:
```javascript
{
  scope: "backend", // ou frontend, cloud, etc
  level: "junior", // pleno, senior, estagiario
  title: "Nome real da vaga na empresa",
  url: "https://link-da-vaga...",
  competencies: ["Tecnologia 1", "Conceito 2", "Ferramenta 3"]
}
```
4. Foque em extrair as competências EXATAS da descrição da vaga, pois o sistema fará um "match" automático dessas competências com as tecnologias da trilha.
5. Retorne a array `jobRoles` atualizada com os novos itens.
