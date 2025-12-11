"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  })
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!privacyAgreed) {
      alert("個人情報の取り扱いに同意してください。")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          privacyAgreed,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          company: "",
          lastName: "",
          firstName: "",
          email: "",
          message: "",
        })
        setPrivacyAgreed(false)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("送信エラー:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせフォーム</h1>
          <p className="text-lg font-medium text-gray-600">
            DELNEに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-lg font-semibold">
                    会社名・病院名（個人の場合は「なし」と記入） <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="株式会社○○○"
                    className="w-full text-lg p-4"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-lg font-semibold">
                      姓 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="山田"
                      className="w-full text-lg p-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-lg font-semibold">
                      名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="太郎"
                      className="w-full text-lg p-4"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold">
                    メールアドレス <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@company.com"
                    className="w-full text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-semibold">
                    問い合わせ内容 <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="DELNEについてのご質問やご相談内容をご記入ください。"
                    className="w-full min-h-[120px] text-lg p-4"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy-agreement"
                    checked={privacyAgreed}
                    onChange={(event) =>
                      setPrivacyAgreed(event.target.checked)
                    }
                    className="mt-1 border-2 border-gray-300 bg-white data-[state=checked]:bg-[#002c5b] data-[state=checked]:border-[#002c5b]"
                  />
                  <Label htmlFor="privacy-agreement" className="text-lg font-medium text-gray-700 leading-relaxed">
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      個人情報
                    </Link>
                    の取り扱いに同意する <span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white text-lg font-semibold py-4"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      送信する
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-lg font-medium">
                      お問い合わせを送信いたしました。担当者より折り返しご連絡いたします。
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-lg font-medium">
                      送信に失敗しました。しばらく時間をおいて再度お試しください。
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
