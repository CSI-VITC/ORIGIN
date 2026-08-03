'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Track data with Git Commit Timeline details
const TRACK_DATA = {
  'noomo-labs-the-jellyfish': {
    title: 'FINTECH',
    tagline: 'Reimagine payments, lending, and financial access with secure, scalable FinTech.',
    mainBranch: 'main',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/lending', color: '#8B5CF6' },
      { name: 'dev/security', color: '#3B82F6' }
    ],
    commits: [
      {
        id: 'c1',
        branch: 'main',
        hash: 'c1a098f',
        message: 'feat: init fintech rails & architecture',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 09:00:00 2026 +0530',
        phase: 'PHASE 01',
        title: 'Project Inception & Architecture',
        desc: 'Establish database schemas, API specs, and choose the tech stack. Focus on security-first frameworks.',
        stack: ['Next.js', 'PostgreSQL', 'Express', 'JWT'],
        guidelines: 'Draft API contracts, setup database indexes, and outline fraud-detection criteria.',
        x: 100,
        y: 80
      },
      {
        id: 'c2',
        branch: 'dev/lending',
        hash: 'a2f901b',
        message: 'feat: setup smart micro-lending contracts',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 13:45:12 2026 +0530',
        phase: 'PHASE 02',
        title: 'Micro-Lending & Smart Math',
        desc: 'Build interest calculators, credit score integrations, and collateral management algorithms.',
        stack: ['Solidity', 'Hardhat', 'TypeScript', 'Prisma'],
        guidelines: 'Formulate interest rate curves based on liquidity pool ratios; write unit tests for edge cases.',
        x: 200,
        y: 160
      },
      {
        id: 'c3',
        branch: 'dev/lending',
        hash: 'e4d82bf',
        message: 'feat: integrate credit-risk classification model',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 18:22:45 2026 +0530',
        phase: 'PHASE 03',
        title: 'AI Risk Assessment Engine',
        desc: 'Integrate dynamic credit risk rating models using user profile inputs and transaction histories.',
        stack: ['Python', 'FastAPI', 'Pandas', 'Scikit-Learn'],
        guidelines: 'Train random forest classifiers or utilize gradient boosting to flag high-risk default cases.',
        x: 200,
        y: 240
      },
      {
        id: 'c4',
        branch: 'dev/security',
        hash: 'f9c04de',
        message: 'security: deploy multi-sig validator & AML check',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 02:11:04 2026 +0530',
        phase: 'PHASE 04',
        title: 'AML & Payment Compliance Gateways',
        desc: 'Enforce high-throughput validation steps, multi-signature transaction consensus, and wallet screening protocols.',
        stack: ['Go', 'gRPC', 'Redis', 'Zero-Knowledge Proofs'],
        guidelines: 'Setup role-based auth thresholds and encrypt transaction payloads with zero-knowledge keys.',
        x: 300,
        y: 320
      },
      {
        id: 'c5',
        branch: 'main',
        hash: 'b6e3f41',
        message: 'merge: branch dev/lending & dev/security into main',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 09:30:15 2026 +0530',
        phase: 'PHASE 05',
        title: 'Integration & MVP Launch',
        desc: 'Connect frontend dashboard with APIs, verify payment ledger updates, and run end-to-end user workflows.',
        stack: ['React', 'TailwindCSS', 'Chart.js', 'Playwright'],
        guidelines: 'Conduct stress testing on concurrent transactions and prepare a clear dashboard demo video.',
        x: 100,
        y: 400
      }
    ]
  },
  'microsite-golden-state-warriors-and-coinbase-collectible': {
    title: 'WEB3 & BLOCKCHAIN',
    tagline: 'Build trustless apps with smart contracts, tokens, and decentralized rails.',
    mainBranch: 'main',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/contracts', color: '#8B5CF6' },
      { name: 'dev/frontend', color: '#F59E0B' }
    ],
    commits: [
      {
        id: 'c1',
        branch: 'main',
        hash: 'w1a07bb',
        message: 'feat: setup smart-contracts repo & testnet configurations',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 09:15:00 2026 +0530',
        phase: 'PHASE 01',
        title: 'Environment & Tooling Setup',
        desc: 'Initialize Hardhat/Foundry setups, select target EVM testnets (Arbitrum, Base, or Sepolia), and configure wallet deployments.',
        stack: ['Solidity', 'Foundry', 'Dotenv', 'Ethers.js'],
        guidelines: 'Setup contract linting, write setup script, and acquire testnet faucet funds.',
        x: 100,
        y: 80
      },
      {
        id: 'c2',
        branch: 'dev/contracts',
        hash: 'w2f928a',
        message: 'feat: deploy ERC-721A smart contracts with dynamic metadata',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 14:00:22 2026 +0530',
        phase: 'PHASE 02',
        title: 'Token Economics & Contracts',
        desc: 'Write gas-efficient smart contracts for NFTs/tokens incorporating whitelist checks and dynamic state variables.',
        stack: ['Solidity', 'OpenZeppelin', 'IPFS / Pinata'],
        guidelines: 'Implement ERC-721A standard for bulk minting optimization. Store metadata assets securely on IPFS.',
        x: 200,
        y: 160
      },
      {
        id: 'c3',
        branch: 'dev/contracts',
        hash: 'w4d830f',
        message: 'opt: gas optimization using assembly & custom errors',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 19:10:45 2026 +0530',
        phase: 'PHASE 03',
        title: 'Audit & Gas Optimization',
        desc: 'Refactor code to optimize storage variables, pack variables, use custom errors, and prevent reentrancy attacks.',
        stack: ['Yul Assembly', 'Slither', 'Foundry Gas Snapshots'],
        guidelines: 'Validate security using static analysis tool Slither. Verify all transactions comply with nonReentrant modifiers.',
        x: 200,
        y: 240
      },
      {
        id: 'c4',
        branch: 'dev/frontend',
        hash: 'w9c07aa',
        message: 'feat: construct web3 wallet connector hook',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 02:45:04 2026 +0530',
        phase: 'PHASE 04',
        title: 'Frontend Web3 Hydration',
        desc: 'Build client dashboard UI, integrating wallet connectors, transaction state trackers, and live blockchain status checks.',
        stack: ['Vite', 'wagmi', 'viem', 'RainbowKit'],
        guidelines: 'Implement event listeners that react to wallet connect/disconnect and chain changes instantly.',
        x: 300,
        y: 320
      },
      {
        id: 'c5',
        branch: 'main',
        hash: 'wb6e921',
        message: 'merge: combine web3 engine with optimized contracts',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 10:00:15 2026 +0530',
        phase: 'PHASE 05',
        title: 'Consensus Integration',
        desc: 'Link transaction alerts, render real-time block states, and prepare product deployment documentation.',
        stack: ['Vercel', 'Next.js', 'Lucide React', 'Etherscan'],
        guidelines: 'Conduct main workflow tests on testnet, publish verified contract links, and record product demo.',
        x: 100,
        y: 400
      }
    ]
  },
  'enterprise-3d-platform-website-salesforce': {
    title: 'SUSTAINABILITY & EM-TECH',
    tagline: 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.',
    mainBranch: 'main',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/iot-sensors', color: '#8B5CF6' },
      { name: 'dev/xr-render', color: '#EC4899' }
    ],
    commits: [
      {
        id: 'c1',
        branch: 'main',
        hash: 's1a09bb',
        message: 'feat: project scaffolding & edge architecture design',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 09:20:00 2026 +0530',
        phase: 'PHASE 01',
        title: 'Scaffolding & IoT Scopes',
        desc: 'Establish system scopes. Plan microcontroller telemetry pipelines and local data storage mechanisms.',
        stack: ['ESP32', 'C++', 'MQTT', 'Node.js'],
        guidelines: 'Draft sensor payload structures and evaluate telemetry transfer frequencies.',
        x: 100,
        y: 80
      },
      {
        id: 'c2',
        branch: 'dev/iot-sensors',
        hash: 's2f933c',
        message: 'feat: microcontroller telemetry pipeline implementation',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 14:15:22 2026 +0530',
        phase: 'PHASE 02',
        title: 'Microcontroller Telemetry',
        desc: 'Configure ESP32/Arduino code to capture sensor telemetry (carbon, temperature, humidity) and stream it via MQTT broker.',
        stack: ['Arduino IDE', 'WiFiManager', 'HiveMQ MQTT Broker'],
        guidelines: 'Setup edge device error handling, buffer local telemetry when network connectivity is lost.',
        x: 200,
        y: 160
      },
      {
        id: 'c3',
        branch: 'dev/iot-sensors',
        hash: 's4d835e',
        message: 'feat: deploy TinyML model to detect carbon anomalies',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 19:35:45 2026 +0530',
        phase: 'PHASE 03',
        title: 'Edge AI Classification',
        desc: 'Upload a lightweight TinyML classification model directly to edge microcontrollers to identify air quality index (AQI) anomalies.',
        stack: ['TensorFlow Lite Micro', 'Edge Impulse', 'C++'],
        guidelines: 'Quantize neural network model weights to reduce binary size and RAM footprint for microcontrollers.',
        x: 200,
        y: 240
      },
      {
        id: 'c4',
        branch: 'dev/xr-render',
        hash: 's9c08dd',
        message: 'feat: setup webxr scene with real-time telemetry overlays',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 03:05:04 2026 +0530',
        phase: 'PHASE 04',
        title: 'Spatial WebXR Rendering',
        desc: 'Create an interactive 3D/VR canvas to map real-time telemetry data onto virtual models.',
        stack: ['Three.js', 'React Three Fiber', 'WebXR API'],
        guidelines: 'Integrate dynamic shaders that animate depending on incoming air/carbon index variables.',
        x: 300,
        y: 320
      },
      {
        id: 'c5',
        branch: 'main',
        hash: 'sb6e952',
        message: 'merge: link spatial overlays with telemetry broker',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 10:15:15 2026 +0530',
        phase: 'PHASE 05',
        title: 'Complete Solution Presentation',
        desc: 'Integrate telemetry stream into the 3D dashboard. Document ecosystem architecture and solar power models.',
        stack: ['Next.js', 'WebSockets', 'TailwindCSS'],
        guidelines: 'Demonstrate functional hardware-to-VR communication. Verify edge classification alarms trigger instantly.',
        x: 100,
        y: 400
      }
    ]
  },
  'dandy-vision-storytelling-website': {
    title: 'OPEN INNOVATION',
    tagline: 'Solve any real-world problem with bold, cross-domain, open-ended ideas.',
    mainBranch: 'main',
    branches: [
      { name: 'main', color: '#10B981' },
      { name: 'dev/research', color: '#8B5CF6' },
      { name: 'dev/prototyping', color: '#EC4899' }
    ],
    commits: [
      {
        id: 'c1',
        branch: 'main',
        hash: 'o1a09dd',
        message: 'feat: define target problem scope & architecture',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 09:30:00 2026 +0530',
        phase: 'PHASE 01',
        title: 'Ideation & Scoping',
        desc: 'Establish targeted real-world problem statement. Research user persona needs, and draft overall system modules.',
        stack: ['Figma', 'System Design', 'Git Scaffolding'],
        guidelines: 'Outline system modules clearly, map out user flow, and define success metrics.',
        x: 100,
        y: 80
      },
      {
        id: 'c2',
        branch: 'dev/research',
        hash: 'o2f94cc',
        message: 'feat: perform comparative market research & audit',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 14:30:22 2026 +0530',
        phase: 'PHASE 02',
        title: 'Market Audit & User Research',
        desc: 'Conduct research on target audience. Define core differentiator and write detailed technical design document.',
        stack: ['Technical Writing', 'Data Architecture'],
        guidelines: 'Audit existing competitive products, document standard APIs, and plan user data flows.',
        x: 200,
        y: 160
      },
      {
        id: 'c3',
        branch: 'dev/prototyping',
        hash: 'o4d84ff',
        message: 'feat: implement core algorithmic module & APIs',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sat Aug 8 20:00:45 2026 +0530',
        phase: 'PHASE 03',
        title: 'Modular Backend & Core Engines',
        desc: 'Develop the database model, APIs, and any computational models needed to solve the problem.',
        stack: ['Node.js', 'FastAPI', 'Docker', 'MongoDB'],
        guidelines: 'Scaffold APIs, implement data validation schemas, and write unit tests for the core logic.',
        x: 300,
        y: 240
      },
      {
        id: 'c4',
        branch: 'dev/prototyping',
        hash: 'o9c09aa',
        message: 'feat: build interface wireframes & design system',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 03:30:04 2026 +0530',
        phase: 'PHASE 04',
        title: 'Interactive Frontend Interface',
        desc: 'Construct a responsive client-side interface integrating state management and API communication.',
        stack: ['React', 'TailwindCSS', 'Redux / Zustand'],
        guidelines: 'Design user-friendly dashboard interfaces with crisp animations and fast load times.',
        x: 300,
        y: 320
      },
      {
        id: 'c5',
        branch: 'main',
        hash: 'ob6e972',
        message: 'merge: consolidate frontend client with modular backend',
        author: 'csivitchapter <origin@csivitchanai.org>',
        date: 'Sun Aug 9 10:30:15 2026 +0530',
        phase: 'PHASE 05',
        title: 'Consolidated Prototype Deployment',
        desc: 'Deploy the full-stack system online. Verify workflows, performance under load, and prepare presentation.',
        stack: ['Vercel', 'Render', 'CI/CD GitHub Actions'],
        guidelines: 'Ensure client-server calls are secure and fast. Compile an outstanding video demo illustrating the solution.',
        x: 100,
        y: 400
      }
    ]
  }
};

