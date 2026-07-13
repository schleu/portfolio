import React from "react"

import { OpcaoItem } from "./OpcaoItem"
import { GabaritoEntry, Questao } from "../types"

interface QuestaoCardProps {
  questao: Questao
  numero: number
  entradaGabarito: GabaritoEntry
  confirmada: boolean
  onSelecionar: (indice: number) => void
  onAvancar: () => void
  ultimaQuestao: boolean
}

export function QuestaoCard({
  questao,
  numero,
  entradaGabarito,
  confirmada,
  onSelecionar,
  onAvancar,
  ultimaQuestao,
}: QuestaoCardProps) {
  const { respostaSelecionada } = entradaGabarito

  function getEstadoOpcao(indice: number) {
    if (!confirmada) {
      return respostaSelecionada === indice ? "selecionada" : "padrao"
    }
    if (indice === questao.resposta) return "correta"
    if (indice === respostaSelecionada) return "errada"
    return "opaca"
  }

  return (
    <div className="flex flex-col gap-3">
      {/* categoria badge */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] tracking-widest uppercase font-medium text-indigo-400/80">
          {questao.categoria}
        </span>
        <span className="text-[11px] text-zinc-700">· Q{numero}</span>
      </div>

      {/* enunciado */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 mb-1">
        <p className="text-zinc-200 text-[15px] leading-relaxed" dangerouslySetInnerHTML={{__html: questao.pergunta}}></p>
      </div>

      {/* opções */}
      <div className="flex flex-col gap-2">
        {questao.opcoes.map((opcao, i) => (
          <OpcaoItem
            key={i}
            indice={i}
            texto={opcao}
            estado={getEstadoOpcao(i)}
            desabilitada={confirmada}
            onClick={() => onSelecionar(i)}
          />
        ))}
      </div>

      {/* ação */}
      <div className="mt-2">
        {!confirmada ? (
          <button
            onClick={() => respostaSelecionada !== null && onAvancar()}
            disabled={respostaSelecionada === null}
            className={`
              w-full py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200
              ${respostaSelecionada !== null
                ? "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer"
                : "bg-zinc-800/60 text-zinc-600 cursor-not-allowed"
              }
            `}
          >
            Confirmar resposta
          </button>
        ) : (
          <button
            onClick={onAvancar}
            className="w-full py-3 rounded-xl text-sm font-medium tracking-wide bg-zinc-100 hover:bg-white text-zinc-900 transition-colors cursor-pointer"
          >
            {ultimaQuestao ? "Ver resultado" : "Próxima questão →"}
          </button>
        )}
      </div>
    </div>
  )
}
