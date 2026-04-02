import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer 
      style={{
        width: '100%',
        padding: '3rem 2rem',
        background: '#0d1b2a',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '0.85rem',
        marginTop: 'auto',
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Brand */}
        <div>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white', display: 'block', marginBottom: '0.75rem' }}>
            Platzi <span style={{ color: '#00d68f' }}>FC</span>
          </span>
          <p style={{ maxWidth: '240px', lineHeight: 1.6 }}>
            The official community-driven tech football club.
            Connecting the ecosystem through sports.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Platform</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Home', 'Shop', 'Tickets', 'News'].map(link => (
                <li key={link}><a href={`/${link.toLowerCase()}`} style={{ color: 'inherit' }}>{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Social</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Twitter / X', 'Discord', 'LinkedIn', 'Instagram'].map(link => (
                <li key={link}><a href="#" style={{ color: 'inherit' }}>{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div 
        style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.03)', 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '3rem auto 0 auto',
        }}
      >
        <p>© {currentYear} Platzi FC. All rights reserved. Built with Next.js and Supabase.</p>
      </div>
    </footer>
  )
}
