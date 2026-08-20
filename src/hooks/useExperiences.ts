import { useMemo, useState } from "react";
import { experiencesMocked } from '../data/experiencies'
import { FilterAboutType } from "../pages/Home/components/About/types";

export const useExperiences = () => {
  const [filter, setFilter] = useState<FilterAboutType>("recente");

  function handleFilterChange(filter: FilterAboutType) {
    setFilter(filter);
  }
  
  const experiencesFiltered = useMemo(()=>experiencesMocked.sort((a, b) => {
    if (filter === "recente")
      return b.startDate.getTime() - a.startDate.getTime();
    if (filter === "antigo")
      return a.startDate.getTime() - b.startDate.getTime();
    return 0;
  }),[])

  return {
    experiencesFiltered,
    filter,
    handleFilterChange
  }
}