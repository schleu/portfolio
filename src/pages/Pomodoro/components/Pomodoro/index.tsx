import classNames from "classnames";
import { useEffect, useState } from "react";

import { AiOutlinePause, AiOutlineReload } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { Badge } from "./Badge";
import { Countdown } from "../Countdown";
import Sound from "./sound01.ogg";
import Sound02 from "./sound02.ogg";

interface Props {
  start?: boolean;
  pause?: boolean;
  restart?: boolean;
  onFinished?: () => void;
  onFinishedCicle?: () => void;
  minutes?: number[];
  badge?: string[];
}

export function Pomodoro({
  start = false,
  pause = false,
  restart = false,
  onFinished = () => {},
  onFinishedCicle = () => {},
  minutes = [3, 3, 30],
  badge = ["Foco", "Intervalo", "Descanso"],
}: Props) {
  const [time, setTime] = useState(minutes[0]);
  const [started, setStarted] = useState(false);
  const [reset, setReset] = useState(false);
  const [autoReload, setAutoReload] = useState(false);
  const [actived, setActived] = useState(0);
  const [cicles, setCicles] = useState(1);

  const startCountDown = () => setStarted(true);
  const stopCountdown = () => setStarted(false);

  useEffect(() => startCountDown(), [start]);
  useEffect(() => {
    stopCountdown();
    setAutoReload(false);
  }, [pause]);

  useEffect(() => setReset(restart), [restart]);

  useEffect(() => {
    setTime(minutes[actived]);
    if (autoReload) {
      setTimeout(startCountDown, 2000);
    }
  }, [actived]);

  function onEnd() {
    const badgeLength = badge.length - 1;

    if (actived === badgeLength) {
      onFinishedCicle();

      const audio = new Audio(Sound02);
      audio.play();

      return;
    } else {
      const audio = new Audio(Sound);
      audio.play();
    }

    const next =
      actived < badgeLength && actived === 2 && cicles < 4 ? actived + 1 : 0;

    setActived(next);

    const audio = new Audio(Sound);
    audio.play();

    stopCountdown();
    onFinished();
  }

  return (
    <div
      className={classNames(
        "p-10 bg-dark-500 rounded-lg mx-auto w-fit",
        "flex flex-col justify-center items-center gap-10 relative"
      )}
    >
      <div className="w-full flex justify-between gap-4">
        {badge.map((b, i) => (
          <Badge key={b} active={actived === i} onClick={() => setActived(i)}>
            {b}
          </Badge>
        ))}
      </div>

      <Countdown sec={time} onFinished={onEnd} start={started} reset={reset} />

      <div className="flex gap-4">
        <button
          className={`min-w-[150px] py-2 px-4 rounded-md flex justify-center items-center gap-2 transition-all ease-in-out duration-500 ${
            started ? "bg-danger" : "bg-primary"
          }`}
          onClick={started ? stopCountdown : startCountDown}
        >
          {started ? (
            <AiOutlinePause size={16} />
          ) : (
            <BsFillPlayFill size={16} />
          )}
          {started ? "Parar" : "Começar"}
        </button>

        <button
          onClick={() => setReset((e) => !e)}
          disabled={started}
          className="bg-primary w-fit px-4 py-2 rounded-md disabled:bg-dark-800 transition-all ease-in-out duration-500"
          title="Reset"
        >
          <AiOutlineReload />
        </button>

        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setAutoReload((e) => !e)}
        >
          <label className="cursor-pointer">Auto</label>
          <div
            className={classNames(
              "w-full min-w-[50px] h-5 bg-dark-100 shadow-sm shadow-dark-100 flex items-center rounded-full",
              "transition-all ease-in-out duration-500 relative"
            )}
          >
            <div
              className={classNames(
                "w-4 h-4 rounded-full absolute",
                "transition-all duration-500 ease-in-out ",
                autoReload ? "bg-primary right-0" : "bg-dark-200 left-0"
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
