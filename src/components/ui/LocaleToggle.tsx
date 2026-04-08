import React from "react";
import { Button } from "./button";

export function LocaleToggle(){
    const [locale, setLocale] = React.useState<"en" | "ar">(()=>window.location.pathname.split('/')[1] as "en" | "ar");
    return <Button>{locale}</Button>
}