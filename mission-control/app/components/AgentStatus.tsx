'use client';

import { AgentWork } from '../lib/supabase';

interface AgentStatusProps {
  agents: AgentWork[];
}

export function AgentStatus({ agents }: AgentStatusProps) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center gap-2">
        <span className="text-base">🤖</span>
        <h2 className="text-sm font-semibold text-[#f5f5f5]">Agent Activity</h2>
      </div>
      <div className="p-3 space-y-2">
        {agents.length === 0 ? (
          <div className="text-xs text-[#5a5a5a]">No active agents</div>
        ) : (
          agents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-2 bg-[#2d2d2d] rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#f5f5f5]">{agent.agent_name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    agent.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                    agent.status === 'error' ? 'bg-red-500/20 text-red-400' :
                    'bg-[#5a5a5a]/20 text-[#8a8a8a]'
                  }`}>
                    {agent.status}
                  </span>
                </div>
                <div className="text-[10px] text-[#8a8a8a] mt-0.5">{agent.current_task}</div>
                {agent.project && (
                  <div className="text-[10px] text-[#5e6ad2]">{agent.project}</div>
                )}
              </div>
            </div>
          ))
        )}
        {/* Default Agents */}
        <div className="border-t border-[#2d2d2d] pt-2 mt-2">
          <div className="text-[10px] text-[#5a5a5a] mb-2">Configured Agents</div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#f5f5f5]">⚡ Lavish</span>
              <span className="text-[10px] text-emerald-400">Online</span>
            </div>
            <div className="text-[10px] text-[#5a5a5a]">Complex tasks, coding, orchestration</div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#f5f5f5]">💎 Opulence</span>
              <span className="text-[10px] text-emerald-400">Online</span>
            </div>
            <div className="text-[10px] text-[#5a5a5a]">WhatsApp — witty tech banter</div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#f5f5f5]">👑 Royal</span>
              <span className="text-[10px] text-red-400">Disabled</span>
            </div>
            <div className="text-[10px] text-[#5a5a5a]">iMessage — privacy issue, offline</div>
          </div>
        </div>
      </div>
    </div>
  );
}
