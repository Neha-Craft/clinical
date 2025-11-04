import nodemailer from "nodemailer";
export async function POST(req) {
    try {
        const formData = await req.json();
        
        // Extract fields (different forms may use different field names)
        const { name, email, message, firstName, lastName, recipientEmail } = formData;
        
        // Use firstName/lastName if name is not provided
        const fullName = name || (firstName ? `${firstName} ${lastName || ''}`.trim() : '');
        const emailAddress = email;
        const msg = message || formData.reason || formData.letterDetails || formData.testDetails || '';
        
        if (!fullName || !emailAddress || !msg) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing required fields: name, email, and message" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        // Extract additional fields
        const { phone, formType, clinicLocation, ...otherFields } = formData;
        
        const transporter = nodemailer.createTransport({
            host: "mail.smtp2go.com",   
            port: 2525,                
            auth: {
                user: "newcastlemedicalcentre.ie",  
                pass: "qPuSMmO9Djrvgmpg",           
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
        textBody += `Name: ${name}\n`;
        textBody += `Email: ${email}\n`;
        textBody += `Phone: ${phone || "N/A"}\n`;
        
        // Add other fields to text version
        Object.entries(otherFields).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                textBody += `${formattedKey}: ${value}\n`;
            }
        });
        
        textBody += `\nMessage:\n${message}`;
        
        // Use the specific recipient email if provided, otherwise default to the original
        const toEmail = recipientEmail ;
        
        const info = await transporter.sendMail({
            from: '"Tus Go Deireadh" <abhilashs049@gmail.com>',
            to: toEmail,
            subject: `New ${formType || 'Contact'} Form Submission`,
            text: textBody,
            html: htmlBody,
        });
        
        return new Response(
            JSON.stringify({ success: true, messageId: info.messageId }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Email send error:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}