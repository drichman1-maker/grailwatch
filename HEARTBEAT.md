# HEARTBEAT.md — Updated 2026-03-05

## Schedule
- **Daily Report:** 10 PM EST (cron)
- **Heartbeats:** OFF (globally turned off)
- Only run heartbeat checks between 8:00 AM and 10:00 PM America/New_York

---

## Daily Plan (10 PM EST)

### Tier 1 Focus: BabyGear + Health Index

**BabyGear:**
- [ ] Check deployment health
- [ ] Review Facebook outreach performance
- [ ] Add new products/content

**Health Index:**
- [ ] Remove alert banners (if not done)
- [ ] Progress on air filtration page
- [ ] Progress on red light mask accessories page

---

### Tier 2 Maintenance: Mactrackr + GPU Drip

**GPU Drip — CRITICAL:**
- [ ] **Fix:** Latest edits not showing (deploy issue?)
- [ ] **Fix:** Brand toggle bug
- [ ] **Write:** Complete 1 of 8 incomplete blog posts

**Mactrackr:**
- [ ] Monitor Reddit/Insta/Twitter engagement
- [ ] Price history tracking (when bandwidth allows)

---

### Affiliates (Rotate Every 2 Days)
- [ ] Check pending application status (Skimlinks, Sunlighten, Joovv, Four Sigmatic)
- [ ] Apply to new programs (NVIDIA, Best Buy, Hyperice, Theragun)

**Deadline Alert:** Apr 2 — Apple/B&H affiliate applications

---

### Technical/DevOps
- [ ] Mission Control dashboard progress
- [ ] n8n workflow health check
- [ ] Review any stuck deployments

---

## Weekly Tasks (Sundays)

### Collectibles Batch (When Tier 1 stable)
- [ ] Evaluate mintcondition/slugger/rumbledeals/coincurator state
- [ ] Plan grailwatch revival
- [ ] Robot Atlas initial planning

### Automation
- [ ] Review Scrapling skill implementation for price tracking
- [ ] Evaluate Pinchtab usefulness
- [ ] Check cron job health

### Business
- [ ] Review affiliate payouts
- [ ] Competitor price tracker analysis
- [ ] Outreach strategy effectiveness

---

## Cron Jobs (Proposed)

### 1. Twitter/OpenClaw Monitor
**Schedule:** Daily at 9 AM EST
**Action:** Check @openclaw_ai for feature updates relevant to our workflow
**Channel:** Telegram (Lavish)

### 2. Affiliate Status Check
**Schedule:** Every 2 days at 10 PM EST
**Action:** Review pending applications, submit new ones
**Channel:** WhatsApp (Opulence) — quick status

### 3. Price Scraping (Once Implemented)
**Schedule:** Daily at 8 AM EST
**Action:** Scrape GPU/Apple/Health product prices from retailers
**Channel:** Log to dashboard

### 4. GPU Drip Blog Reminder
**Schedule:** Daily at 11 AM EST
**Action:** Reminder to complete 1 of 8 incomplete blog posts
**Channel:** WhatsApp (Opulence)

---

## Current Blockers

1. **GPU Drip** — Edits not deploying, brand toggle broken, 8 incomplete posts
2. **Mission Control** — Needs source of truth architecture
3. **Dashboard** — Needs project index, priorities, agent status visibility

---

## Outreach Schedule (Weekly)

| Day | Platform | Project |
|-----|----------|---------|
| Mon | Reddit | Mactrackr (r/apple) |
| Tue | Facebook | BabyGear (parent groups) |
| Wed | Reddit | Health Index (r/wellness) |
| Thu | Instagram | BabyGear |
| Fri | Twitter/X | Health Index |
| Sat | Reddit | Collectibles research |
| Sun | — | Review/analytics |

---

## Agent Responsibilities

- **Lavish (Telegram):** Complex tasks, coding, orchestration, dashboard building
- **Opulence (WhatsApp):** Quick updates, witty banter, daily reminders, affiliate checks
- **Royal (iMessage):** DISABLED — privacy issue with broadcast messages

---

## Quick Commands

**Reset sessions:**
```bash
openclaw sessions kill --agent talker
openclaw sessions list
openclaw sessions kill <id>
```

**Deploy:**
```bash
git add -A && git commit -m "update" && git push && vercel --prod
```