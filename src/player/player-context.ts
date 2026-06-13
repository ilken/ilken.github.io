import { createContext } from 'react'

import type { PlayerContextValue } from '@/player/player.types'

export const PlayerContext = createContext<PlayerContextValue | null>(null)
