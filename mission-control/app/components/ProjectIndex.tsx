'use client';

import { Project } from '../lib/supabase';

interface ProjectIndexProps {
  projects: Project[];
}

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">📁</span>
          <h2 className="text-sm font-semibold text-[#f5f5f5]">Project Index</h2>
        </div>
        <span className="text-[10px] text-[#5a5a5a]">Source of Truth</span>
      </div>
      <div className="p-3 space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#2d2d2d] rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-[#f5f5f5]">{project.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded ${
                  project.tier === '1' ? 'bg-red-500/20 text-red-400' :
                  project.tier === '2' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-[#5a5a5a]/20 text-[#8a8a8a]'
                }`}>
                  Tier {project.tier || '?'}
                </span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded ${
                project.status === 'PRIORITY' ? 'bg-red-500 text-white' :
                project.status === 'ITERATE' ? 'bg-blue-500 text-white' :
                'bg-[#5a5a5a] text-white'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <span className="text-[#5a5a5a]">Codebase: </span>
                <code className="text-[#8a8a8a] bg-[#1a1a1a] px-1 rounded">{project.codebase_path || project.name.toLowerCase().replace(/\s+/g, '-') + '/'}</code>
              </div>
              <div>
                <span className="text-[#5a5a5a]">Stack: </span>
                <span className="text-[#8a8a8a]">{project.stack || 'Next.js'}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-[10px]">
              {project.deployed_url && (
                <a 
                  href={project.deployed_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#5e6ad2] hover:underline flex items-center gap-1"
                >
                  <span>🌐</span> Live
                </a>
              )}
              {project.domain && (
                <a 
                  href={project.domain.startsWith('http') ? project.domain : `https://${project.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#5e6ad2] hover:underline flex items-center gap-1"
                >
                  <span>🔗</span> Domain
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
