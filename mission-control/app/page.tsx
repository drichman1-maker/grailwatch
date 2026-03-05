'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TaskList from './components/TaskList';
import LiveActivity from './components/LiveActivity';

const projects = [
  {
    id: 'mactrackr',
    name: '🍎 Mactrackr',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'Apple product aggregator with price alerts and price history tracking.',
    domain: 'mactrackr.app',
    shortDesc: 'Apple price tracking',
  },
  {
    id: 'health-index',
    name: '🏥 Health Index',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'Wellness product aggregator for wellness devices, supplements, etc.',
    domain: 'healthindex.app',
    shortDesc: 'Wellness aggregator',
  },
  {
    id: 'gpu-drip',
    name: '💻 GPU Drip',
    status: 'PRIORITY',
    statusColor: 'bg-red-500',
    description: 'GPU aggregator with price and stock updates.',
    domain: 'gpudrip.app',
    shortDesc: 'GPU price tracker',
  },
  {
    id: 'babygear',
    name: '👶 BabyGear',
    status: 'DONE',
    statusColor: 'bg-emerald-500',
    description: 'Popular baby products aggregator.',
    domain: 'babygear-next.vercel.app',
    shortDesc: 'Baby products',
  },
  {
    id: 'coin-curator',
    name: '🪙 Coin Curator',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Coin and collectible price tracking.',
    domain: 'coincurator.app',
    shortDesc: 'Coin tracking',
  },
  {
    id: 'mint-condition',
    name: '✨ Mint Condition',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Pokemon card aggregator.',
    domain: 'mintcondition.app',
    shortDesc: 'Pokemon cards',
  },
  {
    id: 'slugger-data',
    name: '⚾ Slugger Data',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Baseball cards aggregator.',
    domain: 'sluggerdata.app',
    shortDesc: 'Baseball cards',
  },
  {
    id: 'rumble-deals',
    name: '🥊 Rumble Deals',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'MMA/random gaming aggregator.',
    domain: 'rumbledeals.app',
    shortDesc: 'MMA gear',
  },
  {
    id: 'comics',
    name: '📚 Comics',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Graded Comic Books.',
    domain: 'grailwatch.com',
    shortDesc: 'Comics',
  },
  {
    id: 'robot-atlas',
    name: '🤖 Robot Atlas',
    status: 'ITERATE',
    statusColor: 'bg-blue-500',
    description: 'Robots/Automation aggregator.',
    domain: 'robotatlas.app',
    shortDesc: 'Robotics',
  },
  {
    id: 'air-quality',
    name: '🌬️ Air Quality',
    status: 'PLANNING',
    statusColor: 'bg-gray-500',
    description: 'IQAir, Molekule, Austin Air affiliates.',
    domain: 'airquality.app',
    shortDesc: 'Air purifiers',
  },
];

const affiliateStats = [
  { label: 'Approved', value: 4, color: 'text-emerald-400' },
  { label: 'Pending', value: 6, color: 'text-amber-400' },
  { label: 'To Apply', value: 14, color: 'text-[#5e6ad2]' },
  { label: 'Rejected', value: 2, color: 'text-red-400' },
];

const affiliates = [
  { brand: 'America Cryo', category: 'Cryotherapy', status: 'Ready (aff=311)', statusColor: 'bg-blue-500', commission: '~8%' },
  { brand: 'Amazon', category: 'General', status: 'Approved', statusColor: 'bg-emerald-500', commission: '~4%' },
  { brand: 'eBay', category: 'General', status: 'Approved', statusColor: 'bg-emerald-500', commission: '~4%' },
  { brand: 'Skimlinks', category: 'Aggregator', status: 'Apply Now', statusColor: 'bg-purple-500', commission: 'varies' },
  { brand: 'Sunlighten', category: 'Saunas', status: 'Applied 3/3', statusColor: 'bg-amber-500', commission: '6-10%' },
  { brand: 'Joovv', category: 'Red Light', status: 'Applied 3/3', statusColor: 'bg-amber-500', commission: '6-10%' },
  { brand: 'Four Sigmatic', category: 'Mushroom Coffee', status: 'Applied 3/3', statusColor: 'bg-amber-500', commission: '~15%' },
];

