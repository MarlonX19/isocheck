# Core Rules

Este arquivo concentra os padroes base do projeto para que novas conversas com inteligencia artificial comecem com o mesmo contexto.

## Ambiente e comandos

- Use Bun como gerenciador padrao do projeto.
- Para instalar dependencias, use `bun install`.
- Para adicionar dependencias de producao, use `bun add <pacote>`.
- Para adicionar dependencias de desenvolvimento, use `bun add -d <pacote>`.
- Para executar scripts do `package.json`, use `bun run <script>`.
- Para build, use `bun run build`.
- Para desenvolvimento local, use `bun run dev`.
- Evite `npm`, `yarn` ou `pnpm`, exceto quando houver uma justificativa clara ou uma ferramenta exigir explicitamente.

## Contexto tecnico

- O projeto usa Next.js, React, TypeScript, Tailwind CSS e componentes baseados em shadcn/ui.
- Antes de alterar APIs ou convencoes do Next.js, confira a documentacao local em `node_modules/next/dist/docs/`, pois a versao do projeto pode ter mudancas incompativeis com conhecimento antigo.
- Preserve a arquitetura atual: `src/app` para rotas, `src/features` para funcionalidades e `src/shared` para codigo reutilizavel.
- Priorize componentes, utilitarios e tipos ja existentes antes de criar novos padroes.

## Padroes de desenvolvimento

- Escreva codigo TypeScript tipado e evite `any` sem necessidade real.
- Mantenha as mudancas pequenas, coesas e alinhadas ao pedido.
- Nao refatore partes nao relacionadas apenas por preferencia.
- Prefira nomes claros e explicitos para componentes, funcoes, arquivos e tipos.
- Extraia abstracoes somente quando reduzirem duplicacao real ou deixarem o fluxo mais claro.

## Interface

- Siga o design system existente em `src/shared/config/design-system.ts` e a documentacao em `docs/design-system.md`.
- Reutilize componentes de `src/shared/components/ui` sempre que possivel.
- Use icones de `lucide-react` quando houver um icone adequado.
- Mantenha telas responsivas e evite textos ou controles que quebrem layout em mobile.

## Validacao

- Ao finalizar mudancas de codigo, rode ao menos `bun run lint` quando aplicavel.
- Rode `bun run build` quando a alteracao tocar rotas, configuracao, dependencias ou comportamento critico.
- Informe claramente se algum comando nao foi executado ou falhou.
