import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-4">
            <div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center">
              <iconify-icon icon="lucide:box" width="12" height="12" className="text-white"></iconify-icon>
            </div>
            <span className="text-sm font-medium tracking-tight">INVENTRA</span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
            Next-generation inventory intelligence for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium text-white mb-4">Product</h4>
          <ul className="space-y-2 text-xs text-zinc-500">
            <li><Link href="#" className="hover:text-zinc-300">Features</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Integrations</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Pricing</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium text-white mb-4">Company</h4>
          <ul className="space-y-2 text-xs text-zinc-500">
            <li><Link href="#" className="hover:text-zinc-300">About</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Blog</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Careers</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-xs text-zinc-500">
            <li><Link href="#" className="hover:text-zinc-300">Privacy</Link></li>
            <li><Link href="#" className="hover:text-zinc-300">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-zinc-600">© 2023 Inventra AI Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-zinc-600 hover:text-white">
            <iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
          </Link>
          <Link href="#" className="text-zinc-600 hover:text-white">
            <iconify-icon icon="lucide:github" width="16"></iconify-icon>
          </Link>
          <Link href="#" className="text-zinc-600 hover:text-white">
            <iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
          </Link>
        </div>
      </div>
    </footer>
  );
}
