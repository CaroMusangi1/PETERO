import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Carousel from "../components/media/Carousel";
import characters from "../data/characters";

function Collaborations() {

  const collaborations = characters.filter(
    (item) => item.type === "collaboration"
  );

  return (
    <>
      <Header />

      <section className="bg-black text-white py-16 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-16">
            Collaborations
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-navy p-6 rounded-2xl shadow-xl text-center"
              >
                <Carousel images={collab.images} />

                <h2 className="text-2xl font-bold mt-6">
                  {collab.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {collab.description}
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

export default Collaborations;