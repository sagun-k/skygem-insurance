import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  loading?: boolean
  children: React.ReactNode
}

export function Button({ variant = "primary", loading, children, className = "", disabled, ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl focus:ring-teal-200",
    secondary:
      "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white shadow-lg hover:shadow-xl focus:ring-slate-200",
    outline: "border-2 border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 focus:ring-teal-200",
  }

  const disabledClasses = "opacity-50 cursor-not-allowed"

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabled || loading ? disabledClasses : ""} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}
