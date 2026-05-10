import { createMockComplianceDashboardRepository } from "../infrastructure/compliance-dashboard.mock-repository"

export async function getComplianceDashboard() {
  const repository = createMockComplianceDashboardRepository()

  return repository.getSnapshot()
}
