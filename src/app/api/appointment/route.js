import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const date = formData.get("date")
    const department = formData.get("department")
    const doctor = formData.get("doctor")
    const message = formData.get("message")

    // Here you would typically send an email or save to database
    // For demonstration purposes, we'll just log the data
    console.log({
      name,
      email,
      phone,
      date,
      department,
      doctor,
      message,
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your appointment request has been sent successfully. Thank you!",
    })
  } catch (error) {
    console.error("Error processing appointment form:", error)

    // Return error response
    return NextResponse.json(
      { success: false, message: "Failed to book appointment. Please try again." },
      { status: 500 },
    )
  }
}
