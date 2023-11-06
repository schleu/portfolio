import { useEffect, useState } from "react";
import { Pomodoro } from "./components/Pomodoro";
import { Task, Tasks } from "./components/Tasks";

const mokedTasks: Task[] = [
  { name: "PWA", done: true },
  { name: "Design Patterns", done: true },
  { name: "NextJs 13", done: true },
  { name: "NestJs", done: false },
  { name: "Adicionar animação port", done: false },
  { name: "Wordpress", done: false },
  { name: "Pomodoro App", done: false },
];

export function PomodoroPage() {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(mokedTasks);
  const [actualTask, setActualTask] = useState(0);

  useEffect(() => {
    const i = mokedTasks.findIndex((e) => e.done === false);
    setActualTask(i);
  }, []);

  function onTimerFinished() {
    const lengthTask = tasks.length - 1;

    if (lengthTask === actualTask) {
      setPause((e) => !e);
    } else {
      const t = tasks.map((e, idx) =>
        idx === actualTask ? { ...e, done: true } : e
      );
      setTasks(t);

      setActualTask((e) => (e < lengthTask ? e + 1 : 0));
    }
  }

  return (
    <div className="w-full flex flex-col gap-8 p-10">
      <div className="flex gap-2 justify-center">
        <button onClick={() => setStart((e) => !e)}>start</button>
        <button onClick={() => setPause((e) => !e)}>pause</button>
        <button onClick={() => setReset((e) => !e)}>reset</button>
      </div>
      <Pomodoro
        pause={pause}
        restart={reset}
        start={start}
        onFinishedCicle={onTimerFinished}
      />
      <Tasks tasks={mokedTasks} actived={actualTask} />
    </div>
  );
}
