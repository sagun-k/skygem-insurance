'use client'
import { AuthenticationService } from "@/services/AuthenitcationService";
import React, { createContext, useState, useEffect, ReactNode, use } from "react";
import { toast } from "react-toastify";
import { set } from "zod/v4";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  userEmail?: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [verifyingToken, setVerifyingToken] = useState<boolean>(true);

  useEffect(() => {
    // On mount, load token from localStorage if exists
    const savedToken = localStorage.getItem("jwtToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await AuthenticationService.login(email, password);
      setToken(res.token!);
      setUserEmail(email);
      localStorage.setItem("jwtToken", res.token!);
    } catch (err) {
      console.error("Login failed:", err);
      throw new Error("Login failed. Please check your credentials.");
    }
    // Call your backend login endpoint

  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("jwtToken");
  };

  const verifyToken = async () => {
    try {
      setVerifyingToken(true);
      const res = await AuthenticationService.verifyToken();
      setUserEmail(res?.email as string);
      const savedToken = localStorage.getItem("jwtToken");
      setToken(savedToken); // Optionally reset token if needed
    } catch (error) {
      console.error("Token verification failed:", error);
      logout()
    } finally {
      setVerifyingToken(false);
    }

  }

  useEffect(() => {
    verifyToken();
  }, [])



if(verifyingToken){
  return <div>Loading...</div>;
}

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token, userEmail }}>
        <>{children}</>
    </AuthContext.Provider>
  );
};
