# Objetivo do projeto

Criar uma aplicação IA Driven em **HTML puro** para mapear, manter e evoluir uma trilha de estudos backend baseada em arquitetura real, mercado de trabalho e atualização contínua.

A ideia central é que a própria IA consiga dar manutenção rápida no arquivo, sem depender de framework, build, banco externo ou infraestrutura complexa. O projeto deve ser simples de abrir, editar, versionar e evoluir. Ela será ativa pos componentes de javascript da nossa plataforma, idealizadas por um readme de cada seção.

## Visão geral

O projeto será um roadmap interativo e inteligente para backend.

Ele deve ajudar a responder perguntas como:

- O que preciso estudar para backend moderno?
- Quais tecnologias estão conectadas entre si?
- Quais vagas reais pedem essas competências?
- Quais tópicos devo priorizar para TOTVS, ERP, Cloud, Protheus, .NET ou outras rotas?
- O que posso postar no LinkedIn sem precisar construir um sistema gigante?
- O que já estudei, o que falta e onde estou travado?
- Quais notícias recentes podem mudar minha decisão de rota?
- Como estudar muita coisa sem virar aprendizado superficial?

## Princípios do projeto

### 1. HTML puro

O projeto deve ser feito em HTML, CSS e JavaScript puro.

Motivos:

- manutenção rápida por IA
- fácil abertura no navegador
- sem dependência de build
- sem instalação de pacote
- fácil versionamento
- fácil backup
- baixa chance de quebrar com atualização de framework

### 2. Roadmap vivo

O roadmap não deve ser apenas uma lista fixa de tecnologias.

Ele deve ser retroalimentado por:

- vagas reais
- competências pedidas pelo mercado
- notícias recentes
- mudanças de stack
- evolução pessoal do estudante
- novas decisões de carreira

### 3. Aprendizado orientado a evidência

Cada tópico precisa gerar evidência prática:

- mini projeto
- micro solução
- post no LinkedIn
- documentação curta
- link público
- checklist de aprendizado

A ideia é evitar estudar em silêncio por meses sem gerar portfólio.

## Funcionalidades principais

## 1. Mapear toda a arquitetura backend atual

O sistema deve mapear backend do começo ao fim, saindo de fundamentos até arquitetura avançada.

Exemplos de blocos:

- lógica de programação
- estruturas de dados
- Git
- linguagens backend
- APIs REST
- GraphQL
- WebSockets
- bancos relacionais
- bancos NoSQL
- ORMs
- modelagem de dados
- autenticação e autorização
- segurança
- testes
- mensageria
- cache
- workers
- microsserviços
- monólito modular
- DDD
- Clean Architecture
- event-driven architecture
- CQRS
- observabilidade
- Docker
- Kubernetes
- cloud
- CI/CD
- performance
- escalabilidade
- integração com frontend
- IA no backend

Cada fase deve ter:

- título
- descrição
- ferramentas
- competências relacionadas
- links de estudo
- vagas que pedem aquilo
- problemas práticos sugeridos
- status de progresso

## 2. Buscar vagas reais e retroalimentar a trilha

O sistema deve usar vagas reais de sites como:

- LinkedIn
- Vagas.com.br
- portal oficial da empresa
- Gupy
- outros portais confiáveis

O foco inicial será backend e nichos específicos, por exemplo:

- TOTVS
- .NET/C#
- Protheus
- ADVPL
- Cloud
- DevOps
- ERP
- integrações

Para cada vaga encontrada, registrar:

- cargo
- empresa
- nível
- escopo
- link exato
- tecnologias pedidas
- competências obrigatórias
- competências desejáveis
- senioridade
- data da coleta
- fonte

Depois disso, a trilha deve ser atualizada com base nessas competências.

Exemplo:

Se muitas vagas pedem **RabbitMQ**, **Redis**, **Docker** e **SQL avançado**, esses tópicos devem ganhar destaque na rota.

Se uma vaga específica pede **C#/.NET + Angular + Oracle + testes unitários**, os tópicos correspondentes devem mostrar essa vaga como exemplo.

## 3. Aba de rotas por escopo e nível

