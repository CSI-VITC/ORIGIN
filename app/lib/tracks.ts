export type TrackProject = {
  name: string;
  nomination: string;
  year: string;
};

export type Track = {
  uid: string;
  src: string;
  data: {
    title: string;
    projects: TrackProject[];
  };
};

export const tracks: Track[] = [
  {
    uid: 'ai',
    src: '/tracks/ai/preview.webp',
    data: {
      title: 'AI & Machine Learning',
      projects: [
        { name: 'Neural Origins', nomination: 'Machine Learning', year: '01' },
        { name: 'Prompt to Product', nomination: 'Generative AI', year: '02' },
        { name: 'Vision & Voice', nomination: 'Applied AI', year: '03' },
      ],
    },
  },
  {
    uid: 'cybersecurity',
    src: '/tracks/cybersecurity/preview.webp',
    data: {
      title: 'Cybersecurity & Ethical Hacking',
      projects: [
        { name: 'Firewall Fury', nomination: 'Capture The Flag', year: '01' },
        { name: 'Zero Trust Build', nomination: 'Security Architecture', year: '02' },
        { name: 'Digital Forensics', nomination: 'Investigation', year: '03' },
      ],
    },
  },
  {
    uid: 'blockchain',
    src: '/tracks/blockchain/preview.webp',
    data: {
      title: 'Blockchain & Web3',
      projects: [
        { name: 'Chain Craft', nomination: 'Smart Contracts', year: '01' },
        { name: 'DeFi Dash', nomination: 'Decentralized Finance', year: '02' },
        { name: 'NFT Narratives', nomination: 'Web3 Experiences', year: '03' },
      ],
    },
  },
  {
    uid: 'webdev',
    src: '/tracks/webdev/preview.webp',
    data: {
      title: 'Web Development',
      projects: [
        { name: 'Pixel Perfect', nomination: 'Frontend Craft', year: '01' },
        { name: 'Full-Stack Fusion', nomination: 'Architecture & Backend', year: '02' },
        { name: 'Velocity Sprint', nomination: 'Performance & SEO', year: '03' },
      ],
    },
  },
  {
    uid: 'spacetech',
    src: '/tracks/spacetech/preview.webp',
    data: {
      title: 'SpaceTech',
      projects: [
        { name: 'Orbit Builders', nomination: 'Satellites & Rovers', year: '01' },
        { name: 'Deep Space Dev', nomination: 'Mission Software', year: '02' },
        { name: 'Ground Station', nomination: 'Data & Telemetry', year: '03' },
      ],
    },
  },
  {
    uid: 'iot',
    src: '/tracks/iot/preview.webp',
    data: {
      title: 'IoT & Robotics',
      projects: [
        { name: 'Smart Sensors', nomination: 'IoT Networks', year: '01' },
        { name: 'Robot Rumble', nomination: 'Robotics & Automation', year: '02' },
        { name: 'Edge Impulse', nomination: 'Embedded Systems', year: '03' },
      ],
    },
  },
];
