import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const geistSans = GeistSans
const siteUrl = "https://lp.delne.jp"
const pageTitle = "AI電話サービス-DELNE"
const pageDescription =
  "認知症患者様とご家族をつなぐ革新的な音声対話サービス。簡単な操作で安心のコミュニケーションを実現します。"
const ogImagePath = `${siteUrl}/care-service-background-desktop.jpg`
const ogImageType = "image/jpeg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
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
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="DELNE" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImagePath} />
        <meta property="og:image:secure_url" content={ogImagePath} />
        <meta property="og:image:type" content={ogImageType} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={ogImagePath} />
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
