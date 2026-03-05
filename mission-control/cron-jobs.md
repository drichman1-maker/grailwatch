# Cron Jobs for Mission Control

## Task Monitoring Jobs

### 1. Stale Task Check (Daily at 10 AM)
Checks for tasks that haven't been updated in 7+ days and sends a reminder.

### 2. Deadline Alert (Daily at 9 AM)  
Alerts about tasks due within 48 hours.

### 3. Affiliate Status Check (Daily at 10 PM)
Checks affiliate application statuses and reports changes.

### 4. Weekly Report (Sundays at 6 PM)
Sends summary of completed tasks, new tasks, and agent activity.

## Job Definitions

```json
{
  "jobs": [
    {
      "name": "stale-task-check",
      "schedule": "0 10 * * *",
      "description": "Check for tasks not updated in 7+ days"
    },
    {
      "name": "deadline-alert", 
      "schedule": "0 9 * * *",
      "description": "Alert on tasks due within 48 hours"
    },
    {
      "name": "affiliate-check",
      "schedule": "0 22 * * *", 
      "description": "Check affiliate application statuses"
    },
    {
      "name": "weekly-report",
      "schedule": "0 18 * * 0",
      "description": "Weekly summary report"
    }
  ]
}
```

## Agents to Monitor

- **Scout**: Trend Radar (5x daily), Morning Research (daily), Opportunity Scanner (always)
- **Quill**: Script Writer (daily), Daily Digest (daily)
- **Henry**: System Status (daily), Evening Wrap-up (daily), Morning Brief (daily)
- **Launch**: Mac Studio Research (weekly)

## Proactive Actions

1. **Task Assignment Suggestions**: Auto-assign based on agent workload
2. **Deadline Warnings**: 48hr, 24hr, same-day alerts
3. **Agent Health Checks**: Alert if agent hasn't reported activity in 24hr
4. **Content Pipeline**: Alert when content queue is low