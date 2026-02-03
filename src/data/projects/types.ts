/**
 * Project Data Type Definitions
 * Defines the data model for all project types displayed in the portfolio
 */

/** Technology stack item with category for styling */
export interface TechStackItem {
  name: string
  category: 'framework' | 'language' | 'platform' | 'service' | 'tool'
}

/** Project theme colors for consistent styling */
export interface ProjectTheme {
  primary: string
  secondary?: string
  glow: string
}

/** Project status types */
export type ProjectStatus = 'live' | 'beta' | 'development' | 'planning' | 'evolving'

/** Feature with icon for flagship projects */
export interface ProjectFeature {
  icon: string
  title: string
  description: string
}

/** External link for projects */
export interface ProjectLink {
  label: string
  url: string
  type: 'external' | 'github' | 'appstore' | 'testflight'
}

/** Screenshot for project showcase */
export interface ProjectScreenshot {
  src: string
  alt: string
  caption?: string
}

/** Base project interface with shared fields */
interface BaseProject {
  id: string
  title: string
  subtitle: string
  description: string
  status: ProjectStatus
  statusLabel: string
  theme: ProjectTheme
}

/** Flagship project (Discloser) - maximum detail and prominence */
export interface FlagshipProject extends BaseProject {
  type: 'flagship'
  projectType: string
  tagline: string
  features: ProjectFeature[]
  techStack: TechStackItem[]
  whyItMatters: string
  links?: ProjectLink[]
  screenshots?: ProjectScreenshot[]
}

/** Standard featured project (Yellow Brolly, Marketing Site) */
export interface StandardProject extends BaseProject {
  type: 'standard'
  projectType: string
  client?: string
  features: string[]
  techStack: TechStackItem[]
  whyItMatters: string
  links?: ProjectLink[]
}

/** Process/Methodology project */
export interface ProcessProject extends BaseProject {
  type: 'process'
  principles: string[]
  artifacts?: string[]
}

/** Union type for all project types */
export type Project = FlagshipProject | StandardProject | ProcessProject
