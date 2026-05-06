import type { icons } from 'lucide-react';

export type IconNameType = keyof typeof icons;

export type SuitAppType = {
  name: string;
  description: string;
  icon: IconNameType;
  features: string[];
  backgroundColor: string;
};

export type SuitType = {
  name: string;
  description: string;
  compliance: string;
  image: string;
  apps: SuitAppType[];
};
