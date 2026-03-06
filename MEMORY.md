# MEMORY.md — Semantic Search (bulk knowledge)

## Dashboard Requirements (Mission Control)
**Status:** Building — needs major overhaul
**Goal:** Single source of truth for all projects

### Critical Needs
- **Project Index:** Codebase locations, deployed URLs, live status
- **Priorities Queue:** What's next, what's blocked
- **Agent Status:** What Lavish is working on, active subagents
- **Project Pages:** Individual project deep-dives with current codebase state
- **Cron Jobs Page:** All scheduled tasks visible
- **Calendar/Schedule:** Deadlines with cron jobs overlaid

### Current Pain Point
OpenClaw files are unorganized and bloated. Need cleaner tracking system.

---

## Project Priority Matrix (Updated 2026-03-05)

### Tier 1: Focus Verticals
| Project | Path | Stack | Domain | Status | Priority |
|---------|------|-------|--------|--------|----------|
| **BabyGear** | `babygear-next/` | Next.js | babygear-next.vercel.app | Active | 🔥 HIGH |
| **Health Index** | `healthindex-frontend/` | Next.js | healthindex.app | Active | 🔥 HIGH |

### Tier 2: Maintain & Expand
| Project | Path | Stack | Domain | Status | Issues |
|---------|------|-------|--------|--------|--------|
| **Mactrackr** | `mactrackr-frontend/` | Vite + React | mactrackr.app | Active | Price history needed |
| **GPU Drip** | `gpudrip-static/` | Next.js static | gpudrip-static.vercel.app | **BROKEN** | Brand toggle bug, 8 incomplete blog posts |

### Tier 3: Collectibles (Queue for later)
- `mintcondition/` — Trading cards
- `slugger/` — Baseball memorabilia
- `rumbledeals/` — Wrestling
- `coincurator/` — Coins
- `grailwatch/` — Comics (archived, can revive)
- **Robot Atlas** — New idea, not started

---

## GPU Drip — CRITICAL STATUS
**Domain:** https://gpudrip-static.vercel.app
**Status Doc:** `GPURIP-STATUS.md`

### Completed
- [x] Brand toggle - FIXED
- [x] Latest edits deployed

### Still Missing
- 8 blog posts (content location unknown)
- Retailer expansion
- Consider scraping automation (see Tools section)

---

## Health Index — Next Steps

### Remove
- [ ] Get rid of alert banners/notifications

### Add Pages
- [ ] Air filtration systems category
- [ ] Red light therapy mask accessories
- [ ] Additional wellness product verticals

---

## BabyGear — Strategic Focus

**Decision:** Shift primary focus here alongside Health Index

### Outreach Strategy
- **Primary:** Facebook (parent groups, buy/sell communities)
- **Secondary:** Instagram (visual products)

---

## Mactrackr — Maintenance Mode

### Outreach
- Reddit (r/apple, r/mac)
- Instagram
- Twitter/X

---

## Collectibles Verticals — Future Queue

Work on these together as a batch:
- mintcondition (cards)
- slugger (baseball)
- rumbledeals (wrestling)
- coincurator (coins)
- grailwatch revival (comics)
- robot atlas (new)

### Outreach
- Reddit (specialized communities)

---

## Tools & Automation

### Scraping
**Scrapling:** https://github.com/D4Vinci/Scrapling
- Robust anti-bot bypass
- Use cases: GPU Drip (retailer prices), Health Index (wellness products), Mactrackr (Apple prices)
- **Action:** Set up as skill for price tracking

**Pinchtab:** https://github.com/pinchtab/pinchtab  
- Need to evaluate usefulness
- Add to task queue after examination

### Cron Jobs Needed
1. **Twitter monitoring** — Track OpenClaw features/updates that benefit us
2. **Price scraping** — Automated price tracking (once Scrapling skill ready)
3. **Affiliate check** — Daily status on pending applications

---

## Affiliates (Unchanged)
**Approved:** Amazon (~4%), eBay (~4%), America Cryo (aff=311, ~8%)

**Pending:** Skimlinks (HIGH), Sunlighten, Joovv, Four Sigmatic

**To Apply:** NVIDIA, Best Buy, Hyperice, Theragun

**Deadline:** Apr 2 — Apple/B&H

---

## Codebase Locations
All projects in `~/.openclaw/workspace/`:
- `mactrackr-frontend/` — Tier 2
- `healthindex-frontend/` — **Tier 1**
- `gpudrip-static/` — Tier 2 (broken)
- `babygear-next/` — **Tier 1**
- `slugger/` — Tier 3
- `coincurator/` — Tier 3
- `mintcondition/` — Tier 3
- `rumbledeals/` — Tier 3
- `grailwatch/` — Tier 3 (archived)
- `mission-control/` — Dashboard (building)

---

## Deployment Commands
```bash
git add -A
git commit -m "message"
git push origin clean-deploy-2
vercel --prod
```

---

## Critical Lessons (Preserved)
**Always commit and push:** 4 articles written locally but never deployed (3 days to debug)

**Token Optimization:**
- Bootstrap files (AGENTS.md) load every time — keep lean
- MEMORY.md searchable — put bulk knowledge here
n- Reduce token spend by 70%

## Sub-agent Management
**Kill talker session:** `openclaw sessions kill --agent talker`
**List sessions:** `openclaw sessions list`
**Kill specific:** `openclaw sessions kill <id>`

---

## Development Workflow (Updated 2026-03-05)

### Dashboard/Mission Control Development
**New Rule: Local-first, Vercel-last**

**1. Develop Locally**
```bash
cd mission-control
npm run dev
```
- Test at http://localhost:3000
- Verify all components render
- Check mobile responsiveness
- Iterate quickly

**2. Commit Changes**
```bash
git add -A
git commit -m "vX.Y: Description"
git push origin clean-deploy-2
```

**3. Deploy to Vercel ONLY when ready**
```bash
vercel --prod --yes
```

**Why this workflow:**
- Vercel CLI has path/caching issues
- Constant deploys are slow and error-prone
- Local dev is instant feedback
- Deploy only for production previews

**Version Tracking:**
- Use git commits: `git log --oneline`
- Document in VERSIONS.md
- URLs will show "v2" but git tracks actual versions