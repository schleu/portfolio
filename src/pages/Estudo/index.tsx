import { useState } from "react"
import { ProvaPage } from "./ProvaPage"
import { PROVA_MOCK } from "./provas"
import { Prova } from "./types"
import { ListaProvas } from "./components/ListaProvas"

export default function Provas() {
  const [selected, setSelected] = useState<Prova|null>(null)

  function handleSelected(p:Prova){
    setSelected(p)
  }

  return  selected ? <ProvaPage prova={selected} /> : <ListaProvas provas={PROVA_MOCK} onSelect={handleSelected} />
}
