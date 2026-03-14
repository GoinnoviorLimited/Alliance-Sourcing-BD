import { groupProducts } from "@/lib/product"
import Image from "next/image"

type Product = {
  category: string
  subcategory: string
  product: string
  imageURL: string
}

export function ProductShowcase({ products }: { products: Product[] }) {
  const grouped = groupProducts(products)

  return (
    <div className="">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Products
        </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality products across different categories and subcategories.
          </p>
      </div>
      <div className="space-y-12 max-w-7xl mx-auto px-5">
        {Object.entries(grouped).map(([category, subcats]) => (
          <div key={category}>
            <h2 className="text-3xl font-bold mb-6">{category}</h2>

            {Object.entries(subcats).map(([subcat, items]) => (
              <div key={subcat} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{subcat}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className=" rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative w-full h-56">
                        <Image
                          src={item.imageURL}
                          alt={item.product}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <p className="font-medium text-slate-800">
                          {item.product}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}