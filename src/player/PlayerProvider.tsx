import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type { PlayerTrack } from '@/player/player.types'
import { PlayerContext } from '@/player/player-context'

const RESTART_THRESHOLD_SECONDS = 3

interface QueueState {
  queue: PlayerTrack[]
  index: number
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [queueState, setQueueState] = useState<QueueState>({ queue: [], index: -1 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const queueRef = useRef(queueState)
  useEffect(() => {
    queueRef.current = queueState
  }, [queueState])

  const playAt = useCallback((tracks: PlayerTrack[], index: number) => {
    const track = tracks[index]
    const audio = audioRef.current
    if (!track || !audio) return
    setQueueState({ queue: tracks, index })
    setCurrentTime(0)
    setDuration(track.durationMs / 1000)
    audio.src = track.previewUrl
    void audio.play().catch(() => setIsPlaying(false))
  }, [])

  const next = useCallback(() => {
    const { queue, index } = queueRef.current
    if (index < queue.length - 1) {
      playAt(queue, index + 1)
    } else {
      audioRef.current?.pause()
      setCurrentTime(0)
    }
  }, [playAt])

  const nextRef = useRef(next)
  useEffect(() => {
    nextRef.current = next
  }, [next])

  useEffect(() => {
    const audio = new Audio()
    audio.preload = 'auto'
    audioRef.current = audio

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => nextRef.current()
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audioRef.current = null
    }
  }, [])

  const playQueue = useCallback(
    (tracks: PlayerTrack[], startIndex: number) => playAt(tracks, startIndex),
    [playAt],
  )

  const toggle = useCallback(() => {
    const audio = audioRef.current
    const { queue, index } = queueRef.current
    if (!audio || index < 0 || !queue[index]) return
    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [])

  const prev = useCallback(() => {
    const audio = audioRef.current
    const { queue, index } = queueRef.current
    if (!audio || index < 0) return
    if (audio.currentTime > RESTART_THRESHOLD_SECONDS || index === 0) {
      audio.currentTime = 0
      return
    }
    playAt(queue, index - 1)
  }, [playAt])

  const seek = useCallback((seconds: number) => {
    const audio = audioRef.current
    if (!audio || !audio.src) return
    audio.currentTime = seconds
    setCurrentTime(seconds)
  }, [])

  const value = useMemo(
    () => ({
      current: queueState.queue[queueState.index] ?? null,
      queue: queueState.queue,
      index: queueState.index,
      isPlaying,
      currentTime,
      duration,
      playQueue,
      toggle,
      next,
      prev,
      seek,
    }),
    [queueState, isPlaying, currentTime, duration, playQueue, toggle, next, prev, seek],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}
