import { HeartIcon, LocationIcon, PlayIcon } from '@/components/icons'
import { PROFILE } from '@/data/profile.constants'
import type { PlayerTrack } from '@/player/player.types'
import { usePlayer } from '@/player/use-player'

export function HomeHero({ tracks }: { tracks: PlayerTrack[] }) {
  const { playQueue } = usePlayer()

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ember to-ember-deep p-8 text-cream sm:p-10">
      <div className="relative z-10 max-w-xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-cream/70 uppercase">
          Curated engineer
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {PROFILE.name.toUpperCase()}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-cream/85 sm:text-base">
          {PROFILE.headline} · {PROFILE.companies}. {PROFILE.about}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/80">
          <span className="flex items-center gap-1.5 font-semibold text-cream">
            <HeartIcon className="size-4" /> 490 followers
          </span>
          <span>7 roles, 13 yr 10 mo</span>
          <span className="flex items-center gap-1">
            <LocationIcon className="size-4" /> London, UK
          </span>
        </div>

        <button
          type="button"
          onClick={() => playQueue(tracks, 0)}
          disabled={tracks.length === 0}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-lime-ink transition-transform duration-150 hover:scale-[1.03] disabled:opacity-50"
        >
          <PlayIcon className="size-4" />
          Play my mixtape
        </button>
      </div>

      <img
        src={PROFILE.avatarUrl}
        alt={PROFILE.name}
        className="absolute -right-6 bottom-0 hidden h-[115%] w-auto object-cover opacity-90 mix-blend-luminosity [mask-image:linear-gradient(to_left,black_60%,transparent)] sm:block"
      />
    </section>
  )
}
