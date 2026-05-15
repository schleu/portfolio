import { useEffect, useMemo, useState } from 'react';
import { mockedExercises, workoutMoked } from './data';
import { FiVideo  } from 'react-icons/fi'
import { CustomExercise, Exercise, Workout } from './types';

export function FitPage(): JSX.Element {
  const [selectedWorkout, setSelectedWorkout] = useState<string>('A');
  const [customExercises, setCustomExercises] = useState<CustomExercise[]>([]);
  const [availableExercises, setAvailableExercises] = useState<Exercise[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const allExercises: Exercise[] = mockedExercises;

  const workouts: Workout[] = workoutMoked

  useEffect(() => {
    setAvailableExercises(allExercises);
  }, []);

  const currentWorkout = useMemo(() => {
    return workouts.find(w=>w.training == selectedWorkout) as Workout
  }, [selectedWorkout]);


  console.log(currentWorkout)

  const addExerciseToWorkout = (exercise: Exercise): void => {
    setCustomExercises((prev) => [
      ...prev,
      {
        ...exercise,
        series: 3,
        repetitions:12,
        order: prev.length + 1,
        id: `${Date.now()}-${Math.random()}`,
      },
    ]);

    setAvailableExercises((prev) =>
      prev.filter((item) => item.name !== exercise.name)
    );
  };

  const removeExercise = (id: string): void => {
    const removedExercise = customExercises.find((exercise) => exercise.id === id);

    if (removedExercise) {
      setAvailableExercises((prev) => [
        ...prev,
        removedExercise
      ]);
    }

    setCustomExercises((prev) =>
      prev
        .filter((exercise) => exercise.id !== id)
        .map((exercise, index) => ({
          ...exercise,
          order: index + 1,
        }))
    );
  };

  const updateExercise = (
    id: string,
    field: keyof CustomExercise,
    value: string | number
  ): void => {
    setCustomExercises((prev) =>
      prev.map((exercise) =>
        exercise.id === id
          ? {
              ...exercise,
              [field]: value,
            }
          : exercise
      )
    );
  };

  const exportToJson = (): void => {
    const data = {
      workout: selectedWorkout,
      createdAt: new Date().toISOString(),
      exercises: customExercises,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `treino-${selectedWorkout}.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba\(34,197,94,0.15\),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="mb-10 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-2xl text-sm font-semibold mb-4">
                💪 Workout Manager Pro
              </div>

              <h1 className="text-5xl font-black tracking-tight leading-tight">
                Seu treino,
                <span className="text-green-400"> organizado.</span>
              </h1>

              <p className="text-zinc-400 mt-4 max-w-2xl text-lg leading-relaxed">
                Gerencie exercícios, personalize seus treinos e acompanhe vídeos de execução em uma interface moderna.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-800/70 border border-zinc-700 rounded-3xl p-5 text-center min-w-[110px]">
                <div className="text-3xl font-black text-green-400">3</div>
                <div className="text-zinc-400 text-sm mt-1">Treinos</div>
              </div>

              <div className="bg-zinc-800/70 border border-zinc-700 rounded-3xl p-5 text-center min-w-[110px]">
                <div className="text-3xl font-black text-blue-400">
                  {Object.values(workouts).reduce((acc, item) => acc + item.exercises.length, 0)}
                </div>
                <div className="text-zinc-400 text-sm mt-1">Exercícios</div>
              </div>

              <div className="bg-zinc-800/70 border border-zinc-700 rounded-3xl p-5 text-center min-w-[110px]">
                <div className="text-3xl font-black text-red-400">YT</div>
                <div className="text-zinc-400 text-sm mt-1">Vídeos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {['A', 'B', 'C'].map((workout) => (
            <button
              key={workout}
              onClick={() => setSelectedWorkout(workout)}
              className={`group relative overflow-hidden px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 border ${
                selectedWorkout === workout
                  ? 'bg-green-500 text-black border-green-400 scale-105 shadow-[0_0_30px_rgba(34,197,94,0.35)]'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 border-zinc-700 hover:border-zinc-500'
              }`}
            >
              <span className="relative z-10">Treino {workout}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 mb-10">
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-green-400 font-bold text-sm tracking-widest">
                  TREINO ATUAL
                </span>
              </div>

              <div className="w-20 h-20 rounded-[28px] bg-green-500/10 border border-green-500/20 flex items-center justify-center text-4xl font-black text-green-400">
                {selectedWorkout}
              </div>
            </div>

            <div className="space-y-4">
              {currentWorkout.exercises
                .sort((a,b)=>a.order - b.order)
                .map((exercise) => {
                const exer = allExercises.find(e=>e.id === exercise.id)

                return (
                <div
                  key={exercise.order}
                  className="group bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-green-500/40 rounded-3xl p-5 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-500/15 text-green-400 border border-green-500/20 text-xs px-3 py-1.5 rounded-xl font-bold">
                          {exercise.order}
                        </span>

                        <span className="bg-zinc-700/70 text-zinc-300 text-xs px-3 py-1.5 rounded-xl font-semibold">
                          {exercise.series}
                        </span>

                        <span className="bg-zinc-700/70 text-zinc-300 text-xs px-3 py-1.5 rounded-xl font-semibold">
                          {exercise.repetitions}
                        </span>
                      </div>


                      <div>
                        <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                          {exer?.name}
                        </h3>
                        <span>
                          {exer?.muscle}
                        </span>
                      </div>
                    </div>

                    <img src={Array.isArray(exer?.image) ? exer?.image[0] : exer?.image} alt="" className='w-20 h-20 rounded-md' />

                    <div>
                      <iframe id="ytplayer" width="320" height="180" src={exer?.video+"?origin=http://example.com"}  />

                    </div>
                  </div>
                </div>
              )
              })}
            </div>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-2xl h-fit sticky top-6">
            <div className="mb-6">
              <span className="text-blue-400 font-bold text-sm tracking-widest">
                EXTRAS
              </span>
              <h2 className="text-3xl font-black mt-2">
                Biblioteca
              </h2>
            </div>

            <div className="space-y-3 max-h-[700px] overflow-auto pr-2 custom-scrollbar">
              {availableExercises
              .sort((a,b)=>a.muscle.toLowerCase().localeCompare(b.muscle.toLowerCase()))
              .map((exercise) => (
                <div
                  key={exercise.name}
                  className="bg-zinc-800/80 border border-zinc-700 hover:border-blue-500/40 rounded-3xl p-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    
                    <h3 className="font-bold text-lg leading-tight">
                      {exercise.name}
                    </h3>

                    <div className="inline-flex mt-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-xl text-xs font-bold">
                      {exercise.muscle || 'Geral'}
                    </div>
                    
                    {exercise.image.map(i=>(
                    <img key={i} src={i}  alt="" className='w-20 h-20 rounded-md' />
                    ))}

                    {/* <button
                      onClick={() => setPreviewImage(exercise.image)}
                      className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300"
                    >
                      🖼️ Imagem
                    </button> */}
                  
                    {/* <div>
                      <a
                        href={exercise.video}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-red-500 hover:bg-red-400 transition-all duration-300 rounded-2xl text-sm font-bold w-fit"
                      >
                        <FiVideo />
                        <span className='hidden md:block'>
                          Vídeo
                        </span>
                      </a>
                    </div> */}

                    <button
                      onClick={() => addExerciseToWorkout(exercise)}
                      className="flex-1 bg-green-500 hover:bg-green-400 text-black transition-all duration-300 px-4 py-3 rounded-2xl text-sm font-black hover:scale-[1.02] max-w-fit"
                    >
                      + 
                      <span className='hidden md:block'>
                        Adicionar
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {previewImage && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-[32px] overflow-hidden shadow-2xl">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-400 text-white w-12 h-12 rounded-2xl font-black text-lg"
              >
                ✕
              </button>

              <img
                src={previewImage}
                alt="Exercício"
                className="w-full h-[70vh] object-cover"
              />
            </div>
          </div>
        )}

        {customExercises.length > 0 && (
          <div className="mb-10 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="text-green-400 font-bold text-sm tracking-widest">
                  PERSONALIZADO
                </span>
                <h2 className="text-3xl font-black mt-2">
                  Meu treino extra
                </h2>
              </div>

              <div className="flex gap-3 flex-wrap">
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
                  {customExercises.length} exercícios
                </div>

                <button
                  onClick={exportToJson}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                >
                  ⬇ Exportar JSON
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {customExercises.map((exercise, index) => (
                <div
                  key={`${exercise.name}-${index}`}
                  className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-bold text-lg leading-tight">
                      {exercise.name}
                    </h3>

                    <button
                      onClick={() => removeExercise(exercise.id)}
                      className="bg-red-500/15 hover:bg-red-500 text-red-400 hover:text-white w-10 h-10 rounded-2xl transition-all duration-300 font-black"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div>
                      <label className="text-zinc-400 text-sm font-semibold block mb-2">
                        Ordem
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={exercise.order}
                        onChange={(e) =>
                          updateExercise(exercise.id, 'order', Number(e.target.value))
                        }
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-green-500 outline-none rounded-2xl px-4 py-3 font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 text-sm font-semibold block mb-2">
                        Séries
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={exercise.series}
                        onChange={(e) =>
                          updateExercise(exercise.id, 'series', Number(e.target.value))
                        }
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-green-500 outline-none rounded-2xl px-4 py-3 font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-zinc-400 text-sm font-semibold block mb-2">
                        Repetições
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={exercise.repetitions}
                        onChange={(e) =>
                          updateExercise(exercise.id, 'repetitions', Number(e.target.value))
                        }
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-green-500 outline-none rounded-2xl px-4 py-3 font-bold"
                      />
                    </div>
                  </div>

                  <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl px-4 py-3 mb-4">
                    <span className="text-zinc-400 text-sm">Configuração:</span>
                    <div className="text-green-400 font-black text-lg mt-1">
                      #{exercise.order} • {exercise.series}x{exercise.repetitions}
                    </div>
                  </div>

                  <a
                    href={exercise.video}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-red-500 hover:bg-red-400 transition-all duration-300 px-4 py-3 rounded-2xl text-sm font-bold"
                  >
                    ▶ Assistir vídeo
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-xl">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-black mb-3">Descanso</h3>
            <p className="text-zinc-400 leading-relaxed">
              Descanse entre 60 e 90 segundos entre as séries para hipertrofia.
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-xl">
            <div className="text-4xl mb-4">🏋️</div>
            <h3 className="text-xl font-black mb-3">Execução</h3>
            <p className="text-zinc-400 leading-relaxed">
              Priorize a execução correta antes de aumentar a carga.
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-6 shadow-xl">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-black mb-3">Progressão</h3>
            <p className="text-zinc-400 leading-relaxed">
              Evolua gradualmente as cargas e acompanhe sua consistência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
