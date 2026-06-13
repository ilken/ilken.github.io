const BAR_DELAYS = ['0ms', '150ms', '300ms']

export function Equalizer({ paused = false }: { paused?: boolean }) {
  return (
    <span className="flex h-4 items-end gap-0.5" aria-label={paused ? 'Paused' : 'Playing'}>
      {BAR_DELAYS.map((delay) => (
        <span
          key={delay}
          className="w-1 origin-bottom rounded-full bg-lime"
          style={{
            height: '100%',
            animation: paused ? 'none' : `eq 0.9s ease-in-out ${delay} infinite`,
            transform: paused ? 'scaleY(0.3)' : undefined,
          }}
        />
      ))}
    </span>
  )
}
