import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Carousel from "../components/media/Carousel";
import characters from "../data/characters";

function RateCard() {

  const ratecards = characters.filter(
    (item) => item.type === "ratecard"
  );

  return (
    <>
      <Header />

      <section className="bg-black text-white py-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-16">
            Rate Card
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {ratecards.map((card, index) => (
              <div
                key={index}
                className="bg-navy p-6 rounded-2xl shadow-xl text-center"
              >
                <Carousel images={card.images} />

                <h2 className="text-2xl font-bold mt-6">
                  {card.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default RateCard;