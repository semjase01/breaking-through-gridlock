"use client";

import { useState } from "react";

export default function ContactForm({
  heading = "Connect With Us",
  intro = "Tell us a bit about yourself and what you have in mind, and we'll be in touch.",
  defaultInterest = "",
  formType = "contact",
}) {
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "err"
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.formType = formType;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setErrMsg(err.message);
      setStatus("err");
    }
  }

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: "8px" }}>{heading}</h3>
      <p style={{ color: "var(--muted)", fontSize: "0.97rem", marginBottom: "24px" }}>{intro}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor={`fn-${formType}`}>First Name *</label>
            <input id={`fn-${formType}`} name="firstName" required autoComplete="given-name" />
          </div>
          <div className="field">
            <label htmlFor={`ln-${formType}`}>Last Name *</label>
            <input id={`ln-${formType}`} name="lastName" required autoComplete="family-name" />
          </div>
        </div>
        <div className="field">
          <label htmlFor={`em-${formType}`}>Email *</label>
          <input id={`em-${formType}`} name="email" type="email" required autoComplete="email" />
        </div>
        {formType === "contact" && (
          <div className="field">
            <label htmlFor="interest">I want to…</label>
            <select id="interest" name="interest" defaultValue={defaultInterest}>
              <option value="">Select one</option>
              <option>Book the authors for speaking or consulting</option>
              <option>Use this in my company or organization</option>
              <option>Teach this at my higher education institution</option>
            </select>
          </div>
        )}
        <div className="field">
          <label htmlFor={`msg-${formType}`}>Message</label>
          <textarea id={`msg-${formType}`} name="message" rows={4} />
        </div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        {status === "ok" && (
          <p className="form-status ok">Success! Thanks for connecting with us. We&rsquo;ll be in touch.</p>
        )}
        {status === "err" && <p className="form-status err">{errMsg}</p>}
      </form>
    </div>
  );
}