O roadmap deve ter uma aba central chamada **Rotas**.

Essa aba deve separar as vagas por escopo:

- Backend
- Cloud
- Protheus
- DevOps
- Integrações
- futuramente Frontend, Startup e BI

Dentro de cada escopo, separar por nível:

- Estagiário
- Júnior
- Pleno
- Sênior
- Especialista
- Tech Lead

Dentro de cada nível, mostrar:

- cargo
- link da vaga
- competências pedidas
- tecnologias principais
- relação com tópicos do roadmap

## 4. Notícias recentes e fontes verificadas

O sistema deve ter uma área para acompanhar notícias recentes sobre as tecnologias destacadas na trilha.

Objetivo:

- entender tendências
- evitar estudar tecnologia em queda sem perceber
- descobrir mudanças importantes de mercado
- recalcular a rota quando necessário

Fontes ideais:

- blogs oficiais das tecnologias
- Microsoft DevBlogs
- AWS Blog
- Google Cloud Blog
- CNCF
- Docker Blog
- Kubernetes Blog
- InfoQ
- The New Stack
- Thoughtworks Technology Radar
- Martin Fowler
- Stack Overflow Developer Survey
- GitHub Octoverse
- portais brasileiros confiáveis de tecnologia

Para cada notícia, registrar:

- título
- fonte
- link
- data
- tecnologia relacionada
- resumo
- impacto na trilha
- possível decisão sugerida

Exemplo:

Uma notícia sobre crescimento de **.NET em cloud native** pode reforçar a rota C#.

Uma notícia sobre mudança em licenciamento, queda de adoção ou problema de segurança pode sugerir revisão de prioridade.

## 5. Conteúdos de estudo por tópico

Para cada tópico de cada fase, o sistema deve citar:

- **3 conteúdos brasileiros**
- **3 conteúdos internacionais**

Cada conteúdo deve ter:

- título
- tipo
- idioma
- link
- fonte
- nível indicado
- observação curta

Tipos possíveis:

- documentação oficial
- curso gratuito
- curso pago
- artigo
- vídeo
- playlist
- livro
- desafio prático
- repositório

Exemplo para Kafka:

Conteúdos BR:

- vídeo em português sobre Kafka
- artigo brasileiro sobre mensageria
- curso ou aula prática com Kafka

Conteúdos internacionais:

- documentação oficial Apache Kafka
- Confluent Developer
- artigo ou curso internacional sobre event-driven architecture

## 6. Problemas reais e micro soluções para LinkedIn

Cada tópico deve sugerir um problema real para resolver e postar.

A ideia é evitar projetos gigantes que demoram semanas e acabam nunca sendo publicados.

Em vez disso, criar **microsoluções isoladas**.

Exemplo:

Em vez de criar um sistema completo de e-commerce com Kafka, criar:

> "Micro solução: processamento assíncrono de pedidos com Kafka, retry e dead-letter queue."

Isso pode virar um post no LinkedIn com:

- problema
- solução
- arquitetura simples
- trecho de código
- diagrama
- link do repositório
- aprendizado

Cada tópico deve conter:

- problema real
- micro solução sugerida
- tecnologias usadas
- artefatos para publicar
- roteiro de post no LinkedIn
- critérios de conclusão

Exemplos:

- Redis: cache de consulta lenta com invalidação manual
- RabbitMQ: fila de envio de e-mail com retry
- Docker: ambiente local reproduzível com API + banco
- SQL: otimização de query lenta com índice e plano de execução
- OpenTelemetry: tracing simples entre API e worker
- Auth: login com JWT e refresh token
- DDD: modelagem de domínio de cobrança

## 7. Mini banco de dados em JSON

O projeto deve ter um mini banco de dados em JSON dentro do próprio HTML ou em arquivo separado.

Objetivo:

- marcar etapas concluídas
- marcar etapa atual
- registrar o que falta
- guardar links de vagas
- guardar notícias
- guardar conteúdos
- guardar projetos sugeridos
- manter progresso sem banco externo

Estrutura possível:

