import React from "react"
import { Prova } from "../types"


interface ProvaHeaderProps {
  prova: Prova
  questaoAtual: number
}

export function ProvaHeader({ prova, questaoAtual }: ProvaHeaderProps) {
  const total = prova.questoes.length
  const progresso = Math.round((questaoAtual / total) * 100)

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-1">
        <div>
          <p className="text-xs tracking-widest uppercase text-zinc-500 mb-0.5">
            {prova.orgao} · {prova.organizadora} · {prova.ano}
          </p>
          <h1 className="text-sm font-medium text-zinc-300">{prova.prova}</h1>
        </div>
        <span className="text-xs font-mono text-zinc-600 pt-1">
          {questaoAtual + 1}/{total}
        </span>
      </div>

      <div className="mt-4 h-px bg-zinc-800 relative overflow-hidden rounded-full">
        <div
          className="absolute inset-y-0 left-0 bg-indigo-500 transition-all duration-500"
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  )
}
