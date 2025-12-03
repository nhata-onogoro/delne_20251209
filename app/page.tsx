// app/page.tsx  ← Server Component のまま（"use client" は付けない）
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ClientSections } from "@/components/client-sections"
import { StepsSection } from "@/components/steps-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StorySection />

      {/* ここに Client-only セクション（SSR無効）をまとめて描画 */}
      <ClientSections />

      <StepsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
