'use client';

import React, { useState } from 'react';
import { interviewPrompts } from './prompts';

export default function DevPromptDashboard() {
  const [currentPrompt, setCurrentPrompt] = useState(interviewPrompts[0]);
  const [showHint, setShowHint] = useState(false);

  
  const handleRandomize = () => {
    setShowHint(false);
    const currentIndex = interviewPrompts.findIndex(p => p.id === currentPrompt.id);
    let randomIndex = currentIndex;
    

    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * interviewPrompts.length);
    }
    
    setCurrentPrompt(interviewPrompts[randomIndex]);
  };

  return (
    <div style={{ maxWidth: '650px', margin: '50px auto', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a' }}>
      
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px' }}>
        <h1 style={{ margin: '0', fontSize: '32px', fontWeight: '800', color: '#db2777' }}>DevPrompt</h1>
        <p style={{ margin: '6px 0 0 0', color: '#64748b', fontSize: '15px' }}>Technical Interview Flash-Fire Concept Trainer</p>
      </header>

      {/* Main Flashcard View Shell */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        border: '1px solid #e2e8f0', 
        borderRadius: '20px', 
        padding: '35px', 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        marginBottom: '25px',
        position: 'relative'
      }}>
        
        {/* */}
        <span style={{ 
          fontSize: '11px', 
          fontWeight: '700', 
          backgroundColor: '#fdf2f8', 
          color: '#db2777', 
          padding: '6px 14px', 
          borderRadius: '50px', 
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {currentPrompt.topic}
        </span>

        {/*  */}
        <h2 style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.5', margin: '25px 0 30px 0', color: '#1e293b' }}>
          "{currentPrompt.question}"
        </h2>

        {/*  */}
        {showHint ? (
          <div style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #94a3b8', padding: '16px 20px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#475569', lineHeight: '1.6', animation: 'fadeIn 0.3s ease' }}>
            💡 <strong>Conceptual Hint:</strong> {currentPrompt.hint}
          </div>
        ) : (
          <button 
            onClick={() => setShowHint(true)} 
            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '14px', fontWeight: '600', textDecoration: 'underline', padding: '0' }}
          >
            Reveal Hint Helper
          </button>
        )}
      </div>

      {/*  */}
      <button 
        onClick={handleRandomize}
        style={{ 
          width: '100%', 
          padding: '16px', 
          backgroundColor: '#db2777', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '12px', 
          fontSize: '16px', 
          fontWeight: '700', 
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          boxShadow: '0 4px 12px rgba(219, 39, 119, 0.2)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#be185d'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#db2777'}
      >
        Next Mock Prompt 
      </button>

    </div>
  );
}