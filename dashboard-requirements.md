# Mission Control Dashboard - Build Requirements

## Pages

### 1. Main Dashboard (Overview)
- **Projects Grid:** Cards with status (PRIORITY/ITERATE/DONE), emoji icons, click to deployed URL
- **Stats Row:** Affiliates (4 approved, 6 pending, 14 to apply), Tasks counts
- **Tasks List:** To Do + In Progress items, editable status dropdown
- **Calendar/Deadlines:** Apr 2 Apple/B&H deadline highlighted
- **Quick Actions:** Add task, edit mode

### 2. Projects Detail Page (per project)
- **Status Badge:** PRIORITY/ITERATE/DONE/PLANNING
- **Deployed URL:** Link to live site
- **Local Codebase:** Path (e.g., `gpudrip-static/`)
- **Current Issues:** Known bugs/tasks
- **Recent Changes:** Git commits/deployments
- **Quick Edit:** Update status inline

### 3. Agent Activity Page
- **Currently Working On:** What main agent is doing now
- **Active Subagents:** Spawned tasks, status, progress
- **Recent Activity:** Tool calls, commits, deployments
- **Session Health:** Token usage, context size

### 4. Cron Jobs Schedule Page
- **All 10 Jobs Listed:**
  - Morning task check (9am daily)
  - Daily improvement (10am daily)
  - Skimlinks reminder (10am daily)
  - Deals check (2pm daily)
  - Evening affiliate check (10pm daily)
  - Weekly sites health (Sun 12pm)
  - Weekly summary (Sun 6pm)
  - April 2 deadline (Apr 1-2 9am)
- **Status:** Active/paused, last run, next run
- **Toggle:** Enable/disable jobs

### 5. Task Queue Page
- **Full Task List:** All tasks from all projects
- **Filter:** By status (todo/in-progress/done), project, priority
- **Add New:** Form to create task with project, priority, assignee
- **Edit/Delete:** Update or remove tasks
- **Queue View:** What's pending, what to tackle next

## Design Reference
- Dark theme, clean cards
- Status colors: Priority=red, Done=green, Iterate=blue
- Mobile responsive
- Editable inline where possible

## Data Source
- JSON file hosted alongside dashboard (easy to edit)
- Structure: projects[], tasks[], affiliates[], cronJobs[]

## Tech Stack
- Static HTML/CSS/JS (simplest)
- OR Next.js if dynamic features needed
- Deploy: Vercel

## Priority Tasks (From Queue)
1. HIGH: Fix GPU Drip price toggle
2. HIGH: America Cryo Affiliately setup (aff=311)
3. MEDIUM: Check affiliate statuses (Sunlighten, Joovv, Four Sigmatic)
4. MEDIUM: Sun Home sauna application
5. LOW: Build Air Quality Site

## New Tools to Integrate (Future)
- Scrapling (robust web scraping)
- Pinchtab (browser automation/tabs)
