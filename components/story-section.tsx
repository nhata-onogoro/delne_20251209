export function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* 背景装飾：温かみのあるオレンジと誠実なブルーの淡い光 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- ヘッダー部分 --- */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-[#072C5A] leading-tight">
            こんなお悩みを抱えていませんか？
          </h2>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
        </div>

        {/* --- エピソード1：仕事中の葛藤 --- */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32">
          {/* 画像エリア */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-[#072C5A] rounded-2xl rotate-3 opacity-5 group-hover:rotate-6 transition-transform duration-500"></div>
            <img
              src="/new-stressed-businessman.png"
              alt="仕事中、親からの電話に出られず心を痛める男性"
              className="relative w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-xl z-10"
            />
          </div>

          {/* テキストエリア */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              会議室に響く振動音。
              <br />
              <span className="text-[#072C5A]">「ごめんね」と心で呟き</span>
              <br />
              スマホを裏返す毎日。
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                目の前には絶対に外せない仕事。
                小さな画面の向こうにいる父を想いながら、
                私は今日も、音のない着信を見送ることしかできない。
              </p>
            </div>

            {/* 共感ボックス */}
            <div className="bg-slate-50 border-l-4 border-slate-400 p-4 md:p-6 rounded-r-lg">
              <p className="font-bold text-slate-700 text-lg md:text-xl">
                父の不安に寄り添いたい私と、社会人としての私。
              </p>
              <p className="text-slate-600 text-sm md:text-base mt-2">
                どちらも大切だからこそ、その狭間で心が揺れ続ける。
              </p>
            </div>
          </div>
        </div>

        {/* --- エピソード2：深夜の自責 --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          {/* 画像エリア */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-orange-500 rounded-2xl -rotate-3 opacity-5 group-hover:-rotate-6 transition-transform duration-500"></div>
            <img
              src="/tired-night-phone.jpg"
              alt="深夜の介護で疲れているが、親を想う女性"
              className="relative w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-xl z-10"
            />
          </div>

          {/* テキストエリア */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              深夜2時、母の声。
              <br />
              <span className="text-[#072C5A]">優しくありたいのに</span>
              <br />
              言葉が鋭くなってしまう。
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                積み重なる寝不足が、私の心から余裕を奪っていく。
                「もう寝てよ！」と強く返した後の静寂が、
                何よりも辛く、自分を責める時間になる。
              </p>
            </div>

            {/* 共感ボックス */}
            <div className="bg-[#eef2f6] border-l-4 border-[#072C5A] p-4 md:p-6 rounded-r-lg">
              <p className="font-bold text-[#072C5A] text-lg md:text-xl">
                本当はもっと、笑って話したい。
              </p>
              <p className="text-[#072C5A] text-sm md:text-base mt-2">
                優しくできない今の自分が苦しいのは、
                それだけあなたが、お母様を大切に想っている証拠です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
