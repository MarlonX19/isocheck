# NormaIQ Design System

Design system inicial para uma plataforma interna de analise de processos empresariais com IA, upload de PDFs e verificacao contra normas como ISO 27001, familia ISO 27000, ISO 9001 e LGPD.

## Nome sugerido

**NormaIQ**: curto, facil de lembrar e comunica a combinacao entre normas, auditoria e inteligencia artificial. Alternativas: **AuditOS**, **Conformia**, **IsoLens**, **ProcessGuard**.

## Personalidade visual

- Empresarial, claro e operacional.
- Deve parecer confiavel para areas de qualidade, seguranca, governanca, auditoria e juridico.
- Evitar cara de landing page: o produto e uma ferramenta de rotina, entao privilegie densidade, tabelas, filtros, status e rastreabilidade.
- Cada conclusao da IA deve mostrar origem, norma relacionada, trecho/evidencia e recomendacao.

## Tokens

Os tokens ficam em `src/app/globals.css` e seguem o modelo do shadcn/Tailwind v4.

- `primary`: teal institucional para acoes principais, progresso e foco.
- `accent`: amarelo controlado para avisos e destaque de pendencias.
- `quality`: violeta discreto para ISO 9001 e gestao da qualidade.
- `security`: teal para ISO 27001/27000 e seguranca da informacao.
- `risk-low`: conformidade validada ou baixo risco.
- `risk-medium`: evidencia parcial, pendencia ou risco moderado.
- `risk-high`: risco alto que exige acao.
- `risk-critical`: nao conformidade critica.

## Layout

- Sidebar fixa em desktop com navegacao principal.
- Header superior com busca global, notificacoes e configuracoes.
- Area de conteudo com grids densos: KPIs, upload, listas e matriz normativa.
- Cards apenas para unidades repetiveis de informacao, nunca como caixas decorativas dentro de outras caixas.
- Raio padrao: `0.5rem`, com visual mais corporativo e menos arredondado.

## Componentes iniciais

- `Button`: acoes primarias, secundarias, destrutivas e icon-only.
- `Card`: KPIs, blocos de norma, documentos recentes e paineis de status.
- `Badge`: status de norma, risco e classificacao.
- `Input` e `Textarea`: busca, filtros e comentarios de revisao.
- `Progress`: cobertura normativa, score de aderencia e progresso de analise.
- `Tabs`: alternancia entre normas, documentos, evidencias e plano de acao.
- `Alert`: avisos de modelo, pendencias, falhas de processamento e risco critico.

## Telas recomendadas

- Dashboard: KPIs, arquivos recentes, aderencia media, pendencias criticas.
- Upload de PDF: dropzone, metadados do processo, area dona, norma-alvo e fila de processamento.
- Analise: evidencias extraidas, checklist normativo, score, lacunas e recomendacoes.
- Normas: biblioteca de controles ISO, versoes, categorias e criterios.
- Plano de acao: responsavel, prazo, severidade, status e trilha de auditoria.
- Relatorios: exportacao executiva e tecnica por norma, area e periodo.

## Padroes de status

- Baixo risco: verde, texto objetivo, acao opcional.
- Medio risco: amarelo, pede revisao humana.
- Alto risco: laranja, exige responsavel e prazo.
- Critico: vermelho, deve bloquear aprovacao ate tratamento.

## Implementacao

Use os componentes shadcn em `src/components/ui` e os tokens Tailwind:

```tsx
<Badge className="bg-risk-medium/15 text-accent-foreground ring-1 ring-risk-medium/30">
  Atencao
</Badge>
```

Tokens visuais ficam em `src/shared/config/design-system.ts`. Dados de negocio, como documentos, normas e analises, ficam dentro da feature correspondente em `src/features`.
