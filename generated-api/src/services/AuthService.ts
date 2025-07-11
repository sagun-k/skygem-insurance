/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Register a new user
     * @param requestBody
     * @returns any User registered successfully
     * @throws ApiError
     */
    public static registerUser(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        id?: number;
        email?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input or user already exists`,
            },
        });
    }
    /**
     * Login a user
     * @param requestBody
     * @returns any Login successful
     * @throws ApiError
     */
    public static loginUser(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        token?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials`,
            },
        });
    }
    /**
     * Verify JWT token and return user email
     * @returns any Token is valid
     * @throws ApiError
     */
    public static verifyToken(): CancelablePromise<{
        email?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth/verify-token',
            errors: {
                401: `Invalid or expired token`,
            },
        });
    }
}
