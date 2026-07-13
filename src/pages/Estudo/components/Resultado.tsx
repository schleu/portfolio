import React from "react"
import { Prova, ResultadoProva } from "../types"

interface ResultadoProps {
  resultado: ResultadoProva
  prova: Prova
  onReiniciar: () => void
}

function getMensagem(percentual: number): string {
  if (percentual === 100) return "Gabarito perfeito!"
  if (percentual >= 80) return "Excelente desempenho"
  if (percentual >= 60) return "Bom resultado"
  if (percentual >= 40) return "Resultado regular"
  return "Continue estudando"
}

function getCorAnel(percentual: number): string {
  if (percentual >= 80) return "#10b981"
  if (percentual >= 50) return "#6366f1"
  return "#ef4444"
}

export function Resultado({ resultado, prova, onReiniciar }: ResultadoProps) {
  const { total, acertos, erros, percentual, gabarito } = resultado
  const raio = 46
  const circunferencia = 2 * Math.PI * raio
  const offset = circunferencia * (1 - percentual / 100)
  const corAnel = getCorAnel(percentual)

  return (
    <div className="flex flex-col items-center gap-6">
      {/* cabeçalho */}
      <div className="text-center">
        <p className="text-xs tracking-widest uppercase text-zinc-600 mb-1">
          {prova.organizadora} · {prova.ano}
        </p>
        <p className="text-sm text-zinc-500">{prova.prova}</p>
      </div>

      {/* card resultado */}
      <div
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden"
      >
        {/* barra topo colorida */}
        <div className="h-1" style={{ background: corAnel }} />

        <div className="p-6 flex flex-col items-center gap-4">
          {/* anel */}
          <div className="relative inline-flex items-center justify-center">
            <svg width="108" height="108" viewBox="0 0 108 108">
              <circle
                cx="54" cy="54" r={raio}
                fill="none" stroke="#27272a" strokeWidth="7"
              />
              <circle
                cx="54" cy="54" r={raio}
                fill="none"
                stroke={corAnel}
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={circunferencia}
                strokeDashoffset={offset}
                transform="rotate(-90 54 54)"
              />
            </svg>
            <div className="absolute text-center">
              <span className="block text-2xl font-semibold text-zinc-100">
                {acertos}/{total}
              </span>
              <span className="block text-xs text-zinc-600">{percentual}%</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base font-medium text-zinc-200">{getMensagem(percentual)}</p>
            <p className="text-sm text-zinc-600 mt-0.5">
              {acertos} acerto{acertos !== 1 ? "s" : ""} · {erros} erro{erros !== 1 ? "s" : ""}
            </p>
          </div>

          {/* breakdown por questão */}
          <div className="w-full flex gap-1.5 mt-1">
            {gabarito.map((g, i) => (
              <div
                key={i}
                title={`Q${i + 1}: ${g.correta ? "Correta" : "Errada"}`}
                className={`
                  flex-1 h-1.5 rounded-full
                  ${g.correta ? "bg-emerald-500" : "bg-red-500/60"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* gabarito detalhado */}
      <div className="w-full flex flex-col gap-2">
        {gabarito.map((g, i) => {
          const questao = prova.questoes[i]
          const respostaCorreta = questao.opcoes[questao.resposta]
          const respostaDada =
            g.respostaSelecionada !== null ? questao.opcoes[g.respostaSelecionada] : "—"

          return (
            <div
              key={i}
              className={`
                rounded-xl border px-4 py-3 flex items-start gap-3
                ${g.correta
                  ? "border-emerald-900/50 bg-emerald-950/30"
                  : "border-red-900/50 bg-red-950/20"
                }
              `}
            >
              <span
                className={`
                  w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center
                  text-[10px] font-bold mt-0.5
                  ${g.correta ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}
                `}
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-[11px] text-zinc-600 truncate">{questao.categoria}</p>
                <p className="text-xs text-zinc-400 line-clamp-1">{questao.pergunta}</p>
                {!g.correta && (
                  <p className="text-[11px] text-zinc-600 mt-0.5">
                    <span className="text-red-400/70">Sua resposta:</span> {respostaDada}
                  </p>
                )}
                <p className="text-[11px]">
                  <span className="text-emerald-400/70">Correta:</span>{" "}
                  <span className="text-zinc-400">{respostaCorreta}</span>
                </p>
              </div>
              <span className="ml-auto flex-shrink-0 text-sm mt-0.5">
                {g.correta ? (
                  <span className="text-emerald-500">✓</span>
                ) : (
                  <span className="text-red-500">✗</span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      <button
        onClick={onReiniciar}
        className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-medium tracking-wide transition-colors"
      >
        Refazer prova
      </button>
    </div>
  )
}
