export interface Pergunta {
    pergunta: string
    opcoes: string[]
    opcaoCorreta: number
}

export interface Prova {
    categoria: string
    perguntas: Pergunta[]
}



export interface Answer{
  selected:number, 
  correct:boolean
}

interface questao {
    categoria: string
    pergunta: string
    opcoes: string[]
    resposta: number
}

interface Prova{
    organizadora: string
    ano: number
    prova:string
    questoes:questao[]
}
