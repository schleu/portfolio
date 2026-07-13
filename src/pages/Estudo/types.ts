export interface Questao {
  categoria: string
  pergunta: string
  opcoes: string[]
  resposta: number
}

export interface Prova {
  organizadora: string
  ano: number
  prova: string
  questoes: Questao[]
  orgao: string
}

export type GabaritoEntry = {
  questaoIndex: number
  respostaSelecionada: number | null
  correta: boolean | null
}

export type StatusQuestao = "pendente" | "correta" | "errada"

export interface ResultadoProva {
  total: number
  acertos: number
  erros: number
  percentual: number
  gabarito: GabaritoEntry[]
}
