# Mac Mini Setup - OpenClaw Server

**Purpose:** 24/7 OpenClaw instance using Qwen 3.5 models (cheap API)
**Goal:** Free up M3 for dev/Xcode work

## Setup Checklist

### Initial Config
- [ ] Choose macOS version (latest stable?)
- [ ] Create admin account
- [ ] Enable FileVault
- [ ] Set static IP
- [ ] Enable SSH

### OpenClaw Install
- [ ] Install OpenClaw gateway
- [ ] Configure to use Qwen 3.5 models (cheap)
- [ ] Set up auto-start on boot
- [ ] Test connectivity

### Migration
- [ ] Use `/scripts/migrate-macmini.sh` to copy data
- [ ] Migrate projects selectively (not everything)
- [ ] Keep workspace organized

### Access
- [ ] Enable Screen Sharing (if needed)
- [ ] SSH key auth
- [ ] Dynamic DNS (if accessing remotely)

### Monitoring
- [ ] CPU/memory monitoring
- [ ] Disk space alerts
- [ ] OpenClaw health checks

## Model Costs (OpenRouter)

| Model | Cost/1M tokens | vs GPT-4o |
|-------|----------------|-----------|
| Qwen 3.5-27B | ~$0.15 | 17x cheaper |
| Qwen 3.5-32B | ~$0.20 | 12x cheaper |
| Qwen 3.5-72B | ~$0.35 | 7x cheaper |
| Kimi K2.5 | ~$0.50 | 5x cheaper |
| GPT-4o | ~$2.50 | baseline |

## Running on Mac Mini M2

Current setup uses expensive models. Moving everything lightweight to Qwen saves significant API costs.

## Status

- [ ] Hardware ready
- [ ] OS installed
- [ ] OpenClaw running
- [ ] Models tested
- [ ] Migration complete
- [ ] M3 freed up
