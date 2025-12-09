import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const geistSans = GeistSans

export const metadata: Metadata = {
  title: "AI電話サービス-DELNE",
  description:
    "認知症患者様とご家族をつなぐ革新的な音声対話サービス。簡単な操作で安心のコミュニケーションを実現します。",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/delne-logo.png",
  },
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
