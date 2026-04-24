function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export async function POST({ request }) {
  try {
    const { name, company, email, message } = await request.json();

    if (!name || !email || !message) {
      return json(
        { error: "Name, email, and a short description of the work are required." },
        400
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Site <onboarding@resend.dev>";

    if (!resendApiKey || !to) {
      return json(
        {
          error:
            "This form is ready, but email delivery is not configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL to enable it.",
        },
        503
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          "",
          "What they need help with:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return json(
        {
          error: `The email provider rejected the request: ${errorText}`,
        },
        502
      );
    }

    return json({
      success: true,
      message: "Thanks. Your message has been sent.",
    });
  } catch (error) {
    return json(
      {
        error: "The contact request could not be processed.",
      },
      500
    );
  }
}
