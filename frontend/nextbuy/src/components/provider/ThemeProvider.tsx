"use client"

import * as React from "react"
import {useEffect, useState} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient ? <NextThemesProvider {...props}>{children}</NextThemesProvider> : null;
}
