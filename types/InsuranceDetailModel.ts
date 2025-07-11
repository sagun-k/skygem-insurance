import { RiskTolerance } from "@/enums/RiskTolerance"

export type InsuranceDetailModel = {
  age: number
  income: number
  dependents: number
  riskTolerance: RiskTolerance;
  userEmail: string;
}
