'use-client'
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { OpenAPISetupClient } from '@/components/OpenAPISetupClient'

export const metadata: Metadata = {
  title: 'Skygem',
  description: '',
  generator: '',
  icons: {
    icon: '/favicon.ico'
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/sg.png" type="image/png" />
      <body>
        <OpenAPISetupClient />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </body>
    </html>
  )
}
