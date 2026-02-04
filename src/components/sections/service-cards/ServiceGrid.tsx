import { ServiceCard } from './ServiceCard'
import type { Service } from '@/types'

interface ServiceGridProps {
  services: Service[]
  indexOffset?: number
}

export function ServiceGrid({ services, indexOffset = 0 }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index + indexOffset} />
      ))}
    </div>
  )
}
