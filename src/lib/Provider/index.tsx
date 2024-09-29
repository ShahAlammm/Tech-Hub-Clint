"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import UserProvider from "@/src/context/userProvider";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <UserProvider>
                <Toaster richColors position="bottom-right" />
                <NextThemesProvider {...themeProps}>
                    {children}
                </NextThemesProvider>
            </UserProvider>
        </NextUIProvider>
    );
}
