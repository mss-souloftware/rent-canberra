"use client"
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function DashboardLayout({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}