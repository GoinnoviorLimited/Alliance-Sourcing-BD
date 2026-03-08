'use client'

// ── JSON DATA ──────────────────────────────────────────────
const machineGalleryData = {
  machines: [
    {
      id: 1,
      label: "Needle Detector Machine",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
      alt: "Needle Detector Machine",
    },
    {
      id: 2,
      label: "Thread Sucking Machine",
      image: "https://i.postimg.cc/904WZ0jr/THREAD-SUCKING-MACHINE.png",
      alt: "Thread Sucking Machine",
    },
    // {
    //   id: 3,
    //   label: "Cutting Machine",
    //   image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&q=80",
    //   alt: "Cutting Machine",
    // },
    // {
    //   id: 4,
    //   label: "Fusing Machine",
    //   image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    //   alt: "Fusing Machine",
    // },
  ],
};

// ── TYPES ──────────────────────────────────────────────────
interface MachineImage {
  id: number;
  label: string;
  image: string;
  alt: string;
}

// ── MACHINE CARD ───────────────────────────────────────────
const MachineCard = ({ machine }: { machine: MachineImage }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 cursor-pointer">
    {/* Image */}
    <img
      src={machine.image}
      alt={machine.alt}
      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    {/* Label */}
    <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
      <span className="text-white text-sm sm:text-base font-semibold tracking-widest uppercase">
        {machine.label}
      </span>
    </div>
  </div>
);

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function MachineGallery() {
  const { machines } = machineGalleryData;

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </div>
    </section>
  );
}