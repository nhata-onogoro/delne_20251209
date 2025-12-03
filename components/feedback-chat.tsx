"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export default function FeedbackChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ★ モバイルで上部固定を維持するフラグ
  const [isStickyTop, setIsStickyTop] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleOpen = () => {
    setIsOpen(true)
    setIsStickyTop(true) // 開いたら上部固定モードに
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsStickyTop(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim() || isSubmitting) return

    // キーボードは閉じるが、位置は上部固定のまま
    textareaRef.current?.blur()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFeedback("")
        // 成功メッセージを少し見せてから閉じる
        setTimeout(() => {
          setIsSubmitted(false)
          handleClose()
        }, 2000)
      }
    } catch (error) {
      console.error("フィードバック送信エラー:", error)
      // エラー時も位置は上部固定のまま（ユーザーが再入力しやすい）
    } finally {
      setIsSubmitting(false)
    }
  }

  // スマホ用の位置（md未満のみ有効）
  // isOpen && isStickyTop の間は常に上部固定
  const mobilePositionClass = isOpen && isStickyTop ? "top-4 inset-x-4 bottom-auto" : "bottom-4 right-4 left-auto"

  return (
    <div
      className={["fixed z-50", mobilePositionClass, "md:bottom-6 md:right-6 md:left-auto md:top-auto"].join(" ")}
      style={{ maxWidth: "100vw" }}
    >
      {isOpen ? (
        <Card
          className={[
            "w-full max-w-[420px]",
            "md:w-106",
            "min-h-[330px] rounded-xl overflow-hidden shadow-2xl p-0 gap-0",
          ].join(" ")}
        >
          <CardHeader className="bg-[#002c5b] text-white py-1.5 px-3 md:py-2 md:px-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 font-bold" />
                  改善要望
                </CardTitle>
                <p className="text-xs md:text-sm text-white/90 mt-0.5 md:mt-1 font-bold">
                  ※返信が必要な場合は、お問合せからご連絡ください。
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-white hover:bg-[#001a36] h-6 w-6 p-0"
                aria-label="閉じる"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-3 pt-2.5 pb-3 md:p-4 md:pt-3 md:pb-4">
            <div className="max-h-[70vh] overflow-auto md:max-h-none">
              {isSubmitted ? (
                <div className="text-center py-4 md:py-6">
                  <div className="text-green-600 font-medium mb-1.5 md:mb-2">ご要望、ありがとうございます！</div>
                  <p className="text-xs md:text-sm text-gray-600">改善要望を受け付けました。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                  <Textarea
                    ref={textareaRef}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    onFocus={() => setIsStickyTop(true)}
                    placeholder="DELNEの改善要望をご記入ください。"
                    className="min-h-[180px] md:min-h-[220px] resize-none"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#002c5b] hover:bg-[#001a36]"
                    disabled={isSubmitting || !feedback.trim()}
                  >
                    {isSubmitting ? (
                      "送信中..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        送信する
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="relative">
          <Button
            onClick={handleOpen}
            className="h-16 px-4 md:px-6 rounded-2xl bg-[#F39C12] hover:bg-[#D35400] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center relative w-full md:w-34 max-w-[420px] cursor-pointer"
            size="lg"
            aria-label="改善要望フォームを開く"
          >
            <span className="text-sm font-bold text-white leading-tight">改善要望はこちら</span>
          </Button>
        </div>
      )}
    </div>
  )
}
