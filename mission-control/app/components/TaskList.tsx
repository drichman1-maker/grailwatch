'use client';

import { useState } from 'react';
import { Task } from '../types';
import TaskModal from './TaskModal';

const AGENTS = ['You', 'Henry', 'Scout', 'Quill', 'Launch'];
const PROJECTS = ['Health Index', 'GPU Drip', 'Mactrackr', 'BabyGear', 'Air Quality Site', 'Mission Control'];

const PROJECT_COLORS: Record<string, string> = {
  'Health Index': '#10b981',
  'GPU Drip': '#3b82f6',
  'Mactrackr': '#f59e0b',
  'BabyGear': '#f97316',
  'Air Quality Site': '#8b5cf6',
  'Mission Control': '#5e6ad2',
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

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'GPU Drip price updates not showing',
    description: 'Fix brand toggle and current prices on live site',
    project: 'GPU Drip',
    priority: 'high',
    status: 'todo',
    assignee: 'You',
    assigneeInitials: 'Y',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Check affiliate application statuses',
    description: 'Sunlighten, Joovv, Four Sigmatic — check for approvals',
    project: 'Health Index',
    priority: 'medium',
    status: 'todo',
    assignee: 'You',
    assigneeInitials: 'Y',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Add search to Health Index',
    description: 'Search bar for products like Mactrackr has',
    project: 'Health Index',
    priority: 'low',
    status: 'done',
    assignee: 'Henry',
    assigneeInitials: 'H',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'America Cryo Affiliately setup',
    description: 'Complete setup and create affiliate link (aff=311)',
    project: 'Health Index',
    priority: 'high',
    status: 'in-progress',
    assignee: 'You',
    assigneeInitials: 'Y',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Apply to Sun Home saunas',
    description: 'Submit affiliate application for sauna blankets',
    project: 'Health Index',
    priority: 'medium',
    status: 'in-progress',
    assignee: 'You',
    assigneeInitials: 'Y',
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Build Air Quality Site',
    description: 'IQAir, Molekule, Austin Air affiliate aggregation',
    project: 'Air Quality Site',
    priority: 'medium',
    status: 'todo',
    assignee: 'Henry',
    assigneeInitials: 'H',
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Mission Control v1 complete',
    description: 'Dashboard with projects, tasks, affiliates',
    project: 'Mission Control',
    priority: 'high',
    status: 'done',
    assignee: 'Henry',
    assigneeInitials: 'H',
    createdAt: new Date().toISOString(),
  },
];

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [filter, setFilter] = useState<'all' | 'todo' | 'in-progress' | 'review'>('all');

  const filteredTasks = filter === 'all' 
    ? tasks.filter(t => t.status !== 'done')
    : tasks.filter(t => t.status === filter);

  const doneCount = tasks.filter(t => t.status === 'done').length;
  const todoCount = tasks.filter(t => t.status === 'todo').length;
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;

  const handleSaveTask = (taskData: Partial<Task>) => {
    if (taskData.id) {
      setTasks(tasks.map(t => t.id === taskData.id 
        ? { ...t, ...taskData, updatedAt: new Date().toISOString() } as Task 
        : t));
    } else {
      const newTask: Task = {
        ...taskData as Task,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
    }
    setEditingTask(undefined);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleNewTask = () => {
    setEditingTask(undefined);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#2d2d2d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <h2 className="text-base font-semibold text-[#f5f5f5]">My Tasks</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-[#0c0c0c] rounded-lg p-0.5">
              {(['all', 'todo', 'in-progress', 'review'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 text-xs rounded-md transition-all ${
                    filter === f
                      ? 'bg-[#2a2a2a] text-[#f5f5f5]'
                      : 'text-[#5a5a5a] hover:text-[#8a8a8a]'
                  }`}
                >
                  {f === 'all' ? `All (${tasks.length})` : 
                   f === 'todo' ? `To Do (${todoCount})` :
                   f === 'in-progress' ? `In Progress (${inProgressCount})` :
                   `Review (${tasks.filter(t => t.status === 'review').length})`}
                </button>
              ))}
            </div>
            <button
              onClick={handleNewTask}
              className="px-3 py-1.5 bg-[#5e6ad2] hover:bg-[#6872e3] text-white text-xs font-medium rounded-lg transition-colors"
            >
              + New
            </button>
          </div>
        </div>

        <div className="divide-y divide-[#2d2d2d]">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => handleEditTask(task)}
              className="px-5 py-4 hover:bg-[#252525] cursor-pointer transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-[#f5f5f5] group-hover:text-white transition-colors">
                      {task.title}
                    </h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${STATUS_COLORS[task.status]}`}>
                      {STATUS_LABELS[task.status]}
                    </span>
                  </div>
                  <p className="text-xs text-[#5a5a5a] line-clamp-1">{task.description}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ 
                      backgroundColor: `${PROJECT_COLORS[task.project]}15`,
                      color: PROJECT_COLORS[task.project],
                      borderColor: `${PROJECT_COLORS[task.project]}30`
                    }}
                  >
                    {task.project}
                  </span>
                  {task.assigneeInitials && (
                    <div className="w-6 h-6 bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] rounded-full flex items-center justify-center text-[10px] font-medium text-white">
                      {task.assigneeInitials}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {doneCount > 0 && (
          <div className="px-5 py-3 bg-[#0c0c0c] border-t border-[#2d2d2d]">
            <span className="text-xs text-[#5a5a5a]">{doneCount} completed</span>
          </div>
        )}
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        initialTask={editingTask}
        agents={AGENTS}
        projects={PROJECTS}
      />
    </>
  );
}