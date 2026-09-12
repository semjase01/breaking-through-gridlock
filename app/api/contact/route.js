import { Resend } from "resend";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { firstName, lastName, email, interest, message, formType } = body;

  if (!firstName || !lastName || !email) {
    return Response.json(
      { error: "Please fill in your name and email." },
      { status: 400 }
    );
  }
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      {
        error:
          "The contact form isn't configured yet. Please email us directly instead.",
      },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "gabriel.grant@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Breaking Through Gridlock <onboarding@resend.dev>";

  const subject =
    formType === "chapter"
      ? `Free chapter request from ${firstName} ${lastName}`
      : `Website inquiry from ${firstName} ${lastName}`;

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    interest ? `Interest: ${interest}` : null,
    message ? `Message:\n${message}` : null,
    `Form: ${formType || "contact"}`,
  ].filter(Boolean);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text: lines.join("\n\n"),
    });
    if (error) throw new Error(error.message);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "We couldn't send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
