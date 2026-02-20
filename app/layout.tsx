// app/layout.tsx
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const geistSans = GeistSans

const siteUrl = "https://lp.delne.jp"
const pageTitle = "DELNE(デルネ):仕事と介護の両立を支援する認知症向けAI電話サービス"
const pageDescription =
  "認知症患者様とご家族をつなぐ革新的な音声対話サービス。簡単な操作で安心のコミュニケーションを実現します。"

// ※ここは「必ず 200 で取得できる」画像URLにしてください（noteはここを取りに来ます）
const ogImagePath = `${siteUrl}/ogp-note.jpeg`
const ogImageType = "image/jpeg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "DELNE",
    "derune",
    "介護離職",
    "寝不足",
    "デルネ",
    "でるね",
    "AI電話",
    "AI電話サービス",
    "認知症",
    "電話",
    "オノゴロ",
    "介護",
    "家族",
    "音声",
    "代行",
    "自動応答",
    "支援",
    "サービス",
    "AI",
    "delune",
    "親",
    "ストレス",
    "限界",
    "留守電",
    "見守り",
    "在宅介護",
    "遠距離介護",
    "介護うつ",
    "介護DX",
    "認知症ケア",
    "しつこい",
    "対策"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: "DELNE",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "AI電話サービス DELNE トップページ画像",
        type: ogImageType,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImagePath],
  },
  // noteのリンクカード最適化（これが重要）
  other: {
    "note:card": "summary_large_image",
  },
  generator: "v0.app",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DELNE",
    alternateName: "delne.jp",
    url: siteUrl,
  }

  return (
    <html lang="ja" className={geistSans.variable}>
      <body className="font-sans antialiased">
        <Script id="website-structured-data" type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </Script>
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

        {children}
      </body>
    </html>
  )
}
