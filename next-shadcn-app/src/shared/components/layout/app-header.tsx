import { Bell, Search, Settings2 } from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { productConfig } from "@/shared/config/product"

type AppHeaderProps = {
  title: string
}

export function AppHeader({ title }: AppHeaderProps) {
  return (
    <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b bg-card px-4 py-3 md:px-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {productConfig.sectionLabel}
        </p>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative hidden sm:block">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-9 w-64 pl-8"
            placeholder="Buscar arquivo, norma ou área"
          />
        </div>
        <Button variant="outline" size="icon" aria-label="Notificações">
          <Bell className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Configurações">
          <Settings2 className="size-4" />
        </Button>
      </div>
    </header>
  )
}
