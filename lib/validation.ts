import { RiskTolerance } from "@/enums/RiskTolerance"
import * as yup from "yup"

export const insuranceFormSchema = yup.object({
  age: yup
    .number()
    .required("Age is required")
    .min(18, "Age must be at least 18")
    .max(80, "Age must be less than 80")
    .integer("Age must be a whole number"),

  income: yup
    .number()
    .required("Income is required")
    .min(10000, "Income must be at least $10,000")
    .max(10000000, "Income must be less than $10,000,000"),

  dependents: yup
    .number()
    .required("Number of dependents is required")
    .min(0, "Cannot have negative dependents")
    .max(20, "Maximum 20 dependents allowed")
    .integer("Number of dependents must be a whole number"),

  riskTolerance: yup
    .string()
    .required("Please select a risk tolerance")
    .oneOf([RiskTolerance.Medium, RiskTolerance.Low, RiskTolerance.High], "Invalid risk tolerance selection"),
    
    userEmail: yup
    .string()
    .email("Invalid email format")
    .required("Email is required")
})


export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
