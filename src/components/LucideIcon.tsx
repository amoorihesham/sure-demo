import type { IconNameType } from '@/types';
import { icons } from 'lucide-react';

interface Props {
  name: IconNameType;
  size?: number;
  className?: string;
}

export default function LucideIcon({ name, size = 20, className }: Props) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
