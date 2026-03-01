export function Footer() {
  return (
    <footer className="border-t border-gw-border py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">GRAILWATCH</span>
            <span className="text-gw-text-tertiary text-xs">© 2026</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-gw-text-secondary">
            <a href="#" className="hover:text-white transition-colors">Data</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
