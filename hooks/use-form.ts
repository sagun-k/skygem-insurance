"use client"

import type React from "react"

import { useState } from "react"
import * as yup from "yup"

interface UseFormProps<T> {
  schema: yup.Schema<T>
  onSubmit: (data: T) => Promise<void>
}

export function useForm<T extends Record<string, any>>({ schema, onSubmit }: UseFormProps<T>) {
  const [values, setValues] = useState<Partial<T>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const setFieldTouched = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const validateField = async (name: string, value: any) => {
    try {
      await schema.validateAt(name, { ...values, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: "" }))
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors((prev) => ({ ...prev, [name]: error.message }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const validData = await schema.validate(values, { abortEarly: false })
      console.log(validData)
      await onSubmit(validData)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {}
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message
          }
        })
        setErrors(newErrors)

        // Mark all fields as touched to show errors
        const touchedFields: Record<string, boolean> = {}
        Object.keys(newErrors).forEach((field) => {
          touchedFields[field] = true
        })
        setTouched(touchedFields)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setValues({})
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setFieldTouched,
    validateField,
    handleSubmit,
    reset,
  }
}
