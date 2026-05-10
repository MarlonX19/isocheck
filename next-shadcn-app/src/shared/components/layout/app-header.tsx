"use client"

import { useEffect, useRef, useState } from "react"
import {
  Bell,
  Bot,
  CheckCircle2,
  Clock3,
  FileWarning,
  Search,
  Settings2,
  ShieldAlert,
  UploadCloud,
  X,
} from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { productConfig } from "@/shared/config/product"

type AppHeaderProps = {
  title: string
}

const initialNotifications = [
  {
    id: "upload-validado",
    title: "Upload validado",
    description: "O PDF enviado passou pela verificacao inicial.",
    icon: UploadCloud,
  },
  {
    id: "risco-lgpd",
    title: "Ajuste LGPD pendente",
    description: "Foram encontrados pontos que exigem revisao de privacidade.",
    icon: ShieldAlert,
  },
  {
    id: "comparacao-pronta",
    title: "Comparacao normativa concluida",
    description: "A analise cruzada com ISO 27001 esta disponivel.",
    icon: CheckCircle2,
  },
  {
    id: "evidencias",
    title: "Evidencias insuficientes",
    description: "Tres controles precisam de documentos complementares.",
    icon: FileWarning,
  },
  {
    id: "ia-processando",
    title: "IA processando novo lote",
    description: "A extracao de processos segue em andamento.",
    icon: Bot,
  },
  {
    id: "prazo-revisao",
    title: "Revisao vence hoje",
    description: "O plano de acao precisa ser revisado ate o fim do dia.",
    icon: Clock3,
  },
]

export function AppHeader({ title }: AppHeaderProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const visibleNotifications = notifications.slice(0, 5)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

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
        <div className="relative" ref={notificationsRef}>
          <Button
            variant="outline"
            size="icon"
            aria-label="Notificações"
            aria-expanded={isNotificationsOpen}
            onClick={() => setIsNotificationsOpen((isOpen) => !isOpen)}
          >
            <Bell className="size-4" />
            {notifications.length > 0 && (
              <span className="absolute -right-1 -top-1 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-4 text-primary-foreground">
                {notifications.length}
              </span>
            )}
          </Button>

          {isNotificationsOpen && (
            <div className="absolute right-0 top-11 z-50 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg">
              <div className="border-b px-4 py-3">
                <p className="text-sm font-semibold">Notificações</p>
                <p className="text-xs text-muted-foreground">
                  Atualizações recentes da análise
                </p>
              </div>

              <div className="max-h-[420px] overflow-y-auto">
                {visibleNotifications.length > 0 ? (
                  visibleNotifications.map((notification) => {
                    const Icon = notification.icon

                    return (
                      <div
                        key={notification.id}
                        className="grid grid-cols-[36px_1fr_28px] gap-3 border-b px-4 py-3 last:border-b-0"
                      >
                        <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                          <Icon className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-tight">
                            {notification.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-xs"
                          className="mt-0.5 text-muted-foreground hover:text-foreground"
                          aria-label={`Dispensar ${notification.title}`}
                          onClick={() =>
                            setNotifications((currentNotifications) =>
                              currentNotifications.filter(
                                (item) => item.id !== notification.id
                              )
                            )
                          }
                        >
                          <X className="size-3.5" />
                        </Button>
                      </div>
                    )
                  })
                ) : (
                  <div className="px-4 py-8 text-center">
                    <p className="text-sm font-medium">Tudo em dia</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Nenhuma notificação no momento.
                    </p>
                  </div>
                )}
              </div>

              {notifications.length > 5 && (
                <div className="border-t p-3">
                  <Button variant="outline" className="w-full">
                    Ver mais
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
        <Button variant="outline" size="icon" aria-label="Configurações">
          <Settings2 className="size-4" />
        </Button>
      </div>
    </header>
  )
}
