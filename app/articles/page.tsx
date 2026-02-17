import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesCarousel } from "@/components/articles-carousel"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ArticlesCarousel />
      <Footer />
    </main>
  )
}
