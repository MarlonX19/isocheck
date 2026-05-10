import { Activity, LockKeyhole, PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert"
import { Button } from "@/shared/components/ui/button"
import { navigationItems, productConfig } from "@/shared/config/product"
import { cn } from "@/shared/lib/utils"

type AppSidebarProps = {
  isCollapsed: boolean
  onCollapsedChange: (isCollapsed: boolean) => void
}

export function AppSidebar({
  isCollapsed,
  onCollapsedChange,
}: AppSidebarProps) {
  const ToggleIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose

  return (
    <aside
      className={cn(
        "hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 ease-out lg:flex lg:flex-col",
        isCollapsed ? "w-[76px]" : "w-[248px]"
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center gap-3 px-4",
          isCollapsed && "justify-center px-3"
        )}
      >
        {!isCollapsed && (
          <>
            <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <LockKeyhole className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">
                {productConfig.name}
              </p>
              <p className="text-xs text-sidebar-foreground/65">
                {productConfig.tagline}
              </p>
            </div>
          </>
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className={cn(
            "ml-auto border border-sidebar-border text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            isCollapsed && "ml-0 bg-sidebar"
          )}
          aria-label={isCollapsed ? "Expandir menu lateral" : "Colapsar menu lateral"}
          aria-pressed={isCollapsed}
          onClick={() => onCollapsedChange(!isCollapsed)}
          title={isCollapsed ? "Expandir menu lateral" : "Colapsar menu lateral"}
        >
          <ToggleIcon className="size-4" />
        </Button>
      </div>
      <nav
        className={cn(
          "flex flex-1 flex-col gap-1 py-4",
          isCollapsed ? "items-center px-2" : "px-3"
        )}
      >
        {navigationItems.map((item, index) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={isCollapsed ? item.label : undefined}
              className={`flex h-9 items-center rounded-md text-sm transition-colors ${
                index === 0
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              } ${isCollapsed ? "w-10 justify-center px-0" : "w-full gap-2 px-3"}`}
            >
              <Icon className="size-4" />
              <span className={cn(isCollapsed && "sr-only")}>{item.label}</span>
            </a>
          )
        })}
      </nav>
      <div className={cn("p-4", isCollapsed && "px-3")}>
        <Alert
          className={cn(
            "border-sidebar-border bg-sidebar-accent text-sidebar-accent-foreground",
            isCollapsed && "flex h-10 items-center justify-center p-0"
          )}
          title="Modelo em monitoramento"
        >
          <Activity className="size-4" />
          <AlertTitle className={cn("text-sm", isCollapsed && "sr-only")}>
            Modelo em monitoramento
          </AlertTitle>
          <AlertDescription
            className={cn(
              "text-xs text-sidebar-foreground/70",
              isCollapsed && "sr-only"
            )}
          >
            Última calibragem normativa concluída há 2 dias.
          </AlertDescription>
        </Alert>
      </div>
    </aside>
  )
}
