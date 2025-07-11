/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RecommendationService {
    /**
     * Submit insurance form and receive recommendation
     * @param requestBody
     * @returns any Recommendation response
     * @throws ApiError
     */
    public static submitInsuranceRecommendationRequest(
        requestBody: {
            age?: number;
            income?: number;
            dependents?: number;
            riskTolerance?: 'Low' | 'Medium' | 'High';
            userEmail?: string;
        },
    ): CancelablePromise<{
        recommendation?: string;
        monthlyPremium?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/recommendation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
