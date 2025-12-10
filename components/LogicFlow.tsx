export default function LogicFlow() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-4 bg-zinc-950 p-4 z-10">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-mono text-zinc-500">01</span>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Input Data</h4>
              <p className="text-xs text-zinc-500">Upload stock lists</p>
            </div>
          </div>

          {/* Arrow */}
          <iconify-icon icon="lucide:arrow-right" className="hidden md:block text-zinc-700" width="20"></iconify-icon>
          <iconify-icon icon="lucide:arrow-down" className="md:hidden text-zinc-700" width="20"></iconify-icon>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-4 bg-zinc-950 p-4 z-10 relative group">
            {/* Glow effect for AI step */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-indigo-500/30 flex items-center justify-center shadow-lg relative">
              <iconify-icon icon="lucide:sparkles" className="text-indigo-400 animate-pulse" width="24"></iconify-icon>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">AI Analysis</h4>
              <p className="text-xs text-zinc-500">Processing & Prediction</p>
            </div>
          </div>

          {/* Arrow */}
          <iconify-icon icon="lucide:arrow-right" className="hidden md:block text-zinc-700" width="20"></iconify-icon>
          <iconify-icon icon="lucide:arrow-down" className="md:hidden text-zinc-700" width="20"></iconify-icon>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-4 bg-zinc-950 p-4 z-10">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
              <iconify-icon icon="lucide:file-check" className="text-emerald-500/80" width="24"></iconify-icon>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Smart Summary</h4>
              <p className="text-xs text-zinc-500">Actionable insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
