import React from 'react';
import { Scissors, Wand2, Music, Timer, Layers, Share } from 'lucide-react';

const items = [
  {
    icon: Scissors,
    title: 'Precision Cutting',
    desc: 'Frame-accurate trims, ripple edits, and magnetic timeline for effortless control.'
  },
  {
    icon: Wand2,
    title: 'AI Smart Tools',
    desc: 'Auto-reframe, silence removal, and smart captions synced to your audio.'
  },
  {
    icon: Music,
    title: 'Audio Polish',
    desc: 'Noise removal, EQ presets, and loudness normalization in one click.'
  },
  {
    icon: Timer,
    title: 'Fast Rendering',
    desc: 'GPU-accelerated exports with stunning color fidelity and smaller files.'
  },
  {
    icon: Layers,
    title: 'Advanced Compositing',
    desc: 'Blend modes, masks, and keyframes with buttery-smooth playback.'
  },
  {
    icon: Share,
    title: 'Team Ready',
    desc: 'Live comments, version history, and cloud review links built-in.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.1),transparent_50%)]" />
      <div className="relative">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Everything you need to flow</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          Designed for creators who want power without the clutter. Intuitive by default, advanced when you need it.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-rose-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
