import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  icon?: "user" | "dollar" | "users" | "chart"
}

export function Input({ label, error, icon, className = "", ...props }: InputProps) {
  const getIcon = () => {
    switch (icon) {
      case "user":
        return (
          <div className="w-4 h-4 rounded-full bg-teal-600 relative">
            <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-1"></div>
            <div className="w-3 h-1.5 bg-white rounded-b-full absolute bottom-0 left-0.5"></div>
          </div>
        )
      case "dollar":
        return <div className="w-4 h-4 text-teal-600 font-bold text-sm flex items-center justify-center">$</div>
      case "users":
        return (
          <div className="flex space-x-0.5">
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
          </div>
        )
      case "chart":
        return (
          <div className="w-4 h-4 relative">
            <div className="absolute bottom-0 left-0 w-1 h-2 bg-teal-600"></div>
            <div className="absolute bottom-0 left-1.5 w-1 h-3 bg-teal-600"></div>
            <div className="absolute bottom-0 left-3 w-1 h-4 bg-teal-600"></div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-2">
      <label className="flex items-center space-x-2 text-slate-700 font-medium text-sm">
        {icon && getIcon()}
        <span>{label}</span>
      </label>
      <input
        className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-slate-300 focus:border-teal-500 focus:ring-teal-200"
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}
