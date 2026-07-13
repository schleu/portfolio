import { useEffect, useState } from "react";
import { QuestionCard } from "./components/questionCard";
import { questions } from "./quetions";
import { Answer, Prova } from "./schema";

export function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number|null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizData, setQuizData] = useState<Prova|null>(null)
  
  const getQuestions = ()=>{
    if( questions.length ===  1){
      return questions[0]
    }
    
    const random = Math.round(Math.random() * questions.length)

      console.log(random)
    const quizData = questions[random]

    return quizData || []
  }

  useEffect(()=>{
    if(quizData === null){
      const data = getQuestions()
      setQuizData(data)
    }
  },[])

  if(!quizData) return <></>

  const pergunta = quizData?.perguntas[currentIndex];
  const total = quizData?.perguntas.length;
  const progress = ((currentIndex) / total) * 100;

  

  function handleConfirm() {
    if (selected === null) return;
    const correct = selected === pergunta.opcaoCorreta;
    if (correct) setScore((s) => s + 1);
    const newAnswes:Answer = { 'selected':selected, 'correct':correct }
    setAnswers((prev) => [
      ...prev, newAnswes
    ]);
    setConfirmed(true);
  }

  function handleNext() {
    if (currentIndex + 1 >= total) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }

  const percentage = Math.round((score / total) * 100);

  if (finished) {
    return (
      <div className="min-h-screen bg-[#0f0f13] flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-lg">
          {/* Result card */}
          <div className="bg-[#18181f] rounded-2xl border border-white/8 overflow-hidden">
            {/* Top accent */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  percentage >= 80
                    ? "linear-gradient(90deg,#22c55e,#86efac)"
                    : percentage >= 50
                    ? "linear-gradient(90deg,#f59e0b,#fcd34d)"
                    : "linear-gradient(90deg,#ef4444,#fca5a5)",
              }}
            />

            <div className="p-8 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
                {quizData.categoria}
              </p>

              {/* Score ring */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#ffffff0d"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke={
                      percentage >= 80
                        ? "#22c55e"
                        : percentage >= 50
                        ? "#f59e0b"
                        : "#ef4444"
                    }
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - percentage / 100)}`}
                    transform="rotate(-90 60 60)"
                    style={{ transition: "stroke-dashoffset 1s ease" }}
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="block text-3xl font-bold text-white">
                    {score}/{total}
                  </span>
                  <span className="block text-xs text-white/40">{percentage}%</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">
                {percentage === 100
                  ? "Perfeito! 🎉"
                  : percentage >= 80
                  ? "Excelente!"
                  : percentage >= 50
                  ? "Bom resultado"
                  : "Continue praticando"}
              </h2>
              <p className="text-white/40 text-sm mb-8">
                Você acertou {score} de {total} perguntas
              </p>

              {/* Answer breakdown */}
              <div className="grid grid-cols-5 gap-2 mb-8">
                {answers.map((a, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full ${
                      a.correct ? "bg-green-500" : "bg-red-500/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleRestart}
                className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f13] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs tracking-[0.2em] uppercase text-white/30">
            {quizData.categoria}
          </span>
          <span className="text-xs font-mono text-white/30">
            {currentIndex + 1} / {total}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/8 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-violet-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <QuestionCard 
          pergunta={pergunta}
          questionNumber={currentIndex+1}
          isCorrect
          onSelect={()=>{}}
        />
        

        {/* Action button */}
        {!confirmed ? (
          <button
            onClick={handleConfirm}
            disabled={selected === null}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 ${
              selected !== null
                ? "bg-violet-600 hover:bg-violet-500 text-white cursor-pointer"
                : "bg-white/5 text-white/20 cursor-not-allowed"
            }`}
          >
            Confirmar resposta
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors"
          >
            {currentIndex + 1 >= total ? "Ver resultado" : "Próxima pergunta →"}
          </button>
        )}

        {/* Score indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {quizData.perguntas.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i < answers.length
                  ? answers[i].correct
                    ? "w-2 h-2 bg-green-500"
                    : "w-2 h-2 bg-red-500/60"
                  : i === currentIndex
                  ? "w-4 h-2 bg-violet-500"
                  : "w-2 h-2 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
