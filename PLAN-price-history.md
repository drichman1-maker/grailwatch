# MacTrackr Price History Feature — Technical Plan

## Overview
Add price history charts to product pages showing historical price trends across retailers. This is a key differentiator vs competitors (AppleInsider, iClarified).

## Data Model

### PriceHistory Table (Airtable/Database)
```
- id: string (unique)
- productId: string (foreign key to Products)
- retailer: string (Apple, Amazon, Best Buy, B&H)
- price: number
- date: ISO timestamp
- condition: string (new/refurbished)
- inStock: boolean
- url: string (optional, for verification)
```

### Aggregated View
```
- productId
- date
- lowestPrice
- highestPrice
- averagePrice
- priceChange (percent/day-over-day)
- bestRetailer
```

## UI Components

### 1. PriceHistoryChart (Recharts)
- **Type**: Line chart with multiple series
- **X-axis**: Date (last 90 days default, 1Y/All Time options)
- **Y-axis**: Price ($)
- **Lines**: One per retailer (Apple=gray, Amazon=orange, Best Buy=blue, B&H=yellow)
- **Features**:
  - Hover tooltip with exact price
  - Legend toggle (show/hide retailers)
  - Zoom/pan on 1Y+ views
  - Current price marker
  - Deal alerts threshold line

### 2. PriceStatsCard
```
┌─────────────────────────────┐
│ Price History (90 Days)     │
├─────────────────────────────┤
│ Lowest: $899 (-12%)         │
│ Highest: $1,099             │
│ Average: $989               │
│ Current: $949 (near low)    │
├─────────────────────────────┤
│ [View Full History →]       │
└─────────────────────────────┘
```

### 3. DealScoreBadge
- AI-calculated "deal score" based on:
  - Current price vs 90-day low
  - Historical volatility
  - Seasonal patterns (back-to-school, Black Friday)
- Display: "Great Deal" (90%+), "Good Price" (70-89%), "Average" (<70%)

## Backend/API

### New Endpoints
```
GET /api/products/:id/price-history
  Query: days=90|180|365|all
  Response: [
    { date, retailer, price, inStock },
    ...
  ]

GET /api/products/:id/price-stats
  Response: {
    lowest: { price, date, retailer },
    highest: { price, date, retailer },
    average: number,
    current: { price, retailer },
    change7d: percent,
    change30d: percent,
    change90d: percent
  }
```

### Data Collection (Cron Job)
- **Frequency**: Every 6 hours for active products
- **Source**: Scraper/API calls to retailers
- **Storage**: Append-only log → aggregate to daily views
- **Retention**: 2 years raw data, compress after 90 days

## Implementation Phases

### Phase 1: Basic Chart (MVP)
- [ ] Add PriceHistory table to Airtable
- [ ] Collect 30 days historical data (manual seed)
- [ ] Build PriceHistoryChart component
- [ ] Add to ProductDetail page
- [ ] Show single line (lowest price per day)

### Phase 2: Multi-Retailer
- [ ] Track all retailers separately
- [ ] Multi-line chart with legend
- [ ] PriceStatsCard component
- [ ] Automated data collection (n8n/Zapier)

### Phase 3: Intelligence
- [ ] DealScoreBadge AI calculation
- [ ] Price drop predictions
- [ ] Email alerts: "Price dropped 10% below average"
- [ ] "Best time to buy" recommendation

### Phase 4: Advanced
- [ ] Seasonal trend analysis
- [ ] New model release predictions
- [ ] Price match opportunity finder
- [ ] Export data (CSV/PDF)

## Technical Stack
- **Charting**: Recharts (already in project)
- **Data Store**: Airtable (existing) + Redis (caching)
- **Collection**: n8n workflows or custom Node scraper
- **API**: Express endpoints in existing backend

## SEO Benefits
- "iPhone 16 price history" — high intent keyword
- Rich snippets with price ranges
- Longer session duration (users exploring trends)
- Return visits to check price changes

## Competitive Advantage
- AppleInsider: Has charts but cluttered UI
- iClarified: Basic, no predictions
- MacTrackr opportunity: Clean UI + AI deal scores + predictions

## Estimated Effort
- Phase 1: 1-2 days
- Phase 2: 2-3 days  
- Phase 3: 3-4 days
- Phase 4: 1 week

**Total MVP: 1 week for basic price history**
