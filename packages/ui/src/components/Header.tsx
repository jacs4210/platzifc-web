'use client'

import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <header 
      style={{
        width: '100%',
        padding: '1.25rem 2rem',
        background: 'rgba(13, 27, 42, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>
          Platzi <span style={{ color: '#00d68f' }}>FC</span>
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {['Matches', 'Teams', 'Shop', 'Tickets', 'Community'].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#00d68f')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="ghost" size="sm">Login</Button>
        <Button variant="primary" size="sm">Join the Club</Button>
      </div>
    </header>
  )
}
