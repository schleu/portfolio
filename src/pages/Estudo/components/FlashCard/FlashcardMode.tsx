// flashcard inline (usa FlipCard)

import { Prova } from "../../types"
import { FlipCard } from "../FlipCard"

interface FlashcardModeProps {
  prova: Prova
  questaoAtual: number
  onAvancar: () => void
  ultimaQuestao: boolean
}

export function FlashcardMode({ prova, questaoAtual, onAvancar, ultimaQuestao }: FlashcardModeProps) {
  return (
    <div className="flex flex-col gap-4">
      <FlipCard questao={prova.questoes[questaoAtual]} numero={questaoAtual + 1} />
      <button
        onClick={onAvancar}
        className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-medium tracking-wide transition-colors"
      >
        {ultimaQuestao ? "Ver resultado" : "Próxima questão →"}
      </button>
    </div>
  )
}
