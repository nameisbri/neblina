// This file has been deprecated. All project data is now in ./projects/
// Re-export everything from new location for backwards compatibility

// Type exports
export type {
  TechStackItem,
  ProjectTheme,
  ProjectStatus,
  ProjectFeature,
  ProjectLink,
  ProjectScreenshot,
  FlagshipProject,
  StandardProject,
  ProcessProject,
  Project,
} from './projects/types'

// Project data exports (from individual files to avoid circular import)
export { discloserProject } from './projects/discloser'
export { yellowBrollyProject } from './projects/yellowBrolly'
export { discloserMarketingProject } from './projects/discloserMarketing'
export { methodologyProject } from './projects/methodology'

// Convenience exports
export {
  flagshipProject,
  standardProjects,
  processProject,
  allProjects,
  getProjectById,
  PROJECT_THEMES,
} from './projects/index'
