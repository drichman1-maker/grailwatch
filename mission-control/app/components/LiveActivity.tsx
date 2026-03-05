'use client';

import { useState } from 'react';

interface ActivityItem {
  id: string;
  title: string;
  details: string;
  time: string;
  status: 'active' | 'pending' | 'completed';
}

interface ActivityCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  items: ActivityItem[];
}

const activityCategories: ActivityCategory[] = [
  {
    id: 'site-functionality',
    name: 'Site Functionality',
    icon: '⚙️',
    color: '#5e6ad2',
    items: [
      { id: '1', title: 'GPU Drip price toggle bug', details: 'Fix brand filter not showing', time: '2h ago', status: 'active' },
      { id: '2', title: 'Health Index search deployed', details: 'Now live on production', time: '1d ago', status: 'completed' },
      { id: '3', title: 'BabyGear build reverted', details: 'Missing 4 key features', time: '3h ago', status: 'active' },
    ],
  },
  {
    id: 'blog-posts',
    name: 'Blog Posts',
    icon: '✍️',
    color: '#8b5cf6',
    items: [
      { id: '4', title: 'BabyGear: 8 articles missing', details: 'Need to restore blog', time: '3h ago', status: 'active' },
      { id: '5', title: 'Health Index: Joovv review', details: 'Published', time: '2d ago', status: 'completed' },
    ],
  },
  {
    id: 'affiliates',
    name: 'Affiliate Apps & Integration',
    icon: '💰',
    color: '#10b981',
    items: [
      { id: '6', title: 'Skimlinks - Apply Now', details: 'Great for all aggregators', time: 'New', status: 'pending' },
      { id: '7', title: 'America Cryo setup', details: 'aff=311 ready', time: '1d ago', status: 'completed' },
      { id: '8', title: 'Sunlighten application', details: 'Applied 3/3 - waiting', time: '1d ago', status: 'pending' },
      { id: '9', title: 'Joovv application', details: 'Applied 3/3 - waiting', time: '1d ago', status: 'pending' },
      { id: '10', title: 'Four Sigmatic application', details: 'Applied 3/3 - waiting', time: '1d ago', status: 'pending' },
      { id: '11', title: 'Apple affiliate - April 2', details: 'Reminder set', time: '2d ago', status: 'pending' },
    ],
  },
  {
    id: 'automation',
    name: 'Automation / Cron / Alerts',
    icon: '⚡',
    color: '#f59e0b',
    items: [
      { id: '12', title: 'Morning Task Check', details: 'Daily @ 9 AM', time: 'Scheduled', status: 'active' },
      { id: '13', title: 'Affiliate Evening Check', details: 'Daily @ 10 PM', time: 'Scheduled', status: 'active' },
      { id: '14', title: 'Weekly Site Health', details: 'Sundays @ 12 PM', time: 'Scheduled', status: 'active' },
      { id: '15', title: 'Weekly Summary', details: 'Sundays @ 6 PM', time: 'Scheduled', status: 'active' },
      { id: '16', title: 'Skimlinks Reminder', details: 'Daily @ 10 AM', time: 'Scheduled', status: 'active' },
    ],
  },
  {
    id: 'socials',
    name: 'Socials / Reddit / Hype',
    icon: '📢',
    color: '#ec4899',
    items: [
      { id: '17', title: 'Reddit post: GPU Drip', details: 'r/buildapcsales', time: 'Yesterday', status: 'completed' },
      { id: '18', title: 'Twitter thread planned', details: 'Mission Control launch', time: 'Tomorrow', status: 'pending' },
      { id: '19', title: 'Product Hunt strategy', details: 'Prep for launch', time: '3d ago', status: 'active' },
    ],
  },
];

const statusColors: Record<string, string> = {
  active: 'bg-[#5e6ad2]',
  pending: 'bg-amber-500',
  completed: 'bg-emerald-500',
};

export default function LiveActivity() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('site-functionality');

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <aside className="w-72 bg-[#0c0c0c] border-l border-[#2d2d2d] h-full flex flex-col flex-shrink-0 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#2d2d2d] sticky top-0 bg-[#0c0c0c] z-10">
        <h3 className="text-sm font-semibold text-[#f5f5f5]">Live Activity</h3>
        <p className="text-[10px] text-[#5a5a5a] mt-0.5">5 Focus Areas</p>
      </div>

      {/* Categories */}
      <div className="flex-1 py-2">
        {activityCategories.map((cat) => {
          const isExpanded = expandedCategory === cat.id;
          const activeCount = cat.items.filter(i => i.status === 'active').length;
          
          return (
            <div key={cat.id} className="border-b border-[#2d2d2d]/50">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="text-base">{cat.icon}</span>
                <div className="flex-1 text-left">
                  <div className="text-xs font-medium text-[#f5f5f5]">{cat.name}</div>
                  <div className="text-[10px] text-[#5a5a5a]">
                    {activeCount} active • {cat.items.length} total
                  </div>
                </div>
                <span className={`text-xs transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Expanded Items */}
              {isExpanded && (
                <div className="bg-[#0c0c0c]/50">
                  {cat.items.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2.5 pl-11 hover:bg-[#1a1a1a] cursor-pointer transition-colors border-t border-[#2d2d2d]/30"
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${statusColors[item.status]}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#f5f5f5] line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-[#8a8a8a] mt-0.5 line-clamp-1">
                            {item.details}
                          </p>
                          <p className="text-[9px] text-[#5a5a5a] mt-1">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
