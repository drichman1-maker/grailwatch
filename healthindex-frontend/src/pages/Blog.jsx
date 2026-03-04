import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const posts = [
  { id: 'red-light-therapy-for-skin', title: 'Red Light Therapy for Skin: What the Research Actually Says', category: 'Education', date: 'Mar 3, 2026' },
  { id: 'best-red-light-panels-2026', title: 'Best Red Light Therapy Panels of 2026: Ranked & Reviewed', category: 'Buying Guide', date: 'Mar 3, 2026' },
  { id: 'theragun-vs-compression-boots', title: 'Theragun vs. Compression Boots: Which Recovery Tool Is Worth It?', category: 'Education', date: 'Mar 3, 2026' },
  { id: 'science-of-cold-exposure', title: 'The Science of Cold Exposure: What Happens to Your Body', category: 'Education', date: 'Mar 3, 2026' },
  { id: 'red-light-muscle-recovery', title: 'Red Light Therapy for Muscle Recovery: Does It Work?', category: 'Education', date: 'Mar 3, 2026' },
  { id: 'lymphatic-system-recovery-tech', title: 'How the Lymphatic System Works (And Why Recovery Tech Targets It)', category: 'Education', date: 'Mar 3, 2026' },
  { id: 'cryotherapy-chamber-buying-guide', title: 'Cryotherapy Chambers: A Buyer\'s Guide', category: 'Buying Guide', date: 'Feb 27, 2026' },
  { id: 'pemf-mat-buying-guide', title: 'PEMF Mat Buying Guide', category: 'Buying Guide', date: 'Feb 27, 2026' },
  { id: 'choose-right-red-light-device', title: 'How to Choose the Right Red Light Device', category: 'Buying Guide', date: 'Feb 26, 2026' },
  { id: 'red-light-vs-infrared-sauna', title: 'Red Light vs Infrared Saunas', category: 'Education', date: 'Feb 26, 2026' },
  { id: '2026-wellness-trends', title: '2026 Wellness Tech Trends', category: 'Trends', date: 'Feb 26, 2026' },
  { id: 'compression-therapy-buying-guide', title: 'Compression Therapy Systems', category: 'Buying Guide', date: 'Feb 28, 2026' }
]

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div style={{ padding: '40px 20px', background: '#0a0a0a', minHeight: '100vh' }}>
      <Link to="/" style={{ color: '#a3a3a3', textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
        ← Back
      </Link>
      <h1 style={{ color: '#fafafa', fontSize: '2.5rem', marginBottom: '10px' }}>HealthIndex Blog</h1>
      <p style={{ color: '#a3a3a3', marginBottom: '30px' }}>Expert guides for medical wellness devices.</p>
      
      {/* Search Bar */}
      <div style={{ position: 'relative', maxWidth: '600px', marginBottom: '40px' }}>
        <Search style={{ 
          position: 'absolute', 
          left: '16px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: '#a3a3a3',
          width: '20px',
          height: '20px'
        }} />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 40px 14px 48px',
            background: '#141414',
            border: '1px solid #262626',
            borderRadius: '12px',
            color: '#fafafa',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#10b981'}
          onBlur={(e) => e.target.style.borderColor = '#262626'}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#a3a3a3',
              padding: '4px'
            }}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {filteredPosts.length === 0 && (
        <p style={{ color: '#a3a3a3', textAlign: 'center', padding: '40px' }}>
          No articles found matching "{searchQuery}"
        </p>
      )}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredPosts.map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            style={{ 
              background: '#141414', 
              border: '1px solid #262626', 
              borderRadius: '12px', 
              padding: '20px',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <span style={{ 
              background: 'rgba(16, 185, 129, 0.2)', 
              color: '#10b981', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '12px'
            }}>
              {post.category}
            </span>
            <h2 style={{ color: '#fafafa', fontSize: '1.2rem', marginTop: '12px' }}>{post.title}</h2>
            <p style={{ color: '#737373', fontSize: '14px', marginTop: '8px' }}>{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
