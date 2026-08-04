'use client';

import { useState, useEffect, useCallback } from 'react';

const TRACK_DATA = {
  fintech: {
    title: 'FINTECH',
    tagline: 'Reimagine payments, lending, and financial access with secure, scalable FinTech.',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/lending', color: '#8B5CF6' },
      { name: 'dev/security', color: '#3B82F6' }
    ],
    commits: [
      {
        id: 'c1', branch: 'main', hash: 'c1a098f',
        message: 'feat: init fintech rails & architecture',
        date: 'Sat Aug 8 09:00 2026',
        phase: 'PHASE 01', title: 'Project Inception & Architecture',
        desc: 'Establish database schemas, API specs, and choose the tech stack. Focus on security-first frameworks.',
        stack: ['Next.js', 'PostgreSQL', 'Express', 'JWT'],
        guidelines: 'Draft API contracts, setup database indexes, and outline fraud-detection criteria.',
        bx: 0, by: 0
      },
      {
        id: 'c2', branch: 'dev/lending', hash: 'a2f901b',
        message: 'feat: setup smart micro-lending contracts',
        date: 'Sat Aug 8 13:45 2026',
        phase: 'PHASE 02', title: 'Micro-Lending & Smart Math',
        desc: 'Build interest calculators, credit score integrations, and collateral management algorithms.',
        stack: ['Solidity', 'Hardhat', 'TypeScript', 'Prisma'],
        guidelines: 'Formulate interest rate curves based on liquidity pool ratios; write unit tests for edge cases.',
        bx: 1, by: 1
      },
      {
        id: 'c3', branch: 'dev/lending', hash: 'e4d82bf',
        message: 'feat: integrate credit-risk classification model',
        date: 'Sat Aug 8 18:22 2026',
        phase: 'PHASE 03', title: 'AI Risk Assessment Engine',
        desc: 'Integrate dynamic credit risk rating models using user profile inputs and transaction histories.',
        stack: ['Python', 'FastAPI', 'Pandas', 'Scikit-Learn'],
        guidelines: 'Train random forest classifiers or utilize gradient boosting to flag high-risk default cases.',
        bx: 1, by: 2
      },
      {
        id: 'c4', branch: 'dev/security', hash: 'f9c04de',
        message: 'security: deploy multi-sig validator & AML check',
        date: 'Sun Aug 9 02:11 2026',
        phase: 'PHASE 04', title: 'AML & Payment Compliance Gateways',
        desc: 'Enforce high-throughput validation steps, multi-signature transaction consensus, and wallet screening protocols.',
        stack: ['Go', 'gRPC', 'Redis', 'Zero-Knowledge Proofs'],
        guidelines: 'Setup role-based auth thresholds and encrypt transaction payloads with zero-knowledge keys.',
        bx: 2, by: 3
      },
      {
        id: 'c5', branch: 'main', hash: 'b6e3f41',
        message: 'merge: branch dev/lending & dev/security into main',
        date: 'Sun Aug 9 09:30 2026',
        phase: 'PHASE 05', title: 'Integration & MVP Launch',
        desc: 'Connect frontend dashboard with APIs, verify payment ledger updates, and run end-to-end user workflows.',
        stack: ['React', 'TailwindCSS', 'Chart.js', 'Playwright'],
        guidelines: 'Conduct stress testing on concurrent transactions and prepare a clear dashboard demo video.',
        bx: 0, by: 4
      }
    ]
  },
  web3: {
    title: 'WEB3 & BLOCKCHAIN',
    tagline: 'Build trustless apps with smart contracts, tokens, and decentralized rails.',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/contracts', color: '#8B5CF6' },
      { name: 'dev/frontend', color: '#F59E0B' }
    ],
    commits: [
      {
        id: 'c1', branch: 'main', hash: 'w1a07bb',
        message: 'feat: setup smart-contracts repo & testnet configs',
        date: 'Sat Aug 8 09:15 2026',
        phase: 'PHASE 01', title: 'Environment & Tooling Setup',
        desc: 'Initialize Hardhat/Foundry setups, select target EVM testnets (Arbitrum, Base, or Sepolia), and configure wallet deployments.',
        stack: ['Solidity', 'Foundry', 'Dotenv', 'Ethers.js'],
        guidelines: 'Setup contract linting, write setup script, and acquire testnet faucet funds.',
        bx: 0, by: 0
      },
      {
        id: 'c2', branch: 'dev/contracts', hash: 'w2f928a',
        message: 'feat: deploy ERC-721A smart contracts',
        date: 'Sat Aug 8 14:00 2026',
        phase: 'PHASE 02', title: 'Token Economics & Contracts',
        desc: 'Write gas-efficient smart contracts for NFTs/tokens incorporating whitelist checks and dynamic state variables.',
        stack: ['Solidity', 'OpenZeppelin', 'IPFS / Pinata'],
        guidelines: 'Implement ERC-721A standard for bulk minting optimization. Store metadata assets securely on IPFS.',
        bx: 1, by: 1
      },
      {
        id: 'c3', branch: 'dev/contracts', hash: 'w4d830f',
        message: 'opt: gas optimization using assembly & custom errors',
        date: 'Sat Aug 8 19:10 2026',
        phase: 'PHASE 03', title: 'Audit & Gas Optimization',
        desc: 'Refactor code to optimize storage variables, pack variables, use custom errors, and prevent reentrancy attacks.',
        stack: ['Yul Assembly', 'Slither', 'Foundry Gas Snapshots'],
        guidelines: 'Validate security using static analysis tool Slither. Verify all transactions comply with nonReentrant modifiers.',
        bx: 1, by: 2
      },
      {
        id: 'c4', branch: 'dev/frontend', hash: 'w9c07aa',
        message: 'feat: construct web3 wallet connector hook',
        date: 'Sun Aug 9 02:45 2026',
        phase: 'PHASE 04', title: 'Frontend Web3 Hydration',
        desc: 'Build client dashboard UI, integrating wallet connectors, transaction state trackers, and live blockchain status checks.',
        stack: ['Vite', 'wagmi', 'viem', 'RainbowKit'],
        guidelines: 'Implement event listeners that react to wallet connect/disconnect and chain changes instantly.',
        bx: 2, by: 3
      },
      {
        id: 'c5', branch: 'main', hash: 'wb6e921',
        message: 'merge: combine web3 engine with optimized contracts',
        date: 'Sun Aug 9 10:00 2026',
        phase: 'PHASE 05', title: 'Consensus Integration',
        desc: 'Link transaction alerts, render real-time block states, and prepare product deployment documentation.',
        stack: ['Vercel', 'Next.js', 'Lucide React', 'Etherscan'],
        guidelines: 'Conduct main workflow tests on testnet, publish verified contract links, and record product demo.',
        bx: 0, by: 4
      }
    ]
  },
  sustainability: {
    title: 'SUSTAINABILITY & EM-TECH',
    tagline: 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/iot-sensors', color: '#8B5CF6' },
      { name: 'dev/xr-render', color: '#EC4899' }
    ],
    commits: [
      {
        id: 'c1', branch: 'main', hash: 's1a09bb',
        message: 'feat: project scaffolding & edge architecture',
        date: 'Sat Aug 8 09:20 2026',
        phase: 'PHASE 01', title: 'Scaffolding & IoT Scopes',
        desc: 'Establish system scopes. Plan microcontroller telemetry pipelines and local data storage mechanisms.',
        stack: ['ESP32', 'C++', 'MQTT', 'Node.js'],
        guidelines: 'Draft sensor payload structures and evaluate telemetry transfer frequencies.',
        bx: 0, by: 0
      },
      {
        id: 'c2', branch: 'dev/iot-sensors', hash: 's2f933c',
        message: 'feat: microcontroller telemetry pipeline',
        date: 'Sat Aug 8 14:15 2026',
        phase: 'PHASE 02', title: 'Microcontroller Telemetry',
        desc: 'Configure ESP32/Arduino code to capture sensor telemetry (carbon, temperature, humidity) and stream it via MQTT broker.',
        stack: ['Arduino IDE', 'WiFiManager', 'HiveMQ MQTT Broker'],
        guidelines: 'Setup edge device error handling, buffer local telemetry when network connectivity is lost.',
        bx: 1, by: 1
      },
      {
        id: 'c3', branch: 'dev/iot-sensors', hash: 's4d835e',
        message: 'feat: deploy TinyML model to detect anomalies',
        date: 'Sat Aug 8 19:35 2026',
        phase: 'PHASE 03', title: 'Edge AI Classification',
        desc: 'Upload a lightweight TinyML classification model directly to edge microcontrollers to identify air quality index anomalies.',
        stack: ['TensorFlow Lite Micro', 'Edge Impulse', 'C++'],
        guidelines: 'Quantize neural network model weights to reduce binary size and RAM footprint for microcontrollers.',
        bx: 1, by: 2
      },
      {
        id: 'c4', branch: 'dev/xr-render', hash: 's9c08dd',
        message: 'feat: setup WebXR scene with telemetry overlays',
        date: 'Sun Aug 9 03:05 2026',
        phase: 'PHASE 04', title: 'Spatial WebXR Rendering',
        desc: 'Create an interactive 3D/VR canvas to map real-time telemetry data onto virtual models.',
        stack: ['Three.js', 'React Three Fiber', 'WebXR API'],
        guidelines: 'Integrate dynamic shaders that animate depending on incoming air/carbon index variables.',
        bx: 2, by: 3
      },
      {
        id: 'c5', branch: 'main', hash: 'sb6e952',
        message: 'merge: link spatial overlays with telemetry',
        date: 'Sun Aug 9 10:15 2026',
        phase: 'PHASE 05', title: 'Complete Solution Presentation',
        desc: 'Integrate telemetry stream into the 3D dashboard. Document ecosystem architecture and solar power models.',
        stack: ['Next.js', 'WebSockets', 'TailwindCSS'],
        guidelines: 'Demonstrate functional hardware-to-VR communication. Verify edge classification alarms trigger instantly.',
        bx: 0, by: 4
      }
    ]
  },
  openinnovation: {
    title: 'OPEN INNOVATION',
    tagline: 'Solve any real-world problem with bold, cross-domain, open-ended ideas.',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/research', color: '#8B5CF6' },
      { name: 'dev/prototyping', color: '#EC4899' }
    ],
    commits: [
      {
        id: 'c1', branch: 'main', hash: 'o1a09dd',
        message: 'feat: define target problem scope & architecture',
        date: 'Sat Aug 8 09:30 2026',
        phase: 'PHASE 01', title: 'Ideation & Scoping',
        desc: 'Establish targeted real-world problem statement. Research user persona needs, and draft overall system modules.',
        stack: ['Figma', 'System Design', 'Git Scaffolding'],
        guidelines: 'Outline system modules clearly, map out user flow, and define success metrics.',
        bx: 0, by: 0
      },
      {
        id: 'c2', branch: 'dev/research', hash: 'o2f94cc',
        message: 'feat: perform comparative market research & audit',
        date: 'Sat Aug 8 14:30 2026',
        phase: 'PHASE 02', title: 'Market Audit & User Research',
        desc: 'Conduct research on target audience. Define core differentiator and write detailed technical design document.',
        stack: ['Technical Writing', 'Data Architecture'],
        guidelines: 'Audit existing competitive products, document standard APIs, and plan user data flows.',
        bx: 1, by: 1
      },
      {
        id: 'c3', branch: 'dev/prototyping', hash: 'o4d84ff',
        message: 'feat: implement core algorithmic module & APIs',
        date: 'Sat Aug 8 20:00 2026',
        phase: 'PHASE 03', title: 'Modular Backend & Core Engines',
        desc: 'Develop the database model, APIs, and any computational models needed to solve the problem.',
        stack: ['Node.js', 'FastAPI', 'Docker', 'MongoDB'],
        guidelines: 'Scaffold APIs, implement data validation schemas, and write unit tests for the core logic.',
        bx: 2, by: 2
      },
      {
        id: 'c4', branch: 'dev/prototyping', hash: 'o9c09aa',
        message: 'feat: build interface wireframes & design system',
        date: 'Sun Aug 9 03:30 2026',
        phase: 'PHASE 04', title: 'Interactive Frontend Interface',
        desc: 'Construct a responsive client-side interface integrating state management and API communication.',
        stack: ['React', 'TailwindCSS', 'Redux / Zustand'],
        guidelines: 'Design user-friendly dashboard interfaces with crisp animations and fast load times.',
        bx: 2, by: 3
      },
      {
        id: 'c5', branch: 'main', hash: 'ob6e972',
        message: 'merge: consolidate frontend with modular backend',
        date: 'Sun Aug 9 10:30 2026',
        phase: 'PHASE 05', title: 'Consolidated Prototype Deployment',
        desc: 'Deploy the full-stack system online. Verify workflows, performance under load, and prepare presentation.',
        stack: ['Vercel', 'Render', 'CI/CD GitHub Actions'],
        guidelines: 'Ensure client-server calls are secure and fast. Compile an outstanding video demo illustrating the solution.',
        bx: 0, by: 4
      }
    ]
  }
};

