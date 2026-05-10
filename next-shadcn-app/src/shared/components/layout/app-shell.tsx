"use client"

import type { ReactNode } from "react"
import { useState } from "react"

import { AppHeader } from "./app-header"
import { AppSidebar } from "./app-sidebar"
import { cn } from "@/shared/lib/utils"

type AppShellProps = {
  title: string
  children: ReactNode
}

export function AppShell({ title, children }: AppShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div
        className={cn(
          "grid min-h-screen transition-[grid-template-columns] duration-200 ease-out",
          isSidebarCollapsed ? "lg:grid-cols-[76px_1fr]" : "lg:grid-cols-[248px_1fr]"
        )}
      >
        <AppSidebar
          isCollapsed={isSidebarCollapsed}
          onCollapsedChange={setIsSidebarCollapsed}
        />
        <section className="flex min-w-0 flex-col">
          <AppHeader title={title} />
          <div className="flex-1 space-y-6 p-4 md:p-6">{children}</div>
        </section>
      </div>
    </main>
  )
}
