// Service category types
export type ServiceCategory = 'design' | 'development'

// Individual service definition
export interface Service {
  id: string
  title: string
  description: string
  category: ServiceCategory
}
