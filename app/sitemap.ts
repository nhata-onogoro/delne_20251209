import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const siteUrl = "https://lp.delne.jp"

const staticRoutes = [
  "",
  "/contact",
  "/outage-info",
  "/privacy-policy",
  "/terms",
  "/legal-notice",
  "/disclaimer",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }))

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
