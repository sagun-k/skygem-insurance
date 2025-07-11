"use client"

import { Button } from "@/components/common/button"
import { Card, CardContent, CardHeader } from "@/components/common/card"
import { Input } from "@/components/common/input"
import { Select } from "@/components/common/select"
import { RiskTolerance } from "@/enums/RiskTolerance"
import { useForm } from "@/hooks/use-form"
import { useAuth } from "@/hooks/useAuth"
import { formatCurrency, insuranceFormSchema } from "@/lib/validation"
import { InsuranceRecommendationService } from "@/services/InsuranceRecommendationService"
import { InsuranceDetailModel } from "@/types/InsuranceDetailModel"
import { Recommendation } from "@/types/Recommendation"
import React, { useMemo } from "react"




type InsuranceFormProps = {
  setRecommendation: React.Dispatch<React.SetStateAction<Recommendation | undefined>>;
}

export default function InsuranceForm({ setRecommendation }: InsuranceFormProps) {
  const { userEmail } = useAuth()

  const riskOptions = useMemo(() => [
    { value: RiskTolerance.Low, label: "Low Risk - Conservative" },
    { value: RiskTolerance.Medium, label: "Medium Risk - Balanced" },
    { value: RiskTolerance.High, label: "High Risk - Aggressive" },
  ], [])

  const handleFormSubmit = async (data: InsuranceDetailModel) => {
    try {
      if (errors.age || errors.income || errors.dependents || errors.riskTolerance) return;
      console.log("Submitting insurance data:", data)
      const response = await InsuranceRecommendationService.storeAndGetInsuranceRecommendation(data)
      setRecommendation(response?.recommendation)
    } catch (error) {
      console.error("Error fetching recommendation:", error)
      setRecommendation(undefined)
    }
  }

  const { values, errors, touched, isSubmitting, setValue, setFieldTouched, handleSubmit, reset } = useForm({
    schema: insuranceFormSchema,
    onSubmit: handleFormSubmit,
  })



  const resetForm = () => {
    reset()
    setRecommendation(undefined)
  }

  return (

    <Card>
      <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
          <h2 className="text-xl font-bold">Insurance Assessment</h2>
        </div>
        <p className="text-teal-100 mt-2">Get your personalized recommendation</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Age"
            icon="user"
            type="number"
            placeholder="Enter your age"
            value={values.age || ""}
            onChange={(e) => setValue("age", Number(e.target.value))}
            onBlur={() => setFieldTouched("age")}
            error={touched.age ? errors.age : undefined}
          />

          <Input
            label="Annual Income"
            icon="dollar"
            type="number"
            placeholder="Enter your annual income"
            value={values.income || ""}
            onChange={(e) => setValue("income", Number(e.target.value))}
            onBlur={() => setFieldTouched("income")}
            error={touched.income ? errors.income : undefined}
          />

          <Input
            label="Number of Dependents"
            type="number"
            placeholder="Enter number of dependents"
            value={values.dependents || ""}
            onChange={(e) => setValue("dependents", Number(e.target.value))}
            onBlur={() => setFieldTouched("dependents")}
            error={touched.dependents ? errors.dependents : undefined}
          />

          <Select
            label="Risk Tolerance"
            icon="chart"
            placeholder="Select your risk tolerance"
            options={riskOptions}
            value={values.riskTolerance || ""}
            onChange={(value) => {
              setValue("riskTolerance", value)
              setFieldTouched("riskTolerance")
            }}
            error={touched.riskTolerance ? errors.riskTolerance : undefined}
          />

          <Button onClick={() => handleFormSubmit({ ...values, userEmail: userEmail } as InsuranceDetailModel)} loading={isSubmitting} className="w-full">
            {isSubmitting ? "Analyzing..." : "Get Recommendation"}
          </Button>
          <Button type="button" className="w-full" variant="secondary" onClick={resetForm}>
            {"New Recommendation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
