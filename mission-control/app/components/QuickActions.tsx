'use client';

import { useState } from 'react';

interface QuickActionsProps {
  projects?: { name: string; domain: string; path: string }[];
}

interface ActionResult {
  project: string;
  status: 'success' | 'error' | 'running';
  message: string;
}

const PROJECT_CONFIGS = [
  { name: 'Mactrackr', domain: 'mactrackr.app', path: 'mactrackr-frontend/', deployCmd: 'npm run build && vercel --prod' },
  { name: 'Health Index', domain: 'healthindex.app', path: 'healthindex-frontend/', deployCmd: 'npm run build && vercel --prod' },
  { name: 'GPU Drip', domain: 'gpudrip-static.vercel.app', path: 'gpudrip-static/', deployCmd: 'npm run build && vercel --prod' },
  { name: 'BabyGear', domain: 'babygear-next.vercel.app', path: 'babygear-next/', deployCmd: 'npm run build && vercel --prod' },
];

export function QuickActions({ projects }: QuickActionsProps) {
  const [results, setResults] = useState<ActionResult[]>([]);
  const [running, setRunning] = useState<string[]>([]);

  const checkHealth = async (projectName: string) => {
    setRunning(prev => [...prev, projectName]);
    setResults(prev => [...prev.filter(r => r.project !== projectName), { project: projectName, status: 'running', message: 'Checking...' }]);

    try {
      const config = PROJECT_CONFIGS.find(c => c.name === projectName);
      if (!config) throw new Error('Unknown project');

      const response = await fetch(`https://${config.domain}`, { method: 'HEAD' });
      const success = response.ok;

      setResults(prev => prev.filter(r => r.project !== projectName).concat([
        { project: projectName, status: success ? 'success' : 'error', message: success ? 'Online' : `Error: ${response.status}` }
      ]));
    } catch (err) {
      setResults(prev => prev.filter(r => r.project !== projectName).concat([
        { project: projectName, status: 'error', message: err instanceof Error ? err.message : 'Failed to check' }
      ]));
    } finally {
      setRunning(prev => prev.filter(p => p !== projectName));
    }
  };

  const checkAllHealth = () => {
    PROJECT_CONFIGS.forEach(config => checkHealth(config.name));
  };

  const getResult = (projectName: string) => results.find(r => r.project === projectName);

  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">⚡</span>
          <h2 className="text-sm font-semibold text-[#f5f5f5]">Quick Actions</h2>
        </div>
        <button
          onClick={checkAllHealth}
          className="text-[10px] px-3 py-1.5 rounded-lg bg-[#5e6ad2] text-white hover:bg-[#4b58c0] transition-colors"
        >
          Check All Health
        </button>
      </div>

      <div className="p-3 grid grid-cols-2 gap-2">
        {PROJECT_CONFIGS.map(config => {
          const result = getResult(config.name);
          const isRunning = running.includes(config.name);

          return (
            <div key={config.name} className="bg-[#0c0c0c] rounded-lg p-3 border border-[#2d2d2d]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#f5f5f5] font-medium">{config.name}</span>
                {result && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    result.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                    result.status === 'error' ? 'bg-red-500/20 text-red-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {result.message}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => checkHealth(config.name)}
                  disabled={isRunning}
                  className="flex-1 text-[10px] py-1.5 rounded bg-[#2d2d2d] text-[#8a8a8a] hover:bg-[#3d3d3d] transition-colors disabled:opacity-50"
                >
                  {isRunning ? 'Checking...' : 'Health'}
                </button>
                <a
                  href={`https://${config.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-[10px] py-1.5 rounded bg-[#2d2d2d] text-[#8a8a8a] hover:bg-[#3d3d3d] transition-colors text-center"
                >
                  Visit
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 pb-3 pt-2 border-t border-[#2d2d2d] flex gap-3 flex-wrap">
        <button className="text-[10px] text-[#5a5a5a] hover:text-[#5e6ad2] transition-colors">
          → Deploy All
        </button>
        <button className="text-[10px] text-[#5a5a5a] hover:text-[#5e6ad2] transition-colors">
          → Git Push All
        </button>
        <button className="text-[10px] text-[#5a5a5a] hover:text-[#5e6ad2] transition-colors">
          → n8n Status
        </button>
      </div>
    </div>
  );
}

export default QuickActions;