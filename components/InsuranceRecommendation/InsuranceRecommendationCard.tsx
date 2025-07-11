import { Recommendation } from "@/types/Recommendation"
import { Button } from "../common/button"
import { Card, CardContent, CardHeader } from "../common/card"


type InsuranceRecommendationCardProps={
    recommendation: Recommendation | undefined
}

const InsuranceRecommendationCard = ({recommendation}:InsuranceRecommendationCardProps) => {

    return (<>
        {recommendation ? (
            <Card>
                <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-t-lg">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 border-2 border-teal-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        </div>
                        <h2 className="text-xl font-bold">Your Recommendation</h2>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">{recommendation.type}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-slate-600 mb-1">Coverage</p>
                                    <p className="text-xl font-bold text-teal-600">{recommendation.coverage}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600 mb-1">Term</p>
                                    <p className="text-xl font-semibold text-slate-700">{recommendation.term}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-teal-200">
                                <p className="text-sm text-slate-600 mb-1">Monthly Premium</p>
                                <p className="text-2xl font-bold text-slate-800">{recommendation.monthlyPremium}</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                                    <div className="w-5 h-5 border-2 border-slate-500 rounded-full flex items-center justify-center">
                                        <div className="text-slate-500 text-xs font-bold">i</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Why this recommendation?</h4>
                                    <p className="text-slate-600">{recommendation.explanation}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="secondary" className="flex-1">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ) : (
            <Card>
                <CardContent className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 border-2 border-teal-600 rounded transform rotate-45"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Ready for Your Recommendation?</h3>
                    <p className="text-slate-600">Complete the form to get your personalized insurance recommendation.</p>
                </CardContent>
            </Card>
        )}
    </>)
}

export default InsuranceRecommendationCard;