# Next Session Priorities - Updated March 3, 2026

## 🔴 URGENT: GPUDrip.com Homepage 404

**Problem:** GPUDrip homepage returning 404 error. Blog (/blog) works fine showing all 8 articles.

**What happened:**
- Subagent found code at github.com/drichman1-maker/gpu
- After pushing metadata change, homepage broke (404)
- Even after reverting, still 404
- Git history is very short - suggests repo was recreated from scratch

**Investigation needed:**
- What was the ORIGINAL deployment source for gpudrip.com?
- Was it a different GitHub repo?
- Was it deployed via Vercel CLI directly?
- Check Vercel project settings for gpudrip

**Next steps:**
1. Check Vercel dashboard for gpudrip project deployment history
2. Find original source code
3. Restore homepage functionality

---

## TOP PRIORITY: Build MacTrackr, GPU Drip, Health Index to 100% Operational

### Phase 1: Core Infrastructure (This Week)
- [ ] **SEO Enablement**
  - OG images on ALL articles (12 MacTrackr, 11 Health Index, 8 GPU Drip)
  - Meta tags verification
  - Sitemap submission
  
- [ ] **Search Bars** (Verify deployment)
  - MacTrackr: Product pages + Blog ✓ (check if working)
  - GPU Drip: Product pages + Blog (HOMEPAGE BROKEN - fix first!)
  - Health Index: Product pages + Blog ✓ (deployed)
  
- [ ] **Affiliate Integration for Monetization**
  - Current: Amazon ✓, eBay ✓, America Cryo ✓, Adorama (?)
  - Apply: Skimlinks (for B&H), NVIDIA, Newegg, Best Buy
  - Pending responses: Sunlighten, Joovv, Hyperice, Theragun, Four Sigmatic

### Phase 2: Core Functionality (Next Week)
- [ ] **MacTrackr + GPU Drip Build Out**
  - URL redirect system (n8n workflows)
  - Price tracking system (working?)
  - Price alerts
  - **Price history** (key differentiator vs AppleInsider/iClarified)
  - Changes/updates tracking

- [ ] **Health Index Blog**
  - More articles with OG images
  - UI fixes at bottom of articles
  - Product comparison tool (explore)

### Phase 3: Social Outreach (Parallel)
- [ ] Reddit posting strategy
- [ ] Twitter/X posting (@mactrackrapp)
- [ ] YouTube content plan
- [ ] TikTok/Reels ideas
- [ ] Instagram

## Project Status

### MacTrackr (16 articles - DONE for now)
- ✅ M4 MacBook Air vs Pro
- ✅ Best Macs March 2026
- ✅ iPad Air M4 vs Pro
- ✅ Mac Mini M4 vs Pro
- ✅ (Plus 12 existing articles)
- 🔄 OG images needed
- 🔄 Search bar verification

### Health Index (11 articles)
- ✅ Clear Light removed
- ✅ Featured Partner removed
- ✅ Emojis → icons
- ✅ Blog search deployed
- ✅ Product search deployed
- 🔄 Need more articles (see expansion list below)
- 🔄 OG images needed

### GPU Drip (8 articles - HOMEPAGE BROKEN!)
- ✅ 8 articles showing in blog index
- 🔴 HOMEPAGE 404 - INVESTIGATE
- 🔄 OG images needed
- 🔄 Search bar needed
- 🔄 Add more high-end GPUs

### Baby Gear (Updated!)
- ✅ Deployed new version with price tracking dashboard
- ✅ babygearhere.com now showing latest

## Health Index Expansion Areas

### New Categories to Add:
- [ ] air.healthindex.app (air filters)
- [ ] Accessories
- [ ] Mushroom coffee (Four Sigmatic, Ryze, Everyday Dose - track sales)
- [ ] Exercise equipment (Peloton bikes, etc.)
- [ ] Wellness retreats
- [ ] Supplements
- [ ] Red light masks
- [ ] Theraguns/massage guns

## Lower Priority (4th After First 3 Sites)

### Future Projects (Iterate When Time):
- RumbleDeals
- Mint Condition
- Coin Curator
- Slugger Data
- Comics (Grail Watch)
- Robot Atlas

## Immediate Action Items for Tomorrow

1. **FIX GPUDrip homepage 404** - investigate original deployment source
2. **Verify search bars are working** on all 3 sites
3. **Generate OG images** for all articles (16 MacTrackr + 11 Health Index + 8 GPU Drip)
4. **Apply to affiliate programs**: Skimlinks, NVIDIA, Newegg, Best Buy
5. **Check n8n workflows**: URL redirects, price tracking
6. **Plan social content**: First Reddit/Twitter posts

## Notes
- April 2: Reapply B&H affiliate (via Skimlinks?)
- April 2: Apply Apple affiliate
- Backend needed: Update Newtowne 27" image URL
