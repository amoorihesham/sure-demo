import React, { useState } from 'react';
import { Button, buttonVariants } from './button';
import { Globe } from 'lucide-react';

export function LocaleToggle() {
  const [locale, setLocale] = useState(
    () => window.location.pathname.split('/')[1]
  );
  const url = locale === 'en' ? '/ar' : '/en';

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-brand/10"
      onClick={() => (window.location.href = url)}
    >
      <Globe className="size-4 text-black dark:text-white" />
    </Button>
  );
}
