'use client'

// ── JSON DATA ──────────────────────────────────────────────
const machineryData = {
  heading: "Our Machinery Inventory",
  categories: [
    {
      id: 1,
      name: "Cutting Machinery",
      machines: [
        { sl: "01", name: "Cutting Machine 10\"", brand: "KM", quantity: 3 },
        { sl: "02", name: "Cutting Machine 8\"", brand: "KM", quantity: 3 },
        { sl: "03", name: "Cutting Machine 8\"", brand: "Open", quantity: 1 },
        { sl: "04", name: "Band Knife Machine", brand: "Open", quantity: 1 },
        { sl: "05", name: "End Cutting Machine", brand: "Eastman", quantity: 2 },
        { sl: "06", name: "Fabric Inspection Machine", brand: "Open", quantity: 1 },
        { sl: "07", name: "Fusing Machine (Medium) HP-650", brand: "Open", quantity: 2 },
        { sl: "08", name: "Drill Machine", brand: "Open", quantity: 2 },
        { sl: "09", name: "Numbering Machine", brand: "Open", quantity: 5 },
      ],
    },
    {
      id: 2,
      name: "Sewing Machinery",
      machines: [
        { sl: "01", name: "Plain Machine", brand: "Juki", quantity: 120 },
        { sl: "02", name: "Overlock Machine", brand: "Pegasus", quantity: 45 },
        { sl: "03", name: "Flat Lock Machine", brand: "Pegasus", quantity: 20 },
        { sl: "04", name: "Feed of the Arm", brand: "Juki", quantity: 8 },
        { sl: "05", name: "Button Hole Machine", brand: "Juki", quantity: 6 },
        { sl: "06", name: "Button Stitch Machine", brand: "Juki", quantity: 6 },
        { sl: "07", name: "Bar Tack Machine", brand: "Juki", quantity: 4 },
        { sl: "08", name: "Kansai Machine", brand: "Kansai", quantity: 4 },
      ],
    },
    {
      id: 3,
      name: "Finishing Machinery",
      machines: [
        { sl: "01", name: "Steam Iron", brand: "Tefal", quantity: 30 },
        { sl: "02", name: "Vacuum Iron Table", brand: "Open", quantity: 15 },
        { sl: "03", name: "Boiler", brand: "Open", quantity: 2 },
        { sl: "04", name: "Pressing Machine", brand: "Open", quantity: 4 },
        { sl: "05", name: "Hanger Clipping Machine", brand: "Open", quantity: 3 },
      ],
    },
    {
      id: 4,
      name: "Embroidery Machinery",
      machines: [
        { sl: "01", name: "Embroidery Machine (15 Head)", brand: "Tajima", quantity: 2 },
        { sl: "02", name: "Embroidery Machine (6 Head)", brand: "Tajima", quantity: 1 },
        { sl: "03", name: "Embroidery Machine (2 Head)", brand: "Open", quantity: 3 },
      ],
    },
  ],
};

// ── TYPES ──────────────────────────────────────────────────
interface Machine {
  sl: string;
  name: string;
  brand: string;
  quantity: number;
}

interface Category {
  id: number;
  name: string;
  machines: Machine[];
}

// ── HELPERS ────────────────────────────────────────────────
const padQty = (n: number) => String(n).padStart(2, "0");

// ── CATEGORY TABLE ─────────────────────────────────────────
const CategoryTable = ({ category }: { category: Category }) => {
  const total = category.machines.reduce((sum, m) => sum + m.quantity, 0);

  return (
    <div className="mb-14 last:mb-0">
      {/* Category heading */}
      <h3 className="text-center text-lg font-medium text-gray-700 mb-5 tracking-wide">
        {category.name}
      </h3>

      {/* Table wrapper */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* Header */}
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700 w-24">SL No.</th>
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700">Machine Name</th>
                <th className="py-3.5 px-6 text-left font-semibold text-gray-700 w-56">Brand</th>
                <th className="py-3.5 px-6 text-right font-semibold text-gray-700 w-36">Quantity</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-100">
              {category.machines.map((machine) => (
                <tr key={machine.sl} className="hover:bg-gray-50/60 transition-colors duration-100">
                  <td className="py-3.5 px-6 text-gray-500 tabular-nums">{machine.sl}</td>
                  <td className="py-3.5 px-6 text-gray-800">{machine.name}</td>
                  <td className="py-3.5 px-6 text-gray-600">{machine.brand}</td>
                  <td className="py-3.5 px-6 text-right text-gray-800 tabular-nums">{padQty(machine.quantity)}</td>
                </tr>
              ))}
            </tbody>

            {/* Footer — total */}
            <tfoot>
              <tr className="border-t border-gray-200 bg-gray-50/80">
                <td colSpan={2} className="py-3.5 px-6" />
                <td className="py-3.5 px-6 text-right font-semibold text-gray-800 pr-8">
                  Total {category.name}
                </td>
                <td className="py-3.5 px-6 text-right font-bold text-gray-900 tabular-nums">
                  {total}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function MachineryInventory() {
  const { heading, categories } = machineryData;

  const grandTotal = categories.reduce(
    (sum, cat) => sum + cat.machines.reduce((s, m) => s + m.quantity, 0),
    0
  );

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">

        {/* Page heading */}
        <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 text-center tracking-tight mb-14">
          {heading}
        </h1>

        {/* Category tables */}
        {categories.map((cat) => (
          <CategoryTable key={cat.id} category={cat} />
        ))}

        {/* Grand total */}
        <div className="mt-10 flex justify-end">
          <div className="flex items-center gap-6 border border-gray-200 rounded-xl px-8 py-4 bg-gray-50">
            <span className="text-sm font-semibold text-gray-700">Grand Total Machines</span>
            <span className="text-2xl font-bold text-gray-900 tabular-nums">{grandTotal}</span>
          </div>
        </div>

      </div>
    </section>
  );
}