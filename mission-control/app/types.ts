export interface Task {
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

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Agent {
  id: string;
  name: string;
  color: string;
  status: 'active' | 'idle' | 'offline';
  currentTask?: string;
  lastActive: string;
  routines: Routine[];
}

export interface Routine {
  id: string;
  name: string;
  schedule: string;
  frequency: string;
  enabled: boolean;
  lastRun?: string;
}

export interface Activity {
  id: string;
  agentId: string;
  agentName: string;
  agentColor: string;
  action: string;
  target: string;
  type: 'task' | 'research' | 'content' | 'alert' | 'system';
  timestamp: string;
}