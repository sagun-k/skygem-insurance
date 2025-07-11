"use-client"
import { OpenAPI } from "./core/OpenAPI";
import { OpenAPIOverride, setTokenResolver } from "./OpenApi.override";

export const configureOpenAPI = (tokenGetter: () => string | undefined) => {
    Object.assign(OpenAPI, OpenAPIOverride);
    setTokenResolver(tokenGetter);
};
