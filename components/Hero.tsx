export default function Hero() {
  return (
    <main className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid -z-10 opacity-30 pointer-events-none h-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 hover:bg-indigo-500/20 transition-colors cursor-pointer">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Introducing Predictive Logistics 2.0
          <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
        </div>

        <h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">
          Stock management,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-white">clarified by Intelligence.</span>
        </h1>
        
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Connect your inventory data streams. Our AI analyzes input patterns to predict shortages, optimize overflow, and generate actionable executive summaries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="h-10 px-6 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 group">
            Start analyzing
            <iconify-icon icon="lucide:sparkles" className="group-hover:text-indigo-600 transition-colors" width="16"></iconify-icon>
          </button>
          <button className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-all hover:border-zinc-700 flex items-center gap-2">
            View demo
          </button>
        </div>

        {/* UI Interface Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-indigo-500/10 overflow-hidden">
          {/* Mac-like header */}
          <div className="h-10 border-b border-white/5 bg-zinc-900/80 flex items-center px-4 justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="text-[10px] text-zinc-600 font-mono">dashboard.inventra.ai</div>
            <div className="w-10"></div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            
            {/* Left Sidebar (Inputs) */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <p className="text-xs font-medium text-white mb-3 tracking-tight">DATA SOURCES</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 border border-white/5 hover:border-white/10 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-blue-500/10 text-blue-400">
                        <iconify-icon icon="lucide:database" width="14"></iconify-icon>
                      </div>
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-200">Warehouse A</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 border border-white/5 hover:border-white/10 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-purple-500/10 text-purple-400">
                        <iconify-icon icon="lucide:file-spreadsheet" width="14"></iconify-icon>
                      </div>
                      <span className="text-xs text-zinc-400 group-hover:text-zinc-200">Q3 Imports</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-white mb-3 tracking-tight">FILTERS</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="w-4 h-4 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-colors flex items-center justify-center">
                        <iconify-icon icon="lucide:check" className="text-white opacity-0 peer-checked:opacity-100" width="10"></iconify-icon>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300">Low Stock Alert</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-4 h-4 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-colors flex items-center justify-center">
                        <iconify-icon icon="lucide:check" className="text-white opacity-0 peer-checked:opacity-100" width="10"></iconify-icon>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300">Predictive Overflow</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Main Content (AI Summary) */}
            <div className="md:col-span-9 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white tracking-tight">AI Executive Summary</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Live Analysis</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                </div>
              </div>

              {/* Abstract AI Graphic/Chart area */}
              <div className="relative w-full h-48 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800/50 border border-white/5 p-4 overflow-hidden">
                {/* Decorative Grid lines */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                
                {/* Graph Lines */}
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path d="M0,100 C50,90 100,120 150,80 C200,40 250,60 300,30 C350,10 400,40 450,20" stroke="url(#gradient)" strokeWidth="2" fill="none" className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"></path>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2"></stop>
                      <stop offset="50%" stopColor="#818cf8"></stop>
                      <stop offset="100%" stopColor="#c084fc"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Floating Metric Card */}
                <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-md p-3 shadow-xl max-w-[140px]">
                  <p className="text-[10px] text-zinc-500 mb-1">Stock Velocity</p>
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-medium text-white tracking-tight">+14.2%</span>
                    <iconify-icon icon="lucide:trending-up" className="text-emerald-500 mb-1" width="12"></iconify-icon>
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-zinc-800/20 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <iconify-icon icon="lucide:alert-circle" className="text-orange-400" width="14"></iconify-icon>
                    <span className="text-xs text-zinc-400">Critical Low</span>
                  </div>
                  <p className="text-sm text-zinc-200">SKU-992 (Processors)</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/20 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <iconify-icon icon="lucide:arrow-right-left" className="text-blue-400" width="14"></iconify-icon>
                    <span className="text-xs text-zinc-400">Reorder Suggested</span>
                  </div>
                  <p className="text-sm text-zinc-200">450 Units needed</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/20 border border-white/5 hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <iconify-icon icon="lucide:check-circle-2" className="text-emerald-400" width="14"></iconify-icon>
                    <span className="text-xs text-zinc-400">Optimization</span>
                  </div>
                  <p className="text-sm text-zinc-200">Routes Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
