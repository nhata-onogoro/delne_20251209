import { Building2, House, UserRound } from "lucide-react"

const useCases = [
  {
    badge: "直接介護されている方",
    badgeClass: "bg-sky-500 text-white",
    Icon: UserRound,
    heading: "鳴りやまない親からの電話。",
    headingLine2: "優しく話せない自分に",
    headingLine3: "疲れていませんか？",
    supportTitle: "本当はもっと、穏やかに話したい。",
    supportText:
      "優しくできない今の自分が苦しいのは、それだけあなたが親御様を大切に想っている証拠です。DELNEが、あなたの心と時間を守ります。",
    supportClass: "bg-slate-50 border-[#0e2a47]",
    imageWrapClass: "md:order-1",
    imageAccentClass:
      "-top-4 -left-4 bg-blue-50 group-hover:-translate-x-2 group-hover:-translate-y-2",
    image: "/tired-night-phone.jpg",
    alt: "深夜にスマホを見て寝不足で疲れている様子",
  },
  {
    badge: "経営者・人事担当者様",
    badgeClass: "bg-orange-500 text-white",
    Icon: Building2,
    heading: "優秀な社員が、",
    headingLine2: "親の介護を理由に",
    headingLine3: "仕事を中断・退職してしまう。",
    supportTitle: "企業としてのサポートが、社員の安心に繋がる。",
    supportText:
      "福利厚生としてDELNEを導入することで、従業員の介護負担を大幅に軽減。大切な社員が介護離職することなく、安心して仕事に集中できる環境を提供できます。",
    supportClass: "bg-orange-50/60 border-orange-500",
    imageWrapClass: "md:order-2",
    imageAccentClass:
      "-top-4 -right-4 bg-orange-50 group-hover:translate-x-2 group-hover:-translate-y-2",
    image: "/new-stressed-businessman.png",
    alt: "仕事中にストレスや寝不足で頭を抱える様子",
  },
  {
    badge: "遠方にお住いで直接介護が難しい方",
    badgeClass: "bg-green-600 text-white",
    Icon: House,
    heading: "遠方にいて手伝えない。",
    headingLine2: "地元で頑張る兄弟に",
    headingLine3: "申し訳なさを感じている。",
    supportTitle: "せめて、介護負担軽減のサービスでお金で支援したい。",
    supportText:
      "物理的な距離があって直接介護を手伝えなくても、サービスの費用を負担するという形で、地元で介護してくれる兄弟を助けることができます。ご家族みんなの介護負担を支援できます。",
    supportClass: "bg-green-50/60 border-green-600",
    imageWrapClass: "md:order-1",
    imageAccentClass:
      "-top-4 -left-4 bg-green-50 group-hover:-translate-x-2 group-hover:-translate-y-2",
    image: "/customer3.png",
    alt: "遠方から家族を想い、スマホを見つめる様子",
  },
]

export function StorySection() {
  return (
    <section id="story" className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center md:mb-28">
          <h2 className="mb-6 text-3xl font-bold tracking-wide text-[#0e2a47] md:text-4xl">
            こんな方に使っていただきたい
          </h2>
          <div className="mx-auto h-1 w-16 bg-amber-500" />
        </div>

        <div className="space-y-20 md:space-y-32">
          {useCases.map((useCase) => {
            const Icon = useCase.Icon

            return (
              <article
                key={useCase.heading}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={`relative group ${useCase.imageWrapClass}`}>
                  <div
                    className={`absolute z-0 h-full w-full rounded-2xl transition-transform ${useCase.imageAccentClass}`}
                  />
                  <img
                    src={useCase.image}
                    alt={useCase.alt}
                    className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-5">
                    <span
                      className={`inline-flex items-center rounded-full px-5 py-2.5 text-base font-bold tracking-wide shadow-md md:text-lg ${useCase.badgeClass}`}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {useCase.badge}
                    </span>
                  </div>

                  <h3 className="mb-5 text-2xl font-bold leading-snug text-[#0e2a47] md:text-3xl">
                    {useCase.heading}
                    <br />
                    {useCase.headingLine2}
                    <br />
                    {useCase.headingLine3}
                  </h3>

                  <div className={`rounded-r-lg border-l-4 p-5 ${useCase.supportClass}`}>
                    <p className="mb-2 font-bold text-[#0e2a47]">{useCase.supportTitle}</p>
                    <p className="text-xs text-gray-600 md:text-sm">{useCase.supportText}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
