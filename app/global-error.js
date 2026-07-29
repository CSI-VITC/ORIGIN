'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, unstable_retry }) {
  useEffect(() => {
    console.error('Captured by Next.js Global Error Boundary:', error);
  }, [error]);

  return (
    <html lang="en" style={{ scrollBehavior: 'auto', touchAction: 'pan-x' }}>
      <head>
        <style>{`
          .error-page {
            align-items: center;
            background-color: #c9d2e7;
            display: flex;
            justify-content: center;
            min-height: 100vh;
            padding: 0 20px;
            box-sizing: border-box;
          }
          .error-page h1 {
            text-align: center;
            font-family: NeueMachina, sans-serif;
            font-size: 2.5rem;
            color: #181520;
            margin: 0 0 10px 0;
          }
          .error-page button {
            background: transparent;
            border: none;
            cursor: pointer;
            display: block;
            font-family: NeueMachina, sans-serif;
            font-size: 16px;
            margin: 40px auto 0;
            text-transform: uppercase;
            color: #181520;
          }
          .error-page button span {
            display: inline-block;
            text-decoration-line: underline;
            text-decoration-style: dotted;
          }
        `}</style>
      </head>
      <body className="cursor-active" style={{ margin: 0, padding: 0 }}>
        <div className="error-page">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <h1>Something went wrong globally!</h1>
            <p style={{ fontFamily: 'NeueRoman, sans-serif', color: '#181520', fontSize: '16px', maxWidth: '600px', textAlign: 'center' }}>
              {error?.message || 'A critical error occurred in the application root.'}
            </p>
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
            <button onClick={() => unstable_retry()}>
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
