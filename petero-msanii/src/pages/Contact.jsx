import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Carousel from "../components/media/Carousel";
import characters from "../data/characters";

function Contact() {

  const contactCharacter = characters.filter(
    (item) => item.type === "contact"
  );

  return (
    <>
      <Header />

      <section className="bg-black text-white py-12 md:py-16 px-4 md:px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
            Contact & Booking
          </h1>

          {/* Character */}
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

          {/* Contact Details */}
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

          {/* Booking Form */}
          <form
            action="https://formsubmit.co/booking@example.com"
            method="POST"
            className="bg-navy p-6 md:p-8 rounded-2xl shadow-xl space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg text-black"
            />

            <input
              type="text"
              name="event"
              placeholder="Event Type (Wedding, MC, Collaboration etc)"
              className="w-full p-3 rounded-lg text-black"
            />

            <textarea
              name="message"
              placeholder="Booking details..."
              rows="4"
              className="w-full p-3 rounded-lg text-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition"
            >
              Send Booking Request
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;