import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileSearch,
  FileText,
  UploadCloud,
} from "lucide-react"

import { getComplianceDashboard } from "@/features/compliance-dashboard/application/get-compliance-dashboard"
import type {
  ComplianceMetricKind,
  RiskLevel,
  StandardStatus,
  UploadStepStatus,
} from "@/features/compliance-dashboard/domain/compliance-dashboard.types"
import { AppShell } from "@/shared/components/layout/app-shell"
import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card"
import { Progress } from "@/shared/components/ui/progress"
import { Separator } from "@/shared/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { productConfig } from "@/shared/config/product"

const metricIcons: Record<ComplianceMetricKind, typeof FileCheck2> = {
  documents: FileCheck2,
  adherence: CheckCircle2,
  critical: AlertTriangle,
}

const uploadStepIcons: Record<UploadStepStatus, typeof UploadCloud> = {
  active: UploadCloud,
  completed: CheckCircle2,
  pending: FileSearch,
}

const tokenSwatches = [
  {
    token: "primary",
    role: "Ação primária",
    className: "bg-primary",
  },
  {
    token: "accent",
    role: "Atenção",
    className: "bg-accent",
  },
  {
    token: "security",
    role: "Segurança",
    className: "bg-security",
  },
  {
    token: "quality",
    role: "Qualidade",
    className: "bg-quality",
  },
  {
    token: "risk-low",
    role: "Baixo risco",
    className: "bg-risk-low",
  },
  {
    token: "risk-medium",
    role: "Risco médio",
    className: "bg-risk-medium",
  },
  {
    token: "risk-high",
    role: "Risco alto",
    className: "bg-risk-high",
  },
  {
    token: "risk-critical",
    role: "Crítico",
    className: "bg-risk-critical",
  },
]

export async function ComplianceDashboardPage() {
  const dashboard = await getComplianceDashboard()

  return (
    <AppShell title="Análise de processos com IA">
      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="grid gap-5 md:grid-cols-[1fr_260px]">
            <div className="space-y-5">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary ring-1 ring-primary/20">
                  Design system sugerido
                </Badge>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
                  {productConfig.name}: padrão visual para auditoria documental
                  com IA
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  Uma interface densa, clara e rastreável para equipes de
                  qualidade, segurança da informação e governança validarem
                  processos internos contra ISO 27001, ISO 9001 e outras
                  normas.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button>
                  <UploadCloud className="size-4" />
                  Novo upload
                </Button>
                <Button variant="outline">
                  Ver biblioteca
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-dashed bg-muted/45 p-4">
              <div className="flex h-full min-h-52 flex-col items-center justify-center gap-3 text-center">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-6" />
                </div>
                <div>
                  <p className="font-medium">Upload inteligente de PDF</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Use este padrão para drag and drop, validação de tipo e
                    status de processamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fluxo de análise</CardTitle>
            <CardDescription>
              Estrutura recomendada para cada documento.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboard.uploadSteps.map((step, index) => {
              const Icon = uploadStepIcons[step.status]

              return (
                <div key={step.id} className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{step.label}</p>
                    <p className="text-xs text-muted-foreground">
                      Etapa {index + 1} de {dashboard.uploadSteps.length}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {step.status === "active" ? "Ativo" : "OK"}
                  </Badge>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {dashboard.metrics.map((metric) => {
          const Icon = metricIcons[metric.kind]

          return (
            <Card key={metric.id}>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                  {metric.label}
                </CardTitle>
                <CardAction>
                  <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.detail}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <Tabs defaultValue="normas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="normas">Normas</TabsTrigger>
          <TabsTrigger value="arquivos">Arquivos</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
        </TabsList>

        <TabsContent value="normas" className="grid gap-4 xl:grid-cols-3">
          {dashboard.standards.map((standard) => (
            <Card key={standard.id}>
              <CardHeader>
                <CardTitle>{standard.name}</CardTitle>
                <CardDescription>{standard.area}</CardDescription>
                <CardAction>
                  <Badge className={getStandardStatusClassName(standard.status)}>
                    {standardStatusLabels[standard.status]}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Cobertura estimada
                  </span>
                  <span className="font-medium">{standard.coverage}%</span>
                </div>
                <Progress value={standard.coverage} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="arquivos">
          <Card>
            <CardHeader>
              <CardTitle>Análises recentes</CardTitle>
              <CardDescription>
                Padrão de lista para documentos, norma avaliada, score e risco.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {dashboard.recentAnalyses.map((analysis, index) => (
                <div key={analysis.id}>
                  <div className="grid gap-3 py-3 md:grid-cols-[1fr_120px_90px_90px_auto] md:items-center">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {analysis.fileName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {analysis.evidenceSummary}
                      </p>
                    </div>
                    <Badge variant="secondary">{analysis.standard}</Badge>
                    <span className="text-sm font-medium">
                      {analysis.score}
                    </span>
                    <Badge className={`${getRiskClassName(analysis.risk)} ring-1`}>
                      {riskLabels[analysis.risk]}
                    </Badge>
                    <Button variant="ghost" size="icon" aria-label="Abrir análise">
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                  {index < dashboard.recentAnalyses.length - 1 ? (
                    <Separator />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tokens">
          <Card>
            <CardHeader>
              <CardTitle>Tokens principais</CardTitle>
              <CardDescription>
                Classes prontas para usar com Tailwind e shadcn.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {tokenSwatches.map((swatch) => (
                <div key={swatch.token} className="rounded-lg border p-3">
                  <div
                    className={`mb-3 h-10 rounded-md ${swatch.className}`}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium">{swatch.token}</p>
                  <p className="text-xs text-muted-foreground">{swatch.role}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}

const riskLabels: Record<RiskLevel, string> = {
  low: "Baixo",
  medium: "Médio",
  high: "Alto",
  critical: "Crítico",
}

const standardStatusLabels: Record<StandardStatus, string> = {
  adherent: "Aderente",
  attention: "Atenção",
  "in-review": "Em revisão",
}

function getRiskClassName(risk: RiskLevel) {
  const riskClassNames: Record<RiskLevel, string> = {
    low: "bg-risk-low/15 text-foreground ring-risk-low/30",
    medium: "bg-risk-medium/15 text-accent-foreground ring-risk-medium/30",
    high: "bg-risk-high/15 text-foreground ring-risk-high/30",
    critical: "bg-risk-critical/15 text-foreground ring-risk-critical/30",
  }

  return riskClassNames[risk]
}

function getStandardStatusClassName(status: StandardStatus) {
  const statusClassNames: Record<StandardStatus, string> = {
    adherent: "bg-risk-low/15 text-foreground ring-1 ring-risk-low/30",
    attention: "bg-risk-medium/15 text-accent-foreground ring-1 ring-risk-medium/30",
    "in-review": "bg-secondary text-secondary-foreground",
  }

  return statusClassNames[status]
}
