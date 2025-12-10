import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
            <iconify-icon icon="lucide:box" width="14" height="14" stroke-width="1.5" className="text-white"></iconify-icon>
          </div>
          <span className="text-sm font-medium tracking-tight">INVENTRA</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-normal">
          <Link href="#" className="hover:text-white transition-colors">Product</Link>
          <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Changelog</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs font-medium hover:text-white transition-colors hidden sm:block">Log in</Link>
          <Link href="#" className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">Start free</Link>
        </div>
      </div>
    </nav>
  );
}
