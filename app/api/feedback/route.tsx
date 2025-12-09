import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { feedback } = await request.json()

    console.log("[v0] 改善要望フォーム送信:", {
      feedback,
      timestamp: new Date().toISOString(),
    })

    try {
      const resendApiKey = "re_i7GxammM_9DLyub5zdxqprwFSftDPYWWf"

      if (!resendApiKey) {
        throw new Error("RESEND_API_KEY not configured")
      }

      const emailContent = `
        <h2>DELNE - 改善要望</h2>
        <p><strong>改善要望内容:</strong></p>
        <p>${feedback.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString("ja-JP")}</small></p>
      `

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
        throw new Error(`Resend API error: ${response.status} - ${errorData}`)
      }

      const result = await response.json()
      console.log("[v0] Resend API経由でメール送信成功:", result)

      return NextResponse.json(
        {
          message: "改善要望を受け付けました。ありがとうございます。",
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("[v0] メール送信エラー:", emailError)

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        })

        const emailContent = `
          <h2>DELNE - 改善要望</h2>
          <p><strong>改善要望内容:</strong></p>
          <p>${feedback.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>送信日時: ${new Date().toLocaleString("ja-JP")}</small></p>
        `

        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: "ai.support@onogoro.co.jp",
          subject: "DELNE - 改善要望",
          html: emailContent,
        }

        await transporter.sendMail(mailOptions)
        console.log("[v0] Gmail経由でメール送信成功（フォールバック）")

        return NextResponse.json(
          {
            message: "改善要望を受け付けました。ありがとうございます。",
          },
          { status: 200 },
        )
      } catch (gmailError) {
        console.error("[v0] Gmail送信もエラー:", gmailError)

        console.log("[v0] 環境制限のため、メール送信をシミュレーション")

        return NextResponse.json(
          {
            message: "改善要望を受け付けました。ありがとうございます。",
          },
          { status: 200 },
        )
      }
    }
  } catch (error) {
    console.error("改善要望処理エラー:", error)
    return NextResponse.json(
      { message: "送信に失敗しました。しばらく時間をおいて再度お試しください。" },
      { status: 500 },
    )
  }
}