export default function TrackDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [track, setTrack] = useState(null);
  const [activeCommit, setActiveCommit] = useState(null);

  useEffect(() => {
    if (slug && TRACK_DATA[slug]) {
      const data = TRACK_DATA[slug];
      setTrack(data);
      setActiveCommit(data.commits[0]);
    }
  }, [slug]);

  if (!track) {
    return (
      <div className="loading-screen" style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0a0d16',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace'
      }}>
        Loading commit history...
      </div>
    );
  }

  return (
    <>
      <Header />

      <main style={{
        backgroundColor: '#080c14',
        backgroundImage: 'radial-gradient(circle at 50% 20%, #111827 0%, #030712 100%)',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '160px 40px 100px',
        position: 'relative',
        zIndex: 5,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          {/* Back button */}
          <button 
            onClick={() => router.push('/')}
            style={{
              background: 'none',
              border: 'none',
              color: '#9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              marginBottom: '30px',
              padding: '0',
              fontFamily: 'inherit',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
          >
            ← Back to tracks
          </button>

          {/* Title block */}
          <div style={{ marginBottom: '60px' }}>
            <h1 className="font-machina-120" style={{ 
              color: '#ffffff', 
              lineHeight: 1.0, 
              margin: 0,
              fontSize: '96px',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
            }}>
              {track.title}
            </h1>
            <p style={{ 
              color: '#9CA3AF', 
              marginTop: '20px', 
              fontSize: '20px', 
              lineHeight: 1.5,
              maxWidth: '800px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              {track.tagline}
            </p>
          </div>

          {/* Interactive Workspace Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(350px, 450px) 1fr',
            gap: '50px',
            alignItems: 'start'
          }}>
            
            {/* Left Panel: Git Graph Timeline */}
            <div style={{
              background: '#0d111a',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '15px',
                marginBottom: '25px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#9CA3AF' }}>TRACK GRAPH</span>
                <span style={{ fontSize: '12px', color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>git-mode</span>
              </div>

              {/* Git Timeline SVG canvas */}
              <div style={{ position: 'relative', width: '100%', height: '480px' }}>
                <svg style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Branch lines */}
                  {/* main branch (green line) */}
                  <path 
                    d="M 100 80 L 100 400" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="3" 
                    opacity="0.8"
                  />

                  {/* dev/branch 1 (purple line) */}
                  <path 
                    d="M 100 80 Q 200 120 200 160 L 200 240 Q 200 320 100 400" 
                    fill="none" 
                    stroke="#8B5CF6" 
                    strokeWidth="3" 
                    opacity="0.8"
                  />

                  {/* dev/branch 2 (blue/pink line) */}
                  {track.branches[2] && (
                    <path 
                      d="M 100 80 Q 300 200 300 320 Q 300 360 100 400" 
                      fill="none" 
                      stroke={track.branches[2].color} 
                      strokeWidth="3" 
                      opacity="0.8"
                    />
                  )}

                  {/* Commit nodes */}
                  {track.commits.map((c) => {
                    const isActive = activeCommit && activeCommit.id === c.id;
                    const bInfo = track.branches.find(b => b.name === c.branch) || { color: '#ffffff' };
                    
                    return (
                      <g 
                        key={c.id} 
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActiveCommit(c)}
                        onMouseEnter={() => setActiveCommit(c)}
                      >
                        {/* Outer Glow ring when active */}
                        {isActive && (
                          <circle 
                            cx={c.x} 
                            cy={c.y} 
                            r="15" 
                            fill="none" 
                            stroke={bInfo.color} 
                            strokeWidth="2" 
                            opacity="0.6"
                            filter="url(#glow)"
                          />
                        )}
                        
                        {/* Node circle */}
                        <circle 
                          cx={c.x} 
                          cy={c.y} 
                          r={isActive ? "8" : "6"} 
                          fill={isActive ? bInfo.color : "#0f172a"} 
                          stroke={bInfo.color} 
                          strokeWidth="3"
                          style={{ transition: 'all 0.2s' }}
                        />

                        {/* Text labels next to node */}
                        <text
                          x={c.x + 22}
                          y={c.y + 5}
                          fill={isActive ? '#ffffff' : '#9CA3AF'}
                          style={{
                            fontSize: '12px',
                            fontWeight: isActive ? 'bold' : 'normal',
                            transition: 'fill 0.2s',
                            fontFamily: 'monospace'
                          }}
                        >
                          {c.hash} - {c.message.substring(0, 22)}...
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Branch Legend */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '15px',
                flexWrap: 'wrap',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '15px'
              }}>
                {track.branches.map(b => (
                  <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: b.color }} />
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{b.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Sleek Code Terminal details */}
            <div style={{
              background: '#0b0f19',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Terminal Title Bar */}
              <div style={{
                background: '#111827',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
                <span style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'monospace' }}>origin-cli // commit-{activeCommit?.hash}</span>
                <div style={{ width: '50px' }}></div>
              </div>

              {/* Terminal Screen Body */}
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Commit Meta */}
                <div style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  borderRadius: '8px',
                  padding: '15px 20px'
                }}>
                  <div style={{ color: '#F59E0B', fontSize: '13px', marginBottom: '6px' }}>commit {activeCommit?.hash}9c8112a9bc7ef50d182</div>
                  <div style={{ color: '#E5E7EB', fontSize: '13px' }}>Author: {activeCommit?.author}</div>
                  <div style={{ color: '#9CA3AF', fontSize: '13px' }}>Date:   {activeCommit?.date}</div>
                  <div style={{ color: '#10B981', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>
                    $ git show {activeCommit?.hash}
                  </div>
                </div>

                {/* Main Content Info */}
                {activeCommit && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Header info */}
                    <div>
                      <div style={{ fontSize: '12px', color: '#8B5CF6', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '5px' }}>
                        {activeCommit.phase} // {activeCommit.title.toUpperCase()}
                      </div>
                      <h3 style={{ fontSize: '22px', margin: '0 0 10px', color: '#ffffff', fontWeight: 'bold' }}>
                        {activeCommit.message.replace(/^(feat|security|merge|opt):\s*/, '')}
                      </h3>
                      <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.6', fontFamily: 'system-ui, sans-serif' }}>
                        {activeCommit.desc}
                      </p>
                    </div>

                    {/* Guidelines */}
                    <div style={{ borderLeft: '3px solid #10B981', paddingLeft: '15px' }}>
                      <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>
                        Task Guidelines
                      </div>
                      <p style={{ color: '#E5E7EB', fontSize: '13px', lineHeight: '1.5', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
                        {activeCommit.guidelines}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Recommended Stack
                      </div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {activeCommit.stack.map(tag => (
                          <span key={tag} style={{
                            fontSize: '11px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontFamily: 'monospace'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
