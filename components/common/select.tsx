"use client"
import { useState } from "react"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label: string
  options: SelectOption[]
  value?: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
  icon?: "user" | "dollar" | "users" | "chart"
}

export function Select({ label, options, value, onChange, error, placeholder, icon }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getIcon = () => {
    switch (icon) {
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

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className="space-y-2 relative">
      <label className="flex items-center space-x-2 text-slate-700 font-medium text-sm">
        {icon && getIcon()}
        <span>{label}</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 border rounded-lg text-left transition-colors focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-teal-500 focus:ring-teal-200"
          } ${!selectedOption ? "text-slate-500" : "text-slate-900"}`}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-600"></div>
          </div>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 text-left hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}
