import { DateOfPostingFilter } from "./DateOfPostingFilter"
import { LocationFilter } from "./LocationFilter"
import { SalaryFilter } from "./SalaryFilter"
import { TypeOfExploymentFilter } from "./TypeOfExploymentFilter"

export const SiderbarFilter = ({handleFilterChange, handleFilterClick}) => {
  return (
    <>
      <LocationFilter handleFilterChange={handleFilterChange}/>
      <SalaryFilter handleFilterChange={handleFilterChange}/>
      <DateOfPostingFilter handleFilterChange={handleFilterChange}/>
      <TypeOfExploymentFilter handleFilterChange={handleFilterChange}/>
    </>
  )
}