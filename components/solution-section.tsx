"use client"

import { Clock, Heart, Mail, Phone, Shield, Bot, PhoneForwarded, MessageCircle, HeartHandshake, Smartphone } from "lucide-react"
import { type ReactNode, useEffect, useState } from "react"

export default function SolutionSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { id: 0, title: "050番号の付与", desc: "DELNEに契約すると、AI専用の「050」から始まる電話番号が付与されます。" },
    { id: 1, title: "電話発信・転送", desc: "認知症患者様が直接050番号にかけるか、ご家族への電話がAIへ転送されます。" },
    { id: 2, title: "AIとの会話", desc: "認知症患者様とAI（DELNE）が自然な対話・応答を行います。" },
    { id: 3, title: "会話内容の通知", desc: "通話終了後、ご家族のメールやSMSに会話内容が通知されます。" },
    { id: 4, title: "直接介護", desc: "通知内容を確認し、ご家族のタイミングで適切な直接介護を行います。" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [steps.length])


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
        className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border shadow-md text-xs md:text-sm font-bold flex items-center gap-1.5 z-20 transition-all duration-300 animate-fade-in-up ${colorClasses[color]}`}
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
                @keyframes flow-forward {
                  from { stroke-dashoffset: 30; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes flow-backward {
                  from { stroke-dashoffset: 0; }
                  to { stroke-dashoffset: 30; }
                }
                .flow-line { stroke-dasharray: 10 10; animation: flow-forward 0.5s linear infinite; }
                .flow-line-reverse { stroke-dasharray: 10 10; animation: flow-backward 0.5s linear infinite; }
                @keyframes fade-in-up {
                  0% { opacity: 0; transform: translate(-50%, 10px); }
                  100% { opacity: 1; transform: translate(-50%, -50%); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                @keyframes fade-in-card {
                  0% { opacity: 0; transform: translateY(10px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-card { animation: fade-in-card 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                @keyframes pulse-ring {
                  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6); transform: scale(1); }
                  50% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); transform: scale(1.05); }
                  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); transform: scale(1); }
                }
                .ring-active-blue { animation: pulse-ring 2s infinite cubic-bezier(0.66, 0, 0, 1); border-color: #2563eb; }
                @keyframes pulse-ring-green {
                  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
                  50% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                }
                .ring-active-green { animation: pulse-ring-green 2s infinite cubic-bezier(0.66, 0, 0, 1); border-color: #10b981; }
                @keyframes pulse-ring-rose {
                  0% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.6); }
                  50% { box-shadow: 0 0 0 15px rgba(244, 63, 94, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
                }
                .ring-active-rose { animation: pulse-ring-rose 2s infinite cubic-bezier(0.66, 0, 0, 1); border-color: #f43f5e; }
                @keyframes progress { from { width: 0%; } to { width: 100%; } }
              `,
              }}
            />

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-visible mb-10">
              <div key={currentStep} className="absolute top-4 left-4 md:top-6 md:left-6 z-30 max-w-[75%] md:max-w-md rounded-xl border border-blue-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-md animate-fade-in-card">
                <p className="text-[11px] md:text-xs font-black text-blue-600 mb-1">STEP {currentStep + 1}</p>
                <p className="text-sm md:text-base font-bold text-blue-950 leading-snug">{steps[currentStep].title}</p>
                <p className="text-xs md:text-sm text-slate-700 mt-1.5 leading-relaxed">{steps[currentStep].desc}</p>
              </div>
              <svg viewBox="0 0 1000 562.5" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" />
                  </marker>
                </defs>
                <line x1="200" y1="380" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
                <line x1="800" y1="380" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
                <line x1="200" y1="380" x2="800" y2="380" stroke="#f1f5f9" strokeWidth="8" strokeDasharray="10 10" strokeLinecap="round" />
                <path d="M 800 380 L 800 480 L 200 480 L 200 380" fill="none" stroke="#f1f5f9" strokeWidth="12" strokeLinejoin="round" />

                {currentStep === 1 && (
                  <>
                    <line x1="200" y1="380" x2="500" y2="160" stroke="#3b82f6" strokeWidth="6" className="flow-line" strokeLinecap="round" markerEnd="url(#flowArrow)" />
                    <line x1="200" y1="380" x2="800" y2="380" stroke="#94a3b8" strokeWidth="4" className="flow-line" strokeLinecap="round" markerEnd="url(#flowArrow)" />
                    <line
                      x1="800"
                      y1="380"
                      x2="500"
                      y2="160"
                      stroke="#94a3b8"
                      strokeWidth="4"
                      className="flow-line-reverse"
                      strokeLinecap="round"
                      markerEnd="url(#flowArrow)"
                    />
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <line x1="200" y1="380" x2="500" y2="160" stroke="#10b981" strokeWidth="8" className="flow-line" strokeLinecap="round" markerEnd="url(#flowArrow)" />
                    <line x1="500" y1="160" x2="200" y2="380" stroke="#34d399" strokeWidth="4" className="flow-line" strokeLinecap="round" markerEnd="url(#flowArrow)" />
                  </>
                )}

                {currentStep === 3 && <line x1="500" y1="160" x2="800" y2="380" stroke="#f59e0b" strokeWidth="6" className="flow-line" strokeLinecap="round" markerEnd="url(#flowArrow)" />}

                {currentStep === 4 && (
                  <path d="M 800 380 L 800 480 L 200 480 L 200 380" fill="none" stroke="#f97316" strokeWidth="8" className="flow-line" strokeLinejoin="round" markerEnd="url(#flowArrow)" />
                )}
              </svg>

              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-[28.4%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className={`absolute -top-12 transition-all duration-500 whitespace-nowrap ${currentStep === 0 ? "scale-110 opacity-100 translate-y-0" : "scale-90 opacity-80 -translate-y-2"}`}>
                    <div
                      className={`px-4 py-1.5 rounded-full font-bold shadow-md flex items-center gap-2 text-sm md:text-base border-2 ${
                        currentStep === 0 ? "bg-blue-600 text-white border-blue-400" : "bg-white text-blue-900 border-blue-200"
                      }`}
                    >
                      <Phone size={16} className={currentStep === 0 ? "animate-pulse" : ""} />
                      050-XXXX-XXXX
                    </div>
                  </div>

                  <div
                    className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-950 flex items-center justify-center shadow-xl border-4 transition-all duration-300 ${
                      currentStep === 2 ? "ring-active-blue border-blue-400" : "border-blue-900"
                    }`}
                  >
                    <Bot size={48} className={`text-white transition-transform duration-300 ${currentStep === 2 ? "scale-110" : ""}`} />
                    {currentStep === 2 && (
                      <div className="absolute -right-4 -top-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <MessageCircle size={20} />
                      </div>
                    )}
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-extrabold text-blue-950 md:text-lg tracking-wide">AI (DELNE)</span>
                  </div>
                </div>

                <div className="absolute top-[67.5%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div
                    className={`relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg border-4 overflow-hidden transition-all duration-300 ${
                      currentStep === 1 || currentStep === 2 ? "ring-active-green border-[#a3cbe0] bg-[#c3deeb]" : "border-transparent bg-[#c3deeb]"
                    }`}
                  >
                    <img src="https://delne-20251209-4fe5.vercel.app/dementia_patient.png" alt="認知症患者" className={`w-[82%] h-[82%] object-contain ${currentStep === 1 ? "animate-pulse" : ""}`} />
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-bold text-slate-800 md:text-base">認知症患者</span>
                  </div>
                </div>

                <div className="absolute top-[67.5%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div
                    className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-rose-50 flex items-center justify-center shadow-lg border-4 transition-all duration-300 ${
                      currentStep === 3 || currentStep === 4 ? "ring-active-rose border-rose-400 bg-white" : "border-rose-200"
                    }`}
                  >
                    <img src="https://delne-20251209-4fe5.vercel.app/care_family.png" alt="介護家族" className={`w-[82%] h-[82%] object-contain ${currentStep === 4 ? "animate-bounce" : ""}`} />
                    {currentStep === 3 && (
                      <div className="absolute -right-3 -top-3 bg-amber-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <Mail size={18} />
                      </div>
                    )}
                  </div>
                  <div className="mt-3 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-slate-100">
                    <span className="font-bold text-slate-800 md:text-base">介護家族</span>
                  </div>
                </div>

                {currentStep === 1 && (
                  <>
                    <Badge top="45%" left="35%" color="blue" icon={<Phone size={16} className="animate-pulse" />}>
                      直接電話
                    </Badge>
                    <Badge top="62%" left="50%" color="slate" icon={<Smartphone size={16} />}>
                      家族へ電話
                    </Badge>
                    <Badge top="45%" left="65%" color="slate" icon={<PhoneForwarded size={16} />} delay="0.2s">
                      AIへ転送
                    </Badge>
                  </>
                )}

                {currentStep === 2 && (
                  <Badge top="45%" left="35%" color="green" icon={<MessageCircle size={16} />}>
                    対話・応答
                  </Badge>
                )}

                {currentStep === 3 && (
                  <Badge top="45%" left="65%" color="yellow" icon={<Mail size={16} />}>
                    メール/SMS通知
                  </Badge>
                )}

                {currentStep === 4 && (
                  <Badge top="85%" left="50%" color="orange" icon={<HeartHandshake size={18} />}>
                    適切なタイミングで直接介護
                  </Badge>
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 justify-center justify-items-center">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="w-full sm:w-full sm:max-w-none mx-auto aspect-square bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-[#FDC702] px-3 py-4 flex flex-col items-center justify-center text-center group">
                <div className="mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-800 mb-1 whitespace-pre-line leading-tight">{item.title}</h3>
                <p className="text-[11px] sm:text-xs font-bold leading-relaxed text-gray-600 whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
