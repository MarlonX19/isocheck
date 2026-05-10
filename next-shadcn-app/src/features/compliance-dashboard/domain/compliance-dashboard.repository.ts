import type { ComplianceDashboardSnapshot } from "./compliance-dashboard.types"

export type ComplianceDashboardRepository = {
  getSnapshot(): Promise<ComplianceDashboardSnapshot>
}
