# faf wizard

## Goals
- Atuar como um assistente de escopo para gerar e atualizar o manifesto de arquitetura (`.faf`) na raiz do projeto.
- Mapear tecnologias (HTML puro, CSS, JS vanilla) e delimitar as fronteiras de leitura para outras IAs parceiras.
- Atualizar dinamicamente o arquivo de contexto para economizar tokens, ignorando pastas redundantes (ex: `node_modules`, `build`, `.git`, pastas temporárias).
- Manter a documentação do escopo do projeto sempre alinhada com a realidade atual.

## Instructions
1. Analise a raiz do projeto executando `Get-ChildItem -Path .\` no PowerShell para identificar os arquivos base.
2. Identifique as tecnologias chaves. Neste repositório: `HTML`, `CSS` (`styles.css`), `JavaScript` puro (`script.js`).
3. Se o arquivo `.faf` não existir, crie-o na raiz do projeto.
4. Escreva/Atualize no `.faf` a stack atual:
   - Frontend: Vanilla HTML/CSS/JS.
   - Banco de Dados: Arquivo JSON interno/local.
   - Build/Frameworks: Nenhum.
5. Adicione regras de exclusão no `.faf` instruindo as IAs a ignorarem diretórios não essenciais na leitura de contexto: `.git/`, `node_modules/` (se existir automação/testes), pastas de log (`logs/`, `screenshots/`, `test-results/`).
6. Revise se o `.faf` gerado é enxuto, não ultrapassando o necessário para evitar o desperdício de tokens.

## Examples
**Exemplo de execução:**
`USER:` "Invoque o faf wizard para atualizar nosso manifesto de arquitetura."
`AGENT:` 
1. Lê o diretório.
2. Atualiza o arquivo `.faf` com:
```text
[Architecture]
Frontend: Vanilla HTML, CSS, JS
State: JSON based
[AI Context Boundaries]
Ignore: .git, node_modules, logs, test-results, screenshots
Focus: script.js, roadmap.html, styles.css
```

## Constraints
- **Nunca** inclua conteúdos gigantes no arquivo `.faf`, apenas meta-informações e diretrizes estruturais.
- O arquivo `.faf` deve servir de guia rápido para IAs, portanto, seja direto e use texto puro ou um padrão simples.
- Não apague fronteiras configuradas manualmente pelo usuário, apenas adicione novas.
