export default function Features() {
  return (
    <section className="py-24 border-t border-white/5 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">From raw data to refined strategy</h2>
          <p className="text-zinc-500 font-light">Input your chaotic inventory sheets. Our engine normalizes, analyzes, and presents a clear path forward.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-indigo-400 transition-colors">
              <iconify-icon icon="lucide:upload-cloud" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium text-white tracking-tight mb-3">Seamless Input</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Drag and drop CSVs, connect APIs, or sync directly with your ERP. We handle the data cleaning automatically.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-purple-400 transition-colors">
              <iconify-icon icon="lucide:brain-circuit" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium text-white tracking-tight mb-3">Neural Processing</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Our models identify seasonality, dead stock, and demand spikes that traditional spreadsheets miss entirely.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-emerald-400 transition-colors">
              <iconify-icon icon="lucide:bar-chart-3" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium text-white tracking-tight mb-3">Instant Metrics</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Receive a daily summary of key metrics. Know exactly what to order and when, without the manual calculations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
