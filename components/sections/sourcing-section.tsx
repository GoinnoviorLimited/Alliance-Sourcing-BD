import Image from "next/image";

const sourcingItems = [
  {
    title: "Knitwear",
    description: "T-shirts, polos, hoodies, jersey knitwear, and activewear.",
    image: "/garment-rack.jpg",
  },
  {
    title: "Woven",
    description: "Oxford shirts, chinos, blazers, and formal woven garments.",
    image: "/factory-interior.jpg",
  },
  {
    title: "Denim",
    description: "Raw indigo denim, trucker jackets, jeans, and denim shorts.",
    image: "/placeholder.jpg",
  },
  {
    title: "Sweaters",
    description: "Cardigans, pullovers, and seasonal knit sweaters.",
    image: "/placeholder.jpg",
  },
];

export function SourcingSection() {
  return (
    <section className="py-20 pt-64 bg-gray-50/50 -mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wider text-cyan-600 uppercase mb-2">
            PRODUCTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            What we source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Core categories with flexible customization, fabrics, trims, packaging, and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sourcingItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative  w-full p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
              <div className="p-6 pt-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
