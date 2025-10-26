import React from 'react';
import { Download } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-fuchsia-600/10 to-rose-600/20 p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_200px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_90%_90%,rgba(244,63,94,0.15),transparent)]" />
        <div className="relative">
          <h3 className="text-2xl font-semibold md:text-3xl">Ready to make something incredible?</h3>
          <p className="mt-2 max-w-2xl text-zinc-300">Download FluxEdit free and start editing in minutes. Upgrade anytime for pro features and unlimited exports.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black shadow-lg shadow-blue-500/10 transition hover:translate-y-[-1px] hover:shadow-blue-500/20">
              <Download size={18} />
              Download for macOS
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20">
              Explore pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
