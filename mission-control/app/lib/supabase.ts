import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsdjebsgdtexfwvmsjbz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZGplYnNnZHRleGZ3dm1samJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTU2ODAsImV4cCI6MjA4ODI5MTY4MH0.qtTce8de0zxkwOZv8cqoque4edRKRRlBMknQfqgiqBM';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Project {
  id: string;
  name: string;
  status: string;
  status_color: string;
  description: string;
  domain: string;
  short_desc: string;
  codebase_path: string;
  deployed_url: string;
  local_path: string;
  stack: string;
  tier: string;
  updated_at: string;
}

export interface AgentWork {
  id: string;
  agent_name: string;
  current_task: string;
  project: string;
  status: 'active' | 'idle' | 'error';
  started_at: string;
  updated_at: string;
}

export interface CronJob {
  id: string;
  name: string;
  schedule: string;
  command: string;
  description: string;
  status: 'active' | 'paused' | 'failed';
  last_run: string;
  next_run: string;
}

export interface PriorityQueue {
  id: string;
  title: string;
  project: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'blocked' | 'ready' | 'in-progress';
  blocked_reason?: string;
  created_at: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  project: string;
  priority: string;
  status: string;
  assignee: string;
  assignee_initials: string;
  created_at: string;
  updated_at: string;
}

export interface Affiliate {
  id: string;
  brand: string;
  category: string;
  status: string;
  status_color: string;
  commission: string;
  updated_at: string;
}
