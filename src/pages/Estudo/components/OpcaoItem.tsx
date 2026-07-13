
const LETRAS = ["A", "B", "C", "D", "E"] as const

type EstadoOpcao = "padrao" | "selecionada" | "correta" | "errada" | "opaca"

interface OpcaoItemProps {
  indice: number
  texto: string
  estado: EstadoOpcao
  desabilitada: boolean
  onClick: () => void
}

const estilos: Record<EstadoOpcao, { container: string; letra: string; texto: string }> = {
  padrao: {
    container: "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800/60",
    letra: "bg-zinc-800 text-zinc-500",
    texto: "text-zinc-400",
  },
  selecionada: {
    container: "border-indigo-500/50 bg-indigo-500/10",
    letra: "bg-indigo-500/30 text-indigo-300",
    texto: "text-zinc-200",
  },
  correta: {
    container: "border-emerald-500/40 bg-emerald-500/10",
    letra: "bg-emerald-500/25 text-emerald-400",
    texto: "text-zinc-200",
  },
  errada: {
    container: "border-red-500/40 bg-red-500/10",
    letra: "bg-red-500/25 text-red-400",
    texto: "text-zinc-400",
  },
  opaca: {
    container: "border-zinc-800/50 bg-zinc-900/50 opacity-40",
    letra: "bg-zinc-800 text-zinc-600",
    texto: "text-zinc-600",
  },
}

export function OpcaoItem({ indice, texto, estado, desabilitada, onClick }: OpcaoItemProps) {
  const s = estilos[estado]
  return (
    <button
      onClick={onClick}
      disabled={desabilitada}
      className={`
        w-full flex items-start gap-3 px-4 py-3.5 rounded-xl border text-left
        transition-all duration-150 group
        ${s.container}
        ${desabilitada ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <span
        className={`
          flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
          text-[11px] font-semibold tracking-wide mt-px transition-colors
          ${s.letra}
        `}
      >
        {LETRAS[indice]}
      </span>
      <span className={`text-sm leading-relaxed transition-colors ${s.texto}`}>
        {texto}
      </span>
      {estado === "correta" && (
        <span className="ml-auto flex-shrink-0 text-emerald-400 text-sm mt-px">✓</span>
      )}
      {estado === "errada" && (
        <span className="ml-auto flex-shrink-0 text-red-400 text-sm mt-px">✗</span>
      )}
    </button>
  )
}
