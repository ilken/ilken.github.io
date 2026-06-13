import { useContext } from 'react'

import type { PlayerContextValue } from '@/player/player.types'
import { PlayerContext } from '@/player/player-context'

export function usePlayer(): PlayerContextValue {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
