let tokenResolver: (() => string | undefined) | undefined;

export const OpenAPIOverride = {

    TOKEN: async () => {
        if (!tokenResolver) {
            console.warn("Token resolver has not been set up for the respective service.");
            return "";
        }
        const token = await tokenResolver();
        return token ?? "";
    },
};

export const setTokenResolver = (resolver: () => string | undefined) => {
    tokenResolver = resolver;
};
