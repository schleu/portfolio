import { useState } from "react"
import { Questao } from "../types"



const LETRAS = ["A", "B", "C", "D", "E"] as const

interface FlipCardProps {
  questao: Questao
  numero: number
}

export function FlipCard({ questao, numero }: FlipCardProps) {
  const [virada, setVirada] = useState(false)

  const opcao = questao.opcoes.find((op,i)=>i===questao.resposta)

  return (
    <div
      className="relative w-full cursor-pointer select-none"
      style={{ perspective: "1200px", height: "320px" }}
      onClick={() => setVirada((v) => !v)}
      role="button"
      aria-pressed={virada}
      aria-label={virada ? "Ver pergunta" : "Ver resposta"}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: virada ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente — pergunta */}
        <div
          className="absolute inset-0 rounded-2xl border border-zinc-800 bg-zinc-900 flex flex-col p-6 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] tracking-widest uppercase text-indigo-400/80 font-medium">
              {questao.categoria}
            </span>
            <span className="text-[10px] font-mono text-zinc-700">Q{numero}</span>
          </div>

          <p className="text-zinc-200 text-[15px] leading-relaxed flex-1">
            {questao.pergunta}
          </p>

          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-zinc-600">
            <span className="text-xs">Toque para ver a resposta</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6M7 4l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Verso — resposta */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-900/50 bg-zinc-900 flex flex-col p-6 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div
              className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl border transition-none border-emerald-500/40 bg-emerald-500/10"
            >
              <span className="text-[13px] leading-snug text-zinc-200 font-medium" >
                {opcao}
              </span>
              
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-1.5 text-zinc-600">
            <span className="text-xs">Toque para voltar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
