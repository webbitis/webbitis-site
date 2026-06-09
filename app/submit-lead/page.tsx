"use client";

import { useState } from "react";

export default function SubmitLeadPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;

  setLoading(true);
  setSuccess(false);

  const formData = new FormData(e.currentTarget);

  const data = {
    partnerName: formData.get("partnerName"),
    partnerEmail: formData.get("partnerEmail"),
    service: formData.get("service"),
    company: formData.get("company"),
    contact: formData.get("contact"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    website: formData.get("website"),
    country: formData.get("country"),
    status: "New",
    notes: formData.get("notes"),
  };

  try {
    const response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
      
    }
  } catch (error) {
    console.error("Submit lead error:", error);
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-[#071327] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold">
          Submit New Lead
        </h1>

        <p className="mt-4 text-white/70">
          Գրանցեք նոր պոտենցիալ հաճախորդ։
        </p>

       

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

            <input
  name="partnerName"
  placeholder="Partner Name *"
  required
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
/>

<input
  type="email"
  name="partnerEmail"
  placeholder="Partner Email *"
  required
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
/>

<select
  name="service"
  required
  className="w-full rounded-2xl border border-white/10 bg-[#111c31] px-5 py-4 text-white outline-none"
>
  <option value="" className="bg-[#111c31] text-white">
    Select Service *
  </option>
  <option value="Webi AI Assistant" className="bg-[#111c31] text-white">
    Webi AI Assistant
  </option>
  <option value="Business Website" className="bg-[#111c31] text-white">
    Business Website
  </option>
  <option value="Website + AI" className="bg-[#111c31] text-white">
    Website + AI
  </option>
  <option value="Business Automation" className="bg-[#111c31] text-white">
    Business Automation
  </option>
</select>
          <input
            name="company"
            placeholder="Company Name"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            name="contact"
            placeholder="Contact Person"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            name="website"
            placeholder="Website"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            name="country"
            placeholder="Country"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <textarea
            name="notes"
            placeholder="Notes"
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

         <div className="flex flex-col gap-3">
  <button
    disabled={loading}
    className="rounded-full bg-[#E86AC6] px-8 py-4 font-medium transition hover:opacity-90 disabled:opacity-50"
  >
    {loading ? "Submitting..." : "Submit Lead"}
  </button>

  {success && (
    <p className="text-green-400 text-sm">
      Lead successfully submitted and sent to Telegram.
    </p>
  )}
</div>
        </form>
      </div>
    </main>
  );
}