// Map track index to track key
const TRACK_KEYS = ['fintech', 'web3', 'sustainability', 'openinnovation'];

export default function TrackModal({ trackIndex, onClose }) {
  const [activeCommit, setActiveCommit] = useState(null);
  const [visible, setVisible] = useState(false);

  const trackKey = TRACK_KEYS[trackIndex];
  const track = trackKey ? TRACK_DATA[trackKey] : null;

  useEffect(() => {
    if (track) {
      setActiveCommit(track.commits[0]);
      // Trigger enter animation
      requestAnimationFrame(() => setVisible(true));
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [track]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => onClose(), 350);
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  if (!track) return null;

  // Layout constants for the git graph
  const colX = [60, 180, 300];
  const rowY = [60, 140, 220, 300, 380];
  const svgW = 400;
  const svgH = 440;

  // Build paths between commits
  const paths = [];
  for (let i = 0; i < track.commits.length - 1; i++) {
    const c1 = track.commits[i];
    const c2 = track.commits[i + 1];
    const x1 = colX[c1.bx], y1 = rowY[c1.by];
    const x2 = colX[c2.bx], y2 = rowY[c2.by];
    const branch = track.branches.find(b => b.name === c2.branch) || track.branches[0];

    if (x1 === x2) {
      paths.push({ d: `M ${x1} ${y1} L ${x2} ${y2}`, color: branch.color });
    } else {
      const midY = (y1 + y2) / 2;
      paths.push({ d: `M ${x1} ${y1} C ${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`, color: branch.color });
    }
  }
  // Also draw merge line back to main for last commit if needed
  const lastCommit = track.commits[track.commits.length - 1];
  const prevCommit = track.commits[track.commits.length - 2];
  if (lastCommit.bx !== prevCommit.bx) {
    // already handled above
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: visible ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(12px)' : 'blur(0px)',
        transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease',
        padding: '20px',
        cursor: 'pointer'
      }}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '90vh',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#080c14',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
          cursor: 'default',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
        }}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: '#0d111b',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '7px' }}>
              <div onClick={handleClose} style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#EF4444', cursor: 'pointer', transition: 'filter 0.2s' }} onMouseEnter={e => e.target.style.filter = 'brightness(1.3)'} onMouseLeave={e => e.target.style.filter = ''} />
              <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            </div>
            <span style={{ fontSize: '13px', color: '#9CA3AF', marginLeft: '8px' }}>origin-cli // {track.title.toLowerCase()}</span>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#9CA3AF',
              fontSize: '11px',
              padding: '4px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.12)'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.color = '#9CA3AF'; }}
          >
            ESC
          </button>
        </div>

        {/* Title */}
        <div style={{
          padding: '24px 28px 0',
          flexShrink: 0
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 6px',
            letterSpacing: '-0.5px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>{track.title}</h2>
          <p style={{
            fontSize: '14px',
            color: '#9CA3AF',
            margin: 0,
            fontFamily: 'system-ui, sans-serif'
          }}>{track.tagline}</p>
        </div>

        {/* Content Grid - scrollable */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 380px) 1fr',
          gap: '0',
          overflow: 'auto',
          flexGrow: 1,
          padding: '20px 28px 28px'
        }}>

          {/* Left: Git Graph */}
          <div style={{
            borderRight: '1px solid rgba(255,255,255,0.06)',
            paddingRight: '24px',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px'
            }}>
              Track Graph
            </div>

            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: 'block' }}>
              <defs>
                <filter id="modal-glow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Branch connection lines */}
              {paths.map((p, i) => (
                <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth="2.5" opacity="0.6" />
              ))}

              {/* Commit nodes */}
              {track.commits.map((c) => {
                const isActive = activeCommit && activeCommit.id === c.id;
                const bInfo = track.branches.find(b => b.name === c.branch) || { color: '#fff' };
                const cx = colX[c.bx];
                const cy = rowY[c.by];

                return (
                  <g key={c.id} style={{ cursor: 'pointer' }} onClick={() => setActiveCommit(c)}>
                    {isActive && (
                      <circle cx={cx} cy={cy} r="16" fill="none" stroke={bInfo.color} strokeWidth="2" opacity="0.5" filter="url(#modal-glow)" />
                    )}
                    <circle
                      cx={cx} cy={cy}
                      r={isActive ? '8' : '5'}
                      fill={isActive ? bInfo.color : '#0f172a'}
                      stroke={bInfo.color}
                      strokeWidth="2.5"
                    />
                    <text
                      x={cx + 18} y={cy + 4}
                      fill={isActive ? '#E5E7EB' : '#6B7280'}
                      style={{ fontSize: '11px', fontWeight: isActive ? 'bold' : 'normal', fontFamily: 'monospace' }}
                    >
                      {c.hash}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Branch Legend */}
            <div style={{
              display: 'flex',
              gap: '14px',
              marginTop: '14px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '12px'
            }}>
              {track.branches.map(b => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: b.color }} />
                  <span style={{ fontSize: '10px', color: '#6B7280' }}>{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Commit Detail Panel */}
          <div style={{ paddingLeft: '24px' }}>
            {activeCommit && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                {/* Commit meta block */}
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  fontSize: '12px'
                }}>
                  <div style={{ color: '#F59E0B' }}>commit {activeCommit.hash}9c8112a9bc7ef50d</div>
                  <div style={{ color: '#D1D5DB', marginTop: '3px' }}>Author: origin-hackathon &lt;origin@csivitchennai.org&gt;</div>
                  <div style={{ color: '#9CA3AF', marginTop: '2px' }}>Date:   {activeCommit.date}</div>
                  <div style={{ color: '#10B981', marginTop: '8px', fontWeight: 'bold' }}>
                    <span style={{ color: '#6B7280', fontWeight: 'normal' }}>$</span> git show {activeCommit.hash}
                  </div>
                </div>

                {/* Phase badge + title */}
                <div>
                  <div style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    letterSpacing: '1.5px',
                    color: '#8B5CF6',
                    backgroundColor: 'rgba(139,92,246,0.1)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    marginBottom: '8px'
                  }}>
                    {activeCommit.phase}
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    margin: '0 0 8px',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    {activeCommit.title}
                  </h3>
                  <p style={{
                    color: '#9CA3AF',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                    {activeCommit.desc}
                  </p>
                </div>

                {/* Guidelines */}
                <div style={{
                  borderLeft: '3px solid #10B981',
                  paddingLeft: '14px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: '#10B981',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '5px'
                  }}>
                    Guidelines
                  </div>
                  <p style={{
                    color: '#D1D5DB',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    margin: 0,
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                    {activeCommit.guidelines}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px'
                  }}>
                    Recommended Stack
                  </div>
                  <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                    {activeCommit.stack.map(tag => (
                      <span key={tag} style={{
                        fontSize: '11px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '3px 10px',
                        borderRadius: '5px',
                        color: '#E5E7EB',
                        fontFamily: 'monospace'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Commit message */}
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.04)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  fontSize: '12px',
                  color: '#10B981'
                }}>
                  <span style={{ color: '#6B7280' }}>diff --git</span> {activeCommit.message}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
