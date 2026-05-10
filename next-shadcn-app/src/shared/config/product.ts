import { Archive, BarChart3, FileSearch, Gauge, ShieldCheck } from "lucide-react"

export const productConfig = {
  name: "NormaIQ",
  tagline: "Compliance AI",
  sectionLabel: "Sistema interno de conformidade",
}

export const navigationItems = [
  { label: "Visão geral", href: "/", icon: Gauge },
  { label: "Arquivos", href: "/arquivos", icon: Archive },
  { label: "Análises IA", href: "/analises", icon: FileSearch },
  { label: "Normas", href: "/normas", icon: ShieldCheck },
  { label: "Relatórios", href: "/relatorios", icon: BarChart3 },
]
