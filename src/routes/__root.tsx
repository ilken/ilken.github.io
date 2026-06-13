import { createRootRoute, Outlet } from '@tanstack/react-router'

import { NowPlayingPanel } from '@/components/layout/NowPlayingPanel'
import { PlayerBar } from '@/components/layout/PlayerBar'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export const Route = createRootRoute({ component: RootLayout })

function RootLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <div className="mx-3 mt-3 flex min-w-0 flex-1 gap-3 md:ml-0">
          <main className="flex min-w-0 flex-1 flex-col overflow-y-auto rounded-2xl bg-cream">
            <TopBar />
            <div className="flex-1 px-5 pt-4 pb-10 sm:px-8">
              <Outlet />
            </div>
          </main>
          <NowPlayingPanel />
        </div>
      </div>
      <PlayerBar />
    </div>
  )
}
