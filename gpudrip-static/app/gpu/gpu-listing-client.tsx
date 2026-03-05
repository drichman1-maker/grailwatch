"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ALL_GPUS, GPU } from '@/lib/gpu-data'

export default function GPUListingClient({ initialGPUs }: { initialGPUs: GPU[] }) {
    const [brand, setBrand] = useState<'all'|'nvidia'|'amd'>('all')
    const router = useRouter()

    const allGPUs = initialGPUs.filter(g => brand === 'all' || g.brand === brand)

    return (
        <div className="container" style={{ padding: '48px 24px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24, display: 'inline-block' }}>
                ← Back to home
            </Link>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 16, flexWrap: 'wrap' }}>
                <div>
                    <h1 style={{ marginBottom: 8 }}>All GPUs</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Browse {allGPUs.length} GPUs from {brand === 'all' ? 'NVIDIA and AMD' : brand === 'nvidia' ? 'NVIDIA' : 'AMD'}
                    </p>
                </div>

                <div style={{ display: 'flex', gap: 6 }}>
                    <button 
                        className={`btn ${brand === 'all' ? 'btn--primary' : 'btn--ghost'}`}
                        onClick={() => setBrand('all')}
                        style={{ padding: '6px 14px', fontSize: 13 }}
                    >All</button>
                    <button 
                        className={`btn ${brand === 'nvidia' ? 'btn--primary' : 'btn--ghost'}`}
                        onClick={() => setBrand('nvidia')}
                        style={{ padding: '6px 14px', fontSize: 13 }}
                    >NVIDIA</button>
                    <button 
                        className={`btn ${brand === 'amd' ? 'btn--primary' : 'btn--ghost'}`}
                        onClick={() => setBrand('amd')}
                        style={{ padding: '6px 14px', fontSize: 13 }}
                    >AMD</button>
                </div>
            </div>

            <div className="card" style={{ padding: 0 }}>
                <div className="table-wrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>GPU</th>
                                <th>Architecture</th>
                                <th>VRAM</th>
                                <th style={{ textAlign: 'right' }}>MSRP</th>
                                <th style={{ textAlign: 'right' }}>Current Price</th>
                                <th>TDP</th>
                                <th>Release Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allGPUs.map(gpu => {
                                const isDeal = gpu.price_change_percent < 0;
                                const isSurge = gpu.price_change_percent > 0;
                                
                                return (
                                <tr 
                                    key={gpu.id}
                                    onClick={() => router.push(`/gpu/${gpu.slug}`)}
                                    style={{ cursor: 'pointer' }}
                                    className="hover-row"
                                >
                                    <td>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: 14 }}>{gpu.model}</div>
                                            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{gpu.brand.toUpperCase()}</div>
                                        </div>
                                    </td>
                                    <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{gpu.architecture}</td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{gpu.vram_gb}GB</td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', textAlign: 'right' }}>
                                        ${gpu.msrp_usd}
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                            ${gpu.current_price_usd}
                                            {gpu.price_change_percent !== 0 && (
                                                <span style={{ 
                                                    fontSize: 12,
                                                    color: isDeal ? 'var(--green)' : 'var(--red)',
                                                    fontWeight: 500,
                                                    display: 'inline-block',
                                                    width: '50px',
                                                    textAlign: 'left'
                                                }}>
                                                    {isDeal ? '↓' : '↑'} {Math.abs(gpu.price_change_percent)}%
                                                </span>
                                            )}
                                            {gpu.price_change_percent === 0 && <span style={{ width: '50px' }}></span>}
                                        </div>
                                    </td>
                                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{gpu.tdp_watts}W</td>
                                    <td style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                        {new Date(gpu.release_date).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <Link href={`/gpu/${gpu.slug}`} className="btn btn--ghost" style={{ fontSize: 12 }} tabIndex={-1}>
                                            View →
                                        </Link>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}