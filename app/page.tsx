// app/page.tsx
"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/common/button"

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/insurance-recommendation")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Secure Your Future with Confidence</h1>
        <p className="text-slate-600 text-lg mb-8">
          Sky Gem Solutions helps you find the perfect insurance plan tailored to your needs.
          Just provide a few details and get a personalized recommendation instantly.
        </p>
        <Button variant="primary" onClick={handleGetStarted}>
          Get Your Insurance Recommendation
        </Button>
      </div>
    </main>
  )
}
