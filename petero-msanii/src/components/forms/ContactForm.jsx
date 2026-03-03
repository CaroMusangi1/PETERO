import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => setStatus("SUCCESS"))
      .catch(() => setStatus("ERROR"));
  };

  return (
    <form
      onSubmit={sendEmail}
      className="max-w-xl mx-auto bg-navy p-8 rounded-2xl space-y-6"
    >
      <input name="name" placeholder="Name" required className="w-full p-3 rounded bg-midnight border border-gray-700 focus:border-gold" />
      <input name="email" placeholder="Email" required className="w-full p-3 rounded bg-midnight border border-gray-700 focus:border-gold" />
      <textarea name="message" placeholder="Message" required rows="5" className="w-full p-3 rounded bg-midnight border border-gray-700 focus:border-gold"></textarea>

      <button className="w-full bg-gold text-black py-3 rounded-lg">
        Send Booking Request
      </button>

      {status === "SUCCESS" && <p className="text-green-400">Message Sent!</p>}
    </form>
  );
}

export default ContactForm;