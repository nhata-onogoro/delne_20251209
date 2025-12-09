"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

export default function FeedbackChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // モバイルキーボード対策用のフラグ
  const [isStickyTop, setIsStickyTop] = useState(false)
  
  // 開閉アニメーション用のマウント状態
  const [isVisible, setIsVisible] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // アニメーション制御
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setIsStickyTop(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300) // アニメーション時間待機
      setIsStickyTop(false)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim() || isSubmitting) return

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
        setTimeout(() => {
          setIsSubmitted(false)
          handleClose()
        }, 2500)
      }
    } catch (error) {
      console.error("フィードバック送信エラー:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // モバイル時の位置クラス制御
  const positionClass = isOpen && isStickyTop 
    ? "top-4 left-4 right-4 md:top-auto md:left-auto md:bottom-6 md:right-6" // モバイル入力時（上部）
    : "bottom-4 right-4 md:bottom-6 md:right-6" // 通常時（右下）

  // レンダリングしない条件（閉じていてアニメーションも終わっている場合）
  if (!isOpen && !isVisible) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpen}
          className="
            h-14 md:h-16 px-6 md:px-8 rounded-full 
            bg-[#F39C12] hover:bg-[#D35400] text-white 
            shadow-lg hover:shadow-2xl hover:-translate-y-1 
            transition-all duration-300 ease-out
            flex items-center gap-3 cursor-pointer group
          "
          aria-label="改善要望フォームを開く"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="text-sm md:text-base font-bold tracking-wide">改善要望はこちら</span>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out ${positionClass}`}
      style={{ maxWidth: "100vw" }}
    >
      <div
        className={`
          transition-all duration-300 ease-out transform origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}
        `}
      >
        <Card
          className="
            w-full max-w-[400px] md:w-[400px]
            bg-white border-0 shadow-2xl rounded-2xl overflow-hidden
            flex flex-col
          "
        >
          {/* ヘッダーエリア */}
          <CardHeader className="bg-[#002c5b] text-white py-4 px-5 relative overflow-hidden">
            {/* 装飾用の背景円 */}
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-[#F39C12]" />
                </div>
                <div>
                  <CardTitle className="text-base md:text-lg font-bold flex items-center gap-2">
                    改善要望を送る
                  </CardTitle>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1 font-medium">
                    より良いサービスにするため、<br className="md:hidden" />ご意見をお聞かせください
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-8 w-8 transition-colors"
                aria-label="閉じる"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 bg-slate-50">
            <div className="p-5 md:p-6">
              {isSubmitted ? (
                // 送信完了画面
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-green-600 ml-1" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002c5b] mb-2">送信完了！</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    貴重なご意見ありがとうございます。<br/>
                    今後の改善に役立ててまいります。
                  </p>
                </div>
              ) : (
                // 入力フォーム
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Textarea
                      ref={textareaRef}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      onFocus={() => setIsStickyTop(true)}
                      placeholder="「ここが使いにくい」「こんな機能が欲しい」など、お気軽にお書きください..."
                      className="
                        min-h-[160px] md:min-h-[200px] resize-none 
                        bg-white border-slate-200 focus:border-[#F39C12] focus:ring-[#F39C12] 
                        rounded-xl p-4 text-sm md:text-base leading-relaxed
                        placeholder:text-gray-400
                        shadow-sm transition-all duration-200
                      "
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="
                        w-full h-12 rounded-xl font-bold text-base
                        bg-[#002c5b] hover:bg-[#001a36] text-white
                        shadow-md hover:shadow-lg transition-all duration-200
                        flex items-center justify-center gap-2
                      "
                      disabled={isSubmitting || !feedback.trim()}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          送信中...
                        </span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          要望を送信する
                        </>
                      )}
                    </Button>
                    
                    <p className="text-[10px] text-gray-400 text-center">
                      ※返信が必要な内容は「お問合せ」をご利用ください
                    </p>
                  </div>
                </form>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
