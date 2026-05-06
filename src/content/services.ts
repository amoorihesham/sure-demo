import type { SuitType } from '@/types';

export const content = {
  badge: 'Solutions',
  heading: 'Premium',
  headingAccent: 'Digital Solutions',
  subtitle: 'End-to-end solutions designed to scale, elevate your brand, and dominate the digital landscape.',
  learnMore: 'Learn More',
};

export const suits: SuitType[] = [
  {
    name: 'Clario Datastream',
    description:
      'High-performance, scalable web platforms built with modern frontend frameworks ensuring lightning-fast load times and seamless UX.',
    compliance: 'NCA | DGA | SDAIA',
    image: '/dataStream.png',
    apps: [
      {
        name: 'Clario DR',
        description: 'Disaster Recovery Management & Verification Platform',
        icon: 'Database',
        features: [
          'Readiness Score 0–100%',
          'Cell-level DB comparison',
          'AI Risk Feed',
          'Severity Alerts',
          'On-demand & scheduled',
        ],
        backgroundColor: 'bg-linear-to-tr from-primary to-primary from-30% to-80%',
      },
      {
        name: 'Clario Sync',
        description: 'Full-Spectrum Synchronization & Replication Monitoring',
        icon: 'RefreshCw',
        features: [
          'Lag monitoring 6 platforms',
          'Package version match',
          'Cell-level row comparison',
          'Standalone replication agent',
          'HTTP/HTTPS health probes',
        ],
        backgroundColor: 'bg-linear-to-tr from-pink-500 to-pink-700 from-30% to-80%',
      },
      {
        name: 'Clario Analyzer',
        description: 'Proactive AI Analytics & Enterprise Intelligence Hub',
        icon: 'ChartColumnDecreasing',
        features: [
          'Prioritized AI Risk Feed',
          'Drill failure prediction',
          'Daily DR Health narrative',
          'Cross-module anomalies',
          'Backup compliance trends',
        ],
        backgroundColor: 'bg-linear-to-tr from-orange-500 to-orange-700 from-30% to-80%',
      },
      {
        name: 'Clario Migration',
        description: 'Enterprise Database Migration Platform',
        icon: 'HardDrive',
        features: ['Homogeneous full-load & CDC', 'Flat files: CSV/JSON/Parquet', 'Cloud: S3/Azure Blob/GCS'],
        backgroundColor: 'bg-linear-to-tr from-red-500 to-red-700 from-30% to-80%',
      },
      {
        name: 'Clario DWH',
        description: 'Enterprise Data Lake, Warehouse & Governed Analytics',
        icon: 'LayoutGrid',
        features: ['PostgreSQL-native lakehouse', 'ML schema derivation', '≥100K rows/sec'],
        backgroundColor: 'bg-linear-to-tr from-yellow-500 to-yellow-700 from-30% to-80%',
      },
    ],
  },
  {
    name: 'Clario Enterprise',
    description:
      'High-performance, scalable web platforms built with modern frontend frameworks ensuring lightning-fast load times and seamless UX.',
    compliance: 'NCA | DGA | SDAIA',
    image: '/clarioEnterprise.png',
    apps: [
      {
        name: 'Clario Enterprise',
        description: 'Coming Soon!',
        icon: 'Building2',
        backgroundColor: 'bg-linear-to-tr from-green-500 to-green-700 from-30% to-80%',
        features: [],
      },
    ],
  },
];
