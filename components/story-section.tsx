const useCases = [
  {
    title: "認知症の親からの頻繁な電話対応で、心身ともに負担を感じている方",
    description:
      "仕事中や就寝中など、1日に数十件の電話がかかってきてしまい、肉体的にも精神的にも限界を感じている方にこそ、使ってほしいサービスです。",
    image: "/tired-night-phone.jpg",
    alt: "頻繁な電話対応に疲れて悩んでいる方のイメージ",
  },
  {
    title: "介護離職や業務中断を防ぎ、従業員の定着を高めたい会社経営者の方",
    description:
      "社員が介護によって仕事を中断したり退職したりする前に、福利厚生として導入することで介護負担を軽減し、仕事に集中できる環境づくりを支援します。",
    image: "/new-stressed-businessman.png",
    alt: "従業員の介護負担軽減を考える会社経営者のイメージ",
  },
  {
    title: "遠方に住んでいて直接介護できない分、兄弟姉妹の負担を減らしたい方",
    description:
      "地元で介護を担ってくれている兄弟姉妹に任せきりで心苦しい。だからこそ、サービス契約という形で支え、金銭面からでも介護負担を軽くしてあげたい方におすすめです。",
    image: "/customer3.png",
    alt: "遠方から家族の介護を支えたい方のイメージ",
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#072C5A] leading-tight">
            こんな人に使ってほしい
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            デルネは、介護と仕事・生活の両立に悩むご家族や、従業員を支えたい企業に向けたサービスです。
          </p>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white/90 rounded-2xl shadow-lg border border-slate-100 p-5 md:p-8"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={useCase.image}
                  alt={useCase.alt}
                  className="w-full h-[240px] md:h-[300px] object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4">
                <p className="inline-flex items-center rounded-full bg-[#EEF3F9] text-[#072C5A] text-sm font-bold px-3 py-1">
                  パターン{index + 1}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{useCase.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
