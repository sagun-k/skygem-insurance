"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/common/card"
import { Input } from "@/components/common/input"
import { Button } from "@/components/common/button"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "react-toastify"
import { userAgent } from "next/server"

export default function LoginPage() {
  const router = useRouter()
  const { login, token } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await login(email, password)
      router.push("/insurance-recommendation") // or your protected page
    } catch {
      setError("Invalid email or password")
      toast.error("Login failed. Please check your credentials.");

    } finally {
      setLoading(false)
    }
  }
  if (token) {
    return router.push("/insurance-recommendation") // Redirect if already logged in
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Login to Your Account</h2>
          <p className="text-teal-100 mt-2">Access your dashboard and features</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" loading={loading} className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => router.push("/register")}
            >
              Create an Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
