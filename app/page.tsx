// app/page.tsx  ← Server Component のまま（"use client" は付けない）
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ClientSections } from "@/components/client-sections"
import { StepsSection } from "@/components/steps-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ArticlesCarousel } from "@/components/articles-carousel"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { LandingLoader } from "@/components/landing-loader"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LandingLoader />
      <AnalyticsTracker
        sections={[
          { id: "hero", label: "hero" },
          { id: "story", label: "story" },
          { id: "features", label: "features" },
          { id: "demo", label: "demo" },
          { id: "steps", label: "steps" },
          { id: "testimonials", label: "testimonials" },
          { id: "pricing", label: "pricing" },
          { id: "articles", label: "articles" },
          { id: "faq", label: "faq" },
        ]}
      />
      <Header />
      <HeroSection />
      <StorySection />

      {/* ここに Client-only セクション（SSR無効）をまとめて描画 */}
      <ClientSections />

      <StepsSection />
      <TestimonialsSection />
      <PricingSection />
      <ArticlesCarousel />
      <FaqSection />
      <Footer />
    </main>
  )
}
