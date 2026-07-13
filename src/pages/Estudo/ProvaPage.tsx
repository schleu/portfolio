import React, { useState } from "react"
import { ProvaHeader } from "./components/ProvaHeader"
import { QuestaoCard } from "./components/QuestaoCard"
import { Resultado } from "./components/Resultado"
import { Prova } from "./types"
import { FlashcardMode } from "./components/FlashCard/FlashcardMode"
import { useProva } from "./useProva"

type Modo = "quiz" | "flashcard"

interface ProvaPageProps {
  prova: Prova
}

export function ProvaPage({ prova }: ProvaPageProps) {
  const [modo, setModo] = useState<Modo>("quiz")
  const {
    questaoAtual,
    gabarito,
    finalizado,
    resultado,
    responderQuestao,
    avancar,
    reiniciar,
  } = useProva
  (prova)

  const entradaAtual = gabarito[questaoAtual]
  const confirmada = entradaAtual?.correta !== null
  const ultimaQuestao = questaoAtual === prova.questoes.length - 1

  function handleSelecionar(indice: number) {
    if (confirmada) return
    responderQuestao(indice)
  }

  if (finalizado && resultado) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-xl">
          <Resultado resultado={resultado} prova={prova} onReiniciar={reiniciar} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Modo toggle */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-xl p-1 mb-6 w-fit mx-auto">
          {(["quiz", "flashcard"] as Modo[]).map((m) => (
            <button
              key={m}
              onClick={() => setModo(m)}
              className={`
                px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all
                ${modo === m
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-300"
                }
              `}
            >
              {m === "quiz" ? "Quiz" : "Flashcard"}
            </button>
          ))}
        </div>

        <ProvaHeader prova={prova} questaoAtual={questaoAtual} />

        {modo === "quiz" ? (
          <QuestaoCard
            questao={prova.questoes[questaoAtual]}
            numero={questaoAtual + 1}
            entradaGabarito={entradaAtual}
            confirmada={confirmada}
            onSelecionar={handleSelecionar}
            onAvancar={avancar}
            ultimaQuestao={ultimaQuestao}
          />
        ) : (
          <FlashcardMode prova={prova} questaoAtual={questaoAtual} onAvancar={avancar} ultimaQuestao={ultimaQuestao} />
        )}

        {/* dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {prova.questoes.map((_, i) => {
            const entry = gabarito[i]
            const respondida = entry?.correta !== null
            return (
              <div
                key={i}
                className={`
                  rounded-full transition-all duration-300
                  ${i === questaoAtual
                    ? "w-4 h-1.5 bg-indigo-500"
                    : respondida
                    ? entry.correta
                      ? "w-2 h-1.5 bg-emerald-500"
                      : "w-2 h-1.5 bg-red-500/60"
                    : "w-2 h-1.5 bg-zinc-700"
                  }
                `}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

