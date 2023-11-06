import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";

export type Task = {
  name: string;
  done: boolean;
};

interface Props {
  tasks?: Task[];
  actived?: number;
  onSelect?: (id: number) => void;
}

export function Tasks({
  tasks: ts = [],
  actived = 0,
  onSelect = () => {},
}: Props) {
  const [tasks, setTasks] = useState<Task[]>(ts);
  const [hide, setHide] = useState(true);
  const [selected, setSelected] = useState(0);

  const tasksDoned = tasks.filter((task) => task.done).length;

  const { register, getValues } = useForm({});

  useEffect(() => {
    setSelected(actived);
  }, [actived]);

  function registerTask() {
    const { task } = getValues();
    const newTask: Task = {
      name: task,
      done: true,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function removeDonedTasks() {
    setTasks((prev) => prev.filter((t) => t.done === false));
  }

  function doneTask(id: number) {
    setTasks((prev) =>
      prev.map((e, i) => (i === id ? { ...e, done: true } : e))
    );
  }

  function selectTask(id: number) {
    setSelected(id);
    onSelect(id);
  }

  return (
    <div className="w-fit min-w-[500px] mx-auto flex flex-col items-center font-nunito">
      <header className="flex items-end w-full border-b border-b-dark-300  pb-2">
        <h1 className="text-3xl text-left w-full">Tarefas</h1>
        <div className="h-full align-text-bottom">
          {tasksDoned}/{tasks.length}
        </div>
      </header>

      <div className="flex flex-col gap-2 max-w-[500px] w-full px-2 py-4">
        {tasks.map((task, idx) => (
          <div
            key={task.name}
            className={`flex items-center gap-2 w-full cursor-pointer `}
          >
            <div
              onClick={() => doneTask(idx)}
              className={`p-1 rounded-full
              ${selected === idx ? "bg-dark-200" : "bg-dark-300"}
               ${task.done ? "text-primary" : "text-dark-500"}`}
            >
              {task.done ? <MdOutlineDoneAll /> : <MdDone />}
            </div>
            <div className="w-full" onClick={() => selectTask(idx)}>
              {task.name}
            </div>
          </div>
        ))}
      </div>

      {hide ? (
        <Button onClick={() => setHide((e) => !e)}>Criar task</Button>
      ) : (
        <section>
          <input
            type="text"
            {...register("task")}
            className="bg-transparent border-b border-dark-300 w-full max-w-[500px] outline-none px-4 py-2"
          />

          <button onClick={registerTask}>Save</button>
        </section>
      )}
    </div>
  );
}
