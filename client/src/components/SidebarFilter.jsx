import { DateOfPostingFilter } from "./DateOfPostingFilter"
import { LocationFilter } from "./LocationFilter"
import { SalaryFilter } from "./SalaryFilter"
import { TypeOfExploymentFilter } from "./TypeOfExploymentFilter"
import { WorkExperienceFilter } from "./WorkExperienceFilter"

export const SiderbarFilter = () => {
  return (
    <>
      <LocationFilter />
      <SalaryFilter />
      <DateOfPostingFilter />
      <WorkExperienceFilter />
      <TypeOfExploymentFilter />
    </>
  )
}