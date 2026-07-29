'use client';

import { useEffect } from 'react';

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error('Captured by Next.js Error Boundary:', error);
  }, [error]);

  return (
    <div className="error-page" data-v-1c0b12c8>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1 data-v-1c0b12c8 style={{ fontFamily: 'NeueMachina, sans-serif' }}>
          {error?.message || 'Something went wrong.'}
        </h1>
        {error?.digest && (
          <p style={{ fontFamily: 'NeueRoman, sans-serif', opacity: 0.7, fontSize: '14px' }}>
            Error ID: {error.digest}
          </p>
        )}
        {error?.stack && (
          <pre style={{
            textAlign: 'left',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            padding: '15px',
            borderRadius: '4px',
            maxWidth: '600px',
            overflowX: 'auto',
            fontSize: '12px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
          }}>
            {error.stack}
          </pre>
        )}
        <button
          data-v-1c0b12c8
          onClick={() => unstable_retry()}
          style={{ position: 'relative', margin: '20px auto 0' }}
        >
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
