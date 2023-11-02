import { ReactNode, useState, HTMLProps } from "react";
import { Countdown } from "./components/Countdown";
import { add } from "date-fns";
import classNames from "classnames";

import { AiOutlineReload, AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

export function PomodoroPage() {
  const [time, setTime] = useState(25);
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);

  const startCountDown = () => setStarted(true);
  const stopCountdown = () => setStarted(false);

  const workTime = 25;
  const BreakTime = 5;

  const handleTime = (t: number) => {
    setTime(t);
    setStarted(false);
  };

  return (
    <div
      className={classNames(
        "p-10 bg-dark-500 rounded-lg mx-auto w-fit mt-32 mb-10",
        "flex flex-col justify-center items-center gap-10"
      )}
    >
      <div className="flex gap-4">
        <Badge active={time === workTime} onClick={() => handleTime(workTime)}>
          Work
        </Badge>
        <Badge
          active={time === BreakTime}
          onClick={() => handleTime(BreakTime)}
        >
          Break
        </Badge>
      </div>

      <Countdown
        min={time}
        onFinished={stopCountdown}
        start={started}
        reset={reset}
      />

      <div className="flex gap-4">
        <button
          className="bg-blue-500 w-[150px] px-10 py-2 rounded-md flex items-center gap-2"
          onClick={started ? stopCountdown : startCountDown}
        >
          {started ? <AiOutlinePause /> : <BsFillPlayFill />}
          {started ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => setReset((e) => !e)}
          disabled={started}
          className="bg-blue-500 w-fit px-4 py-2 rounded-md disabled:bg-dark-800"
          title="Reset"
        >
          <AiOutlineReload />
        </button>
      </div>
    </div>
  );
}

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  active?: boolean;
}

function Badge({ children, active = false, ...props }: Props) {
  return (
    <div
      className={classNames(
        "w-20 text-center border rounded-sm cursor-pointer",
        active ? "border-blue-500 font-bold text-blue-500" : "border-white"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
