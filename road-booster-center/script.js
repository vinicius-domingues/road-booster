// 1. DADOS E CONFIGURAÇÕES
    const typeStyle = {
      youtube: { bg: "var(--color-3f0f0f)", border: "var(--color-7f1d1d)", text: "var(--color-fca5a5)", label: "YouTube" },
      site: { bg: "var(--color-0f2f1a)", border: "var(--color-14532d)", text: "var(--color-86efac)", label: "Site" },
      docs: { bg: "var(--color-0f1a3f)", border: "var(--color-1e3a8a)", text: "var(--color-93c5fd)", label: "Docs" },
      practice: { bg: "var(--color-2d1f00)", border: "var(--color-78350f)", text: "var(--color-fcd34d)", label: "Praticar" },
      course: { bg: "var(--color-1a0f2f)", border: "var(--color-4c1d95)", text: "var(--color-c4b5fd)", label: "Curso" },
    };

    const backendPhases = [
      {
        id: "fundamentos", label: "01 · Fundamentos", color: "var(--color-6366f1)", dim: "var(--color-1e1b4b22)", icon: "code-2",
        topics: [
          {
            title: "Lógica de Programação",
            tagline: "A fundação que sustenta qualquer software bem construído.",
            description: "Antes de qualquer linguagem, você precisa pensar computacionalmente. Variáveis, condicionais, loops, funções, recursão e estruturas básicas são o vocabulário que todos os algoritmos usam. É o que diferencia quem programa de quem apenas usa frameworks.",
            tools: [
              { name: "Python", why: "Sintaxe limpa, foco na lógica e não na sintaxe" },
              { name: "JavaScript", why: "Roda no browser, feedback imediato e visual" },
            ],
            sites: [
              { label: "LeetCode", url: "https://leetcode.com", type: "practice" },
              { label: "HackerRank", url: "https://hackerrank.com", type: "practice" },
              { label: "Beecrowd", url: "https://judge.beecrowd.com", type: "practice" },
              { label: "Codewars", url: "https://codewars.com", type: "practice" },
              { label: "AtCoder", url: "https://atcoder.jp", type: "practice" },
              { label: "NeetCode.io", url: "https://neetcode.io", type: "practice" },
              { label: "Exercism.io", url: "https://exercism.org", type: "practice" },
            ],
            resources: [
              { label: "Curso em Vídeo — Algoritmos (Guanabara)", url: "https://www.youtube.com/watch?v=8mei6uVttho", type: "youtube" },
              { label: "CS50 Harvard — Grátis", url: "https://cs50.harvard.edu/x", type: "course" },
              { label: "freeCodeCamp — Algorithms", url: "https://freecodecamp.org", type: "site" },
            ]
          },
          {
            title: "Estruturas de Dados & Algoritmos",
            tagline: "O que Google, Meta e Amazon avaliam em toda entrevista técnica.",
            description: "Arrays, listas ligadas, pilhas, filas, árvores, grafos, heaps e tabelas hash. Complexidade de tempo e espaço (notação Big O). Algoritmos de busca, ordenação e grafos (BFS, DFS, Dijkstra). É o que separa um junior de quem passa no processo seletivo das Big Techs.",
            tools: [
              { name: "Python", why: "Idiomático para ensinar EDAs e muito usado em entrevistas" },
              { name: "Java", why: "Padrão em entrevistas FAANG com strong typing" },
              { name: "C++", why: "Performance máxima para competitive programming" },
            ],
            sites: [
              { label: "LeetCode", url: "https://leetcode.com", type: "practice" },
              { label: "NeetCode Roadmap", url: "https://neetcode.io/roadmap", type: "practice" },
              { label: "AlgoExpert", url: "https://algoexpert.io", type: "practice" },
              { label: "Codeforces", url: "https://codeforces.com", type: "practice" },
            ],
            resources: [
              { label: "NeetCode — YouTube", url: "https://youtube.com/@NeetCode", type: "youtube" },
              { label: "William Fiset — Graph Theory", url: "https://youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P", type: "youtube" },
              { label: "MIT 6.006 — Algorithms (free)", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/", type: "course" },
            ]
          },
          {
            title: "Git & Controle de Versão",
            tagline: "Sem Git, você não existe para nenhum time de desenvolvimento.",
            description: "Git é o sistema de controle de versão padrão da indústria. Aprenda commits semânticos, branches, merge, rebase, cherry-pick, pull requests e GitFlow. GitHub e GitLab são suas vitrines profissionais — mantenha um perfil ativo.",
            tools: [
              { name: "Git", why: "Padrão absoluto — não existe alternativa relevante" },
              { name: "GitHub", why: "Plataforma dominante para portfólio e CI/CD" },
              { name: "GitLab", why: "Alternativa enterprise com CI/CD embutido" },
            ],
            sites: [
              { label: "Learn Git Branching (visual)", url: "https://learngitbranching.js.org", type: "practice" },
              { label: "Oh My Git!", url: "https://ohmygit.org", type: "practice" },
              { label: "Pro Git Book (grátis)", url: "https://git-scm.com/book/pt-br/v2", type: "docs" },
            ],
            resources: [
              { label: "Attekita Dev — Git Completo", url: "https://youtube.com/@attekitadev", type: "youtube" },
              { label: "Akita On Rails — Git por baixo dos panos", url: "https://youtube.com/@Akitando", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "linguagens", label: "02 · Linguagens", color: "var(--color-f59e0b)", dim: "var(--color-1c141022)", icon: "terminal",
        topics: [
          {
            title: "Node.js / TypeScript",
            tagline: "JavaScript no servidor com tipagem forte — padrão de mercado em startups e scale-ups.",
            description: "Node.js permite JavaScript no backend com alta performance para I/O assíncrono (event loop). TypeScript adiciona tipagem estática, tornando o código mais seguro e manutenível. NestJS traz arquitetura sólida para grandes projetos. É a stack mais demandada no Brasil atualmente.",
            tools: [
              { name: "Express.js", why: "Framework minimalista, base e mais popular do ecossistema" },
              { name: "NestJS", why: "Arquitetura modular com DI, muito usado em enterprise BR" },
              { name: "Fastify", why: "Performance superior ao Express, crescendo rápido" },
              { name: "Prisma", why: "ORM moderno type-safe — DX excepcional" },
              { name: "Zod", why: "Validação de schemas com inferência TypeScript" },
            ],
            sites: [
              { label: "Node.js Docs", url: "https://nodejs.org/docs", type: "docs" },
              { label: "TypeScript Docs", url: "https://typescriptlang.org/docs", type: "docs" },
              { label: "NestJS Docs", url: "https://docs.nestjs.com", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — Node.js Completo", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Filipe Deschamps — Backend JS", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Mateus Müller — NestJS", url: "https://youtube.com/@mateusmuller", type: "youtube" },
            ]
          },
          {
            title: "Python / FastAPI / Django",
            tagline: "A linguagem mais versátil: backend, dados e IA no mesmo ecossistema.",
            description: "Python domina IA/ML e cresce em backends. FastAPI é o framework mais moderno com performance assíncrona e documentação automática via OpenAPI. Django oferece tudo pronto para aplicações complexas. Amplamente cobrado nas Big Techs e empresas de dados.",
            tools: [
              { name: "FastAPI", why: "Async, OpenAPI automático — preferido para microservices e IA" },
              { name: "Django", why: "Batteries-included: admin, ORM robusto, auth" },
              { name: "Flask", why: "Minimalista, ideal para APIs simples e prototipagem" },
              { name: "SQLAlchemy", why: "ORM mais poderoso do ecossistema Python" },
              { name: "Celery", why: "Filas de tarefas assíncronas — padrão Python" },
            ],
            sites: [
              { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com", type: "docs" },
              { label: "Python Docs", url: "https://docs.python.org/3/", type: "docs" },
              { label: "Real Python", url: "https://realpython.com", type: "site" },
            ],
            resources: [
              { label: "Hashtag Programação — Python", url: "https://youtube.com/@HashtagProgramacao", type: "youtube" },
              { label: "ArjanCodes — Python Avançado", url: "https://youtube.com/@ArjanCodes", type: "youtube" },
              { label: "Tech With Tim — Django/FastAPI", url: "https://youtube.com/@TechWithTim", type: "youtube" },
            ]
          },
          {
            title: "Java / Spring Boot",
            tagline: "A linguagem enterprise por excelência — dominante em bancos e grandes corporações.",
            description: "Java é amplamente cobrado em vagas enterprise, bancos e fintechs. Spring Boot é o framework mais usado no mundo Java: IoC, DI, Spring Security, Spring Data, Actuator. Kotlin cresce como alternativa moderna e concisa. JVM garante portabilidade e performance.",
            tools: [
              { name: "Spring Boot", why: "Framework enterprise padrão — vasto ecossistema" },
              { name: "Spring Security", why: "Autenticação e autorização robusta" },
              { name: "Hibernate/JPA", why: "ORM padrão do ecossistema Java" },
              { name: "Kotlin", why: "Alternativa moderna — null-safety e coroutines" },
              { name: "Maven/Gradle", why: "Gerenciadores de build e dependências" },
            ],
            sites: [
              { label: "Spring Docs", url: "https://spring.io/docs", type: "docs" },
              { label: "Baeldung", url: "https://baeldung.com", type: "site" },
            ],
            resources: [
              { label: "Michelli Brito — Spring Boot", url: "https://youtube.com/@MichelliBrito", type: "youtube" },
              { label: "DevDojo — Spring Boot Completo", url: "https://youtube.com/@DevDojoBrasil", type: "youtube" },
              { label: "Amigoscode — Java & Spring", url: "https://youtube.com/@amigoscode", type: "youtube" },
            ]
          },
          {
            title: "C# / .NET / ASP.NET Core",
            tagline: "A stack enterprise moderna para APIs, SaaS, ERP e integrações no ecossistema Microsoft.",
            description: "C# com .NET moderno é uma das melhores rotas para backend enterprise no Brasil. ASP.NET Core entrega APIs performáticas, DI nativo, autenticação, workers, gRPC, SignalR, integração com bancos relacionais e excelente suporte a cloud. Para TOTVS e empresas de ERP/SaaS, combine .NET com SQL forte, Angular, testes, mensageria e arquitetura limpa.",
            tools: [
              { name: "ASP.NET Core", why: "Framework principal para APIs, web apps, workers e serviços .NET" },
              { name: "Entity Framework Core", why: "ORM oficial e produtivo para bancos relacionais" },
              { name: "Dapper", why: "Micro ORM leve para SQL performático e controle fino" },
              { name: "MediatR", why: "Organização de casos de uso, CQRS simples e pipelines" },
              { name: "MassTransit", why: "Mensageria robusta com RabbitMQ, Azure Service Bus e Kafka" },
            ],
            sites: [
              { label: ".NET Docs", url: "https://learn.microsoft.com/pt-br/dotnet/", type: "docs" },
              { label: "ASP.NET Core Docs", url: "https://learn.microsoft.com/pt-br/aspnet/core/", type: "docs" },
              { label: "Entity Framework Core Docs", url: "https://learn.microsoft.com/pt-br/ef/core/", type: "docs" },
            ],
            resources: [
              { label: "balta.io — C# e .NET", url: "https://balta.io/", type: "course" },
              { label: "Macoratti — .NET em português", url: "https://www.macoratti.net/", type: "site" },
              { label: "Nick Chapsas — .NET avançado", url: "https://youtube.com/@nickchapsas", type: "youtube" },
              { label: "Microsoft Learn — ASP.NET Core", url: "https://learn.microsoft.com/pt-br/training/paths/aspnet-core-minimal-api/", type: "course" },
            ]
          },
          {
            title: "Go (Golang)",
            tagline: "Criado pelo Google para sistemas de alta performance e concorrência real.",
            description: "Go é a linguagem favorita de Google, Uber, Docker e Cloudflare para backends de alta performance. Compilado, statically typed, com goroutines para concorrência nativa. Muito cobrado em vagas de infraestrutura, cloud e sistemas distribuídos. Salários premium no mercado.",
            tools: [
              { name: "Gin", why: "Framework web mais popular em Go — rápido e simples" },
              { name: "Echo", why: "Alternativa performática com middleware rico" },
              { name: "gRPC", why: "Comunicação eficiente entre microsserviços" },
              { name: "GORM", why: "ORM mais popular do ecossistema Go" },
              { name: "Air", why: "Hot reload para desenvolvimento em Go" },
            ],
            sites: [
              { label: "Go Tour (oficial)", url: "https://go.dev/tour", type: "docs" },
              { label: "Go by Example", url: "https://gobyexample.com", type: "docs" },
              { label: "Effective Go", url: "https://go.dev/doc/effective_go", type: "docs" },
            ],
            resources: [
              { label: "TechWorld with Nana — Go", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "freeCodeCamp — Go Full Course", url: "https://www.youtube.com/watch?v=un6ZyFkqFKo", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "apis", label: "03 · APIs & Web", color: "var(--color-10b981)", dim: "var(--color-0d1f1722)", icon: "globe",
        topics: [
          {
            title: "HTTP, HTTPS & Protocolos",
            tagline: "Entender HTTP profundamente é o que separa o junior do senior.",
            description: "Domine métodos HTTP, status codes, headers, cookies, sessions, TLS/SSL, HTTP/2 e HTTP/3. Entenda DNS, TCP/IP e o ciclo request-response completo. Conhecimento de rede é fundamental para depurar problemas de performance e segurança.",
            tools: [
              { name: "cURL", why: "Testar APIs no terminal — omnipresente em produção" },
              { name: "Postman", why: "GUI para testar, documentar e compartilhar APIs" },
              { name: "Insomnia", why: "Alternativa ao Postman, mais leve" },
              { name: "Wireshark", why: "Análise de pacotes de rede" },
            ],
            sites: [
              { label: "MDN Web Docs — HTTP", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP", type: "docs" },
              { label: "HTTP.cat (status codes)", url: "https://http.cat", type: "site" },
              { label: "httpbin.org (testar requests)", url: "https://httpbin.org", type: "practice" },
            ],
            resources: [
              { label: "Hussein Nasser — Networking & HTTP", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "Rocketseat — REST na prática", url: "https://youtube.com/@rocketseat", type: "youtube" },
            ]
          },
          {
            title: "REST APIs — Projeto e Boas Práticas",
            tagline: "O padrão arquitetural que conecta o mundo digital.",
            description: "REST é o estilo dominante para APIs web. Princípios: stateless, uniform interface, resource-based URLs, HATEOAS. Aprenda versionamento, paginação, filtros, erros padronizados (RFC 7807) e documentação com OpenAPI/Swagger. Boas APIs são produtos.",
            tools: [
              { name: "OpenAPI / Swagger", why: "Documentação e geração de clientes automática" },
              { name: "Swagger UI", why: "Interface interativa para explorar APIs" },
              { name: "Stoplight", why: "Design-first de APIs com mock server" },
              { name: "Scalar", why: "Interface moderna para docs OpenAPI" },
            ],
            sites: [
              { label: "REST API Tutorial", url: "https://restapitutorial.com", type: "site" },
              { label: "OpenAPI Spec", url: "https://spec.openapis.org/oas/latest.html", type: "docs" },
              { label: "API Design Guide (Google)", url: "https://cloud.google.com/apis/design", type: "docs" },
            ],
            resources: [
              { label: "Filipe Deschamps — REST APIs", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Traversy Media — REST API", url: "https://youtube.com/@TraversyMedia", type: "youtube" },
            ]
          },
          {
            title: "GraphQL",
            tagline: "O cliente pede exatamente o que precisa — sem over-fetching.",
            description: "GraphQL foi criado pelo Facebook para eliminar over-fetching e under-fetching. O cliente define o shape dos dados. Apollo Server é o padrão. Hasura gera GraphQL automaticamente sobre qualquer banco. Muito usado no Meta, GitHub, Shopify e Twitter.",
            tools: [
              { name: "Apollo Server", why: "Framework GraphQL mais popular e maduro" },
              { name: "GraphQL Yoga", why: "Alternativa moderna, framework-agnostic" },
              { name: "Hasura", why: "GraphQL automático sobre banco de dados" },
              { name: "Pothos", why: "Schema-builder type-safe para TypeScript" },
            ],
            sites: [
              { label: "GraphQL.org", url: "https://graphql.org/learn/", type: "docs" },
              { label: "Apollo Docs", url: "https://apollographql.com/docs/", type: "docs" },
              { label: "The Guild Blog", url: "https://the-guild.dev/blog", type: "site" },
            ],
            resources: [
              { label: "Rocketseat — GraphQL", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "The Net Ninja — GraphQL", url: "https://youtube.com/@NetNinja", type: "youtube" },
            ]
          },
          {
            title: "WebSockets & Tempo Real",
            tagline: "Para quando o cliente não pode esperar — chats, dashboards e notificações.",
            description: "WebSockets permitem comunicação bidirecional full-duplex. Socket.io é o padrão no ecossistema Node.js com fallback automático. Server-Sent Events (SSE) são mais simples para streaming unidirecional. gRPC streaming para comunicação eficiente entre serviços.",
            tools: [
              { name: "Socket.io", why: "Abstração robusta com fallback automático" },
              { name: "ws", why: "Implementação nativa e leve de WebSocket" },
              { name: "SSE", why: "Mais simples para streaming server→client (chats com LLM)" },
              { name: "gRPC", why: "Streaming eficiente e tipado entre microsserviços" },
            ],
            sites: [
              { label: "Socket.io Docs", url: "https://socket.io/docs/v4/", type: "docs" },
              { label: "WebSocket Playground", url: "https://websocketking.com", type: "practice" },
            ],
            resources: [
              { label: "Traversy Media — Socket.io", url: "https://youtube.com/@TraversyMedia", type: "youtube" },
              { label: "Hussein Nasser — WebSockets", url: "https://youtube.com/@hnasr", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "databases", label: "04 · Banco de Dados", color: "var(--color-8b5cf6)", dim: "var(--color-1a103022)", icon: "database",
        topics: [
          {
            title: "SQL & Bancos Relacionais",
            tagline: "Dados estruturados, transações ACID e consistência que você pode confiar.",
            description: "PostgreSQL é o banco relacional open-source mais respeitado — rico em features, confiável em produção. Aprenda SQL completo: JOINs complexos, CTEs, window functions, índices B-tree, covering indexes, EXPLAIN ANALYZE, transações e isolamento. Modelagem normalizada.",
            tools: [
              { name: "PostgreSQL", why: "Mais robusto e feature-rich — preferido em produção" },
              { name: "MySQL/MariaDB", why: "Prevalente em aplicações legacy e alta demanda" },
              { name: "SQLite", why: "Ideal para desenvolvimento local e embarcado" },
              { name: "DBeaver", why: "GUI client universal para qualquer banco SQL" },
            ],
            sites: [
              { label: "PostgreSQL Docs", url: "https://postgresql.org/docs/", type: "docs" },
              { label: "SQLZoo — interativo", url: "https://sqlzoo.net", type: "practice" },
              { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "site" },
              { label: "pgexercises.com", url: "https://pgexercises.com", type: "practice" },
            ],
            resources: [
              { label: "Hussein Nasser — PostgreSQL Internals", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "CMU Database Course (free)", url: "https://15445.courses.cs.cmu.edu/", type: "course" },
              { label: "Código Fonte TV — SQL", url: "https://youtube.com/@codigofontetv", type: "youtube" },
            ]
          },
          {
            title: "NoSQL — MongoDB, Redis, Cassandra",
            tagline: "Quando a flexibilidade ou a escala superam a necessidade de rigidez.",
            description: "MongoDB para documentos JSON flexíveis. Redis como cache in-memory ultra-rápido, pub/sub e sessões. DynamoDB no ecossistema AWS serverless. Cassandra para escrita massiva distribuída (Netflix, Instagram). Elasticsearch para busca full-text. Aprenda quando usar cada um.",
            tools: [
              { name: "MongoDB", why: "Document store mais popular, ótimo para dados variáveis" },
              { name: "Redis", why: "Cache, sessões, pub/sub, rate limiting — indispensável" },
              { name: "DynamoDB", why: "NoSQL gerenciado AWS, serverless-friendly" },
              { name: "Cassandra", why: "Escrita massiva distribuída — Netflix, Uber usam" },
              { name: "Elasticsearch", why: "Full-text search, analytics e log aggregation" },
            ],
            sites: [
              { label: "MongoDB University (grátis)", url: "https://learn.mongodb.com", type: "course" },
              { label: "Redis University (grátis)", url: "https://university.redis.com", type: "course" },
            ],
            resources: [
              { label: "Rocketseat — MongoDB", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "ByteByteGo — NoSQL vs SQL", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
          {
            title: "ORM, Query Builders & Migrations",
            tagline: "Abstração inteligente sem perder o controle sobre o SQL gerado.",
            description: "ORMs abstraem SQL, mas você deve entender o que geram. Prisma é o favorito atual em TypeScript com type-safety automática. SQLAlchemy domina Python. Hibernate em Java. Migrations garantem evolução segura do schema em produção sem downtime.",
            tools: [
              { name: "Prisma", why: "Type-safe, autocomplete real — padrão moderno em TypeScript" },
              { name: "TypeORM", why: "Decorators em TypeScript, familiar para quem vem de Java" },
              { name: "SQLAlchemy", why: "ORM mais poderoso e flexível do ecossistema Python" },
              { name: "Knex.js", why: "Query builder leve quando ORM completo é excesso" },
              { name: "Flyway/Liquibase", why: "Migrations versionadas para Java enterprise" },
            ],
            sites: [
              { label: "Prisma Docs", url: "https://prisma.io/docs/", type: "docs" },
              { label: "SQLAlchemy Docs", url: "https://docs.sqlalchemy.org/", type: "docs" },
            ],
            resources: [
              { label: "Mateus Müller — Prisma na prática", url: "https://youtube.com/@mateusmuller", type: "youtube" },
              { label: "Rocketseat — ORMs e migrations", url: "https://youtube.com/@rocketseat", type: "youtube" },
            ]
          },
          {
            title: "Database Design & Modelagem",
            tagline: "Um schema mal projetado assombra o sistema por anos.",
            description: "Normalização (1NF–3NF), relacionamentos, cardinalidade, índices compostos, particionamento de tabelas e views materializadas. CAP Theorem para bancos distribuídos. ACID vs BASE. Estratégias de sharding horizontal e replicação master-slave. Fundamental para entrevistas sênior.",
            tools: [
              { name: "dbdiagram.io", why: "Modelagem visual de banco rápida e gratuita" },
              { name: "draw.io", why: "ERDs e diagramas de arquitetura formais" },
              { name: "pgAdmin", why: "Admin GUI completa para PostgreSQL" },
            ],
            sites: [
              { label: "dbdiagram.io", url: "https://dbdiagram.io", type: "site" },
              { label: "Use The Index, Luke", url: "https://use-the-index-luke.com", type: "site" },
            ],
            resources: [
              { label: "CMU Database Internals — YouTube", url: "https://youtube.com/@CMUDatabaseGroup", type: "youtube" },
              { label: "Hussein Nasser — Database Engineering", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "ByteByteGo — Database Scaling", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "arquitetura", label: "05 · Arquitetura", color: "var(--color-f97316)", dim: "var(--color-1c110822)", icon: "layers",
        topics: [
          {
            title: "SOLID & Design Patterns (GoF)",
            tagline: "O vocabulário comum de todo dev que escreve código que dura.",
            description: "SOLID são 5 princípios de design OO: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation e Dependency Inversion. Os 23 padrões do Gang of Four (Factory, Singleton, Observer, Strategy, Decorator…) resolvem problemas recorrentes e são cobrados em entrevistas.",
            tools: [
              { name: "Refactoring.Guru", why: "Melhor recurso visual sobre patterns — imperdível" },
              { name: "Qualquer OOP Language", why: "Patterns são language-agnostic por natureza" },
            ],
            sites: [
              { label: "Refactoring.Guru", url: "https://refactoring.guru/design-patterns", type: "site" },
              { label: "SourceMaking", url: "https://sourcemaking.com/design_patterns", type: "site" },
            ],
            resources: [
              { label: "Otávio Miranda — Design Patterns PT-BR", url: "https://youtube.com/@otaviomiranda", type: "youtube" },
              { label: "Christopher Okhravi — Patterns", url: "https://youtube.com/@ChristopherOkhravi", type: "youtube" },
            ]
          },
          {
            title: "Clean Architecture & DDD",
            tagline: "Isola sua lógica de negócio de frameworks, banco e UI — para sempre.",
            description: "Clean Architecture (Uncle Bob) organiza o código em camadas concêntricas onde dependências sempre apontam para dentro (regras de negócio). DDD foca em modelar o domínio com Entities, Value Objects, Aggregates, Repositories e Domain Services. Juntos, criam código que sobrevive à troca de framework.",
            tools: [
              { name: "NestJS", why: "Facilita Clean Architecture com módulos e DI" },
              { name: "Spring Boot", why: "Natural para DDD com separação em pacotes" },
              { name: "FastAPI", why: "Permite Clean Architecture com estrutura manual" },
            ],
            sites: [
              { label: "DDD Reference (Evans)", url: "https://domainlanguage.com/ddd/reference/", type: "docs" },
              { label: "Martin Fowler — Architecture", url: "https://martinfowler.com", type: "site" },
            ],
            resources: [
              { label: "Otávio Miranda — Clean Architecture PT-BR", url: "https://youtube.com/@otaviomiranda", type: "youtube" },
              { label: "Milan Jovanović — Clean Arch .NET", url: "https://youtube.com/@MilanJovanovicTech", type: "youtube" },
              { label: "DevDojo — DDD na prática", url: "https://youtube.com/@DevDojoBrasil", type: "youtube" },
            ]
          },
          {
            title: "Microsserviços vs Monolito",
            tagline: "Comece com monolito modular — escale para microsserviços quando a dor justificar.",
            description: "Monolitos modulares são mais simples de construir e manter. Microsserviços trazem independência de deploy e escala granular com complexidade adicional: service discovery, tracing distribuído, eventual consistency e overhead operacional. Entenda os trade-offs antes de escolher.",
            tools: [
              { name: "Docker", why: "Containerização dos serviços individuais" },
              { name: "Kubernetes", why: "Orquestração de múltiplos microsserviços" },
              { name: "Consul", why: "Service discovery e configuração distribuída" },
              { name: "Istio", why: "Service mesh para comunicação segura entre serviços" },
            ],
            sites: [
              { label: "Microservices.io (patterns)", url: "https://microservices.io", type: "site" },
              { label: "Martin Fowler — Microservices", url: "https://martinfowler.com/microservices/", type: "site" },
            ],
            resources: [
              { label: "TechWorld with Nana — Microservices", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "Hussein Nasser — Microservices", url: "https://youtube.com/@hnasr", type: "youtube" },
            ]
          },
          {
            title: "Event-Driven, CQRS & Event Sourcing",
            tagline: "Serviços desacoplados que se comunicam via eventos — máxima resiliência.",
            description: "Event-Driven Architecture usa eventos como meio de comunicação assíncrona. CQRS separa comandos (escrita) de queries (leitura) para escalabilidade independente. Event Sourcing armazena eventos em vez de estado atual — o histórico completo de tudo. Kafka domina o mercado enterprise.",
            tools: [
              { name: "Apache Kafka", why: "Log distribuído de alta performance — padrão enterprise" },
              { name: "RabbitMQ", why: "Message broker com roteamento rico e flexível" },
              { name: "AWS SQS/SNS", why: "Filas e notificações gerenciadas na AWS" },
              { name: "Redis Streams", why: "Filas simples sem infraestrutura adicional" },
            ],
            sites: [
              { label: "Kafka Documentation", url: "https://kafka.apache.org/documentation/", type: "docs" },
              { label: "EventStoreDB Docs (Event Sourcing)", url: "https://eventstore.com/docs/", type: "docs" },
            ],
            resources: [
              { label: "TechWorld with Nana — Kafka", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "CodeOpinion — CQRS & Event Sourcing", url: "https://youtube.com/@CodeOpinion", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "devops", label: "06 · DevOps & Cloud", color: "var(--color-0ea5e9)", dim: "var(--color-0c1a2622)", icon: "cloud",
        topics: [
          {
            title: "Docker & Containerização",
            tagline: "Se roda no meu Docker, roda em qualquer lugar — reprodutibilidade garantida.",
            description: "Docker encapsula aplicações em containers reproduzíveis e isolados. Aprenda Dockerfile (multi-stage builds, cache layers), docker-compose, networks, volumes e otimização de imagens. É requisito mínimo em qualquer vaga backend hoje.",
            tools: [
              { name: "Docker", why: "Padrão absoluto de containerização" },
              { name: "Docker Compose", why: "Orquestração local de múltiplos containers" },
              { name: "Docker Hub", why: "Registry público de imagens" },
              { name: "Podman", why: "Alternativa rootless e daemonless ao Docker" },
            ],
            sites: [
              { label: "Docker Docs", url: "https://docs.docker.com", type: "docs" },
              { label: "Play with Docker", url: "https://labs.play-with-docker.com", type: "practice" },
              { label: "Docker Curriculum", url: "https://docker-curriculum.com", type: "site" },
            ],
            resources: [
              { label: "TechWorld with Nana — Docker Completo", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "freeCodeCamp — Docker Full Course", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo", type: "youtube" },
              { label: "Código Fonte TV — Docker", url: "https://youtube.com/@codigofontetv", type: "youtube" },
            ]
          },
          {
            title: "CI/CD — GitHub Actions & Pipelines",
            tagline: "Automação que libera você para criar — não para deployar manualmente.",
            description: "CI/CD automatiza testes, builds, análise de qualidade e deployments. GitHub Actions é o padrão atual para quem usa GitHub — gratuito e poderoso. Jenkins domina ambientes enterprise. ArgoCD para GitOps em Kubernetes. Pipeline: commit → lint → testes → build → deploy.",
            tools: [
              { name: "GitHub Actions", why: "Padrão de mercado integrado ao GitHub, free tier generoso" },
              { name: "Jenkins", why: "Mais flexível, dominante em ambientes enterprise" },
              { name: "ArgoCD", why: "GitOps para Kubernetes — estado desejado no Git" },
              { name: "CircleCI / GitLab CI", why: "Alternativas robustas com bons free tiers" },
              { name: "SonarQube", why: "Análise de qualidade e segurança de código" },
            ],
            sites: [
              { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" },
              { label: "GitLab CI/CD Docs", url: "https://docs.gitlab.com/ee/ci/", type: "docs" },
            ],
            resources: [
              { label: "TechWorld with Nana — CI/CD Completo", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "DevOps Toolkit — ArgoCD GitOps", url: "https://youtube.com/@DevOpsToolkit", type: "youtube" },
            ]
          },
          {
            title: "Cloud — AWS, GCP & Azure",
            tagline: "A infraestrutura que roda o mundo está em cloud — domine onde sua empresa vive.",
            description: "AWS domina o mercado com 32% de share. Serviços essenciais: EC2, S3, RDS, Lambda, VPC, IAM, ECS/EKS, CloudFront, Route53, SQS/SNS. Terraform para Infrastructure as Code. Certificações AWS Solution Architect são altamente valorizadas e bem remuneradas.",
            tools: [
              { name: "AWS", why: "Maior market share, mais vagas, mais serviços" },
              { name: "GCP", why: "Melhor para Machine Learning e Kubernetes (criador do K8s)" },
              { name: "Azure", why: "Dominante em enterprise com Microsoft stack" },
              { name: "Terraform", why: "IaC declarativa para qualquer cloud — padrão de mercado" },
              { name: "Pulumi", why: "IaC com linguagem de programação real (TS, Python)" },
            ],
            sites: [
              { label: "AWS Free Tier", url: "https://aws.amazon.com/free/", type: "site" },
              { label: "Cloud Skills Boost GCP (free)", url: "https://cloudskillsboost.google", type: "course" },
              { label: "A Cloud Guru", url: "https://acloudguru.com", type: "course" },
            ],
            resources: [
              { label: "freeCodeCamp — AWS Certified 2024", url: "https://www.youtube.com/watch?v=NhDYbskXRgc", type: "youtube" },
              { label: "TechWorld with Nana — Terraform", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
            ]
          },
          {
            title: "Kubernetes & Orquestração",
            tagline: "O sistema operacional do data center moderno.",
            description: "K8s orquestra containers em escala com auto-healing, auto-scaling e rolling deployments. Aprenda Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, HPA, StatefulSets. É a plataforma padrão para microsserviços. Vagas com K8s têm salários significativamente mais altos.",
            tools: [
              { name: "Kubernetes", why: "Padrão absoluto de orquestração de containers" },
              { name: "Helm", why: "Gerenciador de pacotes para K8s — templates reutilizáveis" },
              { name: "Minikube / Kind", why: "K8s local para desenvolvimento" },
              { name: "EKS / GKE / AKS", why: "K8s gerenciado nas principais clouds" },
              { name: "Lens", why: "IDE visual para gerenciar clusters K8s" },
            ],
            sites: [
              { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/", type: "docs" },
              { label: "Play with K8s", url: "https://labs.play-with-k8s.com", type: "practice" },
              { label: "Killer.sh (simulado CKA)", url: "https://killer.sh", type: "practice" },
            ],
            resources: [
              { label: "TechWorld with Nana — K8s Completo", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "freeCodeCamp — Kubernetes Full Course", url: "https://www.youtube.com/watch?v=X48VuDVv0do", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "escala", label: "07 · Escalabilidade", color: "var(--color-ef4444)", dim: "var(--color-200e0e22)", icon: "zap",
        topics: [
          {
            title: "Load Balancer & Alta Disponibilidade",
            tagline: "Sem single point of failure — disponibilidade é uma promessa arquitetural.",
            description: "Load balancers distribuem tráfego entre múltiplas instâncias usando algoritmos: round-robin, least connections, IP hash. Nginx e HAProxy são os mais usados on-premise. AWS ALB/NLB para cloud. Active-Active e Active-Passive para HA. Health checks e circuit breakers (Resilience4j, hystrix) para resiliência.",
            tools: [
              { name: "Nginx", why: "Proxy reverso e LB padrão de mercado — também serve estáticos" },
              { name: "HAProxy", why: "Melhor performance pura como load balancer L4/L7" },
              { name: "AWS ALB/NLB", why: "Load balancer gerenciado e escalável automaticamente" },
              { name: "Traefik", why: "LB nativo para containers e K8s com auto-discovery" },
              { name: "Envoy", why: "Proxy moderno usado em service meshes como Istio" },
            ],
            sites: [
              { label: "Nginx Docs", url: "https://nginx.org/en/docs/", type: "docs" },
              { label: "HAProxy Docs", url: "https://haproxy.org/#docs", type: "docs" },
            ],
            resources: [
              { label: "Hussein Nasser — Load Balancing Deep Dive", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "ByteByteGo — System Design", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
          {
            title: "Cache Strategies — Redis & CDN",
            tagline: "O cache é a diferença entre uma API de 5ms e uma de 500ms.",
            description: "Caching em múltiplas camadas: browser, CDN, API Gateway, aplicação e banco de dados. Redis para cache in-memory, sessions, rate limiting e pub/sub. Cloudflare, CloudFront e Fastly como CDNs. Padrões: cache-aside, read-through, write-through e write-behind. Cache invalidation é o problema mais difícil da computação.",
            tools: [
              { name: "Redis", why: "Cache mais versátil — suporta cache, pub/sub, sessões, filas" },
              { name: "Cloudflare", why: "CDN + DDoS protection + edge computing" },
              { name: "AWS CloudFront", why: "CDN integrado ao ecossistema AWS" },
              { name: "Memcached", why: "Cache simples de alta performance para dados stateless" },
              { name: "Varnish", why: "HTTP cache especializado para conteúdo web" },
            ],
            sites: [
              { label: "Redis University (grátis)", url: "https://university.redis.com", type: "course" },
              { label: "Cloudflare Learning Center", url: "https://cloudflare.com/learning/", type: "site" },
            ],
            resources: [
              { label: "Hussein Nasser — Caching Strategies", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "ByteByteGo — Cache Patterns", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
          {
            title: "Database Scaling — Sharding & Replication",
            tagline: "Um banco que não escala é um gargalo esperando acontecer.",
            description: "Replicação Master-Slave para escalar leituras. Sharding horizontal para distribuir escrita massiva. Connection pooling (PgBouncer) para gerenciar conexões eficientemente. Read replicas. Particionamento de tabelas. CQRS com bancos separados para leitura e escrita no mesmo sistema.",
            tools: [
              { name: "PgBouncer", why: "Connection pooling essencial para PostgreSQL em produção" },
              { name: "Vitess", why: "Sharding automático para MySQL — usado pelo YouTube" },
              { name: "CockroachDB", why: "PostgreSQL distribuído que escala horizontalmente" },
              { name: "PlanetScale", why: "MySQL serverless com branching de schema" },
            ],
            sites: [
              { label: "Use The Index, Luke", url: "https://use-the-index-luke.com", type: "site" },
              { label: "Database Internals Book", url: "https://databass.dev", type: "site" },
            ],
            resources: [
              { label: "ByteByteGo — Database Scaling", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
              { label: "CMU Database — Sharding", url: "https://youtube.com/@CMUDatabaseGroup", type: "youtube" },
            ]
          },
          {
            title: "System Design — Arquitetura em Escala",
            tagline: "A arte de construir sistemas que funcionam para milhões de usuários.",
            description: "System Design é a habilidade de projetar sistemas escaláveis, resilientes e eficientes. Cobrado em entrevistas nas Big Techs como etapa eliminatória para sênior+. Aprenda a projetar: URL shortener, Twitter, Netflix, Uber, WhatsApp, Google Drive. Entenda CAP theorem, consistência eventual e trade-offs.",
            tools: [
              { name: "Excalidraw", why: "Diagramas de sistema rápidos e colaborativos" },
              { name: "draw.io", why: "Diagramas formais de arquitetura" },
              { name: "Miro", why: "Whiteboard colaborativo para desenho em equipe" },
            ],
            sites: [
              { label: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", type: "site" },
              { label: "ByteByteGo", url: "https://bytebytego.com", type: "site" },
              { label: "Grokking System Design", url: "https://designgurus.io/course/grokking-the-system-design-interview", type: "course" },
            ],
            resources: [
              { label: "ByteByteGo — System Design", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
              { label: "Gaurav Sen — System Design", url: "https://youtube.com/@gkcs", type: "youtube" },
              { label: "Exponent — Mock Interviews", url: "https://youtube.com/@TryExponent", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "seguranca", label: "08 · Segurança", color: "var(--color-dc2626)", dim: "var(--color-1f080822)", icon: "shield",
        topics: [
          {
            title: "Autenticação & Autorização",
            tagline: "Quem você é e o que pode fazer — as duas perguntas mais críticas de qualquer sistema.",
            description: "JWT para tokens stateless. OAuth 2.0 e OpenID Connect para login social e SSO. RBAC (Role-Based Access Control) e ABAC para autorização granular. Refresh tokens com rotation e revogação. MFA/2FA. Keycloak e Auth0 como identity providers. Passkeys como futuro da autenticação.",
            tools: [
              { name: "JWT", why: "Token stateless padrão para APIs REST" },
              { name: "OAuth 2.0 / OIDC", why: "Protocolo para login social e SSO federado" },
              { name: "Keycloak", why: "Identity provider open-source robusto e completo" },
              { name: "Auth0", why: "SaaS de auth completo com excelente DX" },
              { name: "Passport.js", why: "Middleware de auth com 500+ strategies para Node" },
            ],
            sites: [
              { label: "JWT.io — debugger visual", url: "https://jwt.io", type: "site" },
              { label: "OAuth 2.0 Playground (Google)", url: "https://developers.google.com/oauthplayground", type: "practice" },
              { label: "Okta Developer Blog", url: "https://developer.okta.com/blog/", type: "site" },
            ],
            resources: [
              { label: "Rocketseat — JWT e OAuth", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Fireship — Auth em 100 segundos", url: "https://youtube.com/@Fireship", type: "youtube" },
            ]
          },
          {
            title: "OWASP Top 10 & Segurança de APIs",
            tagline: "As vulnerabilidades que derrubaram as maiores empresas do mundo.",
            description: "OWASP Top 10 lista as vulnerabilidades mais críticas: SQL/NoSQL Injection, Broken Authentication, XSS, CSRF, IDOR, Security Misconfiguration, Insecure Deserialization e Broken Access Control. Aprenda a identificar e corrigir cada uma. PortSwigger Web Security Academy é o melhor recurso gratuito do mercado.",
            tools: [
              { name: "OWASP ZAP", why: "Scanner de segurança gratuito para web apps" },
              { name: "Burp Suite", why: "Proxy de interceptação padrão para pentesting" },
              { name: "Snyk", why: "Scanner de vulnerabilidades em dependências" },
              { name: "Trivy", why: "Scan de containers e IaC para vulnerabilidades" },
              { name: "SonarQube", why: "Análise estática de código para vulnerabilidades" },
            ],
            sites: [
              { label: "OWASP Top 10", url: "https://owasp.org/Top10/", type: "site" },
              { label: "PortSwigger Web Security Academy (grátis)", url: "https://portswigger.net/web-security", type: "course" },
              { label: "HackTheBox", url: "https://hackthebox.com", type: "practice" },
              { label: "TryHackMe", url: "https://tryhackme.com", type: "practice" },
            ],
            resources: [
              { label: "NetworkChuck — Security", url: "https://youtube.com/@NetworkChuck", type: "youtube" },
              { label: "LiveOverflow — Web Hacking", url: "https://youtube.com/@LiveOverflow", type: "youtube" },
            ]
          },
          {
            title: "Rate Limiting, Secrets & Compliance",
            tagline: "O que você não configura hoje, alguém vai explorar amanhã.",
            description: "Rate limiting previne abuso de APIs e DDoS na camada de aplicação. Secrets Management com HashiCorp Vault, AWS Secrets Manager ou dotenv adequado. CORS bem configurado. Security headers (HSTS, CSP, X-Frame-Options). LGPD e GDPR compliance. Pen testing regular e bug bounty programs.",
            tools: [
              { name: "HashiCorp Vault", why: "Gerenciamento robusto de secrets e credenciais rotativas" },
              { name: "AWS Secrets Manager", why: "Secrets gerenciados nativamente na AWS" },
              { name: "Helmet.js", why: "Security headers automáticos para Express/Node" },
              { name: "express-rate-limit", why: "Rate limiting simples para Node.js" },
              { name: "Nginx", why: "Rate limiting e WAF na borda antes da aplicação" },
            ],
            sites: [
              { label: "Security Headers checker", url: "https://securityheaders.com", type: "site" },
              { label: "Have I Been Pwned", url: "https://haveibeenpwned.com", type: "site" },
              { label: "Vault Docs", url: "https://developer.hashicorp.com/vault/docs", type: "docs" },
            ],
            resources: [
              { label: "Hussein Nasser — API Security", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "Fireship — Web Security 101", url: "https://youtube.com/@Fireship", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "ia", label: "09 · IA no Backend", color: "var(--color-a855f7)", dim: "var(--color-1a0d2e22)", icon: "cpu", // Modificado de brain para cpu
        topics: [
          {
            title: "LLM APIs — OpenAI, Anthropic, Gemini",
            tagline: "Integrar IA ao backend é a habilidade mais valorizada de 2024-2025.",
            description: "APIs de LLMs são consumidas via REST como qualquer outra. Aprenda prompt engineering, streaming com SSE, function calling/tool use, gestão de contexto e tokens. LangChain para orquestração. Vercel AI SDK para streaming em TypeScript. Modelos locais com Ollama para desenvolvimento.",
            tools: [
              { name: "OpenAI API", why: "Mais adotada no mercado — GPT-4o" },
              { name: "Anthropic (Claude)", why: "Melhor em raciocínio, código e contexto longo" },
              { name: "LangChain", why: "Framework de orquestração de LLMs e agentes" },
              { name: "Vercel AI SDK", why: "SDK para streaming de IA em TypeScript" },
              { name: "Ollama", why: "LLMs locais para desenvolvimento sem custo" },
            ],
            sites: [
              { label: "OpenAI Docs", url: "https://platform.openai.com/docs", type: "docs" },
              { label: "Anthropic Docs", url: "https://docs.anthropic.com", type: "docs" },
              { label: "LangChain Docs", url: "https://docs.langchain.com", type: "docs" },
            ],
            resources: [
              { label: "freeCodeCamp — LangChain Full Course", url: "https://www.youtube.com/watch?v=HSZ_uaif57o", type: "youtube" },
              { label: "Fireship — AI APIs Explained", url: "https://youtube.com/@Fireship", type: "youtube" },
            ]
          },
          {
            title: "Bancos Vetoriais & RAG",
            tagline: "Dê memória semântica e contexto próprio aos seus LLMs.",
            description: "RAG (Retrieval-Augmented Generation) combina busca semântica com geração de texto. O modelo não precisa ser fine-tuned — apenas busca os documentos relevantes em tempo real. Bancos vetoriais armazenam embeddings e permitem busca por similaridade semântica. É o padrão para chatbots com dados privados.",
            tools: [
              { name: "Pinecone", why: "Vector DB gerenciado mais popular e escalável" },
              { name: "pgvector", why: "Extensão PostgreSQL — evita banco novo no stack" },
              { name: "Chroma", why: "Simples e gratuito para desenvolvimento" },
              { name: "Weaviate", why: "Open-source com multi-modal e GraphQL" },
              { name: "Qdrant", why: "Alta performance em Rust, self-hostable" },
            ],
            sites: [
              { label: "Pinecone Learn", url: "https://pinecone.io/learn/", type: "site" },
              { label: "LlamaIndex Docs", url: "https://docs.llamaindex.ai", type: "docs" },
            ],
            resources: [
              { label: "freeCodeCamp — RAG from Scratch", url: "https://www.youtube.com/watch?v=sVcwVQRHIc8", type: "youtube" },
              { label: "Sam Witteveen — LangChain Deep Dives", url: "https://youtube.com/@samwitteveenai", type: "youtube" },
            ]
          },
          {
            title: "MLOps — Servindo Modelos em Produção",
            tagline: "Um modelo que não serve em produção é apenas um experimento caro.",
            description: "Deploy de modelos ML com FastAPI + Docker é o caminho mais direto. MLflow para tracking de experimentos e modelo registry. BentoML e Ray Serve para serving escalável. Hugging Face Hub para modelos open-source. Monitoramento de data drift e performance de modelos em produção.",
            tools: [
              { name: "MLflow", why: "Tracking de experimentos e registro de modelos — padrão" },
              { name: "BentoML", why: "Serve modelos como APIs com facilidade" },
              { name: "Hugging Face", why: "Hub de 300k+ modelos open-source" },
              { name: "Ray Serve", why: "Serving escalável para ML em produção" },
              { name: "SageMaker", why: "Plataforma ML end-to-end gerenciada pela AWS" },
            ],
            sites: [
              { label: "Hugging Face", url: "https://huggingface.co", type: "site" },
              { label: "Made With ML — MLOps Course", url: "https://madewithml.com", type: "course" },
              { label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html", type: "docs" },
            ],
            resources: [
              { label: "Abhishek Thakur — MLOps", url: "https://youtube.com/@abhishekkrthakur", type: "youtube" },
              { label: "Made With ML — Curso Gratuito", url: "https://madewithml.com", type: "site" },
            ]
          },
        ]
      },
      {
        id: "frontend", label: "10 · Frontend Integration", color: "var(--color-14b8a6)", dim: "var(--color-0d1f1e22)", icon: "globe",
        topics: [
          {
            title: "SSR/SSG & Meta-Frameworks",
            tagline: "O backend que vive no frontend — e o frontend que roda no servidor.",
            description: "Next.js e Nuxt.js unem frontend e backend em um único projeto. Server Components rodam no servidor sem JavaScript no cliente. Server Actions eliminam a necessidade de API endpoints para operações simples. Entender RSC, streaming SSR e ISR é essencial para developers full-stack modernos.",
            tools: [
              { name: "Next.js", why: "Padrão do mercado React para SSR/SSG/ISR/Server Actions" },
              { name: "Nuxt.js", why: "Equivalente maduro para Vue" },
              { name: "SvelteKit", why: "Performance máxima com Svelte e excelente DX" },
              { name: "Remix", why: "Web standards-focused, load balancing por rota" },
              { name: "Astro", why: "Content sites com Islands Architecture" },
            ],
            sites: [
              { label: "Next.js Docs", url: "https://nextjs.org/docs", type: "docs" },
              { label: "Vercel Guides", url: "https://vercel.com/guides", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — Next.js 14 App Router", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Theo — t3.gg (T3 Stack)", url: "https://youtube.com/@t3dotgg", type: "youtube" },
              { label: "Josh tried coding — Next.js", url: "https://youtube.com/@joshtriedcoding", type: "youtube" },
            ]
          },
          {
            title: "BFF Pattern & API Gateway",
            tagline: "Um backend sob medida para cada tipo de cliente — sem over-engineering.",
            description: "BFF (Backend for Frontend) cria camadas intermediárias adaptadas para cada cliente: web, mobile, TV. API Gateway centraliza roteamento, autenticação, rate limiting e logging. AWS API Gateway, Kong, Traefik e Nginx são os mais usados. GraphQL é uma alternativa que devolve o controle ao cliente.",
            tools: [
              { name: "AWS API Gateway", why: "Gerenciado e serverless-friendly no ecossistema AWS" },
              { name: "Kong", why: "API Gateway open-source com 100+ plugins" },
              { name: "Traefik", why: "Moderno e nativo para containers/K8s" },
              { name: "Nginx", why: "Proxy reverso e API Gateway leve e performático" },
              { name: "GraphQL", why: "Alternativa elegante ao BFF — cliente define o shape" },
            ],
            sites: [
              { label: "Kong Docs", url: "https://docs.konghq.com", type: "docs" },
              { label: "Martin Fowler — BFF Pattern", url: "https://samnewman.io/patterns/architectural/bff/", type: "site" },
            ],
            resources: [
              { label: "Hussein Nasser — API Gateway", url: "https://youtube.com/@hnasr", type: "youtube" },
              { label: "ByteByteGo — API Design", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
          {
            title: "Observabilidade — Logs, Métricas & Tracing",
            tagline: "Um sistema que você não consegue observar, você não consegue manter.",
            description: "Os três pilares da observabilidade: Logs estruturados (ELK Stack / Loki), Métricas (Prometheus + Grafana) e Distributed Tracing (Jaeger, Zipkin). OpenTelemetry é o padrão emergente que unifica tudo. APM com Datadog ou New Relic para visibilidade completa. Alerting com PagerDuty.",
            tools: [
              { name: "Prometheus + Grafana", why: "Stack padrão de métricas em ambientes K8s" },
              { name: "ELK Stack", why: "Elasticsearch, Logstash, Kibana para logs" },
              { name: "OpenTelemetry", why: "Padrão unificado — vendor-neutral para tudo" },
              { name: "Datadog", why: "APM completo — muito usado em enterprise" },
              { name: "Jaeger", why: "Distributed tracing open-source da CNCF" },
            ],
            sites: [
              { label: "OpenTelemetry Docs", url: "https://opentelemetry.io/docs/", type: "docs" },
              { label: "Grafana Tutorials", url: "https://grafana.com/tutorials/", type: "site" },
            ],
            resources: [
              { label: "TechWorld with Nana — Prometheus & Grafana", url: "https://youtube.com/@TechWorldwithNana", type: "youtube" },
              { label: "ByteByteGo — Observability", url: "https://youtube.com/@ByteByteGo", type: "youtube" },
            ]
          },
        ]
      },
      {
        id: "ambiente", label: "11 · Ambiente & Linux", color: "var(--color-84cc16)", dim: "var(--color-16200b22)", icon: "monitor-terminal",
        topics: [
          {
            title: "Terminal, Shell & Linux Básico",
            tagline: "Backend vive em servidor — e servidor quase sempre fala Linux.",
            description: "Domine navegação por diretórios, permissões, pipes, redirecionamento, variáveis de ambiente, processos, usuários, pacotes e edição básica no terminal. Isso acelera debugging, deploy, automação e leitura de logs. O objetivo não é decorar comandos: é entender o sistema operacional o suficiente para não ficar refém de interface gráfica.",
            tools: [
              { name: "Bash / Zsh", why: "Shells mais comuns para automação e rotina de servidor" },
              { name: "GNU Coreutils", why: "ls, cp, mv, cat, sort, uniq, wc e ferramentas essenciais" },
              { name: "Vim / Nano", why: "Edição rápida em servidores remotos" },
              { name: "SSH", why: "Acesso remoto seguro a máquinas e ambientes cloud" },
              { name: "WSL", why: "Ambiente Linux integrado ao Windows para estudo e prática" },
            ],
            sites: [
              { label: "Linux Journey", url: "https://linuxjourney.com/", type: "practice" },
              { label: "ExplainShell", url: "https://explainshell.com/", type: "practice" },
              { label: "man7.org", url: "https://man7.org/linux/man-pages/", type: "docs" },
            ],
            resources: [
              { label: "Diolinux — terminal Linux em português", url: "https://diolinux.com.br/tecnologia/por-onde-aprender-terminal-linux.html", type: "site" },
              { label: "Aurelio.net — Tela Preta / Shell Script", url: "https://aurelio.net/tela-preta/", type: "site" },
              { label: "The Linux Command Line — William Shotts", url: "https://linuxcommand.org/tlcl.php", type: "docs" },
              { label: "Linux Foundation — Introduction to Linux", url: "https://training.linuxfoundation.org/training/introduction-to-linux/", type: "course" },
            ]
          },
          {
            title: "Redes, DNS & Debugging de Produção",
            tagline: "Quando a API cai, saber perguntar à rede vale ouro.",
            description: "Aprenda TCP/IP, portas, DNS, TLS, proxies, timeouts, conexão keep-alive e ferramentas de diagnóstico. Um backend developer forte consegue diferenciar bug de aplicação, erro de rede, problema de DNS, gargalo de banco e falha de infraestrutura.",
            tools: [
              { name: "curl / HTTPie", why: "Testes HTTP reproduzíveis direto do terminal" },
              { name: "dig / nslookup", why: "Diagnóstico de DNS e resolução de nomes" },
              { name: "ss / netstat", why: "Inspeção de portas, sockets e conexões" },
              { name: "tcpdump / Wireshark", why: "Análise de tráfego quando o problema é profundo" },
              { name: "OpenSSL CLI", why: "Inspecionar certificados, TLS e handshakes" },
            ],
            sites: [
              { label: "Beej's Guide to Network Programming", url: "https://beej.us/guide/bgnet/", type: "docs" },
              { label: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/", type: "site" },
              { label: "HTTP Cats", url: "https://http.cat/", type: "practice" },
            ],
            resources: [
              { label: "MDN pt-BR — Como a Web funciona", url: "https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", type: "docs" },
              { label: "Curso em Vídeo — redes e internet", url: "https://www.youtube.com/@CursoemVideo", type: "youtube" },
              { label: "Julia Evans — Networking zines", url: "https://jvns.ca/networking-zine.pdf", type: "docs" },
              { label: "Hussein Nasser — Networking for Backend Engineers", url: "https://youtube.com/@hnasr", type: "youtube" },
            ]
          },
          {
            title: "Processos, Serviços & Runtime",
            tagline: "Saber rodar software é tão importante quanto escrever software.",
            description: "Entenda processos, threads, sinais, exit codes, logs, systemd, cron, variáveis de ambiente e gerenciamento de recursos. Esse conhecimento ajuda a criar aplicações que iniciam, param, reiniciam, registram logs e falham de maneira previsível.",
            tools: [
              { name: "systemd", why: "Gerenciador de serviços dominante em distribuições Linux modernas" },
              { name: "cron", why: "Agendamento simples de tarefas recorrentes" },
              { name: "top / htop", why: "Inspeção de CPU, memória e processos" },
              { name: "journalctl", why: "Leitura de logs de serviços systemd" },
              { name: "lsof", why: "Descobrir arquivos, portas e recursos abertos por processos" },
            ],
            sites: [
              { label: "systemd Docs", url: "https://systemd.io/", type: "docs" },
              { label: "crontab guru", url: "https://crontab.guru/", type: "practice" },
              { label: "Linux man-pages", url: "https://man7.org/linux/man-pages/", type: "docs" },
            ],
            resources: [
              { label: "Red Hat — systemd em português", url: "https://www.redhat.com/pt-br/topics/linux/what-is-systemd", type: "site" },
              { label: "Viva o Linux — comandos e administração", url: "https://www.vivaolinux.com.br/", type: "site" },
              { label: "DigitalOcean — systemd Essentials", url: "https://www.digitalocean.com/community/tutorials/systemd-essentials-working-with-services-units-and-the-journal", type: "docs" },
              { label: "The Linux Documentation Project", url: "https://tldp.org/", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "qualidade", label: "12 · Testes & Qualidade", color: "var(--color-22c55e)", dim: "var(--color-0d1f1222)", icon: "check-circle-2",
        topics: [
          {
            title: "Testes Unitários, Integração & E2E",
            tagline: "Teste bom não prova que você está certo — ele te avisa cedo quando ficou errado.",
            description: "Aprenda a escrever testes rápidos para regras de negócio, testes de integração para banco, filas e APIs, e testes ponta a ponta para fluxos críticos. Entenda pirâmide de testes, fixtures, mocks, stubs, fakes, test data builders e quando cada tipo de teste compensa.",
            tools: [
              { name: "Jest / Vitest", why: "Testes modernos no ecossistema JavaScript/TypeScript" },
              { name: "Pytest", why: "Framework expressivo e dominante para testes Python" },
              { name: "JUnit 5", why: "Padrão moderno de testes no ecossistema Java" },
              { name: "Testcontainers", why: "Banco, cache e brokers reais em containers descartáveis" },
              { name: "Playwright", why: "E2E confiável para fluxos web e APIs" },
            ],
            sites: [
              { label: "Jest Docs", url: "https://jestjs.io/docs/getting-started", type: "docs" },
              { label: "Pytest Docs", url: "https://docs.pytest.org/en/stable/", type: "docs" },
              { label: "JUnit 5 User Guide", url: "https://junit.org/junit5/docs/current/user-guide/", type: "docs" },
              { label: "Testcontainers Docs", url: "https://testcontainers.com/", type: "docs" },
            ],
            resources: [
              { label: "Full Cycle — testes automatizados e qualidade", url: "https://youtube.com/@FullCycle", type: "youtube" },
              { label: "DevDojo — testes com Java/Spring", url: "https://youtube.com/@DevDojoBrasil", type: "youtube" },
              { label: "Microsoft Learn — fundamentos de testes", url: "https://learn.microsoft.com/en-us/dotnet/core/testing/", type: "docs" },
              { label: "Google Testing Blog", url: "https://testing.googleblog.com/", type: "site" },
            ]
          },
          {
            title: "TDD, Refatoração & Design Testável",
            tagline: "Código fácil de testar costuma ser código mais simples de mudar.",
            description: "TDD ensina ciclos curtos: teste vermelho, implementação mínima, refatoração. Mesmo quando você não usa TDD o tempo todo, pensar em testabilidade melhora design, separação de responsabilidades, injeção de dependência, bordas de I/O e modelagem de domínio.",
            tools: [
              { name: "Coverage", why: "Sinal auxiliar para lacunas, não meta cega" },
              { name: "Mutation Testing", why: "Mede se os testes realmente detectam mudanças perigosas" },
              { name: "Mockito / Sinon", why: "Dublês de teste para dependências externas" },
              { name: "Approval Tests", why: "Úteis para refatorar saídas complexas com segurança" },
            ],
            sites: [
              { label: "Martin Fowler — Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", type: "site" },
              { label: "Stryker Mutator", url: "https://stryker-mutator.io/", type: "docs" },
              { label: "Mockito Docs", url: "https://site.mockito.org/", type: "docs" },
            ],
            resources: [
              { label: "Alura — artigos sobre TDD e testes", url: "https://www.alura.com.br/artigos", type: "site" },
              { label: "Casa do Código — TDD e testes", url: "https://www.casadocodigo.com.br/", type: "course" },
              { label: "Kent Beck — Test Driven Development", url: "https://www.oreilly.com/library/view/test-driven-development/0321146530/", type: "course" },
              { label: "Clean Coders — TDD", url: "https://cleancoders.com/", type: "course" },
            ]
          },
          {
            title: "Contract Testing & Compatibilidade de APIs",
            tagline: "Em sistemas distribuídos, quebrar contrato é quebrar produto.",
            description: "Aprenda testes de contrato entre consumidores e provedores, validação de schema, backward compatibility, versionamento e uso de OpenAPI como contrato vivo. Isso reduz regressões entre frontend, mobile, parceiros externos e microsserviços.",
            tools: [
              { name: "Pact", why: "Ferramenta clássica para consumer-driven contract testing" },
              { name: "OpenAPI", why: "Contrato formal para APIs HTTP" },
              { name: "Schemathesis", why: "Gera testes a partir de especificações OpenAPI" },
              { name: "Dredd / Microcks", why: "Validação de APIs contra contratos" },
              { name: "Pact Broker", why: "Publica contratos e coordena compatibilidade entre serviços" },
            ],
            sites: [
              { label: "Pact Docs", url: "https://docs.pact.io/", type: "docs" },
              { label: "OpenAPI Specification", url: "https://spec.openapis.org/oas/", type: "docs" },
              { label: "Schemathesis Docs", url: "https://schemathesis.readthedocs.io/", type: "docs" },
            ],
            resources: [
              { label: "Neryx — testes de contrato com Pact em português", url: "https://www.neryx.com.br/blog/testes-contrato-pact-dotnet-microsservicos/", type: "site" },
              { label: "Pact Workshops", url: "https://docs.pact.io/implementation_guides/workshops", type: "course" },
              { label: "Swagger — API Contract Testing", url: "https://swagger.io/product/contract-testing/", type: "site" },
              { label: "GitLab Docs — Contract Testing", url: "https://docs.gitlab.com/development/testing_guide/contract/", type: "docs" },
            ]
          },
          {
            title: "Qualidade Contínua & Code Review",
            tagline: "Qualidade não é uma etapa; é um sistema de feedback.",
            description: "Combine lint, formatadores, análise estática, scanners de segurança, revisão de PR, branch protection e pipelines. Aprenda a revisar código procurando comportamento, legibilidade, risco operacional, testes ausentes, performance e segurança — não apenas estilo.",
            tools: [
              { name: "ESLint / Prettier", why: "Padronização e análise estática no ecossistema JS" },
              { name: "Ruff / Black", why: "Lint e formatação rápida para Python" },
              { name: "Checkstyle / SpotBugs", why: "Qualidade estática no ecossistema Java" },
              { name: "SonarQube", why: "Análise contínua de qualidade e hotspots" },
              { name: "CodeQL", why: "Análise semântica de segurança no GitHub" },
            ],
            sites: [
              { label: "Google Engineering Practices — Code Review", url: "https://google.github.io/eng-practices/review/", type: "docs" },
              { label: "SonarQube Docs", url: "https://docs.sonarsource.com/sonarqube-server/", type: "docs" },
              { label: "GitHub CodeQL Docs", url: "https://docs.github.com/en/code-security/codeql-cli", type: "docs" },
            ],
            resources: [
              { label: "Attekita Dev — boas práticas e carreira dev", url: "https://youtube.com/@attekitadev", type: "youtube" },
              { label: "Filipe Deschamps — qualidade e engenharia", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Thoughtworks Technology Radar", url: "https://www.thoughtworks.com/radar", type: "site" },
              { label: "GitHub Skills — Review pull requests", url: "https://skills.github.com/", type: "practice" },
            ]
          },
        ]
      },
      {
        id: "documentacao-projetos", label: "13 · Projetos & Documentação", color: "var(--color-06b6d4)", dim: "var(--color-08202a22)", icon: "folder-kanban",
        topics: [
          {
            title: "Projetos Práticos por Fase",
            tagline: "Roadmap sem projeto vira leitura infinita; projeto transforma estudo em evidência.",
            description: "Cada bloco do roadmap deve terminar com algo entregável: API, CLI, worker, integração, deploy ou estudo de caso. Use projetos pequenos e progressivos para consolidar aprendizado, gerar portfólio e treinar decisões técnicas reais.",
            tools: [
              { name: "GitHub Projects", why: "Kanban simples para quebrar projetos em tarefas" },
              { name: "Issues", why: "Registro de requisitos, bugs e melhorias" },
              { name: "README-driven development", why: "Clareza de escopo antes da implementação" },
              { name: "Docker Compose", why: "Ambiente reproduzível para projetos completos" },
              { name: "Seed data", why: "Demonstrações consistentes para recrutadores e revisores" },
            ],
            sites: [
              { label: "GitHub Skills", url: "https://skills.github.com/", type: "practice" },
              { label: "RealWorld App", url: "https://github.com/gothinkster/realworld", type: "practice" },
              { label: "Build your own X", url: "https://github.com/codecrafters-io/build-your-own-x", type: "practice" },
            ],
            resources: [
              { label: "Rocketseat — projetos backend em português", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Full Cycle — projetos e arquitetura", url: "https://youtube.com/@FullCycle", type: "youtube" },
              { label: "CodeCrafters — build real systems", url: "https://codecrafters.io/", type: "practice" },
              { label: "freeCodeCamp — backend projects", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/", type: "course" },
            ]
          },
          {
            title: "Documentação Técnica — README, ADR, C4 & Runbooks",
            tagline: "O melhor sistema do mundo perde valor se ninguém entende como operar ou evoluir.",
            description: "Documente instalação, variáveis de ambiente, decisões arquiteturais, diagramas, APIs, troubleshooting e procedimentos de operação. README é porta de entrada; ADR explica decisões; C4 mostra arquitetura; runbook ajuda quando algo quebra.",
            tools: [
              { name: "Markdown", why: "Formato simples, versionável e padrão em repositórios" },
              { name: "ADR", why: "Registra contexto, decisão e consequências" },
              { name: "C4 Model", why: "Diagramas em níveis: contexto, containers, componentes e código" },
              { name: "Mermaid / PlantUML", why: "Diagramas versionáveis junto ao código" },
              { name: "MkDocs / Docusaurus", why: "Sites de documentação a partir de Markdown" },
            ],
            sites: [
              { label: "ADR GitHub", url: "https://adr.github.io/", type: "docs" },
              { label: "C4 Model", url: "https://c4model.info/", type: "docs" },
              { label: "OpenAPI Spec", url: "https://spec.openapis.org/oas/", type: "docs" },
            ],
            resources: [
              { label: "Código Fonte TV — documentação e engenharia", url: "https://youtube.com/@codigofontetv", type: "youtube" },
              { label: "DevMedia — documentação de software", url: "https://www.devmedia.com.br/", type: "site" },
              { label: "Joel Parker Henderson — ADR examples", url: "https://github.com/joelparkerhenderson/architecture-decision-record", type: "docs" },
              { label: "Google SRE — Runbooks and Playbooks", url: "https://sre.google/sre-book/table-of-contents/", type: "docs" },
            ]
          },
          {
            title: "Requisitos, Produto & Comunicação Técnica",
            tagline: "Backend bom nasce quando problema de negócio vira contrato técnico claro.",
            description: "Aprenda a fazer perguntas, transformar requisito em fluxo, desenhar casos de uso, negociar trade-offs, estimar tarefas e comunicar riscos. Isso é o que conecta código a produto e aumenta muito sua senioridade percebida.",
            tools: [
              { name: "User Stories", why: "Quebram necessidade de produto em comportamento entregável" },
              { name: "Acceptance Criteria", why: "Define quando uma tarefa realmente está pronta" },
              { name: "Event Storming", why: "Ajuda times a modelar domínio e eventos" },
              { name: "Miro / FigJam", why: "Quadros colaborativos para modelagem e alinhamento" },
              { name: "RFCs internos", why: "Discussão técnica estruturada antes de grandes mudanças" },
            ],
            sites: [
              { label: "Atlassian Agile Coach", url: "https://www.atlassian.com/agile", type: "site" },
              { label: "Martin Fowler", url: "https://martinfowler.com/", type: "site" },
              { label: "DDD Community", url: "https://dddcommunity.org/", type: "site" },
            ],
            resources: [
              { label: "Carreira sem Fronteiras — comunicação e carreira tech", url: "https://youtube.com/@CarreiraSemFronteiras", type: "youtube" },
              { label: "Alura — produto, agilidade e tecnologia", url: "https://www.alura.com.br/artigos", type: "site" },
              { label: "Shape Up — Basecamp", url: "https://basecamp.com/shapeup", type: "docs" },
              { label: "Refactoring Guru — design patterns", url: "https://refactoring.guru/design-patterns", type: "site" },
            ]
          },
          {
            title: "Critérios de Conclusão & Portfólio",
            tagline: "O próximo passo precisa ser decidido por evidência, não por ansiedade.",
            description: "Defina checkpoints por fase: projeto entregue, testes passando, README claro, deploy público, métricas básicas e retrospectiva do que aprendeu. Um portfólio backend forte mostra decisões, trade-offs, logs, testes e operação — não apenas telas bonitas.",
            tools: [
              { name: "Checklist de fase", why: "Evita avançar com lacunas invisíveis" },
              { name: "Deploy público", why: "Mostra que você sabe colocar software de pé" },
              { name: "Demo script", why: "Ajuda recrutadores e revisores a testarem rápido" },
              { name: "Postmortem pessoal", why: "Consolida aprendizados e decisões" },
              { name: "GitHub Profile README", why: "Organiza sua narrativa técnica" },
            ],
            sites: [
              { label: "GitHub Docs — Profile README", url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile", type: "docs" },
              { label: "roadmap.sh Backend", url: "https://roadmap.sh/backend", type: "site" },
              { label: "Exercism Mentoring", url: "https://exercism.org/", type: "practice" },
            ],
            resources: [
              { label: "Filipe Deschamps — carreira e portfólio", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Rafaella Ballerini — GitHub e portfólio", url: "https://youtube.com/@rafaellaballerini", type: "youtube" },
              { label: "GitHub Skills — portfolio and collaboration", url: "https://skills.github.com/", type: "practice" },
              { label: "Google Technical Writing Courses", url: "https://developers.google.com/tech-writing", type: "course" },
            ]
          },
        ]
      },
    ];

    const frontendPhases = [
      {
        id: "fundamentos-web", label: "01 · Fundamentos Web", color: "var(--color-6366f1)", dim: "var(--color-1e1b4b22)", icon: "code-2",
        topics: [
          {
            title: "HTML Semântico & Estrutura",
            tagline: "HTML não é só marcação: é contrato de significado para browser, leitor de tela e SEO.",
            description: "Domine elementos semânticos, headings, landmarks, listas, tabelas, imagens, mídia, links, formulários e metadados. Um bom front-end começa com uma árvore HTML que comunica intenção antes de qualquer CSS ou JavaScript entrar em cena.",
            tools: [
              { name: "HTML5", why: "Base universal da Web e do conteúdo acessível" },
              { name: "WAI-ARIA", why: "Complementa semântica quando HTML nativo não basta" },
              { name: "Open Graph", why: "Controla preview de links em redes sociais e mensageria" },
              { name: "Schema.org", why: "Dados estruturados para busca e rich results" },
            ],
            sites: [
              { label: "MDN HTML", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML", type: "docs" },
              { label: "HTML Living Standard", url: "https://html.spec.whatwg.org/", type: "docs" },
              { label: "W3C Validator", url: "https://validator.w3.org/", type: "practice" },
            ],
            resources: [
              { label: "Curso em Vídeo — HTML5 e CSS3", url: "https://www.youtube.com/@CursoemVideo", type: "youtube" },
              { label: "MDN Learn — Semantic HTML", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content", type: "docs" },
              { label: "freeCodeCamp — Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", type: "course" },
            ]
          },
          {
            title: "CSS Essencial & Box Model",
            tagline: "CSS é o motor visual da Web — entender cascata evita lutar contra a própria interface.",
            description: "Aprenda seletores, especificidade, herança, cascata, box model, unidades, cores, tipografia, display, position e stacking context. Esse bloco resolve a maioria dos bugs visuais que parecem misteriosos para iniciantes.",
            tools: [
              { name: "CSS DevTools", why: "Inspeção visual da cascata, layout e estilos computados" },
              { name: "CSS Custom Properties", why: "Variáveis nativas para temas e design tokens" },
              { name: "Normalize / Reset", why: "Reduz diferenças de estilo entre navegadores" },
              { name: "PostCSS", why: "Pipeline para transformar e otimizar CSS" },
            ],
            sites: [
              { label: "MDN CSS", url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS", type: "docs" },
              { label: "CSS Tricks", url: "https://css-tricks.com/", type: "site" },
              { label: "Can I use", url: "https://caniuse.com/", type: "docs" },
            ],
            resources: [
              { label: "Origamid — CSS Flexbox e Grid", url: "https://www.origamid.com/", type: "course" },
              { label: "Kevin Powell — CSS", url: "https://youtube.com/@KevinPowell", type: "youtube" },
              { label: "web.dev — Learn CSS", url: "https://web.dev/learn/css", type: "docs" },
            ]
          },
          {
            title: "JavaScript no Browser",
            tagline: "Interatividade real começa quando você entende DOM, eventos e estado local.",
            description: "Estude variáveis, funções, arrays, objetos, módulos, DOM, eventos, timers, fetch, promises e manipulação segura de interface. Antes de frameworks, você precisa saber o que o browser já entrega nativamente.",
            tools: [
              { name: "ES Modules", why: "Organização nativa de código JavaScript moderno" },
              { name: "DOM API", why: "API central para ler e alterar documentos web" },
              { name: "Fetch API", why: "Comunicação HTTP nativa no browser" },
              { name: "Chrome DevTools", why: "Debugging, breakpoints, network e performance" },
            ],
            sites: [
              { label: "MDN JavaScript", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", type: "docs" },
              { label: "JavaScript.info", url: "https://javascript.info/", type: "docs" },
              { label: "Exercism JavaScript", url: "https://exercism.org/tracks/javascript", type: "practice" },
            ],
            resources: [
              { label: "Curso em Vídeo — JavaScript", url: "https://www.youtube.com/@CursoemVideo", type: "youtube" },
              { label: "The Odin Project — Foundations", url: "https://www.theodinproject.com/paths/foundations/courses/foundations", type: "course" },
              { label: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "layout-design", label: "02 · Layout & Design", color: "var(--color-f59e0b)", dim: "var(--color-1c141022)", icon: "layout-dashboard",
        topics: [
          {
            title: "Flexbox, Grid & Layout Responsivo",
            tagline: "Layout moderno é fluido, previsível e preparado para telas reais.",
            description: "Domine Flexbox, CSS Grid, media queries, container queries, clamp, minmax, aspect-ratio e estratégias mobile-first. O foco é criar interfaces que se adaptam sem quebrar texto, hierarquia ou interação.",
            tools: [
              { name: "Flexbox", why: "Distribuição de espaço em um eixo com ótimo controle" },
              { name: "CSS Grid", why: "Layouts bidimensionais densos e responsivos" },
              { name: "Container Queries", why: "Componentes responsivos ao próprio espaço disponível" },
              { name: "Responsive DevTools", why: "Testa breakpoints e densidades com rapidez" },
            ],
            sites: [
              { label: "MDN Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design", type: "docs" },
              { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/", type: "practice" },
              { label: "Grid Garden", url: "https://cssgridgarden.com/", type: "practice" },
            ],
            resources: [
              { label: "Origamid — CSS Grid Layout", url: "https://www.origamid.com/curso/css-grid-layout/", type: "course" },
              { label: "Kevin Powell — Responsive CSS", url: "https://youtube.com/@KevinPowell", type: "youtube" },
              { label: "web.dev — Responsive Design", url: "https://web.dev/learn/design", type: "docs" },
            ]
          },
          {
            title: "Tipografia, Cores & Hierarquia Visual",
            tagline: "Uma interface clara nasce de escolhas visuais consistentes, não de decoração aleatória.",
            description: "Aprenda escala tipográfica, contraste, ritmo, espaçamento, alinhamento, paletas, estados visuais e densidade de informação. Bons fundamentos visuais tornam dashboards, formulários e páginas mais fáceis de escanear e usar.",
            tools: [
              { name: "Figma", why: "Ferramenta padrão para design, protótipos e handoff" },
              { name: "Google Fonts", why: "Biblioteca ampla de fontes web otimizadas" },
              { name: "Color Contrast Checker", why: "Validação objetiva de contraste" },
              { name: "Design Tokens", why: "Traduz decisões visuais em valores reutilizáveis" },
            ],
            sites: [
              { label: "Material Design", url: "https://m3.material.io/", type: "docs" },
              { label: "Apple HIG", url: "https://developer.apple.com/design/human-interface-guidelines", type: "docs" },
              { label: "Adobe Color", url: "https://color.adobe.com/", type: "practice" },
            ],
            resources: [
              { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", type: "site" },
              { label: "Refactoring UI", url: "https://www.refactoringui.com/", type: "course" },
              { label: "Design Course — UI Design", url: "https://youtube.com/@DesignCourse", type: "youtube" },
            ]
          },
          {
            title: "Animações, Transições & Microinterações",
            tagline: "Movimento bom orienta; movimento ruim distrai.",
            description: "Use transições, transforms, keyframes, prefers-reduced-motion e animações guiadas por estado. Aprenda quando animar feedback, entrada, saída, loading e mudança de contexto sem prejudicar performance ou acessibilidade.",
            tools: [
              { name: "CSS Transitions", why: "Movimento simples e barato para estados de UI" },
              { name: "CSS Animations", why: "Keyframes para loops e sequências controladas" },
              { name: "Framer Motion", why: "Animações declarativas no ecossistema React" },
              { name: "GSAP", why: "Animações avançadas e timeline robusta" },
            ],
            sites: [
              { label: "MDN CSS Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations", type: "docs" },
              { label: "Framer Motion Docs", url: "https://motion.dev/", type: "docs" },
              { label: "Animista", url: "https://animista.net/", type: "practice" },
            ],
            resources: [
              { label: "Willian Justen — animações front-end", url: "https://youtube.com/@WillianJustenCursos", type: "youtube" },
              { label: "Josh W Comeau — Animation", url: "https://www.joshwcomeau.com/animation/", type: "site" },
              { label: "GSAP Learning Center", url: "https://gsap.com/resources/", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "javascript-typescript", label: "03 · JavaScript & TypeScript", color: "var(--color-10b981)", dim: "var(--color-0d1f1722)", icon: "braces",
        topics: [
          {
            title: "JavaScript Moderno Profundo",
            tagline: "Framework muda; closures, escopo, protótipos e event loop continuam cobrando a conta.",
            description: "Aprofunde escopo, closures, this, prototypes, classes, iterators, generators, modules, event loop, microtasks e tratamento de erros. Esse conhecimento explica comportamento real de bibliotecas e bugs difíceis.",
            tools: [
              { name: "Node.js", why: "Ambiente para scripts, tooling e testes front-end" },
              { name: "DevTools Debugger", why: "Breakpoints, call stack e inspeção de closures" },
              { name: "ESLint", why: "Detecta padrões perigosos e inconsistências" },
              { name: "Babel", why: "Entende transformação de sintaxe moderna" },
            ],
            sites: [
              { label: "MDN JS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "docs" },
              { label: "You Don't Know JS Yet", url: "https://github.com/getify/You-Dont-Know-JS", type: "docs" },
              { label: "JavaScript Questions", url: "https://github.com/lydiahallie/javascript-questions", type: "practice" },
            ],
            resources: [
              { label: "Filipe Deschamps — JavaScript e Web", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Akita On Rails — JavaScript", url: "https://youtube.com/@Akitando", type: "youtube" },
              { label: "Frontend Masters — JavaScript", url: "https://frontendmasters.com/learn/javascript/", type: "course" },
            ]
          },
          {
            title: "TypeScript para UI",
            tagline: "Tipagem boa documenta intenção e reduz regressão em componentes.",
            description: "Aprenda tipos primitivos, unions, generics, narrowing, utility types, type guards e tipagem de props, eventos, hooks, formulários e respostas de API. O objetivo é usar TypeScript para aumentar confiança sem transformar a UI em quebra-cabeça de tipos.",
            tools: [
              { name: "TypeScript", why: "Tipagem estática gradual para JavaScript" },
              { name: "tsconfig", why: "Define rigor, targets e ergonomia do projeto" },
              { name: "Zod", why: "Validação runtime com inferência de tipos" },
              { name: "ts-reset", why: "Melhora tipos padrão de APIs JavaScript comuns" },
            ],
            sites: [
              { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", type: "docs" },
              { label: "React TypeScript", url: "https://react.dev/learn/typescript", type: "docs" },
              { label: "Type Challenges", url: "https://github.com/type-challenges/type-challenges", type: "practice" },
            ],
            resources: [
              { label: "Rocketseat — TypeScript", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Matt Pocock — TypeScript", url: "https://www.totaltypescript.com/", type: "course" },
              { label: "Basarat — TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/", type: "docs" },
            ]
          },
          {
            title: "APIs do Browser & Web Platform",
            tagline: "A plataforma web moderna já entrega muito do que antes exigia biblioteca.",
            description: "Explore storage, history, URL, forms, clipboard, observers, web workers, service workers, canvas, media, notifications e permissions. Saber a Web Platform reduz dependências e melhora decisões de arquitetura.",
            tools: [
              { name: "LocalStorage / IndexedDB", why: "Persistência local para preferências e cache" },
              { name: "IntersectionObserver", why: "Lazy loading e detecção eficiente de visibilidade" },
              { name: "Web Workers", why: "Processamento fora da thread principal" },
              { name: "Service Workers", why: "Base para cache offline e PWA" },
            ],
            sites: [
              { label: "MDN Web APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API", type: "docs" },
              { label: "web.dev", url: "https://web.dev/", type: "site" },
              { label: "Can I use", url: "https://caniuse.com/", type: "docs" },
            ],
            resources: [
              { label: "GoogleChrome Developers", url: "https://youtube.com/@ChromeDevs", type: "youtube" },
              { label: "Jake Archibald — articles", url: "https://jakearchibald.com/", type: "site" },
              { label: "MDN Learn — Client-side APIs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "frameworks", label: "04 · Frameworks", color: "var(--color-8b5cf6)", dim: "var(--color-1a103022)", icon: "component",
        topics: [
          {
            title: "React & Ecossistema",
            tagline: "Componentes, estado e renderização declarativa dominam o mercado front-end.",
            description: "Aprenda JSX, componentes, props, state, hooks, context, memoização, composition, error boundaries e padrões modernos com React Server Components quando usar meta-frameworks. React é amplo; maturidade está em saber quando simplificar.",
            tools: [
              { name: "React", why: "Biblioteca dominante para UI componentizada" },
              { name: "Next.js", why: "Meta-framework React com SSR, SSG, routing e server features" },
              { name: "React Router", why: "Roteamento client-side maduro" },
              { name: "Vite", why: "Setup rápido para SPAs React" },
            ],
            sites: [
              { label: "React Docs", url: "https://react.dev/learn", type: "docs" },
              { label: "Next.js Docs", url: "https://nextjs.org/docs", type: "docs" },
              { label: "React Patterns", url: "https://reactpatterns.com/", type: "site" },
            ],
            resources: [
              { label: "Rocketseat — React", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Willian Justen — React e Next", url: "https://youtube.com/@WillianJustenCursos", type: "youtube" },
              { label: "Epic React", url: "https://www.epicreact.dev/", type: "course" },
            ]
          },
          {
            title: "Vue, Angular & Svelte",
            tagline: "Conhecer alternativas amplia repertório arquitetural e empregabilidade.",
            description: "Estude os modelos mentais de Vue, Angular e Svelte: templates, reatividade, diretivas, componentes, roteamento e organização. Mesmo escolhendo uma stack principal, comparar frameworks melhora decisões técnicas.",
            tools: [
              { name: "Vue", why: "Progressivo, produtivo e forte em adoção global" },
              { name: "Nuxt", why: "Meta-framework Vue para SSR/SSG e full-stack" },
              { name: "Angular", why: "Framework enterprise completo com TypeScript" },
              { name: "Svelte / SvelteKit", why: "Compilador de UI com excelente DX e performance" },
            ],
            sites: [
              { label: "Vue Docs", url: "https://vuejs.org/guide/introduction.html", type: "docs" },
              { label: "Angular Tutorials", url: "https://angular.dev/tutorials", type: "docs" },
              { label: "Svelte Docs", url: "https://svelte.dev/docs", type: "docs" },
            ],
            resources: [
              { label: "Matheus Battisti — Vue/Angular", url: "https://youtube.com/@MatheusBattisti", type: "youtube" },
              { label: "Loiane Groner — Angular", url: "https://youtube.com/@loianegroner", type: "youtube" },
              { label: "Vue Mastery", url: "https://www.vuemastery.com/", type: "course" },
            ]
          },
          {
            title: "Roteamento, Renderização & Meta-frameworks",
            tagline: "A escolha entre SPA, SSR e SSG muda UX, SEO, performance e operação.",
            description: "Entenda client-side routing, SSR, SSG, ISR, streaming, hydration, partial hydration e server actions. Use a estratégia de renderização a favor do produto: conteúdo público, dashboard privado, e-commerce e app interno pedem decisões diferentes.",
            tools: [
              { name: "Next.js", why: "React com App Router, RSC e renderização híbrida" },
              { name: "Nuxt", why: "Vue com SSR, SSG e módulos integrados" },
              { name: "Astro", why: "Conteúdo e sites rápidos com Islands Architecture" },
              { name: "Remix / React Router", why: "Web standards e data loading por rota" },
            ],
            sites: [
              { label: "Astro Docs", url: "https://docs.astro.build/", type: "docs" },
              { label: "Remix Docs", url: "https://remix.run/docs", type: "docs" },
              { label: "Patterns.dev", url: "https://www.patterns.dev/", type: "site" },
            ],
            resources: [
              { label: "Theo — t3.gg", url: "https://youtube.com/@t3dotgg", type: "youtube" },
              { label: "Vercel Guides", url: "https://vercel.com/guides", type: "docs" },
              { label: "web.dev — Rendering on the Web", url: "https://web.dev/articles/rendering-on-the-web", type: "site" },
            ]
          },
        ]
      },
      {
        id: "estado-dados", label: "05 · Estado & Dados", color: "var(--color-f97316)", dim: "var(--color-1c110822)", icon: "database-zap",
        topics: [
          {
            title: "Gerenciamento de Estado",
            tagline: "Estado demais no lugar errado transforma UI simples em labirinto.",
            description: "Diferencie estado local, estado global, estado derivado, estado de servidor e cache. Aprenda reducers, context, stores, selectors, optimistic updates e estratégias para evitar sincronização duplicada.",
            tools: [
              { name: "React State / Context", why: "Base nativa para estado local e compartilhado" },
              { name: "Redux Toolkit", why: "Padrão previsível para apps complexos" },
              { name: "Zustand", why: "Store simples e ergonômica para React" },
              { name: "Pinia", why: "Store oficial e moderna para Vue" },
            ],
            sites: [
              { label: "Redux Toolkit Docs", url: "https://redux-toolkit.js.org/", type: "docs" },
              { label: "Zustand Docs", url: "https://zustand.docs.pmnd.rs/", type: "docs" },
              { label: "Pinia Docs", url: "https://pinia.vuejs.org/", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — estado no React", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Kent C. Dodds — State Colocation", url: "https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster", type: "site" },
              { label: "Redux Essentials Tutorial", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts", type: "course" },
            ]
          },
          {
            title: "Consumo de APIs, Cache & Sincronização",
            tagline: "Dados remotos não são só fetch: são loading, erro, cache, retry e invalidação.",
            description: "Aprenda REST, GraphQL, paginação, filtros, abort controllers, retries, stale data, optimistic UI, real-time updates e tratamento de erros. UI profissional lida bem com rede lenta, offline parcial e respostas inesperadas.",
            tools: [
              { name: "TanStack Query", why: "Cache, sincronização e invalidação de dados de servidor" },
              { name: "SWR", why: "Data fetching leve com stale-while-revalidate" },
              { name: "Apollo Client", why: "Cliente GraphQL robusto para apps complexos" },
              { name: "MSW", why: "Mock de APIs no browser, testes e desenvolvimento" },
            ],
            sites: [
              { label: "TanStack Query Docs", url: "https://tanstack.com/query/latest", type: "docs" },
              { label: "GraphQL Learn", url: "https://graphql.org/learn/", type: "docs" },
              { label: "MSW Docs", url: "https://mswjs.io/docs/", type: "docs" },
            ],
            resources: [
              { label: "Full Cycle — APIs para front-end", url: "https://youtube.com/@FullCycle", type: "youtube" },
              { label: "TkDodo — React Query", url: "https://tkdodo.eu/blog/practical-react-query", type: "site" },
              { label: "Apollo Odyssey", url: "https://www.apollographql.com/tutorials/", type: "course" },
            ]
          },
          {
            title: "Formulários, Validação & UX de Erros",
            tagline: "Formulário é onde produto, acessibilidade, estado e backend se encontram.",
            description: "Domine inputs controlados e não controlados, validação client-side e server-side, máscaras, mensagens de erro, foco, autocomplete, upload, estados de submissão e preservação de dados. Grande parte de software corporativo é formulário bem feito.",
            tools: [
              { name: "React Hook Form", why: "Formulários performáticos e ergonômicos em React" },
              { name: "Formik", why: "Biblioteca clássica ainda presente em muitos projetos" },
              { name: "Zod / Yup", why: "Schema validation com mensagens e inferência" },
              { name: "HTML Constraint Validation", why: "Validação nativa do browser" },
            ],
            sites: [
              { label: "MDN Forms", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms", type: "docs" },
              { label: "React Hook Form Docs", url: "https://react-hook-form.com/", type: "docs" },
              { label: "WebAIM Forms", url: "https://webaim.org/techniques/forms/", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — forms com React Hook Form", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Adam Silver — Form Design", url: "https://formdesignpatterns.com/", type: "site" },
              { label: "Gov.uk Design System — Forms", url: "https://design-system.service.gov.uk/components/", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "tooling", label: "06 · Tooling & DX", color: "var(--color-0ea5e9)", dim: "var(--color-0c1a2622)", icon: "wrench",
        topics: [
          {
            title: "Git, Package Managers & Scripts",
            tagline: "Front-end moderno é código, dependência, build e automação andando juntos.",
            description: "Aprenda Git, branches, pull requests, semantic commits, npm scripts, lockfiles, workspaces e versionamento de dependências. Entenda como instalar, atualizar e auditar pacotes sem quebrar o projeto.",
            tools: [
              { name: "Git / GitHub", why: "Colaboração, histórico e revisão de código" },
              { name: "npm", why: "Gerenciador padrão do ecossistema JavaScript" },
              { name: "pnpm", why: "Instalação rápida e eficiente em monorepos" },
              { name: "Yarn", why: "Ainda comum em projetos front-end maduros" },
            ],
            sites: [
              { label: "Pro Git Book", url: "https://git-scm.com/book/pt-br/v2", type: "docs" },
              { label: "npm Docs", url: "https://docs.npmjs.com/", type: "docs" },
              { label: "Learn Git Branching", url: "https://learngitbranching.js.org/", type: "practice" },
            ],
            resources: [
              { label: "Attekita Dev — Git", url: "https://youtube.com/@attekitadev", type: "youtube" },
              { label: "Rocketseat — Git e GitHub", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "GitHub Skills", url: "https://skills.github.com/", type: "practice" },
            ]
          },
          {
            title: "Build Tools, Bundlers & Compilação",
            tagline: "Build bom some da frente; build ruim vira gargalo diário.",
            description: "Entenda bundling, transpilation, tree shaking, code splitting, source maps, dev server, HMR e variáveis de ambiente. O objetivo é saber configurar e depurar o pipeline que transforma código em aplicação distribuível.",
            tools: [
              { name: "Vite", why: "Dev server rápido e padrão moderno para SPAs" },
              { name: "Webpack", why: "Bundler clássico em grandes bases legadas e enterprise" },
              { name: "Rollup", why: "Excelente para bibliotecas e pacotes" },
              { name: "Turbopack / esbuild", why: "Ferramentas modernas focadas em velocidade" },
            ],
            sites: [
              { label: "Vite Docs", url: "https://vite.dev/guide/", type: "docs" },
              { label: "Webpack Docs", url: "https://webpack.js.org/concepts/", type: "docs" },
              { label: "Rollup Docs", url: "https://rollupjs.org/", type: "docs" },
            ],
            resources: [
              { label: "Akita On Rails — bundlers e JavaScript moderno", url: "https://youtube.com/@Akitando", type: "youtube" },
              { label: "ThePrimeagen — tooling JS", url: "https://youtube.com/@ThePrimeTimeagen", type: "youtube" },
              { label: "web.dev — Optimize JavaScript", url: "https://web.dev/learn/performance/optimize-javascript", type: "docs" },
            ]
          },
          {
            title: "Lint, Format, CI & Qualidade Contínua",
            tagline: "Consistência automática libera code review para discutir comportamento.",
            description: "Configure lint, formatação, typecheck, testes, pre-commit hooks, branch protection e pipelines. Um projeto profissional falha cedo quando algo quebra contrato, estilo, segurança ou build.",
            tools: [
              { name: "ESLint", why: "Análise estática e regras de qualidade" },
              { name: "Prettier", why: "Formatação automática e consistente" },
              { name: "Husky / lint-staged", why: "Checks antes do commit" },
              { name: "GitHub Actions", why: "CI/CD integrado a repositórios GitHub" },
            ],
            sites: [
              { label: "ESLint Docs", url: "https://eslint.org/docs/latest/", type: "docs" },
              { label: "Prettier Docs", url: "https://prettier.io/docs/", type: "docs" },
              { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" },
            ],
            resources: [
              { label: "Filipe Deschamps — qualidade de software", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "Google Engineering Practices — Code Review", url: "https://google.github.io/eng-practices/review/", type: "docs" },
              { label: "GitHub Skills — Actions", url: "https://skills.github.com/", type: "practice" },
            ]
          },
        ]
      },
      {
        id: "ux-ui", label: "07 · UX & UI", color: "var(--color-ef4444)", dim: "var(--color-200e0e22)", icon: "mouse-pointer-click",
        topics: [
          {
            title: "Design Handoff & Figma para Devs",
            tagline: "Implementar tela não é copiar pixel: é traduzir intenção para interface resiliente.",
            description: "Aprenda a ler frames, auto layout, constraints, componentes, variantes, tokens, protótipos e especificações. Saiba conversar com design sobre estados, vazios, erros, loading, responsividade e casos extremos.",
            tools: [
              { name: "Figma Dev Mode", why: "Inspeção de propriedades, assets e tokens" },
              { name: "Auto Layout", why: "Modelo mental próximo de layouts responsivos reais" },
              { name: "Design Tokens", why: "Ponte entre decisões de design e código" },
              { name: "Zeplin / Storybook", why: "Handoff e documentação em alguns times" },
            ],
            sites: [
              { label: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design", type: "docs" },
              { label: "Design Systems Repo", url: "https://designsystemsrepo.com/", type: "site" },
              { label: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", type: "site" },
            ],
            resources: [
              { label: "Chief of Design — UX/UI em português", url: "https://youtube.com/@ChiefofDesign", type: "youtube" },
              { label: "Femke — design handoff", url: "https://youtube.com/@femke", type: "youtube" },
              { label: "Figma for Developers", url: "https://www.figma.com/community/file/928108847914589057", type: "practice" },
            ]
          },
          {
            title: "Componentes, Estados & Padrões de Interface",
            tagline: "Botão, modal e tabela parecem simples até você lidar com todos os estados reais.",
            description: "Construa componentes com estados de hover, focus, active, disabled, loading, empty, error e success. Entenda composição, variantes, slots, density, feedback visual, affordance e consistência entre fluxos.",
            tools: [
              { name: "Storybook", why: "Catálogo, documentação e teste visual de componentes" },
              { name: "Radix UI", why: "Primitivos acessíveis para componentes complexos" },
              { name: "Headless UI", why: "Componentes sem estilo para Tailwind/React/Vue" },
              { name: "shadcn/ui", why: "Componentes copiáveis com boa base de design" },
            ],
            sites: [
              { label: "Storybook Docs", url: "https://storybook.js.org/docs", type: "docs" },
              { label: "Radix UI Docs", url: "https://www.radix-ui.com/primitives", type: "docs" },
              { label: "A11Y Project Patterns", url: "https://www.a11yproject.com/", type: "site" },
            ],
            resources: [
              { label: "Rocketseat — design system", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook", type: "docs" },
              { label: "Storybook Tutorials", url: "https://storybook.js.org/tutorials/", type: "course" },
            ]
          },
          {
            title: "Usabilidade, Fluxos & Produto",
            tagline: "Front-end é a camada onde decisão de produto vira experiência concreta.",
            description: "Aprenda heurísticas de usabilidade, fluxo de tarefa, feedback, prevenção de erro, confirmação, progress disclosure e conteúdo de interface. Bom front-end ajuda pessoas a completar tarefas com menos fricção.",
            tools: [
              { name: "User Flows", why: "Mapeia caminhos e decisões de usuários" },
              { name: "Wireframes", why: "Explora estrutura antes da estética final" },
              { name: "Hotjar / Clarity", why: "Sinais qualitativos de comportamento em produção" },
              { name: "Analytics Events", why: "Mede uso real de fluxos e ações" },
            ],
            sites: [
              { label: "NN/g Heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", type: "docs" },
              { label: "Gov.uk Service Manual", url: "https://www.gov.uk/service-manual", type: "docs" },
              { label: "Laws of UX", url: "https://lawsofux.com/", type: "site" },
            ],
            resources: [
              { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", type: "site" },
              { label: "AJ&Smart — UX/Product", url: "https://youtube.com/@AJSmart", type: "youtube" },
              { label: "Shape Up — Basecamp", url: "https://basecamp.com/shapeup", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "acessibilidade", label: "08 · Acessibilidade", color: "var(--color-dc2626)", dim: "var(--color-1f080822)", icon: "accessibility",
        topics: [
          {
            title: "WCAG, Semântica & Navegação por Teclado",
            tagline: "Acessibilidade não é plugin: é qualidade básica de interface.",
            description: "Estude WCAG, contraste, foco visível, ordem de tabulação, landmarks, labels, nomes acessíveis, roles, estados ARIA e navegação por teclado. A meta é construir produtos que funcionem para mais pessoas e em mais contextos.",
            tools: [
              { name: "axe DevTools", why: "Auditoria automatizada de problemas comuns" },
              { name: "Lighthouse", why: "Checks rápidos de acessibilidade e performance" },
              { name: "Screen Readers", why: "Validação real com NVDA, VoiceOver ou TalkBack" },
              { name: "Keyboard Testing", why: "Garante operação sem mouse" },
            ],
            sites: [
              { label: "WCAG", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", type: "docs" },
              { label: "MDN Accessibility", url: "https://developer.mozilla.org/pt-BR/docs/Web/Accessibility", type: "docs" },
              { label: "WebAIM", url: "https://webaim.org/", type: "site" },
            ],
            resources: [
              { label: "Acessibilidade Toolkit", url: "https://acessibilida.de/", type: "site" },
              { label: "a11ycasts — Google Chrome Developers", url: "https://youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g", type: "youtube" },
              { label: "The A11Y Project", url: "https://www.a11yproject.com/", type: "site" },
            ]
          },
          {
            title: "Testes de Acessibilidade",
            tagline: "Automação ajuda, mas acessibilidade séria também precisa de uso real.",
            description: "Combine auditorias automáticas, testes de teclado, leitores de tela, snapshots de acessibilidade e revisão manual. Aprenda limitações das ferramentas: elas encontram muitos problemas, mas não validam toda a experiência.",
            tools: [
              { name: "jest-axe", why: "Checks a11y em testes unitários/componentes" },
              { name: "Playwright Axe", why: "Auditoria em fluxos reais no browser" },
              { name: "Storybook A11y", why: "Feedback de acessibilidade no catálogo de componentes" },
              { name: "Accessibility Tree", why: "Inspeção do que tecnologias assistivas recebem" },
            ],
            sites: [
              { label: "axe-core Docs", url: "https://github.com/dequelabs/axe-core", type: "docs" },
              { label: "Testing Library A11y", url: "https://testing-library.com/docs/queries/about/", type: "docs" },
              { label: "Deque University", url: "https://dequeuniversity.com/", type: "course" },
            ],
            resources: [
              { label: "Talita Pagani — acessibilidade web", url: "https://www.talitapagani.com/", type: "site" },
              { label: "Marcy Sutton — accessibility", url: "https://marcysutton.com/", type: "site" },
              { label: "Google — Learn Accessibility", url: "https://web.dev/learn/accessibility", type: "docs" },
            ]
          },
          {
            title: "Internacionalização & Conteúdo Inclusivo",
            tagline: "Produto global precisa lidar com idioma, formato, direção e contexto cultural.",
            description: "Aprenda i18n, l10n, pluralização, datas, moedas, números, fuso horário, RTL, truncamento e strings externas. Interface bem internacionalizada não quebra quando texto aumenta ou muda de direção.",
            tools: [
              { name: "Intl API", why: "Formatação nativa de datas, números e moedas" },
              { name: "i18next", why: "Ecossistema maduro de internacionalização JS" },
              { name: "FormatJS", why: "ICU messages e formatação robusta" },
              { name: "Lokalise / Crowdin", why: "Fluxo de tradução colaborativo" },
            ],
            sites: [
              { label: "MDN Intl", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl", type: "docs" },
              { label: "W3C Internationalization", url: "https://www.w3.org/International/", type: "docs" },
              { label: "i18next Docs", url: "https://www.i18next.com/", type: "docs" },
            ],
            resources: [
              { label: "Phrase — i18n guides", url: "https://phrase.com/blog/posts/", type: "site" },
              { label: "FormatJS Docs", url: "https://formatjs.github.io/docs/getting-started/installation/", type: "docs" },
              { label: "Shopify Polaris — content guidelines", url: "https://polaris.shopify.com/content", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "performance", label: "09 · Performance", color: "var(--color-a855f7)", dim: "var(--color-1a0d2e22)", icon: "gauge",
        topics: [
          {
            title: "Core Web Vitals & Performance Percebida",
            tagline: "Usuário não mede bundle; usuário sente espera, atraso e instabilidade.",
            description: "Entenda LCP, INP, CLS, TTFB, FCP, performance budget e métricas de campo vs laboratório. Otimize o que melhora experiência real: carregamento inicial, resposta a interação e estabilidade visual.",
            tools: [
              { name: "Lighthouse", why: "Auditoria local rápida com recomendações" },
              { name: "PageSpeed Insights", why: "Dados de laboratório e campo via CrUX" },
              { name: "WebPageTest", why: "Análise profunda de waterfall, filme e rede" },
              { name: "Chrome Performance Panel", why: "Profiling detalhado de main thread" },
            ],
            sites: [
              { label: "web.dev Core Web Vitals", url: "https://web.dev/articles/vitals", type: "docs" },
              { label: "PageSpeed Insights", url: "https://pagespeed.web.dev/", type: "practice" },
              { label: "WebPageTest", url: "https://www.webpagetest.org/", type: "practice" },
            ],
            resources: [
              { label: "Google — Learn Performance", url: "https://web.dev/learn/performance", type: "docs" },
              { label: "DebugBear — Web Performance", url: "https://www.debugbear.com/blog", type: "site" },
              { label: "GoogleChrome Developers — performance", url: "https://youtube.com/@ChromeDevs", type: "youtube" },
            ]
          },
          {
            title: "Imagens, Fontes & Assets",
            tagline: "A maior parte do peso de uma página costuma estar nos assets, não no HTML.",
            description: "Aprenda formatos modernos, responsive images, lazy loading, preload, font-display, subsetting, sprites, compressão e cache. Imagem e fonte mal configuradas derrubam LCP e causam layout shift.",
            tools: [
              { name: "AVIF / WebP", why: "Formatos modernos com ótima compressão" },
              { name: "srcset / sizes", why: "Imagens adequadas por viewport e densidade" },
              { name: "Squoosh", why: "Compressão visual e comparação de formatos" },
              { name: "Font Loading API", why: "Controle avançado de carregamento de fontes" },
            ],
            sites: [
              { label: "web.dev Images", url: "https://web.dev/learn/images", type: "docs" },
              { label: "Squoosh", url: "https://squoosh.app/", type: "practice" },
              { label: "MDN Responsive Images", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images#responsive_images", type: "docs" },
            ],
            resources: [
              { label: "Una Kravets — CSS and performance", url: "https://youtube.com/@una", type: "youtube" },
              { label: "Addy Osmani — image optimization", url: "https://addyosmani.com/blog/image-optimization/", type: "site" },
              { label: "Google Fonts — performance", url: "https://fonts.google.com/knowledge", type: "docs" },
            ]
          },
          {
            title: "Bundle, Renderização & Profiling",
            tagline: "Otimização séria começa medindo gargalo, não chutando solução.",
            description: "Analise bundle size, code splitting, lazy imports, memoização, virtualização, hydration cost, long tasks e re-renderizações. Saiba quando otimizar CSS, JS, rede, servidor ou arquitetura.",
            tools: [
              { name: "Bundle Analyzer", why: "Mostra dependências pesadas e duplicadas" },
              { name: "React Profiler", why: "Identifica renderizações caras em React" },
              { name: "Lighthouse CI", why: "Performance budget automatizado no pipeline" },
              { name: "Sentry Performance", why: "Monitoramento real de experiência do usuário" },
            ],
            sites: [
              { label: "React Profiler", url: "https://react.dev/reference/react/Profiler", type: "docs" },
              { label: "Lighthouse CI", url: "https://github.com/GoogleChrome/lighthouse-ci", type: "docs" },
              { label: "Bundlephobia", url: "https://bundlephobia.com/", type: "practice" },
            ],
            resources: [
              { label: "Vercel — performance guides", url: "https://vercel.com/guides", type: "docs" },
              { label: "Perf Planet", url: "https://calendar.perfplanet.com/", type: "site" },
              { label: "Patterns.dev — performance patterns", url: "https://www.patterns.dev/", type: "site" },
            ]
          },
        ]
      },
      {
        id: "testes", label: "10 · Testes Front-end", color: "var(--color-14b8a6)", dim: "var(--color-0d1f1e22)", icon: "test-tube-2",
        topics: [
          {
            title: "Testes Unitários & de Componentes",
            tagline: "Teste de UI bom valida comportamento observável, não implementação interna.",
            description: "Aprenda a testar renderização, eventos, estados, acessibilidade básica, hooks, stores e componentes isolados. Use queries próximas da experiência do usuário e evite testes frágeis acoplados à estrutura interna.",
            tools: [
              { name: "Vitest", why: "Runner moderno e rápido integrado ao Vite" },
              { name: "Jest", why: "Padrão clássico com ecossistema enorme" },
              { name: "Testing Library", why: "Testes orientados ao comportamento do usuário" },
              { name: "Happy DOM / jsdom", why: "Ambiente DOM para testes em Node" },
            ],
            sites: [
              { label: "Testing Library Docs", url: "https://testing-library.com/docs/", type: "docs" },
              { label: "Vitest Docs", url: "https://vitest.dev/", type: "docs" },
              { label: "Jest Docs", url: "https://jestjs.io/docs/getting-started", type: "docs" },
            ],
            resources: [
              { label: "Kent C. Dodds — Testing JavaScript", url: "https://testingjavascript.com/", type: "course" },
              { label: "Rocketseat — testes front-end", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Google Testing Blog", url: "https://testing.googleblog.com/", type: "site" },
            ]
          },
          {
            title: "E2E, Fluxos Críticos & Testes Visuais",
            tagline: "Fluxo que gera receita, login ou cadastro merece teste no browser real.",
            description: "Escreva testes ponta a ponta para caminhos críticos, autenticação, formulários, permissões, navegação e integrações. Combine screenshots, trace viewer, mocks de rede e testes visuais para capturar regressões de layout.",
            tools: [
              { name: "Playwright", why: "E2E moderno, rápido e multi-browser" },
              { name: "Cypress", why: "DX forte e muito usado em times front-end" },
              { name: "Chromatic", why: "Regressão visual integrada ao Storybook" },
              { name: "Percy", why: "Snapshots visuais em diferentes browsers" },
            ],
            sites: [
              { label: "Playwright Docs", url: "https://playwright.dev/docs/intro", type: "docs" },
              { label: "Cypress Docs", url: "https://docs.cypress.io/", type: "docs" },
              { label: "Chromatic Docs", url: "https://www.chromatic.com/docs/", type: "docs" },
            ],
            resources: [
              { label: "Agilizei — Cypress em português", url: "https://youtube.com/@agilizei", type: "youtube" },
              { label: "Playwright YouTube", url: "https://youtube.com/@Playwrightdev", type: "youtube" },
              { label: "Cypress Real World App", url: "https://github.com/cypress-io/cypress-realworld-app", type: "practice" },
            ]
          },
          {
            title: "Mocks, Contratos & Ambientes de Teste",
            tagline: "Front-end confiável precisa testar sem depender do backend estar perfeito hoje.",
            description: "Use mocks de rede, fixtures, factories, test data, contratos OpenAPI/GraphQL e ambientes previsíveis. A meta é isolar comportamento da UI sem mentir sobre contratos reais do backend.",
            tools: [
              { name: "MSW", why: "Mock Service Worker intercepta requests no browser e testes" },
              { name: "OpenAPI", why: "Contrato formal entre front-end e backend" },
              { name: "GraphQL Code Generator", why: "Tipos gerados a partir do schema GraphQL" },
              { name: "Pact", why: "Testes de contrato consumer-driven" },
            ],
            sites: [
              { label: "MSW Docs", url: "https://mswjs.io/docs/", type: "docs" },
              { label: "OpenAPI Spec", url: "https://spec.openapis.org/oas/", type: "docs" },
              { label: "Pact Docs", url: "https://docs.pact.io/", type: "docs" },
            ],
            resources: [
              { label: "Neryx — testes de contrato em português", url: "https://www.neryx.com.br/blog/testes-contrato-pact-dotnet-microsservicos/", type: "site" },
              { label: "GraphQL Code Generator Docs", url: "https://the-guild.dev/graphql/codegen", type: "docs" },
              { label: "Mock Service Worker examples", url: "https://github.com/mswjs/examples", type: "practice" },
            ]
          },
        ]
      },
      {
        id: "arquitetura-frontend", label: "11 · Arquitetura", color: "var(--color-84cc16)", dim: "var(--color-16200b22)", icon: "layers",
        topics: [
          {
            title: "Arquitetura de Componentes",
            tagline: "Componentes são fronteiras de responsabilidade, não apenas arquivos menores.",
            description: "Organize componentes por domínio, composição, container/presentational quando fizer sentido, compound components, headless components, controlled/uncontrolled e boundaries de erro. Arquitetura boa facilita mudança sem espalhar efeitos colaterais.",
            tools: [
              { name: "Storybook", why: "Documenta e isola componentes em estados variados" },
              { name: "Atomic Design", why: "Vocabulário útil para hierarquias de UI" },
              { name: "Feature Slicing", why: "Organização por domínio e caso de uso" },
              { name: "Error Boundaries", why: "Isolam falhas de renderização em React" },
            ],
            sites: [
              { label: "Patterns.dev", url: "https://www.patterns.dev/", type: "site" },
              { label: "Feature-Sliced Design", url: "https://feature-sliced.design/", type: "docs" },
              { label: "React Thinking", url: "https://react.dev/learn/thinking-in-react", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — arquitetura front-end", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Josh W Comeau — React architecture", url: "https://www.joshwcomeau.com/", type: "site" },
              { label: "Frontend Masters — Design Systems", url: "https://frontendmasters.com/courses/design-systems/", type: "course" },
            ]
          },
          {
            title: "Design Systems & Bibliotecas Internas",
            tagline: "Escala de front-end depende de consistência visual e contratos reutilizáveis.",
            description: "Aprenda tokens, theming, componentes base, documentação, versionamento, acessibilidade, changelog e governança. Um design system saudável acelera times sem congelar evolução de produto.",
            tools: [
              { name: "Style Dictionary", why: "Transforma tokens para múltiplas plataformas" },
              { name: "Storybook", why: "Catálogo e documentação viva" },
              { name: "Changesets", why: "Versionamento e changelog para pacotes" },
              { name: "Chromatic", why: "Revisão visual e regressão de componentes" },
            ],
            sites: [
              { label: "Design Systems Repo", url: "https://designsystemsrepo.com/", type: "site" },
              { label: "Storybook Design Systems", url: "https://storybook.js.org/tutorials/design-systems-for-developers/", type: "course" },
              { label: "Material Design", url: "https://m3.material.io/", type: "docs" },
            ],
            resources: [
              { label: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook", type: "docs" },
              { label: "Shopify Polaris", url: "https://polaris.shopify.com/", type: "docs" },
              { label: "Atlassian Design System", url: "https://atlassian.design/", type: "docs" },
            ]
          },
          {
            title: "Monorepos, Microfrontends & Escala",
            tagline: "Escalar times front-end exige fronteiras técnicas e sociais claras.",
            description: "Entenda monorepos, workspaces, package boundaries, module federation, microfrontends, ownership por domínio e custos operacionais. Use microfrontends quando a autonomia de times justificar a complexidade extra.",
            tools: [
              { name: "Turborepo", why: "Cache e pipelines para monorepos JavaScript" },
              { name: "Nx", why: "Monorepo robusto com graph, generators e cache" },
              { name: "Module Federation", why: "Composição de apps em runtime" },
              { name: "single-spa", why: "Orquestração de microfrontends" },
            ],
            sites: [
              { label: "Turborepo Docs", url: "https://turbo.build/repo/docs", type: "docs" },
              { label: "Nx Docs", url: "https://nx.dev/getting-started/intro", type: "docs" },
              { label: "Micro Frontends", url: "https://micro-frontends.org/", type: "site" },
            ],
            resources: [
              { label: "Full Cycle — microfrontends", url: "https://youtube.com/@FullCycle", type: "youtube" },
              { label: "Martin Fowler — Micro Frontends", url: "https://martinfowler.com/articles/micro-frontends.html", type: "site" },
              { label: "Zack Jackson — Module Federation", url: "https://module-federation.io/", type: "docs" },
            ]
          },
        ]
      },
      {
        id: "pwa-mobile", label: "12 · PWA & Mobile", color: "var(--color-22c55e)", dim: "var(--color-0d1f1222)", icon: "smartphone",
        topics: [
          {
            title: "Progressive Web Apps",
            tagline: "PWA aproxima Web de app instalado sem abandonar URLs e padrões abertos.",
            description: "Aprenda manifest, service worker, cache strategies, offline fallback, installability, push notifications e background sync. PWA boa melhora resiliência, velocidade e retenção quando faz sentido para o produto.",
            tools: [
              { name: "Web App Manifest", why: "Metadados para instalação e aparência do app" },
              { name: "Workbox", why: "Biblioteca madura para service workers e caching" },
              { name: "Service Worker", why: "Intermediário programável entre app, rede e cache" },
              { name: "Push API", why: "Notificações web quando há permissão e valor real" },
            ],
            sites: [
              { label: "web.dev PWA", url: "https://web.dev/learn/pwa", type: "docs" },
              { label: "MDN Service Worker", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API", type: "docs" },
              { label: "Workbox Docs", url: "https://developer.chrome.com/docs/workbox", type: "docs" },
            ],
            resources: [
              { label: "GoogleChrome Developers — PWA", url: "https://youtube.com/@ChromeDevs", type: "youtube" },
              { label: "PWA Builder", url: "https://www.pwabuilder.com/", type: "practice" },
              { label: "MDN PWA Guides", url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps", type: "docs" },
            ]
          },
          {
            title: "Mobile Web, Touch & Device APIs",
            tagline: "Mobile não é desktop pequeno; entrada, rede, viewport e contexto mudam tudo.",
            description: "Estude viewport, safe areas, touch targets, gestures, virtual keyboard, orientation, câmera, geolocalização e permissões. Interfaces móveis precisam ser confortáveis, rápidas e tolerantes a rede instável.",
            tools: [
              { name: "Responsive Mode", why: "Simula viewports e densidades comuns" },
              { name: "Pointer Events", why: "Modelo unificado para mouse, touch e pen" },
              { name: "Visual Viewport API", why: "Lida melhor com teclado virtual e viewport móvel" },
              { name: "Device Emulation", why: "Testes práticos em DevTools e dispositivos reais" },
            ],
            sites: [
              { label: "MDN Pointer Events", url: "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events", type: "docs" },
              { label: "web.dev Mobile", url: "https://web.dev/learn/design/", type: "docs" },
              { label: "Apple Safari Web Content Guide", url: "https://developer.apple.com/safari/resources/", type: "docs" },
            ],
            resources: [
              { label: "Google — Mobile UX", url: "https://www.thinkwithgoogle.com/intl/pt-br/", type: "site" },
              { label: "Smashing Magazine — mobile", url: "https://www.smashingmagazine.com/category/mobile", type: "site" },
              { label: "Material Design — mobile patterns", url: "https://m3.material.io/", type: "docs" },
            ]
          },
          {
            title: "React Native, Expo & Apps Híbridos",
            tagline: "Quando Web não basta, reaproveitar mentalidade front-end no mobile pode acelerar produto.",
            description: "Conheça React Native, Expo, navegação, componentes nativos, bridge, permissões, builds e publicação. Não é obrigatório para todo front-end, mas abre portas para times mobile e produtos multiplataforma.",
            tools: [
              { name: "React Native", why: "UI mobile nativa com modelo React" },
              { name: "Expo", why: "Toolchain produtiva para desenvolvimento e deploy mobile" },
              { name: "React Navigation", why: "Roteamento e navegação para apps React Native" },
              { name: "EAS Build", why: "Build e distribuição gerenciados pela Expo" },
            ],
            sites: [
              { label: "React Native Docs", url: "https://reactnative.dev/docs/getting-started", type: "docs" },
              { label: "Expo Docs", url: "https://docs.expo.dev/", type: "docs" },
              { label: "React Navigation Docs", url: "https://reactnavigation.org/docs/getting-started", type: "docs" },
            ],
            resources: [
              { label: "Rocketseat — React Native", url: "https://youtube.com/@rocketseat", type: "youtube" },
              { label: "Expo YouTube", url: "https://youtube.com/@ExpoDevelopers", type: "youtube" },
              { label: "The React Native Show", url: "https://www.callstack.com/podcast", type: "site" },
            ]
          },
        ]
      },
      {
        id: "projetos-carreira", label: "13 · Projetos & Carreira", color: "var(--color-06b6d4)", dim: "var(--color-08202a22)", icon: "folder-kanban",
        topics: [
          {
            title: "Projetos Práticos por Fase",
            tagline: "Front-end se aprende construindo interfaces reais, quebrando layout e corrigindo detalhe.",
            description: "Transforme cada fase em entrega: landing responsiva, dashboard, formulário complexo, app com API, design system pequeno, PWA e projeto final com testes. Portfólio bom mostra processo, trade-offs, acessibilidade e performance.",
            tools: [
              { name: "Frontend Mentor", why: "Desafios reais de layout e responsividade" },
              { name: "CodePen / StackBlitz", why: "Protótipos rápidos e compartilháveis" },
              { name: "GitHub Pages / Vercel", why: "Deploy simples para portfólio front-end" },
              { name: "Lighthouse Reports", why: "Evidência objetiva de performance e qualidade" },
            ],
            sites: [
              { label: "Frontend Mentor", url: "https://www.frontendmentor.io/", type: "practice" },
              { label: "Codewell", url: "https://www.codewell.cc/", type: "practice" },
              { label: "GreatFrontEnd", url: "https://www.greatfrontend.com/", type: "practice" },
            ],
            resources: [
              { label: "Rafaella Ballerini — portfólio", url: "https://youtube.com/@rafaellaballerini", type: "youtube" },
              { label: "The Odin Project — JavaScript Path", url: "https://www.theodinproject.com/paths/full-stack-javascript", type: "course" },
              { label: "freeCodeCamp — Front End Libraries", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/", type: "course" },
            ]
          },
          {
            title: "Documentação, README & Storytelling Técnico",
            tagline: "Seu projeto precisa explicar problema, decisão e resultado sem você estar ao lado.",
            description: "Escreva README com objetivo, stack, setup, scripts, decisões, screenshots, métricas e próximos passos. Documente componentes, fluxos e limitações. Recrutador e tech lead precisam entender rapidamente a qualidade do trabalho.",
            tools: [
              { name: "Markdown", why: "Formato padrão para documentação em repositórios" },
              { name: "Storybook Docs", why: "Documenta componentes interativos" },
              { name: "Loom / GIF demos", why: "Mostra fluxo sem exigir setup local" },
              { name: "ADR", why: "Registra decisões técnicas relevantes" },
            ],
            sites: [
              { label: "GitHub Profile README", url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile", type: "docs" },
              { label: "ADR GitHub", url: "https://adr.github.io/", type: "docs" },
              { label: "Google Technical Writing", url: "https://developers.google.com/tech-writing", type: "course" },
            ],
            resources: [
              { label: "Código Fonte TV — carreira dev", url: "https://youtube.com/@codigofontetv", type: "youtube" },
              { label: "Filipe Deschamps — carreira e projetos", url: "https://youtube.com/@FilipeDeschamps", type: "youtube" },
              { label: "GitHub Skills", url: "https://skills.github.com/", type: "practice" },
            ]
          },
          {
            title: "Entrevistas, Desafios & Mercado",
            tagline: "Front-end em entrevista mistura base web, produto, arquitetura e cuidado visual.",
            description: "Prepare-se para desafios de HTML/CSS/JS, implementação de componentes, debugging, acessibilidade, performance, consumo de API e system design front-end. Pratique explicar decisões com clareza e mostrar trade-offs.",
            tools: [
              { name: "LeetCode JS", why: "Treino de lógica quando a vaga cobra algoritmos" },
              { name: "GreatFrontEnd", why: "Desafios focados em front-end interviews" },
              { name: "Pramp / Interviewing.io", why: "Simulações de entrevista técnica" },
              { name: "Portfolio Review", why: "Feedback real sobre narrativa e execução" },
            ],
            sites: [
              { label: "GreatFrontEnd", url: "https://www.greatfrontend.com/", type: "practice" },
              { label: "Front End Interview Handbook", url: "https://www.frontendinterviewhandbook.com/", type: "docs" },
              { label: "roadmap.sh Frontend", url: "https://roadmap.sh/frontend", type: "site" },
            ],
            resources: [
              { label: "Front End Interview Handbook", url: "https://www.frontendinterviewhandbook.com/", type: "docs" },
              { label: "JavaScript Questions", url: "https://github.com/lydiahallie/javascript-questions", type: "practice" },
              { label: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/", type: "docs" },
            ]
          },
        ]
      },
    ];

    
    const securityPhases = [
      {
        id: "fundamentos-seg", label: "01 · Fundamentos", color: "var(--color-dc2626)", dim: "var(--color-1f080822)", icon: "shield",
        topics: [
          {
            title: "Redes e Protocolos", tagline: "Entenda a base da comunicação.", description: "TCP/IP, UDP, DNS, HTTP/HTTPS.", tools: [], sites: [], resources: []
          },
          {
            title: "Criptografia Básica", tagline: "Proteção de dados em repouso e trânsito.", description: "Hashes, simétrica, assimétrica, TLS.", tools: [], sites: [], resources: []
          }
        ]
      },
      {
        id: "owasp-seg", label: "02 · OWASP Top 10", color: "var(--color-f97316)", dim: "var(--color-1c110822)", icon: "alert-triangle",
        topics: [
          {
            title: "Injeções e XSS", tagline: "As falhas mais comuns.", description: "SQLi, NoSQLi, Cross-Site Scripting.", tools: [], sites: [], resources: []
          }
        ]
      }
    ];

    const biPhases = [
      {
        id: "fundamentos-bi", label: "01 · Fundamentos de Dados", color: "var(--color-f59e0b)", dim: "var(--color-1c141022)", icon: "bar-chart-3",
        topics: [
          {
            title: "Modelagem Dimensional", tagline: "Star schema e Snowflake.", description: "Fatos, dimensões, granularidade.", tools: [], sites: [], resources: []
          },
          {
            title: "ETL / ELT", tagline: "Movimentação de dados.", description: "Extração, transformação e carga.", tools: [], sites: [], resources: []
          }
        ]
      }
    ];

    const startupPhases = [
      {
        id: "fundamentos-startup", label: "01 · Validação", color: "var(--color-a855f7)", dim: "var(--color-1a0d2e22)", icon: "rocket",
        topics: [
          {
            title: "Lean Startup", tagline: "Construir, medir, aprender.", description: "MVP, pivotar, product-market fit.", tools: [], sites: [], resources: []
          }
        ]
      }
    ];

    const softSkillsPhases = [
      {
        id: "fundamentos-soft", label: "01 · Comunicação", color: "var(--color-22c55e)", dim: "var(--color-0d1f1222)", icon: "messages-square",
        topics: [
          {
            title: "Comunicação Assertiva", tagline: "Falar e ser entendido.", description: "Clareza, empatia, escuta ativa.", tools: [], sites: [], resources: []
          }
        ]
      }
    ];

    const extraRoadmaps = {
      "security": { id: "security", label: "Segurança", title: "Cyber Security", eyebrow: "Roadmap Segurança", description: "Proteja aplicações e infraestrutura.", icon: "shield", color: "var(--color-dc2626)", phases: securityPhases },
      "bi": { id: "bi", label: "BI", title: "Business Intelligence", eyebrow: "Roadmap BI", description: "Transforme dados em decisões.", icon: "bar-chart-3", color: "var(--color-f59e0b)", phases: biPhases },
      "startup": { id: "startup", label: "Startup e marketing", title: "Startup & Marketing", eyebrow: "Roadmap Startup", description: "Crie e escale negócios.", icon: "rocket", color: "var(--color-a855f7)", phases: startupPhases },
      "soft-skills": { id: "soft-skills", label: "Soft Skills", title: "Soft Skills", eyebrow: "Roadmap Soft Skills", description: "Habilidades comportamentais e comunicação.", icon: "messages-square", color: "var(--color-22c55e)", phases: softSkillsPhases }
    };

    const roadmaps = {
      backend: {
        id: "backend",
        label: "Back-end",
        title: "Backend Developer",
        eyebrow: "Roadmap Back-end",
        description: "Do zero à arquitetura de sistemas que as maiores empresas do mundo usam — com trilhas de estudo reais.",
        icon: "server",
        color: "var(--color-6366f1)",
        phases: backendPhases,
      },
      frontend: {
        id: "frontend",
        label: "Front-end",
        title: "Frontend Developer",
        eyebrow: "Roadmap Front-end",
        description: "Da Web Platform a interfaces escaláveis, acessíveis e performáticas — com trilhas reais de estudo.",
        icon: "monitor-smartphone",
        color: "var(--color-06b6d4)",
        phases: frontendPhases,
      },
    };

    const moduleTabs = [
      { id: "backend", label: "Back-end", icon: "server", color: "var(--color-6366f1)", type: "roadmap" },
      { id: "frontend", label: "Front-end", icon: "monitor-smartphone", color: "var(--color-06b6d4)", type: "roadmap" },
      { id: "routes", label: "Rotas", icon: "map", color: "var(--color-22d3ee)", type: "view" },
      { id: "security", label: "Segurança", icon: "shield", color: "var(--color-ef4444)", type: "empty" },
      { id: "bi", label: "BI", icon: "bar-chart-3", color: "var(--color-f59e0b)", type: "empty" },
      { id: "startup", label: "Startup e marketing", icon: "rocket", color: "var(--color-a855f7)", type: "empty" },
      { id: "soft-skills", label: "Soft Skills", icon: "messages-square", color: "var(--color-22c55e)", type: "empty" },
    ];

    const sideNavItems = [
      { label: "Busca de vagas", target: "routes", icon: "search" },
      { label: "Trilha", target: "trail", icon: "route", hasSubmenu: true },
      { label: "Metodologias de estudo", target: "methods", icon: "graduation-cap" },
      { label: "Central de Ações", target: "feedback", icon: "refresh-cw" },
    ];

    const trailSubItems = [
      { id: "backend",    label: "Back-end",           icon: "server",           type: "roadmap" },
      { id: "frontend",   label: "Front-end",          icon: "monitor-smartphone",type: "roadmap" },
      { id: "security",   label: "Segurança",          icon: "shield",           type: "trail" },
      { id: "bi",         label: "BI",                 icon: "bar-chart-3",      type: "trail" },
      { id: "startup",    label: "Startup e marketing",icon: "rocket",           type: "trail" },
      { id: "soft-skills",label: "Soft Skills",        icon: "messages-square",  type: "trail" },
    ];

    const jobRoles = [
      {
        scope: "backend",
        level: "junior",
        title: "[Tech] Engenharia de Software Junior - .NET / C#",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9898/tech-engenharia-de-software-junior-net-c",
        competencies: ["C#", ".NET", "SQL", "APIs REST", "testes unitários", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "ASP.NET MVC", "Scrum", "Kanban", "TDD", "BDD", "DDD", "orientação a objetos"]
      },
      {
        scope: "backend",
        level: "junior",
        title: "[Tech] Engenharia de Software Fullstack Junior - .NET / C# / Angular",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/7869/tech-engenharia-de-software-fullstack-junior-net-c-angular",
        competencies: ["C#", ".NET", "Angular", "Git", "Gitflow", "APIs REST", "SAST", "Sonar", "PostgreSQL", "Azure DevOps", "CI/CD", "RabbitMQ", "Redis", "Clean Code", "SOLID", "DDD", "TDD", "Docker", "Kubernetes", "Cloud Native"]
      },
      {
        scope: "backend",
        level: "pleno",
        title: "[Tech] Engenharia de Software Backend Pleno - .NET / C#",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/10136/tech-engenharia-de-software-backend-pleno-net-c",
        competencies: ["C#", ".NET", "Angular", "SQL", "Oracle", "arquitetura de software", "testes unitários", "boas práticas", "métodos ágeis", "performance", "Backoffice", "ERP"]
      },
      {
        scope: "backend",
        level: "pleno",
        title: "[Tech] Engenharia de Software Fullstack Pleno - Protheus",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9353/tech-engenharia-de-software-fullstack-pleno-protheus",
        competencies: ["ADVPL", "TLPP", "Protheus", "MVC", "REST", "SOAP", "WebServices", "SQL", "Git", "PO-UI", "SmartView", "TReport", "Schedule", "testes unitários", "documentação"]
      },
      {
        scope: "backend",
        level: "pleno",
        title: "[Tech] Engenharia de Software Backend Pleno - ADVPL",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9276/tech-engenharia-de-software-backend-pleno-advpl",
        competencies: ["ADVPL", "Protheus", "desenvolvimento de software", "front-end", "back-end", "testes", "metodologia ágil", "documentação", "ERP"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "[Tech] Engenharia de Software Backend Sênior - Java",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/8770/tech-engenharia-de-software-backend-senior-java",
        competencies: ["Java", "Spring Boot", "Spring Data", "APIs REST", "microsserviços", "Kafka", "RabbitMQ", "TDD", "BDD", "testes de integração", "Docker", "Kubernetes", "MongoDB", "Redis", "alta disponibilidade"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "[Tech] Especialista em Desenvolvimento - .Net",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/8934/tech-especialista-em-desenvolvimento-net",
        competencies: [".NET", "C#", "arquitetura", "Git", "DevOps", "Cloud", "Azure", "APIs", "SQL", "boas práticas", "liderança técnica"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "[Tech] Engenharia de Software Backend Sênior - ADVPL",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/8814/tech-engenharia-de-software-backend-senior-advpl",
        competencies: ["ADVPL", "Protheus", "IA", "requisitos", "software", "testes", "documentação", "métodos ágeis", "backend"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "Especialista ADVPL Backend",
        url: "https://br.linkedin.com/jobs/view/especialista-advpl-backend-at-totvs-4355327928",
        competencies: ["ADVPL", "TLPP", "Protheus", "MVC", "API REST", "SOAP", "jobs", "schedules", "banco de dados", "testes unitários", "Git", "Angular", "Node.js", "JavaScript", "TypeScript"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "Tech Lead de Engenharia de Software - Protheus",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9578/tech-lead-de-engenharia-de-software-protheus",
        competencies: ["Protheus", "liderança técnica", "arquitetura", "desenvolvimento", "code review", "métodos ágeis", "qualidade", "mentoria"]
      },
      {
        scope: "cloud",
        level: "junior",
        title: "Pessoa Técnica de Serviços Cloud (Protheus)",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/7941/pessoa-tecnica-de-servicos-cloud-protheus",
        competencies: ["Cloud TOTVS", "Protheus", "infraestrutura", "SLA", "NPS", "atendimento", "tickets", "governança", "segurança", "processos"]
      },
      {
        scope: "cloud",
        level: "junior",
        title: "Analista de Serviços Cloud Júnior (Protheus)",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/7927/analista-de-servicos-cloud-junior-protheus",
        competencies: ["Cloud TOTVS", "Protheus", "TSS", "TAF", "infraestrutura", "SLA", "logs", "incidentes", "serviços fiscais", "rastreabilidade"]
      },
      {
        scope: "cloud",
        level: "pleno",
        title: "[Infra] Analista de Cloud DevOps Pleno - Noturno",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9641/infra-analista-de-cloud-devops-pleno-noturno",
        competencies: ["Cloud DevOps", "Protheus", "RM", "Fluig", "monitoramento", "incidentes", "infraestrutura", "Linux", "redes", "cloud"]
      },
      {
        scope: "cloud",
        level: "senior",
        title: "[Tech] Especialista de Sustentação Cloud | Protheus",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9387/tech-especialista-de-sustentacao-cloud-protheus",
        competencies: ["Protheus", "Cloud TOTVS", "T-Cloud", "Schedule", "REST", "SOAP", "TSS", "logs", "logprofiler", "dbtrace", "Linux", "SQL Server", "Oracle", "PostgreSQL", "TCPing", "WinMTR", "ITIL", "SLA", "SLO", "Grafana", "ADVPL", "Python"]
      },
      {
        scope: "cloud",
        level: "senior",
        title: "[Infra] Engenharia de DevOps Sênior | Protheus | Cloud",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9157/infra-engenharia-de-devops-senior-protheus-cloud-remoto-afirmativa-para-pessoas-com-deficiencia",
        competencies: ["DevOps", "Protheus", "Cloud", "CI/CD", "Python", "PowerShell", "AWS", "Azure", "GCP", "Ansible", "Chef", "Puppet", "Git", "Serverless", "SonarQube", "Checkmarx", "TSS", "TAF", "License Server"]
      },
      {
        scope: "cloud",
        level: "senior",
        title: "[Tech] Engenharia de Software Sênior - DevOps | Cloud",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/8567/tech-engenharia-de-software-senior-devops-cloud",
        competencies: ["DevOps", "Cloud", "Protheus", "Fluig", "capacitação", "boas práticas", "maturidade DevOps", "documentação", "automação", "CI/CD"]
      },
      {
        scope: "cloud",
        level: "senior",
        title: "[DevOps Cloud] Analista Sênior de Cloud DevOps",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9646/devops-cloud-analista-senior-de-cloud-devops",
        competencies: [".NET Core", "C#", "bancos relacionais", "arquitetura", "cloud", "containers", "CI/CD", "Windows", "Linux", "redes", "segurança", "troubleshooting", "rastreabilidade", "LGPD", "UML", "C4"]
      },
      {
        scope: "cloud",
        level: "senior",
        title: "[Cloud] Analista de Desenvolvimento Sênior - Python | Cloud | Serverless | AWS",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9647/cloud-analista-de-desenvolvimento-senior-python-cloud-serverless-aws-remoto",
        competencies: ["Python", "Cloud", "Serverless", "AWS", "Lambda", "APIs", "observabilidade", "automação", "integrações"]
      },
      {
        scope: "backend",
        level: "senior",
        title: "[Pré-vendas] Arquiteto de Integração Sênior / Sales Engineer - TOTVS iPaaS",
        url: "https://atracaodetalentos.totvs.app/vempratotvs/9771/pre-vendas-arquiteto-de-integracao-senior-sales-engineer-totvs-ipaas",
        competencies: ["REST", "SOAP", "JSON", "XML", "APIs", "Webhooks", "Pub/Sub", "event-driven", "OAuth2", "mTLS", "observabilidade", "rastreabilidade", "LGPD", "UML", "C4"]
      },
      {
        scope: "backend",
        level: "estagiario",
        title: "Nenhuma vaga de estágio mapeada nesta varredura",
        url: "https://atracaodetalentos.totvs.app/vempratotvs",
        competencies: ["base de programação", "Git", "SQL", "lógica", "aprendizado"]
      },
      {
        scope: "cloud",
        level: "estagiario",
        title: "Nenhuma vaga de estágio Cloud mapeada nesta varredura",
        url: "https://atracaodetalentos.totvs.app/vempratotvs",
        competencies: ["Linux básico", "redes", "cloud básico", "atendimento", "tickets"]
      },
    ];

    // 2. GERENCIAMENTO DE ESTADO
    let activeRoadmap = "backend";
    let activePhase = 0;
    let expandedTopic = null;
    let activeView = "roadmap";
    let sideNavVisible = true;
    let trailSubmenuOpen = false;
    let newsItems = []; // array de {title, summary, imageUrl, link}
    let activeNewsModal = null;

    // Funções globais para eventos de clique
    window.setActiveRoadmap = function(roadmapId) {
      activeRoadmap = roadmapId;
      activeView = "roadmap";
      activePhase = 0;
      expandedTopic = null;
      render();
    };

    window.setActivePhase = function(index) {
      activeView = "roadmap";
      activePhase = index;
      expandedTopic = null;
      render();
    };

    window.setActiveView = function(view) {
      activeView = view;
      expandedTopic = null;
      render();
    };

    window.setModule = function(moduleId, moduleType) {
      if (moduleType === "roadmap") {
        setActiveRoadmap(moduleId);
        return;
      }

      activeView = moduleId;
      expandedTopic = null;
      render();
    };

    
    let theme = 'dark';
    window.toggleTheme = function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      if (theme === 'light') {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
      render();
    };

    window.toggleSideNav = function() { sideNavVisible = !sideNavVisible; render(); }; window.toggleTrailSubmenu = function() { trailSubmenuOpen = !trailSubmenuOpen; render(); }; window.selectTrailItem = function(id, type) { if (type === "roadmap") { setActiveRoadmap(id); return; } if (type === "view") { setModule(id, "view"); return; } activeView = id; expandedTopic = null; render(); }; window.openNewsModal = function(idx) { activeNewsModal = idx; render(); }; window.closeNewsModal = function() { activeNewsModal = null; render(); }; window.toggleTopic = function(index) {
      expandedTopic = expandedTopic === index ? null : index;
      render();
    };

    // 3. LÓGICA DE RENDERIZAÇÃO PRINCIPAL
    function normalizeText(value) {
      return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9+#.]+/g, " ")
        .trim();
    }

    function getTopicJobMatches(topic) {
      const toolsText = topic.tools.map(t => `${t.name} ${t.why}`).join(" ");
      const topicText = normalizeText(`${topic.title} ${topic.tagline} ${topic.description} ${toolsText}`);

      return jobRoles
        .map(job => {
          const matchedCompetencies = job.competencies.filter(competency => {
            const normalizedCompetency = normalizeText(competency);
            return normalizedCompetency && topicText.includes(normalizedCompetency);
          });

          return { ...job, matchedCompetencies };
        })
        .filter(job => job.matchedCompetencies.length > 0 && !job.title.startsWith("Nenhuma vaga"))
        .sort((a, b) => b.matchedCompetencies.length - a.matchedCompetencies.length)
        .slice(0, 2);
    }

    function render() {
      const roadmap = roadmaps[activeRoadmap];
      const phases = roadmap.phases;
      const phase = phases[activePhase];
      const app = document.getElementById('app');
      const totalTopics = phases.reduce((total, currentPhase) => total + currentPhase.topics.length, 0);
      const totalResources = phases.reduce((phaseTotal, currentPhase) => {
        return phaseTotal + currentPhase.topics.reduce((topicTotal, topic) => {
          return topicTotal + (topic.sites ? topic.sites.length : 0) + (topic.resources ? topic.resources.length : 0);
        }, 0);
      }, 0);

      // Geração da Navegação (Tabs)
      const scopeLabels = { backend: "Backend", cloud: "Cloud" };
      const levelLabels = { junior: "Júnior", pleno: "Pleno", senior: "Sênior", estagiario: "Estagiário" };
      const activeModuleId = activeView === "roadmap" ? activeRoadmap : activeView;
      const activeModule = moduleTabs.find(item => item.id === activeModuleId) || moduleTabs[0];
      const tabsHTML = phases.map((p, i) => {
        const active = activeView === "roadmap" && i === activePhase;
        return `
          <button class="phase-tab" onclick="setActivePhase(${i})"
            style="display: flex; align-items: center; gap: 7px; padding: 12px 14px;
                   background: transparent; border: none; cursor: pointer;
                   border-bottom: 2px solid ${active ? p.color : 'transparent'};
                   color: ${active ? p.color : 'var(--color-475569)'};
                   font-size: 12px; font-weight: ${active ? 600 : 400};
                   white-space: nowrap; margin-bottom: -1px;">
            <i data-lucide="${p.icon}" class="ui-style-1"></i>
            ${p.label}
          </button>
        `;
      }).join('');

      // Geração dos Tópicos e Acordeões
      const topicsHTML = phase.topics.map((topic, ti) => {
        const isOpen = expandedTopic === ti;
        let expandedContentHTML = '';

        if (isOpen) {
          const jobMatches = getTopicJobMatches(topic);
          const jobMatchesHTML = jobMatches.length > 0 ? `
            <div class="job-matches-container">
              <div class="job-matches-header">
                <i data-lucide="briefcase-business" class="ui-style-2"></i>
                <span class="job-matches-title">
                  Vagas pediriam isso (total ${jobMatches.length})
                </span>
              </div>
              <div class="ui-style-3">
                ${jobMatches.map(job => `
                  <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="resource-link job-match-link">
                    <span class="job-match-badge">
                      ${scopeLabels[job.scope]} · ${levelLabels[job.level]}
                    </span>
                    <span class="ui-style-4">
                      <strong class="job-title-strong">${job.title}</strong>
                      <span class="job-competencies">Competências: ${job.matchedCompetencies.join(", ")}</span>
                    </span>
                    <i data-lucide="external-link" class="ui-style-5"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : '';

          // Renderiza Ferramentas
          const toolsHTML = topic.tools.map(t => `
            <div class="tool-card">
              <div class="tool-name">
                ${t.name}
              </div>
              <div class="tool-desc">
                ${t.why}
              </div>
            </div>
          `).join('');

          // Renderiza Sites de Prática
          let sitesHTML = '';
          if (topic.sites && topic.sites.length > 0) {
            const sitesItems = topic.sites.map(s => {
              const st = typeStyle[s.type] || typeStyle.site;
              return `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="site-link"
                   style="display: flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 6px;
                          background: ${st.bg}; border: 1px solid ${st.border}; color: ${st.text};
                          font-size: 12px; font-weight: 500;">
                  <span style="font-size: 9px; font-weight: 700; letter-spacing: 0.5px; padding: 1px 4px; border-radius: 3px;
                               background: ${st.border}66; color: ${st.text}; text-transform: uppercase;">
                    ${st.label}
                  </span>
                  ${s.label}
                  <i data-lucide="external-link" class="ui-style-6"></i>
                </a>
              `;
            }).join('');

            sitesHTML = `
              <div class="ui-style-7">
                <div class="job-matches-header">
                  <i data-lucide="star" class="ui-style-8"></i>
                  <span class="ui-style-9">
                    Sites de Prática & Referência
                  </span>
                </div>
                <div class="ui-style-10">
                  ${sitesItems}
                </div>
              </div>
            `;
          }

          // Renderiza Trilhas/Cursos
          let resourcesHTML = '';
          if (topic.resources && topic.resources.length > 0) {
            const resourceItems = topic.resources.map(r => {
              const st = typeStyle[r.type] || typeStyle.site;
              return `
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-link"
                   style="display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 7px;
                          background: var(--color-111122); border: 1px solid ${st.border}44; color: var(--color-e2e8f0);
                          font-size: 13px; font-weight: 400;">
                  <span style="font-size: 9px; font-weight: 700; letter-spacing: 0.5px; padding: 2px 6px; border-radius: 4px;
                               flex-shrink: 0; background: ${st.bg}; color: ${st.text}; text-transform: uppercase;
                               border: 1px solid ${st.border};">
                    ${st.label}
                  </span>
                  <span class="ui-style-11">${r.label}</span>
                  <i data-lucide="external-link" class="ui-style-12"></i>
                </a>
              `;
            }).join('');

            resourcesHTML = `
              <div>
                <div class="job-matches-header">
                  <i data-lucide="book-open" class="ui-style-13"></i>
                  <span class="ui-style-14">
                    Trilha de Estudo
                  </span>
                </div>
                <div class="ui-style-15">
                  ${resourceItems}
                </div>
              </div>
            `;
          }

          expandedContentHTML = `
            <div style="border-top: 1px solid ${phase.color}22; padding: 1.25rem;">
              <p class="job-competencies">
                ${topic.description}
              </p>
              ${jobMatchesHTML}
              <div class="ui-style-7">
                <div class="job-matches-header">
                  <i data-lucide="server" style="width: 13px; height: 13px; color: ${phase.color};"></i>
                  <span style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: ${phase.color}; text-transform: uppercase;">
                    Linguagens & Ferramentas
                  </span>
                </div>
                <div class="ui-style-17">
                  ${toolsHTML}
                </div>
              </div>
              ${sitesHTML}
              ${resourcesHTML}
            </div>
          `;
        }

        return `
          <div style="border-radius: 10px; overflow: hidden;
                      border: 1px solid ${isOpen ? phase.color + '55' : 'var(--color-1e1e3a)'};
                      transition: border-color 0.2s; background: var(--color-0d0d1a);">
            <button onclick="toggleTopic(${ti})"
              class="ui-style-18">
              <div class="ui-style-19">
                <div class="ui-style-20">
                  <div style="width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; background: ${phase.color};
                              box-shadow: ${isOpen ? '0 0 8px ' + phase.color : 'none'}; transition: box-shadow 0.2s;"></div>
                  <span class="ui-style-21">
                    ${topic.title}
                  </span>
                </div>
                <p class="ui-style-22">
                  ${topic.tagline}
                </p>
              </div>
              <div class="ui-style-23">
                <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="ui-style-24"></i>
              </div>
            </button>
            ${expandedContentHTML}
          </div>
        `;
      }).join('');

      // Indicadores de progresso do footer
      const dotsHTML = phases.map((p, i) => `
        <div onclick="setActivePhase(${i})"
          style="width: ${i === activePhase ? 18 : 6}px; height: 6px; border-radius: 3px;
                 background: ${i === activePhase ? phase.color : 'var(--color-1e1e3a)'};
                 transition: all 0.3s; cursor: pointer;"></div>
      `).join('');

      // Renderização do HTML final no container #app
      
      let trailRoadmapHTML = "";
      if (["security", "bi", "startup", "soft-skills"].includes(activeView)) {
        const tr = extraRoadmaps[activeView];
        const trPhases = tr.phases;
        const currentPhaseIdx = Math.min(activePhase, trPhases.length - 1);
        const trPhase = trPhases[currentPhaseIdx];
        
        const trTabsHTML = trPhases.map((p, i) => {
          const active = i === currentPhaseIdx;
          return `<button class="phase-tab" onclick="setActivePhase(${i})"
            style="display: flex; align-items: center; gap: 7px; padding: 12px 14px;
                   background: transparent; border: none; cursor: pointer;
                   border-bottom: 2px solid ${active ? p.color : 'transparent'};
                   color: ${active ? p.color : 'var(--color-475569)'};
                   font-size: 12px; font-weight: ${active ? 600 : 400};
                   white-space: nowrap; margin-bottom: -1px;">
            <i data-lucide="${p.icon}" class="ui-style-1"></i>
            ${p.label}
          </button>`;
        }).join('');

        const trTopicsHTML = trPhase.topics.map((topic, ti) => {
          const isOpen = expandedTopic === ti;
          let toolsHTML = topic.tools && topic.tools.length ? topic.tools.map(t => `<div class="tool-card"><div class="tool-name">${t.name}</div><div class="tool-desc">${t.why||''}</div></div>`).join('') : '';
          
          let expandedContentHTML = isOpen ? `
            <div style="border-top: 1px solid ${trPhase.color}22; padding: 1.25rem;">
              <p class="job-competencies">${topic.description}</p>
              ${toolsHTML ? `<div class="ui-style-7"><div class="job-matches-header"><i data-lucide="server" style="width: 13px; height: 13px; color: ${trPhase.color};"></i><span style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: ${trPhase.color}; text-transform: uppercase;">Linguagens & Ferramentas</span></div><div class="ui-style-17">${toolsHTML}</div></div>` : ''}
            </div>` : '';

          return `<div style="border-radius: 10px; overflow: hidden; border: 1px solid ${isOpen ? trPhase.color + '55' : 'var(--color-1e1e3a)'}; transition: border-color 0.2s; background: var(--color-0d0d1a);">
            <button onclick="toggleTopic(${ti})" class="ui-style-28">
              <div class="ui-style-19">
                <div class="ui-style-20">
                  <div style="width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; background: ${trPhase.color}; box-shadow: ${isOpen ? '0 0 8px ' + trPhase.color : 'none'}; transition: box-shadow 0.2s;"></div>
                  <span class="ui-style-21">${topic.title}</span>
                </div>
                <p class="ui-style-22">${topic.tagline}</p>
              </div>
              <div class="ui-style-23"><i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="ui-style-24"></i></div>
            </button>
            ${expandedContentHTML}
          </div>`;
        }).join('');

        const trDotsHTML = trPhases.map((p, i) => `<div onclick="setActivePhase(${i})" style="width: ${i === currentPhaseIdx ? 18 : 6}px; height: 6px; border-radius: 3px; background: ${i === currentPhaseIdx ? trPhase.color : 'var(--color-1e1e3a)'}; transition: all 0.3s; cursor: pointer;"></div>`).join('');

        trailRoadmapHTML = `
        <div class="ui-style-35">
          <div class="ui-style-36">
            <div class="ui-style-37">
              <i data-lucide="${tr.icon}" style="width: 22px; height: 22px; color: ${tr.color};"></i>
              <span style="font-size: 12px; font-weight: 600; letter-spacing: 3px; color: ${tr.color}; text-transform: uppercase;">${tr.eyebrow}</span>
            </div>
            <h1 class="ui-style-38">${tr.title}</h1>
            <p class="ui-style-39">${tr.description}</p>
          </div>
        </div>
        <div class="ui-style-40 nav-scroll">
          <div class="ui-style-41">
            ${trTabsHTML}
          </div>
        </div>
        <div class="ui-style-42">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; padding: 1rem 1.25rem; border-radius: 10px; background: ${trPhase.dim}; border: 1px solid ${trPhase.color}22;">
            <div style="width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: ${trPhase.color}22; border: 1px solid ${trPhase.color}44;">
              <i data-lucide="${trPhase.icon}" style="width: 18px; height: 18px; color: ${trPhase.color};"></i>
            </div>
            <div>
              <div style="font-size: 13px; font-weight: 700; color: ${trPhase.color}; letter-spacing: 0.5px;">${trPhase.label.toUpperCase()}</div>
              <div class="ui-style-43">${trPhase.topics.length} tópicos nesta fase</div>
            </div>
          </div>
          <div class="ui-style-44">
            ${trTopicsHTML}
          </div>
          <div class="ui-style-45">
            <button onclick="if(${currentPhaseIdx} > 0) setActivePhase(${currentPhaseIdx - 1})" ${currentPhaseIdx === 0 ? 'disabled' : ''} style="display: flex; align-items: center; gap: 6px; padding: 9px 16px; background: ${currentPhaseIdx === 0 ? 'var(--color-111122)' : 'var(--color-1a1a2e)'}; border: 1px solid var(--color-1e1e3a); border-radius: 8px; color: ${currentPhaseIdx === 0 ? 'var(--color-334155)' : 'var(--color-94a3b8)'}; font-size: 13px; font-weight: 500; cursor: ${currentPhaseIdx === 0 ? 'not-allowed' : 'pointer'};">← Fase anterior</button>
            <div class="ui-style-46">${trDotsHTML}</div>
            <button onclick="if(${currentPhaseIdx} < ${trPhases.length - 1}) setActivePhase(${currentPhaseIdx + 1})" ${currentPhaseIdx === trPhases.length - 1 ? 'disabled' : ''} style="display: flex; align-items: center; gap: 6px; padding: 9px 16px; background: ${currentPhaseIdx === trPhases.length - 1 ? 'var(--color-111122)' : trPhase.color + '22'}; border: 1px solid ${currentPhaseIdx === trPhases.length - 1 ? 'var(--color-1e1e3a)' : trPhase.color + '44'}; border-radius: 8px; color: ${currentPhaseIdx === trPhases.length - 1 ? 'var(--color-334155)' : trPhase.color}; font-size: 13px; font-weight: 500; cursor: ${currentPhaseIdx === trPhases.length - 1 ? 'not-allowed' : 'pointer'};">Próxima fase →</button>
          </div>
        </div>
        `;
      }

      
      const methodsContentHTML = `
        <div class="routes-container">
          <div class="ui-style-47">
            <div class="ui-style-37">
              <i data-lucide="graduation-cap" class="ui-style-49"></i>
              <span class="ui-style-50">
                Aprender a Aprender
              </span>
            </div>
            <h1 class="ui-style-51">
              Metodologias de Estudo Modernas
            </h1>
            <p class="job-competencies">
              O mercado de tecnologia muda rápido. Mais importante do que <i>o que</i> você estuda, é <i>como</i> você estuda e retém o conhecimento.
            </p>
          </div>

          <div class="ui-style-52">
            
            <div class="job-card">
              <div class="ui-style-53">
                <i data-lucide="brain-circuit" class="ui-style-54"></i>
                <h2 class="ui-style-55">Spaced Repetition (Repetição Espaçada)</h2>
              </div>
              <p class="job-competencies">
                Nosso cérebro descarta informações que não usamos. A repetição espaçada força você a relembrar um conceito logo antes de esquecê-lo, fortalecendo a conexão neural.
              </p>
              <div class="ui-style-56">
                <p class="ui-style-57">
                  <strong>Metáfora:</strong> É como regar uma planta. Se regar todo dia, a raiz apodrece. Se regar no tempo certo, ela cresce forte.
                </p>
              </div>
              <div class="ui-style-58">
                <strong>Prática:</strong> Use ferramentas como Anki ou Notion. Revise o que aprendeu 1 dia, 3 dias, 1 semana e 1 mês depois.
              </div>
            </div>

            <div class="job-card">
              <div class="ui-style-59">
                <i data-lucide="zap" class="ui-style-54"></i>
                <h2 class="ui-style-55">Active Recall (Evocação Ativa)</h2>
              </div>
              <p class="job-competencies">
                Ler e grifar texto é passivo. Evocação ativa significa forçar seu cérebro a "puxar" a informação de dentro para fora, testando-se constantemente.
              </p>
              <div class="ui-style-62">
                <p class="ui-style-57">
                  <strong>Metáfora:</strong> Ler um livro sobre musculação não cria músculos. Levantar o peso (testar seu cérebro) sim.
                </p>
              </div>
              <div class="ui-style-58">
                <strong>Prática:</strong> Feche o tutorial e tente escrever o código sozinho. Se travar, anote onde errou e só então olhe a resposta.
              </div>
            </div>

            <div class="job-card">
              <div class="ui-style-65">
                <i data-lucide="users" class="ui-style-54"></i>
                <h2 class="ui-style-55">Técnica Feynman</h2>
              </div>
              <p class="job-competencies">
                Você só entende realmente um conceito quando consegue explicá-lo de forma simples. Se usar jargões demais, é porque tem lacunas no aprendizado.
              </p>
              <div class="ui-style-68">
                <p class="ui-style-57">
                  <strong>Metáfora:</strong> Tente explicar o que é uma API para sua avó. Se ela entender, você dominou o conceito.
                </p>
              </div>
              <div class="ui-style-58">
                <strong>Prática:</strong> Escreva artigos, responda em fóruns, grave vídeos ou apresente o que aprendeu para colegas.
              </div>
            </div>

            <div class="job-card">
              <div class="ui-style-71">
                <i data-lucide="blocks" class="ui-style-54"></i>
                <h2 class="ui-style-55">Just-in-Time Learning</h2>
              </div>
              <p class="job-competencies">
                Aprender apenas o que você precisa, no momento em que precisa, para resolver um problema real. Evita o "tutorial hell".
              </p>
              <div class="ui-style-74">
                <p class="ui-style-57">
                  <strong>Metáfora:</strong> Você não precisa memorizar o manual inteiro do carro para dirigir. Você aprende onde fica a buzina quando precisa buzinar.
                </p>
              </div>
              <div class="ui-style-58">
                <strong>Prática:</strong> Escolha um projeto. Aprenda a ferramenta X apenas quando ela for o único caminho para avançar.
              </div>
            </div>

          </div>
        </div>
      `;

      
      const feedbackContentHTML = `
        <div style="max-width: 960px; margin: 0 auto; padding: 2rem 1.5rem;">
          <div style="margin-bottom: 2rem;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <i data-lucide="refresh-cw" style="width: 22px; height: 22px; color: var(--color-10b981);"></i>
              <span style="font-size: 12px; font-weight: 600; letter-spacing: 3px; color: var(--color-10b981); text-transform: uppercase;">
                Gestão da Plataforma
              </span>
            </div>
            <h1 style="font-size: 26px; font-weight: 700; margin: 0 0 8px; color: var(--color-f8fafc); letter-spacing: -0.5px;">
              Central de Ações
            </h1>
            <p style="margin: 0; font-size: 14px; color: var(--color-94a3b8); line-height: 1.6;">
              Selecione uma ação administrativa abaixo para manter a plataforma atualizada.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
            
            <div style="background: var(--color-0d0d1a); border: 1px solid var(--color-1e1e3a); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 12px; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='var(--color-111122)'" onmouseout="this.style.background='var(--color-0d0d1a)'">
              <div style="display: flex; align-items: center; gap: 12px; color: var(--color-3b82f6);">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: var(--color-3b82f622); display: flex; align-items: center; justify-content: center;">
                  <i data-lucide="code" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <h2 style="font-size: 16px; font-weight: 700; margin: 0; color: var(--color-f8fafc);">Atualizar Linguagens</h2>
                  <p style="font-size: 12px; color: var(--color-94a3b8); margin: 2px 0 0 0;">Verificar novas versões e ferramentas.</p>
                </div>
              </div>
            </div>

            <div style="background: var(--color-0d0d1a); border: 1px solid var(--color-1e1e3a); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 12px; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='var(--color-111122)'" onmouseout="this.style.background='var(--color-0d0d1a)'">
              <div style="display: flex; align-items: center; gap: 12px; color: var(--color-f59e0b);">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: var(--color-f59e0b22); display: flex; align-items: center; justify-content: center;">
                  <i data-lucide="newspaper" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <h2 style="font-size: 16px; font-weight: 700; margin: 0; color: var(--color-f8fafc);">Atualizar Notícias</h2>
                  <p style="font-size: 12px; color: var(--color-94a3b8); margin: 2px 0 0 0;">Buscar artigos recentes no mercado tech.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      `;

      const routesContentHTML = `
        <div class="ui-style-77">
          <div class="ui-style-78">
            <div class="ui-style-79">
              <i data-lucide="map" class="ui-style-80"></i>
            </div>
            <div>
              <div class="ui-style-81">
                Rotas TOTVS por escopo e nível
              </div>
              <div class="ui-style-43">
                Competências extraídas das vagas mapeadas e links diretos para cada cargo.
              </div>
            </div>
          </div>

          <div class="ui-style-83">
            ${["backend", "cloud"].map(scope => `
              <section class="ui-style-84">
                <div class="ui-style-85">
                  <i data-lucide="${scope === 'backend' ? 'server' : 'cloud'}" class="ui-style-86"></i>
                  <h2 class="ui-style-87">${scopeLabels[scope]}</h2>
                </div>
                <div class="ui-style-88">
                  ${["estagiario", "junior", "pleno", "senior"].map(level => {
                    const jobs = jobRoles.filter(job => job.scope === scope && job.level === level);
                    return `
                      <div class="ui-style-89">
                        <div class="ui-style-90">
                          ${levelLabels[level]}
                        </div>
                        <div class="resources-list">
                          ${jobs.map(job => `
                            <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="resource-link ui-style-91">
                              <span class="ui-style-92">
                                ${job.title}
                                <i data-lucide="external-link" class="ui-style-93"></i>
                              </span>
                              <span class="job-competencies">
                                Competências: ${job.competencies.join(", ")}
                              </span>
                            </a>
                          `).join('')}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </section>
            `).join('')}
          </div>
        </div>
      `;

      const placeholderContentHTML = `
        <div class="ui-style-42">
          <div style="display: flex; align-items: center; gap: 12px; padding: 1rem 1.25rem; border-radius: 10px;
                      background: ${activeModule.color}18; border: 1px solid ${activeModule.color}44;">
            <div style="width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
                        background: ${activeModule.color}22; border: 1px solid ${activeModule.color}44;">
              <i data-lucide="${activeModule.icon}" style="width: 18px; height: 18px; color: ${activeModule.color};"></i>
            </div>
            <div>
              <div style="font-size: 13px; font-weight: 700; color: ${activeModule.color}; letter-spacing: 0.5px; text-transform: uppercase;">
                ${activeModule.label}
              </div>
              <div class="job-competencies">
                Módulo reservado para expansão futura.
              </div>
            </div>
          </div>
        </div>
      `;

      const roadmapContentHTML = `
        <div class="ui-style-42">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; padding: 1rem 1.25rem; border-radius: 10px;
                      background: ${phase.dim}; border: 1px solid ${phase.color}22;">
            <div style="width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
                        background: ${phase.color}22; border: 1px solid ${phase.color}44;">
              <i data-lucide="${phase.icon}" style="width: 18px; height: 18px; color: ${phase.color};"></i>
            </div>
            <div>
              <div style="font-size: 13px; font-weight: 700; color: ${phase.color}; letter-spacing: 0.5px;">
                ${phase.label.toUpperCase()}
              </div>
              <div class="ui-style-43">
                ${phase.topics.length} tópicos nesta fase
              </div>
            </div>
          </div>

          <div class="ui-style-44">
            ${topicsHTML}
          </div>

          <div class="ui-style-45">
            <button onclick="if(${activePhase} > 0) setActivePhase(${activePhase - 1})"
              ${activePhase === 0 ? 'disabled' : ''}
              style="display: flex; align-items: center; gap: 6px; padding: 9px 16px;
                     background: ${activePhase === 0 ? 'var(--color-111122)' : 'var(--color-1a1a2e)'};
                     border: 1px solid var(--color-1e1e3a); border-radius: 8px;
                     color: ${activePhase === 0 ? 'var(--color-334155)' : 'var(--color-94a3b8)'};
                     font-size: 13px; font-weight: 500;
                     cursor: ${activePhase === 0 ? 'not-allowed' : 'pointer'};">
              ← Fase anterior
            </button>

            <div class="ui-style-46">
              ${dotsHTML}
            </div>

            <button onclick="if(${activePhase} < ${phases.length - 1}) setActivePhase(${activePhase + 1})"
              ${activePhase === phases.length - 1 ? 'disabled' : ''}
              style="display: flex; align-items: center; gap: 6px; padding: 9px 16px;
                     background: ${activePhase === phases.length - 1 ? 'var(--color-111122)' : phase.color + '22'};
                     border: 1px solid ${activePhase === phases.length - 1 ? 'var(--color-1e1e3a)' : phase.color + '44'};
                     border-radius: 8px;
                     color: ${activePhase === phases.length - 1 ? 'var(--color-334155)' : phase.color};
                     font-size: 13px; font-weight: 500;
                     cursor: ${activePhase === phases.length - 1 ? 'not-allowed' : 'pointer'};">
              Próxima fase →
            </button>
          </div>

          <p class="ui-style-100">
            ${phases.length} fases · ${totalTopics} tópicos · ${totalResources}+ recursos gratuitos
          </p>
        </div>
      `;

      const sideNavHTML = sideNavVisible ? `
        <aside class="sidebar">
          <div class="ui-style-101">
            Navegação
          </div>
          <nav class="ui-style-15">
            ${sideNavItems.map(item => {
              if (item.hasSubmenu) {
                const subOpen = trailSubmenuOpen;
                const subHTML = subOpen ? `<div class="ui-style-103">
                  ${trailSubItems.map(sub => {
                    const subActive = (activeView === sub.id) || (activeView === 'roadmap' && activeRoadmap === sub.id);
                    return `
                    <button onclick="selectTrailItem('${sub.id}','${sub.type}')"
                      style="display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border-radius:7px;
                             background:${subActive?'var(--color-0e2933)':'transparent'};
                             border:1px solid ${subActive?'var(--color-155e75)':'transparent'};
                             color:${subActive?'var(--color-67e8f9)':'var(--color-94a3b8)'};
                             cursor:pointer;text-align:left;font-size:12px;font-weight:600;">
                      <i data-lucide="${sub.icon}" class="ui-style-104"></i>
                      <span>${sub.label}</span>
                    </button>
                    `;
                  }).join('')}
                </div>` : '';
                return `<button onclick="toggleTrailSubmenu()"
                  style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:9px 10px;border-radius:8px;
                         background:${trailSubmenuOpen?'var(--color-0e2933)':'transparent'};
                         border:1px solid ${trailSubmenuOpen?'var(--color-155e75)':'transparent'};
                         color:${trailSubmenuOpen?'var(--color-67e8f9)':'var(--color-94a3b8)'};
                         cursor:pointer;text-align:left;font-size:12px;font-weight:600;">
                  <span class="ui-style-105">
                    <i data-lucide="${item.icon}" class="ui-style-106"></i>
                    ${item.label}
                  </span>
                  <i data-lucide="${trailSubmenuOpen?'chevron-up':'chevron-down'}" class="ui-style-107"></i>
                </button>${subHTML}`;
              }
              const isActive = activeView === item.target;
              return `<button onclick="${item.target === 'routes' ? "setModule('routes','view')" : "setActiveView('" + item.target + "')"}"
                style="display:flex;align-items:center;gap:9px;width:100%;padding:9px 10px;border-radius:8px;
                       background:${isActive?'var(--color-0e2933)':'transparent'};
                       border:1px solid ${isActive?'var(--color-155e75)':'transparent'};
                       color:${isActive?'var(--color-67e8f9)':'var(--color-94a3b8)'};
                       cursor:pointer;text-align:left;font-size:12px;font-weight:600;">
                <i data-lucide="${item.icon}" class="ui-style-106"></i>
                <span>${item.label}</span>
              </button>`;
            }).join('')}
          </nav>
        </aside>
      ` : '';


      const sidePlaceholderHTML = `
        <div class="ui-style-42">
          <div class="ui-style-110">
            <div class="ui-style-111">
              <i data-lucide="${(sideNavItems.find(item => item.target === activeView) || {}).icon || 'panel-left'}" class="ui-style-80"></i>
            </div>
            <div>
              <div class="ui-style-81">
                ${(sideNavItems.find(item => item.target === activeView) || {}).label || 'Seção'}
              </div>
              <div class="job-competencies">
                Área prevista no objetivo.md para evolução do road-booster.
              </div>
            </div>
          </div>
        </div>
      `;

      app.innerHTML = `
        <div>
          <header class="ui-style-114">
            <div class="ui-style-115">
              <button onclick="toggleSideNav()" title="${sideNavVisible?'Esconder menu':'Mostrar menu'}"
                class="ui-style-116">
                <i data-lucide="${sideNavVisible?'panel-left-close':'panel-left-open'}" class="ui-style-117"></i>
              </button>
              <div class="ui-style-118">
                <i data-lucide="sparkles" class="ui-style-119"></i>
              </div>
              <div class="ui-style-120">
                road-booster
              </div>
            </div>
            <button onclick="toggleTheme()" style="background:transparent; border:none; cursor:pointer; color:var(--color-94a3b8); display:flex; align-items:center; justify-content:center; padding: 8px;">
              <i data-lucide="${theme === 'light' ? 'moon' : 'sun'}" style="width: 20px; height: 20px;"></i>
            </button>
          </header>
          ${sideNavHTML}
          <main style="margin-left: ${sideNavVisible ? 232 : 0}px; transition: margin-left 0.2s;">
          <div class="news-bar">
            <div class="ui-style-121">
              <i data-lucide="newspaper" class="ui-style-122"></i>
              <span class="ui-style-123">Notícias</span>
            </div>
            <div class="ui-style-124"></div>
            ${newsItems.length === 0 ? '<span class="ui-style-125">Nenhuma notícia no momento.</span>' :
              '<div class="ui-style-126">' +
              newsItems.map((n,i) => `<button onclick="openNewsModal(${i})" class="news-btn">
                <i data-lucide="bell" class="ui-style-107"></i>${n.title}
              </button>`).join('') + '</div>'
            }
          </div>
          ${activeNewsModal !== null && newsItems[activeNewsModal] ? `
          <div onclick="if(event.target===this)closeNewsModal()" class="news-modal-overlay">
            <div class="news-modal-content">
              ${newsItems[activeNewsModal].imageUrl ? `<img src="${newsItems[activeNewsModal].imageUrl}" class="ui-style-128">` : ''}
              <div class="ui-style-129">
                <div class="ui-style-130">${newsItems[activeNewsModal].title}</div>
                <p class="ui-style-131">${newsItems[activeNewsModal].summary}</p>
                <div class="ui-style-132">
                  <a href="${newsItems[activeNewsModal].link}" target="_blank" rel="noopener noreferrer"
                     class="ui-style-133">
                    <i data-lucide="external-link" class="ui-style-134"></i> Ver no site
                  </a>
                  <button onclick="closeNewsModal()" class="ui-style-135">Fechar</button>
                </div>
              </div>
            </div>
          </div>` : ''}
          ${activeView === 'roadmap' ? `
          <div class="ui-style-35">
            <div class="ui-style-36">
              <div class="ui-style-37">
                <i data-lucide="${roadmap.icon}" style="width: 22px; height: 22px; color: ${roadmap.color};"></i>
                <span style="font-size: 12px; font-weight: 600; letter-spacing: 3px; color: ${roadmap.color}; text-transform: uppercase;">
                  ${roadmap.eyebrow}
                </span>
              </div>
              <h1 class="ui-style-38">
                ${roadmap.title}
              </h1>
              <p class="ui-style-39">
                ${roadmap.description}
              </p>
            </div>
          </div>` : ''}

          ${activeView === 'roadmap' ? `
          <div class="ui-style-40 nav-scroll">
            <div class="ui-style-41">
              ${tabsHTML}
            </div>
          </div>` : ''}

          ${activeView === "routes" ? routesContentHTML : ""}
          ${(activeView !== "roadmap" && activeView !== "routes" && activeView !== "methods" && activeView !== "feedback" && !["security","bi","startup","soft-skills"].includes(activeView)) ? placeholderContentHTML : ""}
          ${activeView === "feedback" ? feedbackContentHTML : ""}
          ${activeView === "methods" ? methodsContentHTML : ""}
          ${["security","bi","startup","soft-skills"].includes(activeView) ? trailRoadmapHTML : ""}

          ${activeView === "roadmap" ? roadmapContentHTML : ""}
          </main>
        </div>
      `;

      // Inicializa a substituição das tags <i data-lucide="..."> para <svg>
      lucide.createIcons();
    }

    // Chama o render pela primeira vez
    render();