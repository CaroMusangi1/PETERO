// src/pages/Contact.jsx

import { useState, useRef } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Carousel from "../components/media/Carousel";
import characters from "../data/characters";
import emailjs from "@emailjs/browser";

// 🔑 REPLACE THESE WITH YOUR EMAILJS KEYS
const SERVICE_ID = "service_3gtox3h";
const TEMPLATE_ID = "template_12jgb4f";
const PUBLIC_KEY = "EzElOBUxQTpHipax-";

// Initial form state
const INITIAL = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

function Contact() {
  const contactCharacter = characters.filter(
    (item) => item.type === "contact"
  );

  const formRef = useRef(null);

  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [touched, setTouched] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Track touched fields
  const handleBlur = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validation errors
  const errors = {
    from_name: !fields.from_name.trim()
      ? "Name is required"
      : "",
    from_email: !isValidEmail(fields.from_email)
      ? "Valid email is required"
      : "",
    subject: !fields.subject.trim()
      ? "Subject is required"
      : "",
    message:
      fields.message.trim().length < 10
        ? "Message must be at least 10 characters"
        : "",
  };

  const isValid = Object.values(errors).every((e) => !e);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      from_name: true,
      from_email: true,
      subject: true,
      message: true,
    });

    if (!isValid) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus("success");
      setFields(INITIAL);
      setTouched({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Header />

      <section className="bg-black text-white py-12 md:py-16 px-4 md:px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
            Contact & Booking
          </h1>

          {/* Character Section */}
          {contactCharacter.map((char, index) => (
            <div key={index} className="mb-10 text-center">

              <div className="max-w-md mx-auto">
                <Carousel images={char.images} />
              </div>

              <h2 className="text-xl md:text-2xl font-bold mt-6">
                {char.name}
              </h2>

              <p className="text-gray-300 mt-2 text-sm md:text-base px-2">
                {char.description}
              </p>

            </div>
          ))}

          {/* Contact Info */}
          <div className="bg-navy p-6 md:p-8 rounded-2xl shadow-xl text-center mb-10">

            <p className="text-base md:text-lg mb-3">
              📞 Phone:{" "}
              <a href="tel:+254728440262" className="text-yellow-400">
                +254 728 440 262
              </a>
            </p>

            <p className="text-base md:text-lg">
              📧 Email:{" "}
              <a
                href="mailto:peteromsanii@gmail.com"
                className="text-yellow-400"
              >
                peteromsanii@gmail.com
              </a>
            </p>

          </div>

          {/* CONTACT FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-navy p-6 md:p-8 rounded-2xl shadow-xl space-y-5"
          >

            {/* Name */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={fields.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-lg text-black"
            />
            {touched.from_name && errors.from_name && (
              <p className="text-red-400 text-sm">
                {errors.from_name}
              </p>
            )}

            {/* Email */}
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={fields.from_email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-lg text-black"
            />
            {touched.from_email && errors.from_email && (
              <p className="text-red-400 text-sm">
                {errors.from_email}
              </p>
            )}

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Event Type (Wedding, MC, Collaboration etc)"
              value={fields.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-lg text-black"
            />
            {touched.subject && errors.subject && (
              <p className="text-red-400 text-sm">
                {errors.subject}
              </p>
            )}

            {/* Message */}
            <textarea
              name="message"
              placeholder="Booking details..."
              rows="4"
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-lg text-black"
            />
            {touched.message && errors.message && (
              <p className="text-red-400 text-sm">
                {errors.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
            >
              {status === "sending"
                ? "⟳ Sending..."
                : "Send Booking Request"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                ✓ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ✗ Something went wrong. Try again later.
              </p>
            )}

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;