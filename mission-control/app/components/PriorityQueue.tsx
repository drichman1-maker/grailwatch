'use client';

interface QueueItem {
  id: string;
  title: string;
  project: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'blocked' | 'ready' | 'in-progress';
  blocked_reason?: string;
}

interface PriorityQueueProps {
  items: QueueItem[];
}

export function PriorityQueue({ items }: PriorityQueueProps) {
  const critical = items.filter(i => i.priority === 'critical');
  const high = items.filter(i => i.priority === 'high');
  const blocked = items.filter(i => i.status === 'blocked');

  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">🚨</span>
          <h2 className="text-sm font-semibold text-[#f5f5f5]">Priority Queue</h2>
        </div>
        <div className="flex gap-2">
          {critical.length > 0 && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-red-500 text-white">
              {critical.length} Critical
            </span>
          )}
          {blocked.length > 0 && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-white">
              {blocked.length} Blocked
            </span>
          )}
        </div>
      </div>
      <div className="p-3 space-y-2">
        {items.length === 0 ? (
          <div className="text-xs text-[#5a5a5a] text-center py-4">Queue is clear 🎉</div>
        ) : (
          items.map((item) => (
            <div key={item.id} className={`p-2 rounded-lg border ${
              item.priority === 'critical' ? 'bg-red-500/10 border-red-500/30' :
              item.priority === 'high' ? 'bg-amber-500/10 border-amber-500/30' :
              'bg-[#2d2d2d] border-[#3d3d3d]'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  item.status === 'blocked' ? 'bg-red-500 text-white' :
                  item.status === 'in-progress' ? 'bg-[#5e6ad2] text-white' :
                  'bg-[#5a5a5a] text-white'
                }`}>
                  {item.status}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  item.priority === 'critical' ? 'bg-red-500/50' :
                  item.priority === 'high' ? 'bg-amber-500/50' :
                  'bg-[#5a5a5a]/50'
                } text-white`}>
                  {item.priority}
                </span>
              </div>
              <div className="text-sm text-[#f5f5f5] mt-1">{item.title}</div>
              <div className="text-[10px] text-[#5a5a5a]">{item.project}</div>
              {item.blocked_reason && (
                <div className="text-[10px] text-red-400 mt-1">⚠️ {item.blocked_reason}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
