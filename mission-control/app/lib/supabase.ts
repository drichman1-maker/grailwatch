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
  updated_at: string;
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
