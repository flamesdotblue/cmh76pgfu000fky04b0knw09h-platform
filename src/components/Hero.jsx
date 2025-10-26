import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">FluxEdit</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#download" className="rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20">Download</a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          New: AI-assisted editing and instant color match
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold leading-[1.05] text-transparent md:text-6xl">
          Create, cut, and craft stunning videos—faster than ever
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          A sleek, modern editor with GPU-accelerated performance, AI tools, and beautiful exports. Built for creators and teams.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-black shadow-lg shadow-blue-500/10 transition hover:translate-y-[-1px] hover:shadow-blue-500/20"
          >
            <Play size={18} />
            Start Editing Free
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
