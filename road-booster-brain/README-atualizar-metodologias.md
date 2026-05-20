# Preencher / Atualizar Metodologias de Estudo

Este arquivo contém o prompt padrão para ser enviado à IA quando você quiser **preencher as metodologias de estudo do zero** ou adicionar novas ao projeto vazio.

Copie o prompt abaixo e envie para a IA:

---

**PROMPT PARA A IA:**

Aja como um Psicólogo da Educação Tech e Engenheiro de Software Sênior. O usuário possui uma plataforma `road-booster` cujo repositório está vazio na área de "Metodologias de estudo".

Sua tarefa é gerar o código HTML exato que será injetado na variável `methodsContentHTML` dentro do arquivo `script.js`, criando os cards das melhores e mais comprovadas técnicas de aprendizagem acelerada.

### REGRAS PARA CRIAÇÃO DAS METODOLOGIAS:

1. **Quantidade e Qualidade:**
   - Crie entre 3 a 5 metodologias comprovadas (ex: Spaced Repetition, Active Recall, Técnica Feynman, Just-in-Time Learning, Pomodoro para Codificação).
   - O foco deve ser o estudo de *tecnologia e programação*, não apenas estudo genérico.
2. **Estrutura HTML (Obrigatória):**
   - Você DEVE seguir ESTRITAMENTE o design do sistema. Cada metodologia deve ser um card `.job-card`.
   - O código HTML gerado deve seguir esse template exato:
```html
<div class="job-card">
  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; color: var(--color-3b82f6);">
    <i data-lucide="brain-circuit" style="width: 20px; height: 20px;"></i>
    <h2 style="font-size: 16px; font-weight: 700; margin: 0; color: var(--color-f8fafc);">Nome da Técnica</h2>
  </div>
  <p class="job-competencies">
    Descrição clara e científica de por que a técnica funciona e como ela ajuda a fixar conceitos difíceis de programação.
  </p>
  <div style="background: var(--color-3b82f611); border-left: 2px solid var(--color-3b82f6); padding: 10px 14px; margin-top: 15px; border-radius: 0 6px 6px 0;">
    <p style="margin: 0; font-size: 13px; color: var(--color-cbd5e1); line-height: 1.5;">
      <strong>Metáfora:</strong> Uma analogia simples e genial que faça uma pessoa leiga entender o conceito.
    </p>
  </div>
  <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--color-1e1e3a); font-size: 13px; color: var(--color-94a3b8); line-height: 1.5;">
    <strong>Prática:</strong> Ações exatas que o dev deve fazer hoje na frente do teclado para aplicar o método.
  </div>
</div>
```
3. **Design System:**
   - Varie a cor de cada card alternando variáveis de cor do Lucide e bordas: `var(--color-3b82f6)` (Azul), `var(--color-10b981)` (Verde), `var(--color-f59e0b)` (Laranja), `var(--color-a855f7)` (Roxo), etc.
   - Troque o atributo `data-lucide` para ícones coerentes (ex: `repeat`, `users`, `blocks`, `timer`).

**Seu Retorno Deve Ser:**
O trecho de código HTML puro, pronto para ser colado como o conteúdo das metodologias no frontend (substituindo o conteúdo da grid). Não adicione explicações extras ou markdown em volta se não for necessário.
