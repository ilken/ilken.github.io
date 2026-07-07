import { useEffect, useRef, useState } from 'react'

const MIN_DURATION_S = 8
const SPEED_PX_PER_S = 25

interface MarqueeTextProps {
  text: string
  className?: string
}

/**
 * Renders truncated text; when it overflows its container it scrolls as a
 * CSS marquee instead. JS only measures — the motion is the `marquee`
 * keyframe, so reduced-motion handling stays in the global CSS block.
 */
export function MarqueeText({ text, className }: MarqueeTextProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [widths, setWidths] = useState({ text: 0, box: 0 })

  useEffect(() => {
    const box = boxRef.current
    const measure = measureRef.current
    if (!box || !measure) return
    const observer = new ResizeObserver(() => {
      setWidths({ text: measure.offsetWidth, box: box.clientWidth })
    })
    observer.observe(box)
    observer.observe(measure)
    return () => observer.disconnect()
  }, [])

  const overflows = widths.text > widths.box + 1

  return (
    <div
      ref={boxRef}
      className={`relative ${overflows ? 'marquee-mask' : 'overflow-hidden'} ${className ?? ''}`}
    >
      <span ref={measureRef} aria-hidden className="invisible absolute whitespace-nowrap">
        {text}
      </span>
      {overflows ? (
        <div
          className="marquee-track"
          style={{
            animationDuration: `${Math.max(MIN_DURATION_S, widths.text / SPEED_PX_PER_S)}s`,
          }}
        >
          <span>{text}</span>
          <span aria-hidden>{text}</span>
        </div>
      ) : (
        <p className="truncate">{text}</p>
      )}
    </div>
  )
}
