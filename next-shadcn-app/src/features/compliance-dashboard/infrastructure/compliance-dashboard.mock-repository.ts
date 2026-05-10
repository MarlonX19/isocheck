import type { ComplianceDashboardRepository } from "../domain/compliance-dashboard.repository"
import type { ComplianceDashboardSnapshot } from "../domain/compliance-dashboard.types"

const dashboardSnapshot: ComplianceDashboardSnapshot = {
  metrics: [
    {
      id: "documents-analyzed",
      kind: "documents",
      label: "Documentos analisados",
      value: "128",
      detail: "+18 este mês",
    },
    {
      id: "average-adherence",
      kind: "adherence",
      label: "Aderência média",
      value: "86%",
      detail: "ISO 9001 lidera",
    },
    {
      id: "critical-points",
      kind: "critical",
      label: "Pontos críticos",
      value: "12",
      detail: "5 sem evidência",
    },
  ],
  standards: [
    {
      id: "iso-27001",
      name: "ISO 27001",
      area: "Segurança da informação",
      coverage: 84,
      status: "in-review",
    },
    {
      id: "iso-9001",
      name: "ISO 9001",
      area: "Gestão da qualidade",
      coverage: 91,
      status: "adherent",
    },
    {
      id: "lgpd",
      name: "LGPD",
      area: "Privacidade e dados",
      coverage: 73,
      status: "attention",
    },
  ],
  recentAnalyses: [
    {
      id: "access-control-policy",
      fileName: "Política de controle de acesso.pdf",
      standard: "ISO 27001",
      score: "82%",
      risk: "medium",
      evidenceSummary: "Evidências extraídas automaticamente",
    },
    {
      id: "purchase-procedure",
      fileName: "Procedimento de compras.pdf",
      standard: "ISO 9001",
      score: "94%",
      risk: "low",
      evidenceSummary: "Evidências extraídas automaticamente",
    },
    {
      id: "incident-response-plan",
      fileName: "Plano de resposta a incidentes.pdf",
      standard: "ISO 27001",
      score: "68%",
      risk: "high",
      evidenceSummary: "Evidências extraídas automaticamente",
    },
  ],
  uploadSteps: [
    { id: "upload", label: "Upload do PDF", status: "active" },
    { id: "extraction", label: "Extração de processos", status: "completed" },
    {
      id: "standards-comparison",
      label: "Comparação normativa",
      status: "completed",
    },
    { id: "action-plan", label: "Plano de ação", status: "completed" },
  ],
}

export function createMockComplianceDashboardRepository(): ComplianceDashboardRepository {
  return {
    async getSnapshot() {
      return dashboardSnapshot
    },
  }
}
