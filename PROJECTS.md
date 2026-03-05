# PROJECTS.md - Project Inventory

## Active Projects

### Baby Gear
- **Repo:** https://github.com/drichman1-maker/gear
- **Live URL:** https://babygear-next.vercel.app/
- **Target Domain:** babygearhere.com
- **Status:** ✅ Working (rolled back to 2-day-old version)
- **Platform:** Vercel
- **Notes:** AI-Powered Price Intelligence, 12,000+ products, React/Next.js

### GPU Drip
- **Repo:** https://github.com/drichman1-maker/gpu
- **Live URL:** https://gpudrip.com (currently broken - shows 6 GPU static version)
- **Status:** 🔄 Static version built, ready to deploy
- **Original Platform:** Fly.io (suspended)
- **Requirements:** 
  - Supabase (Postgres + TimescaleDB)
  - Redis
  - pnpm 9.x
  - Full monorepo build
- **Features:** 22 GPUs, multiple retailers (Best Buy, Amazon, Newegg, B&H), live prices
- **Action Needed:** Deploy static version without database or restore Fly.io setup
- **Static Build:** `gpudrip-static/` folder - ready for Vercel deployment

### Health Index
- **Repo:** healthindex-frontend/ (local)
- **Live URL:** https://healthindex.app
- **Status:** ✅ Working
- **Platform:** Vercel
- **Notes:** Next.js wellness aggregator, affiliate links

### Mactrackr
- **Repo:** mactrackr-frontend/ (local)
- **Live URL:** https://mactrackr.com
- **Status:** ✅ Working
- **Platform:** Vercel
- **Notes:** Vite + React price tracker for Apple products

## Project Locations

### Local Workspace Folders
```
/workspace/
├── babygear-next/      # Baby Gear (submodule/linked)
├── gpudrip/            # GPU Drip (broken local copy)
├── gpudrip-static/     # GPU Drip static version (READY TO DEPLOY)
├── healthindex-frontend/ # Health Index
├── mactrackr-frontend/   # Mactrackr
├── gear/               # Baby Gear source
└── dashboard.md        # Project dashboard
```

### GitHub Repos
- github.com/drichman1-maker/gpu (GPU Drip - full monorepo)
- github.com/drichman1-maker/gear (Baby Gear)

## Deployment History

### 2026-03-04 Issues
1. **GPU Drip:** Deployed wrong code (simple 6-GPU version) to production
2. **Baby Gear:** Deployed wrong version from /gear folder
3. **Rollback:** Both rolled back to previous working versions

### Correct Deployment Process
1. Test on preview/staging first
2. Verify with user
3. Deploy to production
4. Update this document

## Next Session Tasks
- [x] Create static GPU Drip (22 GPUs, no database) - **DONE**
- [ ] Deploy GPU Drip static to Vercel
- [ ] Point babygearhere.com to correct deployment
- [ ] Fix cron jobs (heartbeats redundant)
- [ ] Save Baby Gear source code locally
- [ ] Document deployment procedures

## Important Notes
- **Test before deploying** - always verify on preview first
- **Vercel Pro required** for rollbacks beyond 1 version
- **GPU Drip:** Complex monorepo - needs Fly.io or full setup
- **Baby Gear:** Now working - don't touch without testing first
