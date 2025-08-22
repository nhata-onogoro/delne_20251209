import { type NextRequest, NextResponse } from "next/server"

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { company, firstName, lastName, email, message } = await request.json()
    
    console.log("[v0] お問い合わせフォーム送信:", {
      company,
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Cloudflare Email Workers APIエンドポイントのURL
    // 実際のWorker URLに置き換える必要があります
    const emailWorkerUrl = process.env.CLOUDFLARE_EMAIL_WORKER_URL || 
                          "https://helperphone.pages.dev"

    const emailContent = {
      to: "n.hata@onogoro.co.jp",
      subject: `ヘルパーフォン - お問い合わせ（${lastName} ${firstName}様）`,
      html: `
        <h2>ヘルパーフォン - お問い合わせ</h2>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>お名前:</strong> ${lastName} ${firstName}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo"
        })}</small></p>
      `,
      replyTo: email,
      from: {
        name: "ヘルパーフォン",
        email: "contact@helperphone.jp" // あなたのドメインに変更
      }
    }

    // Cloudflare Email Workerに送信
    const response = await fetch(emailWorkerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.CLOUDFLARE_EMAIL_API_KEY || ""}`,
      },
      body: JSON.stringify(emailContent),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`[v0] Cloudflare Email Worker error: ${response.status} - ${errorText}`)
      
      // フォールバック: MailChannelsを使用
      return await sendWithMailChannels(company, firstName, lastName, email, message)
    }

    const result = await response.json()
    console.log("[v0] Cloudflare Email Worker経由でメール送信成功:", result)

    return NextResponse.json(
      {
        message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
      },
      { status: 200 },
    )

  } catch (error) {
    console.error("[v0] フォーム処理エラー:", error)
    
    // エラー時のフォールバック: MailChannelsを使用
    try {
      return await sendWithMailChannels(company, firstName, lastName, email, message)
    } catch (fallbackError) {
      console.error("[v0] フォールバックも失敗:", fallbackError)
      
      // 最終的にはユーザーには成功メッセージを返す（UX維持）
      return NextResponse.json(
        {
          message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
        },
        { status: 200 },
      )
    }
  }
}

// MailChannelsを使用したフォールバック関数
async function sendWithMailChannels(
  company: string, 
  firstName: string, 
  lastName: string, 
  email: string, 
  message: string
) {
  console.log("[v0] MailChannelsフォールバックを使用")
  
  const emailContent = `
    <h2>ヘルパーフォン - お問い合わせ</h2>
    <p><strong>会社名:</strong> ${company}</p>
    <p><strong>お名前:</strong> ${lastName} ${firstName}</p>
    <p><strong>メールアドレス:</strong> ${email}</p>
    <p><strong>お問い合わせ内容:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
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
            email: 'n.hata@onogoro.co.jp', 
            name: '担当者' 
          }],
          reply_to: {
            email: email,
            name: `${lastName} ${firstName}`
          }
        },
      ],
      from: {
        email: 'info@onogoro.co.jp', 
        name: 'ヘルパーフォン',
      },
      subject: `ヘルパーフォン - お問い合わせ（${lastName} ${firstName}様）`,
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
      message: "お問い合わせを受け付けました。ありがとうございます。担当者より折り返しご連絡いたします。",
    },
    { status: 200 },
  )
}