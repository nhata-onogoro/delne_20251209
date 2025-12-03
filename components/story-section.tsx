export function StorySection() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              こんなお悩み
              <br className="block md:hidden" />
              抱えていませんか？
            </h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p className="text-lg font-semibold">
                  大切なプロジェクト発表の朝
                  <br />
                  父からの着信、「今日は何日何曜日？」
                </p>
                <br />
                <p className="text-lg font-semibold">
                  大切な父だから、優しく答えたい。
                  <br />
                  でも正直、心も体も疲れてしまう。
                </p>
                <br />
                <p className="text-xl font-bold text-gray-800">
                  「父を大切にしたい」気持ちと
                  <br />
                  「自分の仕事も大切にしたい」思い。
                </p>
                <br />
                {/* ▼ スマホのみ改行 */}
                <p className="text-xl font-bold text-[#002c5b]">
                  愛情と現実の狭間で、
                  <br className="block md:hidden" />
                  苦しむあなたを救いたい。
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/new-stressed-businessman.png"
                alt="介護家族の悩み"
                className="w-full max-w-md h-64 sm:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 p-8 bg-[#e6f0f7] rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/tired-night-phone.jpg"
                  alt="夜間の電話対応による疲労"
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-800">
                  深夜2時、母からの着信音
                  <br />
                  「ご飯はまだ？」に、
                  <br className="block md:hidden" />
                  つい強く返してしまう。
                  <br />
                  その後、押し寄せてくる自己嫌悪。
                </p>
                <p className="text-xl font-bold text-gray-800">
                  「母を大切にしたい」気持ちと
                  <br />
                  「生活に関わる睡眠を大切にしたい」思い。
                </p>
                {/* ▼ スマホのみ改行 */}
                <p className="text-xl font-bold text-[#002c5b]">
                  寝不足のあなたに、
                  <br className="block md:hidden" />
                  ひと時の安らぎを届けたい。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
