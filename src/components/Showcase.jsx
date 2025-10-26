import React from 'react';
import { Play } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Edit with feel. Export with flair.</h2>
        <p className="mt-3 text-zinc-400">A streamlined UI that stays out of your way. Crisp previews, instant scrubbing, and exports that pop—no steep learning curve.</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="absolute inset-0 grid grid-cols-12 gap-1 p-6 opacity-60">
            <div className="col-span-9 rounded-md border border-white/10 bg-black/40" />
            <div className="col-span-3 space-y-1">
              <div className="h-1/2 rounded-md border border-white/10 bg-black/40" />
              <div className="h-1/2 rounded-md border border-white/10 bg-black/40" />
            </div>
            <div className="col-span-12 mt-1 h-16 rounded-md border border-white/10 bg-black/40" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(244,63,94,0.15),transparent)]" />
          <button className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4 text-black shadow-lg shadow-blue-500/20 transition hover:scale-105">
            <Play />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          '4K exports up to 3x faster',
          'Cinematic LUTs & true color',
          'One-click social crops'
        ].map((t) => (
          <div key={t} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-zinc-300">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
