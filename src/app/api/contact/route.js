import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Here you would typically send an email
    // For demonstration purposes, we'll just log the data
    console.log({
      name,
      email,
      subject,
      message,
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your message has been sent. Thank you!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)

    // Return error response
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
