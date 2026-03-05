'use client';

interface CronJob {
  id: string;
  name: string;
  schedule: string;
  command: string;
  description: string;
  status: 'active' | 'paused' | 'failed';
  last_run: string;
  next_run: string;
}

interface CronJobsProps {
  jobs: CronJob[];
}

export function CronJobs({ jobs }: CronJobsProps) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">⏰</span>
          <h2 className="text-sm font-semibold text-[#f5f5f5]">Cron Jobs</h2>
        </div>
        <span className="text-[10px] text-[#5a5a5a]">
          {jobs.filter(j => j.status === 'active').length} Active
        </span>
      </div>
      <div className="p-3 space-y-2">
        {jobs.length === 0 ? (
          <div className="text-xs text-[#5a5a5a] text-center py-4">No cron jobs configured</div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="bg-[#2d2d2d] rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#f5f5f5]">{job.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${
                  job.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' :
                  job.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {job.status}
                </span>
              </div>
              <div className="text-[10px] text-[#8a8a8a]">{job.description}</div>
              <div className="flex items-center gap-3 text-[10px] mt-1">
                <span className="text-[#5e6ad2]">⏱️ {job.schedule}</span>
                {job.last_run && (
                  <span className="text-[#5a5a5a]">Last: {job.last_run}</span>
                )}
                {job.next_run && (
                  <span className="text-[#5a5a5a]">Next: {job.next_run}</span>
                )}
              </div>
            </div>
          ))
        )}
        
        {/* Proposed Jobs */}
        <div className="border-t border-[#2d2d2d] pt-2 mt-2">
          <div className="text-[10px] text-[#5a5a5a] mb-2">Proposed Jobs</div>
          <div className="space-y-1 text-[10px]">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">○</span>
              <span className="text-[#8a8a8a]">Twitter/OpenClaw monitor (daily 9am)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">○</span>
              <span className="text-[#8a8a8a]">Affiliate status check (every 2 days)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">○</span>
              <span className="text-[#8a8a8a]">GPU Drip blog reminder (daily 11am)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">○</span>
              <span className="text-[#8a8a8a]">Price scraping (daily 8am — once Scrapling ready)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
