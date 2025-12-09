import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "AIケアサービス - 認知症患者様とご家族のための音声対話サービス",
  description:
    "認知症患者様とご家族をつなぐ革新的な音声対話サービス。簡単な操作で安心のコミュニケーションを実現します。",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={geistSans.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
