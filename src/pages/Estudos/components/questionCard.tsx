import { useState } from "react";
import { Pergunta } from "../schema";

interface Props{
    pergunta:Pergunta
    questionNumber:number
    isCorrect: boolean|null
    onSelect:(o:number)=>void
}

const LETTERS = ["A", "B", "C", "D"];

export function QuestionCard({questionNumber, pergunta, isCorrect, onSelect}:Props){
    const [selected, setSelected] = useState<number>(0)

    function handleSelect(idx:number) {
        if (isCorrect !== null) return;
        setSelected(idx);
    }

    return (
        <>
            {/* Question card */}
            <div className="bg-[#18181f] rounded-2xl border border-white/8 p-7 mb-4">
                <p className="text-[11px] tracking-[0.18em] uppercase text-violet-400/70 mb-4">
                Pergunta {questionNumber}
                </p>
                <h2 className="text-white text-xl font-semibold leading-snug">
                {pergunta.pergunta}
                </h2>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2.5 mb-5">
                {pergunta.opcoes.map((opcao, idx) => 
                    <Option  
                        text={opcao}
                        isSelected={selected === idx} 
                        letter={LETTERS[idx]}
                        isCorrect={idx === pergunta.opcaoCorreta}
                        onSelect={()=>handleSelect(idx)}
                    />
                )}
            </div>
        </>
    )
}

interface PropsOption{
    isSelected:Boolean
    isCorrect: Boolean
    letter: string
    text:string
    onSelect: ()=>void
}

function Option({isSelected, isCorrect, letter, text, onSelect}:PropsOption){    
    const confirmed = isCorrect !== null
    const isWrong = confirmed && isSelected && !isCorrect;
    const showCorrect = confirmed && isCorrect;

    let borderColor = "border-white/8";
    let bg = "bg-[#18181f]";
    let letterBg = "bg-white/5";
    let letterColor = "text-white/30";
    let textColor = "text-white/60";
    let cursor = "cursor-pointer hover:border-white/20 hover:bg-white/4";

    if (isSelected && !confirmed) {
        borderColor = "border-violet-500/60";
        bg = "bg-violet-500/8";
        letterBg = "bg-violet-500/20";
        letterColor = "text-violet-300";
        textColor = "text-white";
    }

    if (showCorrect) {
        borderColor = "border-green-500/50";
        bg = "bg-green-500/8";
        letterBg = "bg-green-500/20";
        letterColor = "text-green-400";
        textColor = "text-white";
        cursor = "";
    }

    if (isWrong) {
        borderColor = "border-red-500/50";
        bg = "bg-red-500/8";
        letterBg = "bg-red-500/20";
        letterColor = "text-red-400";
        textColor = "text-white/70";
        cursor = "";
    }

    if (confirmed && !isSelected && !isCorrect) {
        cursor = "";
        textColor = "text-white/25";
    }

    return (
        <button
            onClick={onSelect}
            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border ${borderColor} ${bg} ${cursor} transition-all duration-200 text-left w-full group`}
        >
        <span
            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${letterBg} ${letterColor} transition-colors`}
        >
            {letter}
        </span>
        <span className={`text-sm font-medium ${textColor} transition-colors`}>
            {text}
        </span>
        {showCorrect && (
            <span className="ml-auto text-green-400 text-xs">✓</span>
        )}
        {isWrong && (
            <span className="ml-auto text-red-400 text-xs">✗</span>
        )}
        </button>
    );
}