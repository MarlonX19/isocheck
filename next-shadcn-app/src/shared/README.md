# Shared

Codigo compartilhado e transversal do app.

- `components/ui`: componentes shadcn gerados pelo CLI.
- `components/layout`: shell, sidebar, header e layouts reutilizaveis.
- `config`: configuracoes globais, marca, navegacao e tokens.
- `lib`: helpers pequenos e sem regra de negocio.
- `services`: HTTP, API clients e adapters globais.
- `types`: tipos realmente compartilhados por varias features.

Se algo pertence a apenas uma feature, mantenha dentro de `src/features/<feature>`.