```json
{
  "progress": {
    "currentPhase": "linguagens",
    "currentTopic": "csharp-dotnet",
    "completedTopics": ["git", "http", "sql-basico"],
    "pausedTopics": ["kubernetes"],
    "nextTopics": ["testes-unitarios", "docker"]
  },
  "jobs": [],
  "news": [],
  "studyResources": [],
  "linkedinProjects": []
}
```

Funcionalidades esperadas:

- marcar tópico como concluído
- marcar tópico como estudando
- marcar tópico como pendente
- salvar observações
- mostrar percentual por fase
- mostrar próximos passos
- mostrar lacunas com base nas vagas

## 8. Metodologias de estudo

O roadmap deve ter uma área específica para metodologia de estudo.

Objetivo:

- ajudar a conciliar muitas tecnologias
- evitar estudo raso
- criar rotina sustentável
- transformar estudo em produção pública
- solidificar conhecimento

Temas dessa área:

- como estudar backend por ciclos
- como alternar teoria e prática
- como revisar conteúdo
- como montar projetos pequenos
- como documentar aprendizado
- como postar no LinkedIn
- como usar spaced repetition
- como estudar uma stack principal sem ignorar tecnologias adjacentes
- como priorizar com base em vagas
- como evitar overload

Exemplo de método:

### Ciclo semanal

1. Segunda: estudar conceito
2. Terça: implementar micro solução
3. Quarta: testar e documentar
4. Quinta: melhorar arquitetura
5. Sexta: publicar resumo no LinkedIn
6. Sábado: revisar e comparar com vagas reais
7. Domingo: escolher próximo foco

## 9. Retroalimentação da trilha

O sistema deve ter um fluxo para recalcular a trilha.

Entradas:

- vagas novas
- notícias recentes
- progresso pessoal
- preferência de linguagem
- tecnologias descartadas
- foco de carreira

Saídas:

- tópicos mais importantes
- tópicos que podem esperar
- tecnologias que devem entrar
- tecnologias que podem sair
- rota recomendada atualizada
- micro projetos novos

Exemplo:

Se o usuário decidir mirar TOTVS:

- aumentar peso de C#/.NET
- aumentar peso de Angular
- aumentar peso de SQL Server/Oracle
- adicionar Protheus/ADVPL como camada estratégica
- reforçar Cloud, DevOps e integração

Se o usuário decidir mirar startup:

- aumentar peso de Node.js/TypeScript
- aumentar peso de PostgreSQL
- aumentar peso de cloud simples
- aumentar peso de entrega rápida e produto

## Funcionalidades futuras

Depois da versão backend, criar versões equivalentes para:

### 1. Frontend

Mesma lógica, mas focada em:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Angular
- Vue
- acessibilidade
- performance web
- design systems
- testes frontend
- UX/UI
- PWA

### 2. Startup

Trilha focada em construir produto rápido:

- validação de ideia
- MVP
- landing page
- autenticação
- pagamentos
- analytics
- e-mail
- deploy rápido
- low-code/no-code quando fizer sentido
- métricas de produto
- captação de usuário

### 3. BI

Trilha focada em dados e inteligência de negócio:

- SQL
- modelagem dimensional
- ETL/ELT
- Power BI
- Looker
- Tableau
- Python para dados
- pipelines
- data warehouse
- métricas
- dashboards
- storytelling com dados

## Resultado esperado

O resultado final deve ser um painel pessoal de evolução técnica.

Ele deve funcionar como:

- roadmap
- rastreador de progresso
- radar de mercado
- curador de conteúdos
- gerador de ideias para LinkedIn
- central de vagas
- sistema de decisão de rota
- base para manutenção contínua por IA

## Objetivo final

Criar uma ferramenta simples, local e poderosa para transformar estudo em direção prática.

O foco não é apenas aprender tecnologias, mas construir uma rota adaptativa que conecte:

- conhecimento técnico
- vagas reais
- arquitetura de software
- portfólio público
- notícias do mercado
- decisões de carreira

Em resumo:

**um roadmap vivo, em HTML puro, que aprende com o mercado e ajuda o estudante a estudar, construir, publicar e recalcular a rota sempre que necessário.**