function Calendar() {
  const [today] = useState(4);
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center gap-2">
        <span className="text-base">📅</span>
        <h2 className="text-sm font-semibold text-[#f5f5f5]">Calendar</h2>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map(d => (
            <div key={d} className="text-center text-[9px] text-[#5a5a5a] font-medium py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.slice(0, 28).map((day) => (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center text-xs rounded-md cursor-pointer transition-colors ${
                day === today
                  ? 'bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] text-white font-semibold'
                  : day === 2
                  ? 'bg-[#2a2a2a] text-[#f5f5f5] relative after:content-[""] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-amber-500 after:rounded-full'
                  : 'text-[#8a8a8a] hover:bg-[#252525]'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-[#2d2d2d]">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            <span className="text-[#8a8a8a]">Apr 2: Apple/B&H deadline</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AffiliateStatus() {
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center gap-2">
        <span className="text-base">💰</span>
        <h2 className="text-sm font-semibold text-[#f5f5f5]">Affiliates</h2>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {affiliateStats.map((stat) => (
            <div key={stat.label} className="bg-[#0c0c0c] rounded-lg p-2 text-center">
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[9px] text-[#5a5a5a] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <table className="w-full">
          <tbody>
            {affiliates.slice(0, 4).map((aff) => (
              <tr key={aff.brand} className="border-t border-[#2d2d2d]">
                <td className="py-1.5 text-xs text-[#f5f5f5]">{aff.brand}</td>
                <td className="py-1.5">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded text-white ${aff.statusColor}`}>
                    {aff.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const priorityProjects = projects.filter(p => p.status === 'PRIORITY');
  const iterateProjects = projects.filter(p => p.status === 'ITERATE');
  const planningProjects = projects.filter(p => p.status === 'PLANNING');

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5]">
      {/* Header */}
      <header className="px-4 py-3 border-b border-[#2d2d2d] bg-[#0c0c0c] flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] rounded-lg flex items-center justify-center">
            <span className="text-sm">🚀</span>
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] bg-clip-text text-transparent">
            Mission Control
          </h1>
        </div>
        <div className="hidden md:block text-xs text-[#5a5a5a]">{currentTime}</div>
      </header>

      <div className="flex flex-col md:flex-row h-[calc(100vh-60px)]">
        {/* Main Content */}
        <main className="flex-1 p-4 space-y-6 overflow-y-auto md:h-full">
          {/* SOP Note */}
          <div className="bg-[#1a1a1a] border border-[#5e6ad2]/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-lg">📋</span>
              <div>
                <h3 className="text-sm font-semibold text-[#5e6ad2] mb-1">Standard Operating Procedure</h3>
                <p className="text-xs text-[#8a8a8a]">
                  Use Mission Control as the central source of truth. All project URLs, code locations, 
                  tasks, and context live here. Update this dashboard when anything changes. 
                  Check here first before asking "where is X?"
                </p>
              </div>
            </div>
          </div>

          {/* Priority Projects */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">🎯</span>
              <h2 className="text-sm font-semibold text-[#f5f5f5]">Priority Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {priorityProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#5e6ad2] rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-[#f5f5f5] text-sm">{project.name}</h3>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full text-white font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#5a5a5a]">{project.shortDesc}</p>
                  <div className="mt-2 text-[10px] text-[#5e6ad2]">View details →</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Iterate Projects */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">⏳</span>
              <h2 className="text-sm font-semibold text-[#5a5a5a]">Iterate When Time</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {iterateProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#3d3d3d] rounded-xl p-3 transition-all"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-[#f5f5f5] text-xs">{project.name}</h3>
                  </div>
                  <p className="text-[10px] text-[#5a5a5a]">{project.shortDesc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Planning */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">📝</span>
              <h2 className="text-sm font-semibold text-[#5a5a5a]">Planning</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {planningProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-3 opacity-60"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-[#f5f5f5] text-xs">{project.name}</h3>
                  </div>
                  <p className="text-[10px] text-[#5a5a5a]">{project.shortDesc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Calendar & Affiliate - responsive grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Calendar />
            <AffiliateStatus />
          </section>

          {/* Tasks */}
          <section>
            <TaskList />
          </section>
        </main>

        {/* Live Activity Sidebar - hidden on mobile */}
        <div className="hidden md:block w-72 flex-shrink-0 h-full overflow-hidden">
          <LiveActivity />
        </div>
      </div>
    </div>
  );
}
