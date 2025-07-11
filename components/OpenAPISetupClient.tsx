// components/OpenAPISetupClient.tsx
'use client';

import { configureOpenAPI } from '@/generated-api/src/setupOpenAPI';
import { useEffect } from 'react';

export const OpenAPISetupClient = () => {
    useEffect(() => {
        configureOpenAPI(() => {
            const token = localStorage.getItem("jwtToken");
            return token ?? undefined;
        });
    }, []);

    return null;
};
