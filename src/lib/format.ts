export function formatTrackTime(millis: number): string {
  const totalSeconds = Math.round(millis / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function formatSeconds(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00'
  return formatTrackTime(seconds * 1000)
}

export function releaseYear(isoDate: string): string {
  return isoDate.slice(0, 4)
}
