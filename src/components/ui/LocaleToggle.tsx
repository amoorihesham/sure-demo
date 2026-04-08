import React, { useState } from "react";
import { Button, buttonVariants } from "./button";
import { Globe } from "lucide-react";

export function LocaleToggle() {
  const [locale, setLocale] = useState(() => window.location.pathname.split("/")[1]);
  const url = locale === "en" ? "/ar" : "/en";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (window.location.href = url)}
      className={buttonVariants({ variant: "outline", size: "icon", className: "text-white" })}
    >
      <Globe className="size-4" />
    </Button>
  );
}
