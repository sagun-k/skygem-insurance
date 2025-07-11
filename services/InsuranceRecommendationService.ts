import { RecommendationService } from "@/generated-api/src";
import { InsuranceDetailModel } from "@/types/InsuranceDetailModel";
import { Recommendation } from "@/types/Recommendation";


type InsuranceRecommendationServiceDto = {
    recommendation?: Recommendation, monthlyPremium: string
}


export class InsuranceRecommendationService {
    public static async storeAndGetInsuranceRecommendation(request: InsuranceDetailModel): Promise<InsuranceRecommendationServiceDto | undefined> {
        try {
            const response = await RecommendationService.submitInsuranceRecommendationRequest({
                age: request.age,
                income: request.income,
                dependents: request.dependents,
                riskTolerance: request.riskTolerance,
                userEmail: request.userEmail
            });
            return response as InsuranceRecommendationServiceDto
        } catch (err) {
            throw new Error(err instanceof Error ? err.message : "Failed to get insurance recommendation");
        }

    }


}