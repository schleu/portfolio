import React from "react"
import { Prova } from "../types"

interface ListaProvasProps {
  provas: Prova[]
  onSelect: (prova: Prova) => void
}

export function ListaProvas({ provas, onSelect }: ListaProvasProps) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">

        <div className="mb-8 text-center">
          <p className="text-xs tracking-widest uppercase text-zinc-600 mb-1">
            Selecione uma prova
          </p>
          <h1 className="text-sm font-medium text-zinc-400">
            {provas.length} prova{provas.length !== 1 ? "s" : ""} disponíve{provas.length !== 1 ? "is" : "l"}
          </h1>
        </div>

        <ul className="flex flex-col gap-2">
          {provas.map((prova, index) => (
            <li key={index}>
              <button
                onClick={() => onSelect(prova)}
                className="
                  w-full flex items-center gap-4 px-5 py-4
                  bg-zinc-900 border border-zinc-800 rounded-2xl
                  hover:border-zinc-700 hover:bg-zinc-800/60
                  transition-all duration-150 text-left group cursor-pointer
                "
              >
                <div className="
                  flex-shrink-0 w-9 h-9 rounded-xl bg-zinc-800
                  flex items-center justify-center
                  text-xs font-mono font-medium text-zinc-500
                  group-hover:bg-zinc-700 transition-colors
                ">
                  {prova.ano}
                </div>

                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-[11px] tracking-widest uppercase text-indigo-400/80 font-medium">
                    {prova.organizadora}
                  </span>
                  <span className="text-sm text-zinc-300 truncate">
                    {prova.prova}
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[11px] text-zinc-600">
                    {prova.questoes.length}Q
                  </span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="text-zinc-700 group-hover:text-zinc-400 transition-colors"
                  >
                    <path
                      d="M4 7h6M8 5l2 2-2 2"
                      stroke="currentColor" strokeWidth="1.3"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}