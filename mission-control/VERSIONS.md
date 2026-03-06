# Dashboard Versions

## Current Deployment
**URL:** https://mission-control-v2-fqx7sya5a-dougs-projects-00ef00f5.vercel.app
**Alias:** https://mission-control-v2-two.vercel.app
**Git Commit:** 93273462
**Version:** v4.1
**Date:** 2026-03-05

## Version History

### v4.1 (Current) - Commit 93273462
- Fixed Mactrackr domain (.com instead of .app)
- System Overview section visible
- Local-first development workflow established

### v4 - Commit 5d37b134
- Fixed affiliate counter (case-insensitive matching)
- Calendar highlights today's date (5th)
- 31 days in calendar instead of 28
- All 4 new components integrated

### v3.2 - Commit f6029f4d
- Fixed Affiliate interface in fallback data
- Build succeeded with proper TypeScript interfaces

### v3.1 - Commit 2a56ff6c
- Fixed TypeScript errors in fallback data
- Added required Task interface fields (description, assignee, created_at, updated_at)

### v3 - Commit 7fc8afce
- Added fallback data for static export
- Fixed loading/hydration issue with Supabase
- Error handling for failed fetches

### v2.1 - Commit 018a0c15
- Integrated new components into page layout
- Added System Overview section

### v2 - Commit a098013a
- Created components: AgentStatus, ProjectIndex, PriorityQueue, CronJobs
- Components exist but not yet integrated

### v1 - Commit f9019f07 and earlier
- Initial dashboard setup
- Basic project cards
- Affiliate tracker
- Task list
- Calendar placeholder

## How to Track Versions

```bash
# View version history
git log --oneline

# Compare versions
git diff <commit1> <commit2>

# See what's in current version
git show HEAD --stat
```

## Deployment Checklist

Before deploying a new version:
- [ ] Test locally at http://localhost:3000
- [ ] Verify all components render
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully
- [ ] Update VERSIONS.md
- [ ] Commit with version message: "vX.Y: Description"
- [ ] Deploy to Vercel: `vercel --prod --yes`
- [ ] Update Current Deployment section above

## Local Development

```bash
cd /Users/douglasrichman/.openclaw/workspace/mission-control
npm run dev
# Open http://localhost:3000
```

## Production Deployment

```bash
cd /Users/douglasrichman/.openclaw/workspace/mission-control
vercel --prod --yes
```

## Known Issues

- v4.1: System Overview section may be below fold on mobile
- v4.1: Affiliate tracker counts working but need visual polish
- v4.1: Calendar shows today (5th) highlighted correctly

## Next Version (v5 Planned)

- [ ] Tasks kanban board view
- [ ] Activity feed
- [ ] Better project detail pages
- [ ] Enhanced calendar with actual events
- [ ] Fix mobile scroll issues