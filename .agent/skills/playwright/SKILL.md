# playwright

## Goals
- Prover automação completa de testes de ponta a ponta (E2E), web scraping e auditoria visual da interface do projeto (baseada em HTML puro).
- Gerenciar a execução do Playwright via terminal local (modo headless para validação rápida ou headed para debug visual).
- Capturar logs de erro do navegador e screenshots em caso de falhas na interface.
- Aplicar correções automáticas no código fonte (ex: `script.js` ou `roadmap.html`) caso a estrutura do DOM (IDs, classes) mude e quebre os testes.

## Instructions
1. Verifique se as dependências do Playwright estão instaladas no ambiente. Se não houver `package.json`, instancie um rapidamente para fins de teste ou use `npx playwright test` num subdiretório de testes.
2. Para executar um teste headless: Rode no terminal PowerShell o comando `npx playwright test`.
3. Para executar um teste visual/headed (se solicitado): Rode `npx playwright test --headed`.
4. Se houver falha (código de saída diferente de zero), leia os logs de erro no terminal e verifique imagens de erro na pasta `test-results/` ou `screenshots/`.
5. Se o erro apontar para um seletor não encontrado (ex: `Timeout 30000ms exceeded while waiting for locator('#old-id')`), faça uma varredura em `roadmap.html` e `script.js` (usando comandos como grep ou ferramentas de leitura de arquivo).
6. Identifique a mudança (ex: o ID mudou para `#new-id`) e atualize automaticamente o arquivo de teste correspondente ou o código JS/HTML, realinhando o DOM e os testes.
7. Comunique ao usuário qual correção foi aplicada e valide executando o teste novamente.

## Examples
**Exemplo de fluxo de auto-cura:**
1. O comando falha: `Error: locator('#btn-start').click() - timeout`.
2. A IA lê o `roadmap.html` e descobre que o botão agora possui a classe `.btn-iniciar` em vez do id `#btn-start`.
3. A IA usa sua capacidade de edição de arquivo para alterar o spec do Playwright (substituindo `#btn-start` por `.btn-iniciar`).
4. Re-executa o comando do Playwright com sucesso.

## Constraints
- **Isolamento de Stack:** Como o projeto base é Vanilla (HTML/CSS/JS sem build), configure a automação de modo a não poluir o ambiente principal. Mantenha os artefatos do Playwright (`node_modules`, `playwright.config.ts`, etc.) restritos caso possível.
- **Servidor Local:** Assegure-se de que os testes consigam acessar os arquivos via protocolo `file:///` ou inicialize um servidor web simples temporário (ex: `npx serve` ou equivalente via python) antes da execução E2E.
- Limite as capturas de tela apenas aos cenários de falha para poupar espaço em disco do repositório local.
