import { useEffect, useState } from "react";

interface Props {
  onFinished?: () => void;
  min?: number;
  sec?: number;
  start: boolean;
  reset?: boolean;
}

export function Countdown({
  onFinished,
  min = 0,
  sec = 0,
  start,
  reset = false,
}: Props) {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
    if (start) {
      const interval = setInterval(
        () => setSeconds((i) => (i > -1 ? i - 1 : i)),
        1000
      );

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          if (onFinished) onFinished();
        } else {
          setMinutes((m) => m - 1);
          setSeconds(59);
        }
      }

      return () => clearInterval(interval);
    }
  }, [seconds, start]);

  useEffect(() => {
    setMinutes(min);
    setSeconds(sec);
  }, [min, sec, reset]);

  return (
    <div className="flex justify-between text-9xl text-center font-nunito font-bold">
      <div className="w-48">{minutes < 10 ? "0" + minutes : minutes}</div>
      <span>:</span>
      <div className="w-48">{seconds < 10 ? "0" + seconds : seconds}</div>
    </div>
  );
}
