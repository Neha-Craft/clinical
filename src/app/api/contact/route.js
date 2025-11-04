import nodemailer from "nodemailer";
export async function POST(req) {
    try {
        const formData = await req.json();
        
        // Extract fields (different forms may use different field names)
        const { name, email, message, firstName, lastName } = formData;
        
        // Use firstName/lastName if name is not provided
        const fullName = name || (firstName ? `${firstName} ${lastName || ''}`.trim() : '');
        const emailAddress = email;
        const msg = message || formData.reason || formData.letterDetails || formData.testDetails || '';
        
        if (!fullName || !emailAddress || !msg) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing required fields: name, email, and message", message: "Please fill in all required fields." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        // Extract additional fields
        const { phone, formType, clinicLocation, ...otherFields } = formData;
        
        // :white_tick: Use your real SMTP credentials here
        const transporter = nodemailer.createTransport({
            host: "mail.smtp2go.com",   // your SMTP host
            port: 2525,                 // port (25, 2525, 8025, or 465 for SSL)
            auth: {
                user: "newcastlemedicalcentre.ie",  // your SMTP username
                pass: "qPuSMmO9Djrvgmpg",           // your SMTP password
            },
        });
        
        // Build dynamic HTML body with all form fields
        let htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
      <p><strong>Clinic Location:</strong> ${clinicLocation || 'Not specified'}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${emailAddress}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>`;
      
        // Add other fields dynamically
        Object.entries(otherFields).forEach(([key, value]) => {
            // Skip null/undefined values
            if (value !== null && value !== undefined && value !== '') {
                // Format key to be more readable
                const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                htmlBody += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
            }
        });
        
        // Add message at the end
        htmlBody += `
      <p><strong>Message:</strong></p>
      <p>${msg}</p>`;
        
        // Create text version as well
        let textBody = `Form Type: ${formType || 'Contact Form'}\n`;
        textBody += `Clinic Location: ${clinicLocation || 'Not specified'}\n`;
        textBody += `Name: ${fullName}\n`;
        textBody += `Email: ${emailAddress}\n`;
        textBody += `Phone: ${phone || "N/A"}\n`;
        
        // Add other fields to text version
        Object.entries(otherFields).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                textBody += `${formattedKey}: ${value}\n`;
            }
        });
        
        textBody += `\nMessage:\n${msg}`;
        
        // Determine recipient email based on clinic location
        let recipientEmail = "abhilashs049@gmail.com"; // default
        
        if (clinicLocation) {
            if (clinicLocation.includes('Village Medical Centre') || clinicLocation.includes('Ballinhassig')) {
                recipientEmail = "craftandcode01@gmail.com";
            } else if (clinicLocation.includes('Kilmoney Clinic') || clinicLocation.includes('Carrigaline')) {
                recipientEmail = "kilmoney.clinic@tvmc.ie";
            } else if (clinicLocation.includes('Greenwood Surgery') || clinicLocation.includes('Togher')) {
                recipientEmail = "greenwood.surgery@tvmc.ie";
            }
        }
        
        const info = await transporter.sendMail({
            from: '"TusGoDeireadh" <Tus Go Deireadh>',
            to: recipientEmail,
            subject: `New ${formType || 'Contact'} Form Submission from ${fullName}`,
            text: textBody,
            html: htmlBody,
        });
        
        return new Response(
            JSON.stringify({ success: true, messageId: info.messageId, message: 'Thank you for your request. We will contact you soon.' }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Email send error:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message, message: "There was an error processing your request. Please try again." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
