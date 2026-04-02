import React from 'react'
import Header from './Header'
import Footer from './Footer'

export interface MasterLayoutProps {
  children: React.ReactNode
  showBgGlow?: boolean
}

export default function MasterLayout({ 
  children, 
  showBgGlow = true 
}: MasterLayoutProps) {
  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#0d1b2a',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <Header />
      
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      
      <Footer />

      {showBgGlow && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(0,214,143,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}
    </div>
  )
}
