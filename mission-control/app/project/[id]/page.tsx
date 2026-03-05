import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  icon: string;
  status: string;
  statusColor: string;
  description: string;
  domain: string;
  todos: { text: string; priority: 'high' | 'medium' | 'low'; done?: boolean }[];
  links: { label: string; url: string }[];
  notes?: string[];
}

const projects: Record<string, Project> = {
  'mactrackr': {
    id: 'mactrackr',
    name: 'Mactrackr',
    icon: '🍎',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'Apple product aggregator with price alerts, price history tracking, and comprehensive Apple ecosystem coverage.',
    domain: 'mactrackr.app',
    todos: [
      { text: 'Build core functionality: alerts, price updates, accurate pricing, URL redirects', priority: 'high' },
      { text: 'Implement price history tracking', priority: 'high' },
      { text: 'Deploy search bar for products', priority: 'high' },
      { text: 'Integrate affiliate programs: Amazon, eBay, B&H, Adorama', priority: 'high' },
      { text: 'Apply for Apple affiliate program (April 2)', priority: 'high' },
      { text: 'SEO optimization', priority: 'medium' },
      { text: 'Reddit/social media push', priority: 'medium' },
      { text: 'Create comparison tool', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
      { label: 'Vercel Dashboard', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
    notes: [
      'Focus on Mac Studio, MacBook, iPhone, iPad price tracking',
      'Track price changes over time',
      'Affiliate revenue target: $500/month by Q2',
    ],
  },
  'health-index': {
    id: 'health-index',
    name: 'Health Index',
    icon: '🏥',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'Wellness product aggregator for wellness devices, supplements, and health technology.',
    domain: 'healthindex.app',
    todos: [
      { text: 'Prioritize affiliate strategy - wellness devices first', priority: 'high' },
      { text: 'Complete America Cryo Affiliately setup (aff=311)', priority: 'high' },
      { text: 'Add new categories: air filters, red light masks, theraguns', priority: 'high' },
      { text: 'Add: four sigmatic, ryze mushroom coffee', priority: 'high' },
      { text: 'Add: exercise equipment, bikes, supplements', priority: 'high' },
      { text: 'Build product comparison tool', priority: 'high' },
      { text: 'Fix blog UI issues at bottom of articles', priority: 'medium' },
    ],
    links: [
      { label: 'Live Site', url: 'https://health-index.vercel.app' },
      { label: 'Local Code', url: 'file:///Users/douglasrichman/.openclaw/workspace/healthindex-frontend' },
      { label: 'Vercel Dashboard', url: '#' },
    ],
    notes: [
      '✅ Search bar deployed',
      'Waiting on: Sunlighten, Joovv, Four Sigmatic approvals',
      'Apply next: Hyperice, Theragun, Sun Home',
      'Target: 100 products indexed by end of March',
    ],
  },
  'gpu-drip': {
    id: 'gpu-drip',
    name: 'GPU Drip',
    icon: '💻',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'GPU aggregator with price and stock updates for NVIDIA and AMD graphics cards.',
    domain: 'gpudrip.app',
    todos: [
      { text: 'URGENT: Fix brand toggle and current prices not showing on live site', priority: 'high', done: false },
      { text: 'Build core functionality: price system, changes, alerts', priority: 'high' },
      { text: 'Implement price history tracking', priority: 'high' },
      { text: 'Add OG images on all articles/links', priority: 'high' },
      { text: 'Deploy search bar for blogs and product pages', priority: 'high' },
      { text: 'Apply for NVIDIA affiliate program', priority: 'high' },
      { text: 'Apply for Best Buy affiliate program', priority: 'medium' },
    ],
    links: [
      { label: 'Live Site', url: 'https://gpudrip-static.vercel.app' },
      { label: 'Local Code', url: 'file:///Users/douglasrichman/.openclaw/workspace/gpudrip-static' },
      { label: 'Vercel Dashboard', url: '#' },
    ],
    notes: [
      '38 static pages generated',
      'Bug: Brand toggle not working on production',
      'Track: 4090, 4080, 3090, 3080 pricing',
    ],
  },
  'babygear': {
    id: 'babygear',
    name: 'BabyGear',
    icon: '👶',
    status: 'PRIORITY',
    statusColor: 'bg-orange-500',
    description: 'Popular baby products aggregator and registry platform.',
    domain: 'babygear-next.vercel.app',
    todos: [
      { text: '⚠️ URGENT: Fix reverted build - restore missing features', priority: 'high' },
      { text: 'Add Supplies page', priority: 'high' },
      { text: 'Create Registry feature', priority: 'high' },
      { text: 'Build Lifecycle/Preparation section', priority: 'high' },
      { text: 'Restore Blog with 8 articles', priority: 'high' },
      { text: 'Improve mobile UI', priority: 'medium' },
      { text: 'Apply for Skimlinks affiliate (great for BabyGear)', priority: 'high' },
      { text: 'Add Amazon Baby Registry integration', priority: 'medium' },
    ],
    links: [
      { label: 'Live Site', url: 'https://babygear-next.vercel.app/' },
      { label: 'Vercel Dashboard', url: '#' },
    ],
    notes: [
      '✅ Correct deployment: babygear-next.vercel.app',
      '⚠️ Build reverted - missing: Supplies, Registry, Lifecycle, Blog (8 articles)',
      '4th priority after Mactrackr, Health Index, GPU Drip',
      'Focus on strollers, car seats, baby monitors',
    ],
  },
  'coin-curator': {
    id: 'coin-curator',
    name: 'Coin Curator',
    icon: '🪙',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Coin and collectible price tracking with market data analysis.',
    domain: 'coincurator.app',
    todos: [
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
    ],
    notes: [],
  },
  'mint-condition': {
    id: 'mint-condition',
    name: 'Mint Condition',
    icon: '✨',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Pokemon card aggregator and pricing platform.',
    domain: 'mintcondition.app',
    todos: [
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
    ],
    notes: [],
  },
  'slugger-data': {
    id: 'slugger-data',
    name: 'Slugger Data',
    icon: '⚾',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Baseball cards and sports memorabilia tracker.',
    domain: 'sluggerdata.app',
    todos: [
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
    ],
    notes: [],
  },
  'rumble-deals': {
    id: 'rumble-deals',
    name: 'Rumble Deals',
    icon: '🥊',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'MMA and combat sports gear aggregator with equipment deals.',
    domain: 'rumbledeals.app',
    todos: [
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
    ],
    notes: [],
  },
  'comics': {
    id: 'comics',
    name: 'Comics (Grail Watch)',
    icon: '📚',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Comic Books aggregator and pricing tracker.',
    domain: 'grailwatch.com',
    todos: [
      { text: 'Migrate from legacy Grail Watch codebase', priority: 'low' },
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Notes', url: '#' },
      { label: 'Legacy Code', url: 'file:///Users/douglasrichman/.openclaw/workspace/grailwatch' },
    ],
    notes: [
      'Original luxury watch tracker - now archived',
      'Being repurposed for comic books',
    ],
  },
  'robot-atlas': {
    id: 'robot-atlas',
    name: 'Robot Atlas',
    icon: '🤖',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Robotics and automation equipment deals aggregator.',
    domain: 'robotatlas.app',
    todos: [
      { text: 'Iterate when time available', priority: 'low' },
    ],
    links: [
      { label: 'Live Site', url: '#' },
      { label: 'Local Code', url: '#' },
    ],
    notes: [],
  },
  'air-quality': {
    id: 'air-quality',
    name: 'Air Quality Site',
    icon: '🌬️',
    status: 'PLANNING',
    statusColor: 'bg-gray-500',
    description: 'IQAir, Molekule, Austin Air affiliates and air purifier reviews.',
    domain: 'airquality.app',
    todos: [
      { text: 'Needs build - future project', priority: 'low' },
    ],
    links: [
      { label: 'Notes', url: '#' },
      { label: 'Workspace', url: '#' },
    ],
    notes: [
      'Potential brands: IQAir, Molekule, Austin Air, Blueair',
      'Combine with Health Index or build standalone?',
    ],
  },
};

const priorityColors: Record<string, string> = {
  high: 'text-red-400',
  medium: 'text-amber-400',
  low: 'text-blue-400',
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id;
  const project = projects[projectId];

  if (!project) {
    notFound();
  }

  const todoStats = {
    total: project.todos.length,
    done: project.todos.filter(t => t.done).length,
    high: project.todos.filter(t => t.priority === 'high' && !t.done).length,
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5]">
      {/* Header */}
      <header className="px-4 py-3 border-b border-[#2d2d2d] bg-[#0c0c0c] flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-[#5a5a5a] hover:text-[#f5f5f5] transition-colors text-sm">
            ← Back
          </Link>
          <div className="w-7 h-7 bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] rounded-lg flex items-center justify-center">
            <span className="text-base">{project.icon}</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#f5f5f5]">{project.name}</h1>
            <span className="text-[10px] text-[#5a5a5a] hidden sm:block">{project.domain}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] px-2 py-1 rounded-full text-white font-medium ${project.statusColor}`}>
            {project.status}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 overflow-y-auto h-[calc(100vh-60px)]">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4">
            <div className="text-2xl font-bold text-[#f5f5f5]">{todoStats.total}</div>
            <div className="text-xs text-[#5a5a5a]">Total Tasks</div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4">
            <div className="text-2xl font-bold text-emerald-400">{todoStats.done}</div>
            <div className="text-xs text-[#5a5a5a]">Completed</div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4">
            <div className="text-2xl font-bold text-red-400">{todoStats.high}</div>
            <div className="text-xs text-[#5a5a5a]">High Priority</div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4">
            <div className="text-2xl font-bold text-[#5e6ad2]">{project.links.length}</div>
            <div className="text-xs text-[#5a5a5a]">Quick Links</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-[#8a8a8a] mb-2 uppercase tracking-wide">About</h2>
              <p className="text-[#f5f5f5]">{project.description}</p>
            </div>

            {/* Todo List */}
            <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#2d2d2d] flex items-center justify-between">
                <h2 className="text-base font-semibold text-[#f5f5f5]">Tasks</h2>
                <span className="text-xs text-[#5a5a5a]">{todoStats.done}/{todoStats.total} done</span>
              </div>
              <div className="divide-y divide-[#2d2d2d]">
                {project.todos.map((todo, i) => (
                  <div key={i} className="px-5 py-3 flex items-start gap-3 hover:bg-[#252525] transition-colors">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      todo.done 
                        ? 'bg-[#5e6ad2] border-[#5e6ad2]' 
                        : 'border-[#3d3d3d] hover:border-[#5e6ad2]'
                    }`}>
                      {todo.done && <span className="text-white text-xs">✓</span>}
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm ${todo.done ? 'text-[#5a5a5a] line-through' : 'text-[#f5f5f5]'}`}>
                        {todo.text}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded ${priorityColors[todo.priority]} bg-opacity-20`}>
                      {todo.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#2d2d2d]">
                <h2 className="text-base font-semibold text-[#f5f5f5]">Quick Links</h2>
              </div>
              <div className="p-3 space-y-1">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#252525] text-sm text-[#8a8a8a] hover:text-[#5e6ad2] transition-colors"
                  >
                    <span>↗</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Notes */}
            {project.notes && project.notes.length > 0 && (
              <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[#2d2d2d]">
                  <h2 className="text-base font-semibold text-[#f5f5f5]">Notes</h2>
                </div>
                <div className="p-5 space-y-3">
                  {project.notes.map((note, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#8a8a8a]">
                      <span className="text-[#5e6ad2] mt-1">•</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}