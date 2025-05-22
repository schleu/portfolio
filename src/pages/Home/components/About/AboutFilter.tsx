import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaCheckSquare,
  FaChevronDown,
  FaFilter,
  FaSquare,
} from "react-icons/fa";
import { experienciesMoked, stackMoked } from "./moked";

const filterOptions = ["recente", "antigo"];

export type FilterAboutType = (typeof filterOptions)[number];

interface AboutFilterProps {
  onFilterChange: (filter: FilterAboutType, stack: string[]) => void;
}

export const AboutFilter = ({ onFilterChange }: AboutFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<FilterAboutType>(filterOptions[0]);
  const [stackSelected, setStackSelected] = useState<string[]>([]);

  useEffect(() => {
    onFilterChange(filter, stackSelected);
  }, [filter, stackSelected]);

  function handleFilterChange(filter: FilterAboutType) {
    setFilter(filter);
  }

  const stack = [...new Set(Object.values(stackMoked).flat())];
  const stackKeys = [...new Set(Object.keys(stackMoked))];

  function handleStackSelected(stack: string) {
    setStackSelected((prev) => {
      if (prev.includes(stack)) {
        return prev.filter((e) => e !== stack);
      }
      return [...prev, stack];
    });
  }

  function onClickCategory(category: string) {
    if (stackKeys.includes(category)) {
      const stackArray = stackMoked[category as keyof typeof stackMoked];

      for (const item of stackArray) {
        handleStackSelected(item);
      }
    }
  }

  function handleSelectAll() {
    if (stackSelected.length > 0) {
      setStackSelected([]);
    } else {
      setStackSelected(stack);
    }
  }

  return (
    <div className="flex gap-2 z-10">
      <button
        className={classNames(
          "cursor-pointer flex items-center gap-2 capitalize",
          isOpen ? "text-primary" : "text-dark-100"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {filter}{" "}
        <FaFilter
          className={classNames(
            "w-3 h-3 transition-all duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      <div
        className={classNames(
          "fixed top-0 left-0 z-10 w-screen h-screen bg-black/80",
          "transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={classNames(
          "w-fit py-4 px-6 flex flex-col gap-6 ",
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
          "bg-dark-400 border border-dark-300 rounded-md w-2/3",
          "transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[600px] min-h-fit opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-2">
          <span className="font-bold text-sm">Ordenar por</span>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((e) => (
              <button
                key={e}
                onClick={() => handleFilterChange(e)}
                className={classNames(
                  "cursor-pointer capitalize text-start px-4 py-2 text-sm",
                  "hover:border-primary rounded-md border border-dark-300",
                  "transition-all duration-300 ease-in-out",
                  filter === e ? "text-primary" : "text-dark-100"
                )}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">Stack</span>

            <button
              className="capitalize text-zinc-400 text-sm"
              onClick={() => handleSelectAll()}
            >
              {stackSelected.length > 0
                ? "desmarcar todos"
                : "selecionar todos"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 ml-2">
            {stackKeys.map((e) => (
              <div key={e}>
                <button
                  className={classNames(
                    "text-zinc-400 text-xs capitalize flex items-center gap-2"
                  )}
                  onClick={() => onClickCategory(e)}
                >
                  {e}
                </button>

                <div className="flex flex-wrap gap-2 ml-2">
                  {stackMoked[e as keyof typeof stackMoked].map((e) => (
                    <button
                      key={e}
                      className={classNames(
                        "cursor-pointer capitalize text-start px-4 py-2 text-sm",
                        "hover:border-primary rounded-md border border-dark-300",
                        "transition-all duration-500 ease-in-out",
                        stackSelected.includes(e)
                          ? "text-primary"
                          : "text-dark-100"
                      )}
                      onClick={() => handleStackSelected(e)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
