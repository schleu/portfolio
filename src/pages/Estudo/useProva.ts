import { useState, useCallback, useMemo } from "react"
import { GabaritoEntry, Prova, ResultadoProva } from "./types"


interface UseProvaReturn {
  questaoAtual: number
  gabarito: GabaritoEntry[]
  finalizado: boolean
  resultado: ResultadoProva | null
  responderQuestao: (respostaSelecionada: number) => void
  avancar: () => void
  reiniciar: () => void
}

export function useProva(prova: Prova): UseProvaReturn {
  const total = prova.questoes.length

  const gabaritoInicial: GabaritoEntry[] = useMemo(
    () =>
      prova.questoes.map((_, i) => ({
        questaoIndex: i,
        respostaSelecionada: null,
        correta: null,
      })),
    [prova]
  )

  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [gabarito, setGabarito] = useState<GabaritoEntry[]>(gabaritoInicial)
  const [finalizado, setFinalizado] = useState(false)

  const responderQuestao = useCallback(
    (respostaSelecionada: number) => {
      const correta = respostaSelecionada === prova.questoes[questaoAtual].resposta
      setGabarito((prev) =>
        prev.map((entry) =>
          entry.questaoIndex === questaoAtual
            ? { ...entry, respostaSelecionada, correta }
            : entry
        )
      )
    },
    [questaoAtual, prova.questoes]
  )

  const avancar = useCallback(() => {
    if (questaoAtual + 1 >= total) {
      setFinalizado(true)
    } else {
      setQuestaoAtual((q) => q + 1)
    }
  }, [questaoAtual, total])

  const reiniciar = useCallback(() => {
    setQuestaoAtual(0)
    setGabarito(gabaritoInicial)
    setFinalizado(false)
  }, [gabaritoInicial])

  const resultado: ResultadoProva | null = useMemo(() => {
    if (!finalizado) return null
    const acertos = gabarito.filter((g) => g.correta).length
    return {
      total,
      acertos,
      erros: total - acertos,
      percentual: Math.round((acertos / total) * 100),
      gabarito,
    }
  }, [finalizado, gabarito, total])

  return { questaoAtual, gabarito, finalizado, resultado, responderQuestao, avancar, reiniciar }
}
