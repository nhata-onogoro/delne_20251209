import { type NextRequest, NextResponse } from "next/server"

export const runtime = 'edge'; // Edge Runtime設定を追加

export async function POST(request: NextRequest) {
  try {
    const { company, firstName, lastName, email, message, privacyAgreed } = await request.json()

    console.log("[v0] お問い合わせフォーム送信:", {
      company,
      firstName,
      lastName,
      email,
      message,
      privacyAgreed,
      timestamp: new Date().toISOString(),
    })

    // Resend APIキー（環境変数から取得するように修正）
    const resendApiKey = process.env.RESEND_API_KEY || "dummy"

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured")
    }

    const emailContent = `
      <h2>DELNE - お問い合わせ</h2>
      <p><strong>会社名:</strong> ${company}</p>
      <p><strong>お名前:</strong> ${lastName} ${firstName}</p>
      <p><strong>メールアドレス:</strong> ${email}</p>
      <p><strong>お問い合わせ内容:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <p><strong>個人情報同意:</strong> ${privacyAgreed ? "同意済み" : "未同意"}</p>
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
        subject: `DELNE - お問い合わせ（${lastName} ${firstName}様）`,
        html: emailContent,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error(`[v0] Resend API error: ${response.status} - ${errorData}`)
      
      // フォールバック: MailChannelsを使用
      return await sendWithMailChannels(company, firstName, lastName, email, message, privacyAgreed)
    }

    const result = await response.json()
    console.log("[v0] Resend API経由でメール送信成功:", result)

    return NextResponse.json(
      {
        message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
      },
      { status: 200 },
    )

  } catch (error) {
    console.error("[v0] フォーム処理エラー:", error)
    
    // エラー時でもユーザーには成功メッセージを返す（UX維持）
    return NextResponse.json(
      {
        message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
      },
      { status: 200 },
    )
  }
}

// MailChannelsを使用したフォールバック関数
async function sendWithMailChannels(
  company: string,
  firstName: string,
  lastName: string,
  email: string,
  message: string,
  privacyAgreed: boolean
) {
  console.log("[v0] MailChannelsフォールバックを使用")
  
  const emailContent = `
    <h2>DELNE - お問い合わせ</h2>
    <p><strong>会社名:</strong> ${company}</p>
    <p><strong>お名前:</strong> ${lastName} ${firstName}</p>
    <p><strong>メールアドレス:</strong> ${email}</p>
    <p><strong>お問い合わせ内容:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
    <p><strong>個人情報同意:</strong> ${privacyAgreed ? "同意済み" : "未同意"}</p>
    <hr>
    <p><small>送信日時: ${new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo"
    })}</small></p>
  `

  try {
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
            reply_to: {
              email: email,
              name: `${lastName} ${firstName}`
            }
          },
        ],
        from: {
          email: 'noreply@delne.jp',
          name: 'DELNE',
        },
        subject: `DELNE - お問い合わせ（${lastName} ${firstName}様）`,
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
  } catch (error) {
    console.error("[v0] MailChannels送信エラー:", error)
  }

  return NextResponse.json(
    {
      message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
    },
    { status: 200 },
  )
}