export type RiskLevel = "low" | "medium" | "high" | "critical"

export type StandardStatus = "adherent" | "attention" | "in-review"

export type ComplianceMetricKind = "documents" | "adherence" | "critical"

export type UploadStepStatus = "active" | "completed" | "pending"

export type ComplianceMetric = {
  id: string
  kind: ComplianceMetricKind
  label: string
  value: string
  detail: string
}

export type StandardCoverage = {
  id: string
  name: string
  area: string
  coverage: number
  status: StandardStatus
}

export type AnalysisSummary = {
  id: string
  fileName: string
  standard: string
  score: string
  risk: RiskLevel
  evidenceSummary: string
}

export type UploadPipelineStep = {
  id: string
  label: string
  status: UploadStepStatus
}

export type ComplianceDashboardSnapshot = {
  metrics: ComplianceMetric[]
  standards: StandardCoverage[]
  recentAnalyses: AnalysisSummary[]
  uploadSteps: UploadPipelineStep[]
}
