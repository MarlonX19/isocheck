import { Activity, LockKeyhole } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert"
import { navigationItems, productConfig } from "@/shared/config/product"

export function AppSidebar() {
  return (
    <aside className="hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-3 px-5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <LockKeyhole className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">
            {productConfig.name}
          </p>
          <p className="text-xs text-sidebar-foreground/65">
            {productConfig.tagline}
          </p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {navigationItems.map((item, index) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex h-9 items-center gap-2 rounded-md px-3 text-sm transition-colors ${
                index === 0
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="size-4" />
              {item.label}
            </a>
          )
        })}
      </nav>
      <div className="p-4">
        <Alert className="border-sidebar-border bg-sidebar-accent text-sidebar-accent-foreground">
          <Activity className="size-4" />
          <AlertTitle className="text-sm">Modelo em monitoramento</AlertTitle>
          <AlertDescription className="text-xs text-sidebar-foreground/70">
            Última calibragem normativa concluída há 2 dias.
          </AlertDescription>
        </Alert>
      </div>
    </aside>
  )
}
