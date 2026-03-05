'use client';

import { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  project: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'review' | 'done';
  assignee?: string;
  assigneeInitials?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt?: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Partial<Task>) => void;
  initialTask?: Partial<Task>;
  agents: string[];
  projects: string[];
}

const PROJECT_COLORS: Record<string, string> = {
  'Health Index': '#10b981',
  'GPU Drip': '#3b82f6',
  'Mactrackr': '#f59e0b',
  'Air Quality Site': '#8b5cf6',
  'Mission Control': '#5e6ad2',
};

export default function TaskModal({ isOpen, onClose, onSave, initialTask, agents, projects }: TaskModalProps) {
  const [task, setTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    project: projects[0],
    priority: 'medium',
    status: 'todo',
    assignee: '',
  });

  // Update state when initialTask changes (editing different task)
  useEffect(() => {
    if (initialTask) {
      setTask(initialTask);
    } else {
      setTask({
        title: '',
        description: '',
        project: projects[0],
        priority: 'medium',
        status: 'todo',
        assignee: '',
      });
    }
  }, [initialTask, projects]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.title) return;
    
    const assigneeInitials = task.assignee 
      ? task.assignee.split(' ').map(n => n[0]).join('').toUpperCase()
      : undefined;
    
    onSave({ ...task, assigneeInitials });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl w-[450px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-5">
          <h2 className="text-lg font-semibold text-[#f5f5f5] mb-4">
            {initialTask?.id ? 'Edit Task' : 'New Task'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-[#5a5a5a] mb-1.5">Title</label>
              <input
                type="text"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className="w-full px-3 py-2 bg-[#0c0c0c] border border-[#2d2d2d] rounded-lg text-sm text-[#f5f5f5] focus:outline-none focus:border-[#5e6ad2]"
                placeholder="What needs to be done?"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs text-[#5a5a5a] mb-1.5">Description</label>
              <textarea
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                className="w-full px-3 py-2 bg-[#0c0c0c] border border-[#2d2d2d] rounded-lg text-sm text-[#f5f5f5] focus:outline-none focus:border-[#5e6ad2] h-20 resize-none"
                placeholder="Add details..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#5a5a5a] mb-1.5">Project</label>
                <select
                  value={task.project}
                  onChange={(e) => setTask({ ...task, project: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0c0c0c] border border-[#2d2d2d] rounded-lg text-sm text-[#f5f5f5] focus:outline-none focus:border-[#5e6ad2]"
                >
                  {projects.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#5a5a5a] mb-1.5">Assignee</label>
                <select
                  value={task.assignee}
                  onChange={(e) => setTask({ ...task, assignee: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0c0c0c] border border-[#2d2d2d] rounded-lg text-sm text-[#f5f5f5] focus:outline-none focus:border-[#5e6ad2]"
                >
                  <option value="">Unassigned</option>
                  {agents.map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#5a5a5a] mb-1.5">Priority</label>
                <div className="flex gap-1">
                  {(['high', 'medium', 'low'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setTask({ ...task, priority: p })}
                      className={`flex-1 py-2 text-xs rounded-lg border transition-all capitalize ${
                        task.priority === p
                          ? 'bg-[#2a2a2a] border-[#5e6ad2] text-[#f5f5f5]'
                          : 'border-[#2d2d2d] text-[#5a5a5a] hover:border-[#3d3d3d]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#5a5a5a] mb-1.5">Status</label>
                <select
                  value={task.status}
                  onChange={(e) => setTask({ ...task, status: e.target.value as Task['status'] })}
                  className="w-full px-3 py-2 bg-[#0c0c0c] border border-[#2d2d2d] rounded-lg text-sm text-[#f5f5f5] focus:outline-none focus:border-[#5e6ad2]"
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!task.title}
              className="px-4 py-2 bg-[#5e6ad2] hover:bg-[#6872e3] text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {initialTask?.id ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}