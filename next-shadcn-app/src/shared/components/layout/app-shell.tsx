import type { ReactNode } from "react"

import { AppHeader } from "./app-header"
import { AppSidebar } from "./app-sidebar"

type AppShellProps = {
  title: string
  children: ReactNode
}

export function AppShell({ title, children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[248px_1fr]">
        <AppSidebar />
        <section className="flex min-w-0 flex-col">
          <AppHeader title={title} />
          <div className="flex-1 space-y-6 p-4 md:p-6">{children}</div>
        </section>
      </div>
    </main>
  )
}
