import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white rounded-lg shadow-xl border-0 ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
