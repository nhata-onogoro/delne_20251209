export function ProblemsSection() {
  const problems = [
    {
      title: "仕事中の頻繁な電話対応",
      description:
        "会議中、商談中、締切前。1日に何度もかかってくる、同じ内容の確認電話。集中が途切れ、同僚や取引先に迷惑をかけているようで、胸が痛む。"
    },
    {
      title: "家族への愛情と疲労感の板挟み",
      description:
        "「大切な家族だから優しくしたい」その思いは変わらない。でも、同じ会話を何度も繰り返すうちに、疲れが押し寄せてくる。愛情と疲労、その狭間で心がすり減っていく。"
    },
    {
      title: "深夜・早朝の電話による睡眠不足",
      description:
        "真夜中や明け方に鳴り響く電話。「ご飯はまだ？」「今日は何曜日？」眠りを妨げられ、次の日もぼんやりした頭で過ごす。心の余裕がどんどん失われていく。"
    },
    {
      title: "介護離職のリスクと不安",
      description:
        "仕事と介護、どちらも全力で取り組みたいのに両立できない。やむなく仕事を手放す人も少なくない。築いてきたキャリアも、家族との時間も、どちらも守りたいのに。"
    },
    {
      title: "仕事のパフォーマンス低下",
      description:
        "頻繁な電話対応で業務が中断される。作業効率は落ち、残業が増え、収入への影響も。介護費用は増えるのに、働く力が奪われていく。"
    },
    {
      title: "増大する介護うつのリスク",
      description:
        "続く疲労、途切れない不安、終わりの見えない日々。気づけば笑顔が消え、何も楽しめなくなる。実際に介護者の3人に1人が、うつ症状を経験しているという現実。"
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              突然、家族が認知症に。こんなお悩みを抱えていませんか？
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
