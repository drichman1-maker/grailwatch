'use client';

import { useState } from 'react';
import { Affiliate } from '../lib/supabase';

interface AffiliateTrackerProps {
  affiliates: Affiliate[];
  onUpdateStatus?: (id: string, status: string) => void;
}

const STATUS_GROUPS = [
  { label: 'Approved', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', statuses: ['Approved', 'Ready', 'Active'] },
  { label: 'Pending', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', statuses: ['Applied', 'Pending', 'Review'] },
  { label: 'To Apply', color: 'bg-[#5e6ad2]/20 text-[#5e6ad2] border-[#5e6ad2]/30', statuses: ['Apply', 'To Apply', 'Not Applied'] },
];

export function AffiliateTracker({ affiliates, onUpdateStatus }: AffiliateTrackerProps) {
  const [expanded, setExpanded] = useState(false);

  const approved = affiliates.filter(a => STATUS_GROUPS[0].statuses.some(s => a.status?.includes(s)));
  const pending = affiliates.filter(a => STATUS_GROUPS[1].statuses.some(s => a.status?.includes(s)));
  const toApply = affiliates.filter(a => STATUS_GROUPS[2].statuses.some(s => a.status?.includes(s)));

  const displayed = expanded ? affiliates : affiliates.slice(0, 6);

  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">💰</span>
          <h2 className="text-sm font-semibold text-[#f5f5f5]">Affiliate Tracker</h2>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-emerald-400">{approved.length} approved</span>
          <span className="text-amber-400">{pending.length} pending</span>
          <span className="text-[#5e6ad2]">{toApply.length} to apply</span>
        </div>
      </div>

      <div className="p-3 space-y-2">
        {displayed.map(aff => (
          <div key={aff.id} className="flex items-center justify-between bg-[#0c0c0c] rounded-lg p-3 border border-[#2d2d2d]">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#f5f5f5] font-medium">{aff.brand}</span>
                {aff.commission && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5e6ad2]/20 text-[#5e6ad2]">
                    {aff.commission}
                  </span>
                )}
              </div>
              {aff.category && (
                <span className="text-[10px] text-[#5a5a5a]">{aff.category}</span>
              )}
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full border ${getStatusColor(aff.status)}`}>
              {aff.status}
            </span>
          </div>
        ))}
      </div>

      {affiliates.length > 6 && (
        <div className="px-4 pb-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-[#5e6ad2] hover:underline"
          >
            {expanded ? 'Show less' : `Show all ${affiliates.length} affiliates`}
          </button>
        </div>
      )}

      <div className="px-4 pb-3 pt-2 border-t border-[#2d2d2d]">
        <a
          href="https://affiliate-programs.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#5a5a5a] hover:text-[#5e6ad2] transition-colors"
        >
          → Amazon Associates
        </a>
        <span className="text-[#2d2d2d] mx-2">|</span>
        <a
          href="https://www.ebay.com/partners/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#5a5a5a] hover:text-[#5e6ad2] transition-colors"
        >
          → eBay Partners
        </a>
      </div>
    </div>
  );
}

function getStatusColor(status: string | null): string {
  if (!status) return 'bg-[#2d2d2d] text-[#5a5a5a] border-[#2d2d2d]';
  if (status.includes('Approved') || status.includes('Ready') || status.includes('Active')) {
    return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
  }
  if (status.includes('Applied') || status.includes('Pending') || status.includes('Review')) {
    return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
  }
  return 'bg-[#5e6ad2]/20 text-[#5e6ad2] border-[#5e6ad2]/30';
}

export default AffiliateTracker;