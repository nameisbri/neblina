import { ServiceCard } from './ServiceCard'
import type { Service } from '@/types'

interface ServiceGridProps {
  services: Service[]
  indexOffset?: number
}

export function ServiceGrid({ services, indexOffset = 0 }: ServiceGridProps) {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index + indexOffset} />
      ))}
    </div>
  )
}
