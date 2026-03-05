'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase, Project, Task, Affiliate } from './lib/supabase';
import { AffiliateTracker } from './components/AffiliateTracker';
import { QuickActions } from './components/QuickActions';
import { AgentStatus } from './components/AgentStatus';
import { ProjectIndex } from './components/ProjectIndex';
import { PriorityQueue } from './components/PriorityQueue';
import { CronJobs } from './components/CronJobs';

// Status color mapping
const getStatusColor = (status: string) => {
  switch (status) {
    case 'PRIORITY': return 'bg-red-500';
    case 'ITERATE': return 'bg-blue-500';
    case 'PLANNING': return 'bg-gray-500';
    case 'DONE': return 'bg-emerald-500';
    default: return 'bg-gray-500';
  }
};

const STATUS_COLORS: Record<string, string> = {
  'todo': 'bg-[#2a2a2a] text-[#8a8a8a]',
  'in-progress': 'bg-[#5e6ad2] text-white',
  'review': 'bg-amber-500/20 text-amber-400',
  'done': 'bg-emerald-500/20 text-emerald-400',
};

const STATUS_LABELS: Record<string, string> = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'review': 'Review',
  'done': 'Done',
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [affiliates, setAffiliates] = useState<Affiliate[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchData();
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

  const fetchData = async () => {
    const [projectsRes, tasksRes, affiliatesRes] = await Promise.all([
      supabase.from('projects').select('*').order('name'),
      supabase.from('tasks').select('*').order('created_at', { ascending: false }),
      supabase.from('affiliates').select('*').order('brand')
    ]);
    if (projectsRes.data) setProjects(projectsRes.data);
    if (tasksRes.data) setTasks(tasksRes.data);
    if (affiliatesRes.data) setAffiliates(affiliatesRes.data);
    setLoading(false);
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    await supabase.from('tasks').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', taskId);
    fetchData();
  };

  const priorityProjects = projects.filter(p => p.status === 'PRIORITY');
  const iterateProjects = projects.filter(p => p.status === 'ITERATE');
  const planningProjects = projects.filter(p => p.status === 'PLANNING');
  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress');

  if (loading) return <div className="min-h-screen bg-[#0c0c0c] text-white p-8">Loading...</div>;

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

      <div className="p-4 space-y-6">
        {/* SOP Note */}
        <div className="bg-[#1a1a1a] border border-[#5e6ad2]/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">📋</span>
            <div>
              <h3 className="text-sm font-semibold text-[#5e6ad2] mb-1">Standard Operating Procedure</h3>
              <p className="text-xs text-[#8a8a8a]">
                Use Mission Control as the central source of truth. All project URLs, code locations, 
                tasks, and context live here. Update this dashboard when anything changes.
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
              <a
                key={project.id}
                href={project.domain?.startsWith('http') ? project.domain : `https://${project.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#5e6ad2] rounded-xl p-4 transition-all block"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#f5f5f5] text-sm">{project.name}</h3>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full text-white font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-[#5a5a5a]">{project.short_desc}</p>
              </a>
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
              <a
                key={project.id}
                href={project.domain?.startsWith('http') ? project.domain : `https://${project.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#5e6ad2] rounded-xl p-3 transition-all block"
              >
                <h3 className="font-medium text-[#f5f5f5] text-xs">{project.name}</h3>
                <p className="text-[10px] text-[#5a5a5a] mt-1">{project.short_desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Quick Actions + Calendar + Affiliates Row */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Quick Actions */}
          <QuickActions />

          {/* Calendar */}
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-[#2d2d2d] flex items-center gap-2">
              <span className="text-base">📅</span>
              <h2 className="text-sm font-semibold text-[#f5f5f5]">Calendar</h2>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
                  <div key={d} className="text-center text-[9px] text-[#5a5a5a] font-medium py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                  <div key={day} className="aspect-square flex items-center justify-center text-xs rounded-md bg-[#2d2d2d] text-[#8a8a8a]">
                    {day}
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 pb-3 text-xs text-[#5e6ad2]">Apr 2: Apple/B&H deadline</div>
          </div>

          {/* Affiliate Tracker */}
          <AffiliateTracker affiliates={affiliates} />
        </div>

        {/* My Tasks */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">✅</span>
            <h2 className="text-sm font-semibold text-[#f5f5f5]">My Tasks</h2>
          </div>
          <div className="space-y-2">
            {todoTasks.map(task => (
              <div key={task.id} className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg p-3 flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-[#f5f5f5]">{task.title}</div>
                  <div className="text-[10px] text-[#5a5a5a]">{task.project}</div>
                </div>
                <div className="flex items-center gap-2">
                  <select 
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                    className="text-xs bg-[#2d2d2d] text-[#8a8a8a] rounded px-2 py-1 border-none"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                  </select>
                  <span className="text-[10px] text-[#5e6ad2]">{task.assignee_initials}</span>
                </div>
              </div>
            ))}
            {inProgressTasks.map(task => (
              <div key={task.id} className="bg-[#1a1a1a] border border-[#5e6ad2]/30 rounded-lg p-3 flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-[#f5f5f5]">{task.title}</div>
                  <div className="text-[10px] text-[#5a5a5a]">{task.project}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#5e6ad2] text-white">In Progress</span>
                  <select 
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                    className="text-xs bg-[#2d2d2d] text-[#8a8a8a] rounded px-2 py-1 border-none"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
