import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

import { NowPlayingPanel } from '@/components/layout/NowPlayingPanel'
import { PlayerBar } from '@/components/layout/PlayerBar'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export const Route = createRootRoute({ component: RootLayout, notFoundComponent: NotFound })

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

function NotFound() {
  return (
    <div className="stagger grid min-h-64 place-items-center py-16 text-center">
      <div>
        <p className="text-6xl font-extrabold tracking-tight text-ink">404</p>
        <p className="mt-3 text-sm text-ink-soft">
          This track was never recorded — nothing lives at this address.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-lime-ink transition-transform duration-150 hover:scale-[1.03]"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
