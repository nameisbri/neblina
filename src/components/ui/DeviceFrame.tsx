interface DeviceFrameProps {
  variant: 'browser' | 'phone'
  children: React.ReactNode
  className?: string
}

export function DeviceFrame({ variant, children, className = '' }: DeviceFrameProps) {
  if (variant === 'browser') {
    return (
      <div className={`rounded-lg overflow-hidden border border-fog-mid/15 bg-fog-deep ${className}`}>
        {/* Toolbar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-fog-mid/8 border-b border-fog-mid/10">
          <span className="w-[7px] h-[7px] rounded-full bg-fog-mid/25" />
          <span className="w-[7px] h-[7px] rounded-full bg-fog-mid/25" />
          <span className="w-[7px] h-[7px] rounded-full bg-fog-mid/25" />
          <div className="flex-1 mx-6 h-4 rounded-sm bg-fog-mid/8" />
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className={`rounded-[1.2rem] overflow-hidden border border-fog-mid/15 bg-fog-deep ${className}`}>
      {/* Dynamic island */}
      <div className="flex justify-center py-2 bg-fog-mid/5">
        <div className="w-14 h-[5px] rounded-full bg-fog-mid/20" />
      </div>
      {children}
      {/* Home indicator */}
      <div className="flex justify-center py-1.5 bg-fog-mid/5">
        <div className="w-8 h-[3px] rounded-full bg-fog-mid/15" />
      </div>
    </div>
  )
}
