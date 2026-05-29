// Type exports
export * from './types'

// Project data exports
export { discloserProject } from './discloser'
export { yellowBrollyProject } from './yellowBrolly'
export { methodologyProject } from './methodology'
export { maxcsolutionsProject } from './maxcsolutions'
export { walkercraftProject } from './walkercraft'

// Import for convenience arrays
import { discloserProject } from './discloser'
import { yellowBrollyProject } from './yellowBrolly'
import { methodologyProject } from './methodology'
import { maxcsolutionsProject } from './maxcsolutions'
import { walkercraftProject } from './walkercraft'
import type { Project, StandardProject } from './types'

/** The flagship project (Discloser) */
export const flagshipProject = discloserProject

/** Standard featured projects (ordered by visual hierarchy) */
export const standardProjects: StandardProject[] = [
  yellowBrollyProject,
  maxcsolutionsProject,
]

/** Highlighted project (Walkercraft — full-width showcase) */
export const highlightedProject = walkercraftProject

/** Process/methodology project */
export const processProject = methodologyProject

/** All projects for iteration */
export const allProjects: Project[] = [
  discloserProject,
  walkercraftProject,
  yellowBrollyProject,
  maxcsolutionsProject,
  methodologyProject,
]

/** Get a project by its ID */
export function getProjectById(id: string): Project | undefined {
  return allProjects.find((p) => p.id === id)
}

/** Project theme presets */
export const PROJECT_THEMES = {
  discloser: discloserProject.theme,
  walkercraft: walkercraftProject.theme,
  yellowBrolly: yellowBrollyProject.theme,
  maxcsolutions: maxcsolutionsProject.theme,
  methodology: methodologyProject.theme,
} as const
