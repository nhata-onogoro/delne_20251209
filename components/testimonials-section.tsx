"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "N.Tさん",
      age: "45歳・会社員",
      content:
        "父から1日10回以上も電話がかかってきて、仕事中も会議中も対応せざるを得ませんでした。正直、集中できず成果も落ちていたんです。\nDELNEを導入してからは、仕事に集中できるようになり、成果も目に見えて改善しました。父も『いつでも話せる』と安心しているようで、本当に助かっています。",
      quote: "仕事への集中力が\n戻ってきました",
      avatar: "/japanese-businessman-professional-headshot-smiling.jpg",
    },
    {
      name: "M.Sさん",
      age: "38歳・営業職",
      content:
        "父の認知症が進み、電話の回数が増えるたびに心も体も限界に近づいていました。『もう仕事を辞めるしかないかもしれない』とまで考えていました。\n今は、本当に必要な要件だけメールで確認できるので、無理なく対応できています。おかげで営業の数字も回復し、上司の理解も得られるようになりました。",
      quote: "介護理由の退職を\n回避できました",
      avatar: "/customer2.png",
    },
    {
      name: "Y.Hさん",
      age: "52歳・自営業",
      content:
        "夜勤明けに何度も電話が鳴って、寝不足でイライラしていました。母に優しくできない自分が嫌で、本当に苦しかったんです。\nDELNEを使い始めてからは、しっかり休めるようになり、会えるときには自然に優しく接することができています。テクノロジーの力ってすごいなと実感しています。",
      quote: "家族関係に\n温かさが戻りました",
      avatar: "/customer3.png",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* ▼▼▼ 背景装飾：「右肩上がり」と「兆し」を表現 ▼▼▼ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-slate-50">
        {/* ベースのグラデーション：左下（現状）から右上（未来・希望）へ明るくなる */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-white to-orange-50/30" />

        {/* 右肩上がりの光の筋1（青系：安定した基盤が上昇していくイメージ） */}
        <div
          className="absolute bottom-[-30%] left-[-20%] w-[150%] h-[800px] 
                     bg-gradient-to-r from-blue-100/30 via-blue-50/10 to-transparent 
                     rotate-[-15deg] blur-3xl transform-gpu"
        />

        {/* 右肩上がりの光の筋2（オレンジ系：希望の光が差し込むイメージ） */}
        <div
          className="absolute bottom-[10%] left-[-10%] w-[150%] h-[500px] 
                     bg-gradient-to-r from-orange-200/40 via-orange-100/20 to-transparent 
                     rotate-[-20deg] blur-2xl transform-gpu mix-blend-overlay"
        />

        {/* 右上の輝き（到達点・未来） */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl" />
      </div>
      {/* ▲▲▲ 背景装飾ここまで ▲▲▲ */}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#072C5A] mb-6 drop-shadow-sm">お客様の声</h2>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 font-medium md:text-lg">
            DELNEを導入して、
            <br className="md:hidden" />
            生活が変わったご家族のエピソード
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="
                bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 rounded-[2rem] h-full
                relative overflow-hidden group
              "
            >
              <CardContent className="p-8 md:p-10 flex flex-col h-full">
                {/* 引用アイコン */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 fill-current -z-0 group-hover:text-orange-50 transition-colors" />

                {/* 1. ユーザー情報 */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 ring-2 ring-slate-100">
                    <img src={t.avatar || "/placeholder.svg"} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800 leading-none mb-1">{t.name}</div>
                    <div className="text-xs md:text-sm font-bold text-gray-500">{t.age}</div>
                  </div>
                </div>

                {/* 2. キャッチコピー（Quote） */}
                <div className="relative z-10 mb-6 bg-[#e6f0f7]/80 rounded-xl p-5 border-l-4 border-[#072C5A]">
                  <h3 className="text-lg md:text-xl font-black text-[#072C5A] leading-snug whitespace-pre-line">
                    {t.quote}
                  </h3>
                </div>

                {/* 3. 本文 */}
                <p className="text-base font-medium text-gray-600 leading-relaxed flex-grow whitespace-pre-line">
                  {t.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
