import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const geistSans = GeistSans

export const metadata: Metadata = {
  title: "AI電話サービス-DELNE",
  description:
    "認知症患者様とご家族をつなぐ革新的な音声対話サービス。簡単な操作で安心のコミュニケーションを実現します。",
    keywords: [
    "DELNE",
    "derune",
    "介護離職",
    "寝不足",
    "デルネ",
    "でるね",
    "DELNE AI電話",
    "AI電話 DELNE",
    "AI電話サービス",
    "AI電話",
    "認知症",
    "電話",
    "オノゴロ",
    "認知症 電話",
    "認知症 介護 電話",
    "認知症 家族 電話",
    "介護 電話",
    "AI 音声 対話",
    "介護 電話 代行",
    "AI 自動応答",
    "介護者 支援 サービス",
  ],
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KPPZ1W3GDE"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'G-KPPZ1W3GDE');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
