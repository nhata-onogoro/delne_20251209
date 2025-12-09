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
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
