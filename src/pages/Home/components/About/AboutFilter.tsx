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
  onFilterChange: (filter: FilterAboutType) => void;
}

export const AboutFilter = ({ onFilterChange }: AboutFilterProps) => {
  
  const [filter, setFilter] = useState<FilterAboutType>(filterOptions[0]);

  useEffect(() => {
    onFilterChange(filter);
  }, [filter]);

  function handleFilterChange() {
    setFilter(filter === "recente" ? "antigo" : "recente");
  }

  return (
    <div className="flex gap-2 z-10">
      <button
        className={"cursor-pointer flex items-center gap-2 capitalize"}
        onClick={() => handleFilterChange()}
      >
        {filter}{" "}
        <FaFilter
          className={"w-3 h-3 transition-all duration-300 ease-in-out"}
        />
      </button>
    </div>
  );
};
