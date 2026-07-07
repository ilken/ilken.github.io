interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`animate-shimmer rounded-xl bg-gradient-to-r from-cream-sunken via-cream-raised to-cream-sunken bg-[length:200%_100%] ${className ?? ''}`}
    />
  )
}

export function SongRowSkeletons({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex items-center gap-4 px-3 py-2">
          <Skeleton className="size-12" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  )
}
