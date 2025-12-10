export default function CTA() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 border border-white/5 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Gradient glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Stop guessing. Start optimizing.</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto font-light">Join forward-thinking logistics teams using Inventra AI to reduce overhead and prevent stockouts.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-transparent border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
              Contact Sales
            </button>
          </div>
          
          <p className="mt-6 text-xs text-zinc-600">No credit card required for 14-day trial.</p>
        </div>
      </div>
    </section>
  );
}
