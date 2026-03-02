"use client"

import { Clock, Heart, Mail, Shield, Bot, MessageCircle, HeartHandshake, Phone } from "lucide-react"
import { type ReactNode } from "react"

export default function SolutionSection() {
  const steps = [
    { id: 0, title: "AI専用番号の付与", desc: "DELNEアカウント作成時にAI専用番号を付与します。" },
    { id: 1, title: "電話発信", desc: "患者様の電話は、必要に応じてAIへつながります。" },
    { id: 2, title: "AIとの会話", desc: "患者様とAIが、発信と応答で会話を続けます。" },
    { id: 3, title: "会話内容の通知", desc: "通話後、要点をメール/SMSでご家族へ通知します。" },
    { id: 4, title: "直接介護", desc: "通知を見て、必要なタイミングで直接介護します。" },
  ]

  const currentStep = 0


  const Badge = ({
    top,
    left,
    color,
    icon,
    children,
    delay = "0s",
  }: {
    top: string
    left: string
    color: "blue" | "slate" | "green" | "yellow" | "orange"
    icon: ReactNode
    children: ReactNode
    delay?: string
  }) => {
    const colorClasses = {
      blue: "bg-blue-100 text-blue-800 border-blue-300",
      slate: "bg-slate-100 text-slate-800 border-slate-300",
      green: "bg-emerald-100 text-emerald-800 border-emerald-300",
      yellow: "bg-amber-100 text-amber-800 border-amber-300",
      orange: "bg-orange-100 text-orange-800 border-orange-300",
    }

    return (
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border shadow-md text-xs md:text-sm font-bold flex items-center gap-1.5 z-20 ${colorClasses[color]}`}
        style={{ top, left, animationDelay: delay }}
      >
        {icon} <span>{children}</span>
      </div>
    )
  }

  const solutions = [
    {
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "簡単操作",
      description: "電話番号そのままで\n電話するだけで利用可能",
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "「あなた」の声で応答",
      description: "介護家族様の声で\n自然な会話を実現",
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "24時間365日対応",
      description: "どんな時でも\n自動応答",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "感情ケア",
      description: "医療機関監修の\n専門知見でやさしく応答",
    },
    {
      icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "会話内容を通知",
      description: "着信だけでなく\n会話内容も確認可能",
    },
  ]

  return (
    <section id="features" className="py-16 px-6 bg-gray-50 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">サービスの流れ・機能紹介</h2>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="mb-20">
          <div className="w-full max-w-6xl mx-auto font-sans">
            <style
              dangerouslySetInnerHTML={{
                __html: `
              `,
              }}
            />

            <div className="mb-6 md:mb-8">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`rounded-xl border px-3 py-2 text-center shadow-sm transition-all duration-300 ${
                      currentStep === index
                        ? "border-blue-400 bg-blue-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <p className={`text-xs md:text-sm font-black ${currentStep === index ? "text-blue-600" : "text-slate-500"}`}>STEP {index + 1}</p>
                    <p className={`text-sm md:text-base font-bold leading-tight ${currentStep === index ? "text-blue-950" : "text-slate-700"}`}>{step.title}</p>
                    <p className={`text-xs md:text-sm mt-1 leading-snug ${currentStep === index ? "text-slate-700" : "text-slate-600"}`}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-visible mb-10">
              <svg viewBox="0 0 1000 562.5" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <marker id="flowArrowTiny" markerWidth="5.5" markerHeight="5.5" refX="4.8" refY="2.75" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
                    <path d="M 0 0 L 5.5 2.75 L 0 5.5 z" fill="context-stroke" />
                  </marker>
                </defs>
                <line x1="200" y1="380" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
                <line x1="800" y1="380" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
                <line x1="200" y1="380" x2="800" y2="380" stroke="#f1f5f9" strokeWidth="8" strokeDasharray="10 10" strokeLinecap="round" />

                <line x1="236" y1="355" x2="468" y2="185" stroke="#10b981" strokeWidth="6" strokeLinecap="round" markerStart="url(#flowArrowTiny)" markerEnd="url(#flowArrowTiny)" />
                <line x1="532" y1="185" x2="764" y2="355" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" markerEnd="url(#flowArrowTiny)" />
                <line x1="760" y1="380" x2="240" y2="380" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" markerEnd="url(#flowArrowTiny)" />
              </svg>

              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-[28.4%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

                  <div
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-950 flex items-center justify-center shadow-xl border-4 border-blue-900"
                  >
                    <Bot size={48} className="text-white" />
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-extrabold text-blue-950 text-base md:text-xl tracking-wide flex items-center gap-1.5">
                      
                      <span className="leading-tight text-center">AI電話（DELNE）</span>
                    </span>
                  </div>
                </div>

                <div className="absolute top-[67.5%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div
                    className="relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg border-4 overflow-hidden border-[#a3cbe0] bg-[#c3deeb]"
                  >
                    <img src="https://delne-20251209-4fe5.vercel.app/dementia_patient.png" alt="認知症患者" className="w-[82%] h-[82%] object-contain" />
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-bold text-slate-800 text-base md:text-lg">認知症患者</span>
                  </div>
                </div>

                <div className="absolute top-[67.5%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-rose-400"
                  >
                    <img src="https://delne-20251209-4fe5.vercel.app/care_family.png" alt="介護家族" className="w-[82%] h-[82%] object-contain" />
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-bold text-slate-800 text-base md:text-lg">介護家族</span>
                  </div>
                </div>

                <Badge top="42%" left="36%" color="green" icon={<MessageCircle size={16} />}>
                  発信
                </Badge>
                <Badge top="54%" left="40%" color="green" icon={<MessageCircle size={16} />}>
                  応答
                </Badge>
                <Badge top="54%" left="65%" color="yellow" icon={<Mail size={16} />}>
                  メール/SMS通知
                </Badge>
                <Badge top="74%" left="50%" color="orange" icon={<HeartHandshake size={18} />}>
                  適切なタイミングで直接介護
                </Badge>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 justify-center justify-items-center">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="w-full sm:w-full sm:max-w-none mx-auto aspect-square bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-[#FDC702] px-3 py-4 flex flex-col items-center justify-center text-center group">
                <div className="mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-800 mb-1 whitespace-pre-line leading-tight">{item.title}</h3>
                <p className="text-sm sm:text-base font-bold leading-relaxed text-gray-600 whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
