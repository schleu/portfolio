import { createRef, useEffect, useRef, useState } from "react";

export function useAnimation(animation: string = "animation-fadeInDown") {
  const [fadeIn, setFadeIn] = useState(false);
  const ref = createRef<HTMLDivElement>();

  const pageSize = window.screen.height;
  const pageScrollY = pageSize + window.scrollY;

  console.log("window.scrollY", window.scrollY);
  console.log("innerHeight", window.innerHeight);
  function onScroll() {}

  useEffect(() => {
    if (ref.current !== null) {
      const refPosition = (ref.current?.offsetTop || Infinity) + pageSize + 100;
      const fadeIn = refPosition < pageScrollY;
      setFadeIn(fadeIn);
      ref.current.classList.add("opacity-0");
      ref.current.classList.add("ease-in-out");

      console.log(refPosition, pageScrollY, fadeIn);
      if (fadeIn) {
        ref.current.classList.add("opacity-1");
      }
    }
  }, [ref, pageScrollY, pageSize]);

  return { fadeIn, ref };
}
