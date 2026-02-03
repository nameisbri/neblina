// Type exports
export * from './types'

// Project data exports
export { discloserProject } from './discloser'
export { yellowBrollyProject } from './yellowBrolly'
export { discloserMarketingProject } from './discloserMarketing'
export { methodologyProject } from './methodology'

// Import for convenience arrays
import { discloserProject } from './discloser'
import { yellowBrollyProject } from './yellowBrolly'
import { discloserMarketingProject } from './discloserMarketing'
import { methodologyProject } from './methodology'
import type { Project, StandardProject } from './types'

/** The flagship project (Discloser) */
export const flagshipProject = discloserProject

/** Standard featured projects (ordered by visual hierarchy) */
export const standardProjects: StandardProject[] = [
  yellowBrollyProject,
  discloserMarketingProject,
]

/** Process/methodology project */
export const processProject = methodologyProject

/** All projects for iteration */
export const allProjects: Project[] = [
  discloserProject,
  yellowBrollyProject,
  discloserMarketingProject,
  methodologyProject,
]

/** Get a project by its ID */
export function getProjectById(id: string): Project | undefined {
  return allProjects.find((p) => p.id === id)
}

/** Project theme presets */
export const PROJECT_THEMES = {
  discloser: discloserProject.theme,
  yellowBrolly: yellowBrollyProject.theme,
  marketing: discloserMarketingProject.theme,
  methodology: methodologyProject.theme,
} as const
