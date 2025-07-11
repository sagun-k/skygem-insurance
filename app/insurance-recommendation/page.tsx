"use client"

import InformationCard from "@/components/InsuranceRecommendation/InformationCard"
import InsuranceForm from "@/components/InsuranceRecommendation/InsuranceForm"
import InsuranceRecommendationCard from "@/components/InsuranceRecommendation/InsuranceRecommendationCard"
import ProtectedRoute from "@/components/ProtectedRoute"
import { Recommendation } from "@/types/Recommendation"
import { useState } from "react"




export default function InsuranceRecommendationPage() {
  const [recommendation, setRecommendation] = useState<Recommendation | undefined>(undefined)


  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <InsuranceForm setRecommendation={setRecommendation} />

            {/* Recommendation Section */}
            <div className="space-y-6">
              <InsuranceRecommendationCard recommendation={recommendation} />
              {/* Info Card */}
              <InformationCard />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
