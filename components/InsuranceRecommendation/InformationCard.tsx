import { Card, CardContent } from "../common/card"


const InformationCard = () => {
    return (
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <CardContent>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-teal-400 rounded-full flex items-center justify-center">
                        <div className="text-teal-400 text-xs font-bold">i</div>
                    </div>
                    <span>How It Works</span>
                </h3>
                <div className="space-y-3 text-slate-300">
                    <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                            1
                        </div>
                        <span>Provide your information</span>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                            2
                        </div>
                        <span>Get personalized analysis</span>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                            3
                        </div>
                        <span>Receive recommendations</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default InformationCard;