import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";

export function HeroSection() {
  const bgSrc = "hero-woman-phone-latest.jpg";

  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-[580px] md:min-h-[640px] lg:min-h-[720px]
      "
    >
      {/* 背景：高さ基準でフィット／右寄せ／少し明るく */}
      <div className="absolute inset-0 -z-10 overflow-hidden flex justify-end">
        <img
          src={bgSrc || "/placeholder.svg"}
          alt="" /* 背景用途なので空ALT */
          className="
            h-full w-auto max-w-none
            object-contain object-right
            brightness-110 contrast-105 saturate-110
            select-none pointer-events-none
          "
          loading="eager"
          fetchPriority="high"
        />
        {/* 左側を濃くして文字の視認性UP */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* テキスト */}
          <div className="space-y-6 sm:space-y-8 text-white">
            <div className="space-y-3 sm:space-y-4">
              {/* ▼ 見出し：スマホは小さめ、折り返し可に変更 */}
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
                {/* ▼ スマホでは nowrap 解除（sm:whitespace-nowrap でタブレット以上のみ固定） */}
                <span className="whitespace-normal sm:whitespace-nowrap">
                  仕事中や夜間の電話に悩まない
                </span>

                {/* ▼ 強制改行はスマホで隠す */}
                <br className="hidden sm:block" />

                <span className="inline sm:inline-block md:whitespace-nowrap">
                  AIが、あなたの声で
                </span>

                {/* ▼ 強制改行はスマホで隠す */}
                <br className="hidden sm:block" />

                お話しします
              </h1>

              {/* ▼ 本文：スマホは文字サイズを落とし、nowrap 解除 */}
              <p className="text-base sm:text-xl leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                認知症のご家族からの繰り返しの電話
                <br className="hidden sm:block" />
                大切なあの人だけど、仕事中は対応できない
                <br className="hidden sm:block" />
                深夜の電話で睡眠不足
                <br />
                <span className="font-semibold text-orange-200 inline sm:inline-block sm:whitespace-nowrap">
                  ヘルパーフォンは、介護と仕事の両立を支援するAI電話サービスです。
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-500 text-base sm:text-lg px-6 sm:px-8 text-white"
              >
                <a
                  href="https://st-amatelus-django-admin-service.btv98tps97t6e.ap-northeast-1.cs.amazonlightsail.com/auth/register/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  無料トライアル実施中
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 pt-1 sm:pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-200" />
                <span className="text-sm sm:text-base text-white/90">安全・安心</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-200" />
                <span className="text-sm sm:text-base text-white/90">24時間対応</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-200" />
                <span className="text-sm sm:text-base text-white/90">ご家族の声で応答</span>
              </div>
            </div>
          </div>

          {/* 右カラム（背景写真に任せるので空でOK） */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
