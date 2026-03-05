import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGPUBySlug, RETAILER_LABELS, RETAILER_URLS, getAllGPUSlugs } from '@/lib/gpu-data'

type Props = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return getAllGPUSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const gpu = getGPUBySlug(slug)
    if (!gpu) return { title: 'GPU Not Found' }
    return {
        title: `${gpu.model} Price Tracker & Deals`,
        description: `Track ${gpu.model} prices across retailers. MSRP: $${gpu.msrp_usd}. ${gpu.vram_gb}GB VRAM, ${gpu.architecture} architecture.`,
    }
}

export const dynamic = 'force-static'

export default async function GPUPage({ params }: Props) {
    const { slug } = await params
    const gpu = getGPUBySlug(slug)
    
    if (!gpu) {
        notFound()
    }

    const retailerLinks = RETAILER_URLS[slug] || {}

    return (
        <div className="container" style={{ padding: '48px 24px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24, display: 'inline-block' }}>
                ← Back to all GPUs
            </Link>

            {/* Header */}
            <section style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <div className="badge badge--blue" style={{ marginBottom: 12 }}>
                            {gpu.brand.toUpperCase()} · {gpu.generation}
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: 8 }}>
                            {gpu.model}
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>
                            {gpu.architecture} architecture · {gpu.vram_gb}GB VRAM · {gpu.tdp_watts}W TDP
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>MSRP</div>
                        <div className="price price--lg" style={{ color: 'var(--text-primary)' }}>${gpu.msrp_usd}</div>
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section className="card" style={{ marginBottom: 32 }}>
                <h2 style={{ marginBottom: 20 }}>Specifications</h2>
                <div className="grid-3" style={{ marginBottom: 8 }}>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Architecture</div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{gpu.architecture}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>VRAM</div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{gpu.vram_gb}GB GDDR</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>TDP</div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{gpu.tdp_watts}W</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Release Date</div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{new Date(gpu.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>Generation</div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{gpu.generation}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>MSRP</div>
                        <div style={{ fontSize: 16, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${gpu.msrp_usd}</div>
                    </div>
                </div>
            </section>

            {/* Retailers */}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ marginBottom: 20 }}>Where to Buy</h2>
                <div className="grid-3">
                    {Object.entries(retailerLinks).map(([retailer, url]) => (
                        <a
                            key={retailer}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card--hover"
                            style={{ display: 'block', textAlign: 'center', padding: 24 }}
                        >
                            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{RETAILER_LABELS[retailer] || retailer}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Check prices →</div>
                        </a>
                    ))}
                    {Object.keys(retailerLinks).length === 0 && (
                        <div className="card" style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)' }}>
                            Retailer links coming soon
                        </div>
                    )}
                </div>
            </section>

            {/* Price Alert CTA */}
            <section className="card" style={{ background: 'var(--blue-dim)', border: '1px solid var(--blue)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <h3 style={{ marginBottom: 4 }}>🔔 Get Price Alerts</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                            We'll notify you when the {gpu.model} drops in price
                        </p>
                    </div>
                    <Link href="/alerts" className="btn btn--primary">
                        Set Alert
                    </Link>
                </div>
            </section>
        </div>
    )
}
