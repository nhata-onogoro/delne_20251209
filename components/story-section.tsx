export function StorySection() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">介護と仕事の両立を支援するAI電話サービス</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p>
                  朝7時、母からの電話で目が覚める。
                  <br />
                  「今日は何曜日だっけ？」
                  <br />
                  昨日も、一昨日も、同じ質問。
                </p>
                <br />
                <p>
                  大切な母だから、優しく答えたい。
                  <br />
                  でも正直、心も体も疲れてしまう。
                  <br />
                  出なければ、母が不安を感じてしまう。
                  <br />
                  出続けると、生活や、仕事、睡眠に、生活に支障が出る。
                </p>
                <br />
                <p className="text-lg font-semibold text-gray-800">
                  「お母さんを大切にしたい」という気持ちと、
                  <br />
                  「自分の人生も大切にしたい」という思い。
                </p>
                <br />
                <p>愛情と現実の狭間で、苦しんでいるあなたを救いたい。</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/stressed-working-woman.jpg"
                alt="介護家族の悩み"
                className="w-full max-w-md h-64 sm:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 p-8 bg-orange-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/tired-night-phone.jpg"
                  alt="夜間の電話対応による疲労"
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-800">
                  深夜2時、母からの着信音。
                  <br />
                  「ご飯はまだ？」と聞いてくる。
                  <br />
                  「もう食べたでしょう」と答えたいのに、
                  <br />
                  つい声を荒げてしまう。
                  <br />
                  その後、押し寄せてくる自己嫌悪。
                  <br />
                  「私は冷たい人間なのだろうか…」
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  ヘルパーフォンが、24時間365日、
                  <br />
                  あなたの代わりに、大切なご家族とお話します。
                </p>
                <p className="text-gray-800">
                  仕事中や深夜でも、ヘルパーフォンが、
                  <br />
                  あなたの声で「大丈夫だよ」と答えてくれる。
                  <br />
                  家族への愛情はそのままに、
                  <br />
                  あなたの時間と心の余裕を取り戻す。
                  <br />
                  それが、私たちの願いです。
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  介護と自分の人生、どちらも諦めない。
                  <br />
                  新しい介護のカタチが、ここにあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
