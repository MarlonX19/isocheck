# Arquitetura do Projeto

Esta estrutura usa uma versao pragmatica de Clean Architecture + DDD para Next.js App Router. O objetivo nao e pureza academica, mas manter padrao de pastas, nomes e responsabilidades conforme o sistema crescer.

## Estrutura

```txt
src/
  app/                         Rotas Next.js, layouts e providers globais
    (app)/                     Grupo de rotas da area logada
      page.tsx                 Rota fina, delega para uma feature
  features/
    compliance-dashboard/
      domain/                  Tipos, entidades, value objects e contratos
      application/             Use cases e orquestracao
      infrastructure/          Repositorios concretos, API adapters e mocks
      presentation/            Pages, sections, components e hooks da feature
  shared/
    components/
      layout/                  Shell, sidebar, header e layouts reutilizaveis
      ui/                      Componentes shadcn gerados
    config/                    Configuracoes globais de produto/design
    lib/                       Funcoes utilitarias sem regra de negocio
    services/
      api/                     Endpoints e adapters compartilhados
      http/                    Cliente HTTP base
    types/                     Tipos compartilhados e realmente transversais
```

## Regras de dependencia

- `app` pode importar `features` e `shared`.
- `features/*/presentation` pode importar `application`, `domain` e `shared`.
- `features/*/application` pode importar `domain` e escolher uma implementacao de `infrastructure` enquanto nao houver DI formal.
- `features/*/domain` nao deve importar React, Next, shadcn, fetch ou detalhes de UI.
- `shared` nao deve importar features.
- Componentes shadcn ficam em `src/shared/components/ui`.

## Padrao para nova feature

Use nomes em kebab-case para pastas e arquivos:

```txt
features/document-upload/
  domain/
    document.types.ts
    document.repository.ts
  application/
    upload-document.ts
    list-uploaded-documents.ts
  infrastructure/
    document-api.repository.ts
    document.mock-repository.ts
  presentation/
    pages/document-upload-page.tsx
    components/upload-dropzone.tsx
    components/upload-status-list.tsx
```

## Nomenclatura

- Pages de feature: `*-page.tsx`
- Componentes de feature: nome sem prefixo generico, por exemplo `upload-dropzone.tsx`
- Use cases: verbo no infinitivo ou acao clara, por exemplo `get-compliance-dashboard.ts`
- Contratos: `*.repository.ts`, `*.gateway.ts` ou `*.service.ts`
- Implementacoes: `*.api-repository.ts`, `*.mock-repository.ts`
- Tipos de dominio: `*.types.ts`

## Comunicacao com backend

- O ponto base de HTTP fica em `src/shared/services/http/http-client.ts`.
- Endpoints compartilhados ficam em `src/shared/services/api/api-endpoints.ts`.
- Cada feature deve criar seu proprio repository em `infrastructure`.
- A presentation nunca deve chamar `fetch` diretamente.
- A application nunca deve conhecer classes CSS, componentes ou estado visual.

## Quando criar algo em shared

Coloque em `shared` apenas quando pelo menos duas features precisarem usar o mesmo codigo ou quando o codigo for infraestrutura global. Se for especifico de uma tela ou fluxo, mantenha dentro da feature.
