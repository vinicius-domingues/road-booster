# Preencher / Atualizar Notícias

Este arquivo contém o prompt padrão para ser enviado à IA quando você quiser **injetar notícias** em um repositório vazio ou atualizar as notícias atuais na Central.

Copie o prompt abaixo e envie para a IA:

---

**PROMPT PARA A IA:**

Aja como um Editor-Chefe de um grande portal de tecnologia (como The Verge ou TechCrunch). O usuário possui uma plataforma técnica de roadmaps chamada `road-booster` que possui uma barra de "Notícias Recentes" no rodapé e uma central de alertas. 

O repositório está limpo. Sua tarefa é popular a variável global `newsItems` no arquivo `script.js` com notícias REAIS e muito recentes sobre tecnologia, frameworks, demissões de big techs, novas versões de linguagens ou tendências (IA, Web3, Cloud).

### REGRAS PARA CRIAÇÃO DE NOTÍCIAS:

1. **Quantidade e Impacto:**
   - Crie exatamente entre 5 a 8 notícias.
   - **Fontes Ideais e Verificadas:** O foco das buscas deve ocorrer nas seguintes fontes ou similares, conforme o README do projeto: Microsoft DevBlogs, AWS Blog, Google Cloud Blog, CNCF, Docker Blog, Kubernetes Blog, InfoQ, The New Stack, Stack Overflow Developer Survey, GitHub Octoverse, etc.
   - **Objetivo da Notícia:** O foco deve ser o impacto na carreira do desenvolvedor, para ajudá-lo a entender tendências, evitar estudar tecnologias em queda e descobrir mudanças importantes no mercado (ex: "React 19 é lançado: o que muda para o Frontend?", "Nova IA do Google escreve código mais rápido").
2. **Estrutura do Objeto:**
   - O array `newsItems` deve seguir exatamente este formato:
```javascript
{
  title: "React 19: Novo Compilador muda o jogo",
  summary: "A nova versão traz o React Compiler que promete acabar com a necessidade de useMemo e useCallback, alterando a forma como pensamos em otimização no frontend.",
  imageUrl: "https://picsum.photos/400/200?random=1", // Use uma imagem pública que faça sentido (ou Picsum)
  link: "https://react.dev/blog" // Link real para a fonte da notícia
}
```
3. **Padrão de Linguagem:**
   - O `title` deve ter no máximo 60 caracteres.
   - O `summary` deve ir direto ao ponto técnico e de mercado (2 a 3 linhas curtas).

**Seu Retorno Deve Ser:**
Apenas o array `newsItems` codificado em JavaScript pronto para ser substituído em `script.js`. Não altere mais nada.
