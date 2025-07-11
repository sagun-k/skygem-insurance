"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const auth = useAuth();;
    const router = useRouter();

    useEffect(() => {
        if (!auth?.token) {
            router.push("/login"); 
        }
    }, [auth?.isAuthenticated, router]);

    if (!auth?.token) {
        return null;
    }

    return <>{children}</>;
}
