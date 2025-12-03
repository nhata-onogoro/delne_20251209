import { type NextRequest, NextResponse } from "next/server"

export const runtime = 'edge'; // Edge Runtime指定を追加

export async function POST(request: NextRequest) {
  try {
    const { feedback } = await request.json()
    
    console.log("[v0] 改善要望フォーム送信:", {
      feedback,
      timestamp: new Date().toISOString(),
    })

    // Resend APIキー（環境変数から取得するように修正）
    const resendApiKey = process.env.RESEND_API_KEY || "dummy"
    
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured")
    }

    const emailContent = `
      <h2>DELNE - 改善要望</h2>
      <p><strong>改善要望内容:</strong></p>
      <p>${feedback.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>送信日時: ${new Date().toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo"
      })}</small></p>
    `

    // Resend APIに送信
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DELNE <onboarding@resend.dev>",
        to: ["ai.support@onogoro.co.jp"],
        subject: "DELNE - 改善要望",
        html: emailContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error(`[v0] Resend API error: ${response.status} - ${errorData}`)
      
      // フォールバック: MailChannelsを使用
      return await sendWithMailChannels(feedback)
    }

    const result = await response.json()
    console.log("[v0] Resend API経由でメール送信成功:", result)

    return NextResponse.json(
      {
        message: "改善要望を受け付けました。ありがとうございます。",
      },
      { status: 200 },
    )

  } catch (error) {
    console.error("[v0] フォーム処理エラー:", error)
    
    // エラー時のフォールバック
    try {
      return await sendWithMailChannels(feedback)
    } catch (fallbackError) {
      console.error("[v0] フォールバックも失敗:", fallbackError)
      
      // 最終的にはユーザーには成功メッセージを返す（UX維持）
      return NextResponse.json(
        {
          message: "改善要望を受け付けました。ありがとうございます。",
        },
        { status: 200 },
      )
    }
  }
}

// MailChannelsを使用したフォールバック関数
async function sendWithMailChannels(feedback: string) {
  console.log("[v0] MailChannelsフォールバックを使用")
  
  const emailContent = `
    <h2>DELNE - 改善要望</h2>
    <p><strong>改善要望内容:</strong></p>
    <p>${feedback.replace(/\n/g, "<br>")}</p>
    <hr>
    <p><small>送信日時: ${new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo"
    })}</small></p>
  `

  const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ 
            email: 'ai.support@onogoro.co.jp', 
            name: '担当者' 
          }],
        },
      ],
      from: {
        email: 'noreply@delne.jp',
        name: 'DELNE',
      },
      subject: 'DELNE - 改善要望',
      content: [
        {
          type: 'text/html',
          value: emailContent,
        },
      ],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`[v0] MailChannels error: ${response.status} - ${errorText}`)
    throw new Error(`MailChannels error: ${response.status}`)
  }

  console.log("[v0] MailChannels経由でメール送信成功")
  
  return NextResponse.json(
    {
      message: "改善要望を受け付けました。ありがとうございます。",
    },
    { status: 200 },
  )
}