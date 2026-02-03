// Type exports
export * from './types'

// Project data exports
export { discloserProject } from './discloser'
export { yellowBrollyProject } from './yellowBrolly'
export { methodologyProject } from './methodology'
export { ggymStyleGuideProject } from './ggymStyleGuide'

// Import for convenience arrays
import { discloserProject } from './discloser'
import { yellowBrollyProject } from './yellowBrolly'
import { methodologyProject } from './methodology'
import { ggymStyleGuideProject } from './ggymStyleGuide'
import type { Project, StandardProject } from './types'

/** The flagship project (Discloser) */
export const flagshipProject = discloserProject

/** Standard featured projects (ordered by visual hierarchy) */
export const standardProjects: StandardProject[] = [
  yellowBrollyProject,
  ggymStyleGuideProject,
]

/** Process/methodology project */
export const processProject = methodologyProject

/** All projects for iteration */
export const allProjects: Project[] = [
  discloserProject,
  yellowBrollyProject,
  ggymStyleGuideProject,
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
  ggymStyleGuide: ggymStyleGuideProject.theme,
  methodology: methodologyProject.theme,
} as const
