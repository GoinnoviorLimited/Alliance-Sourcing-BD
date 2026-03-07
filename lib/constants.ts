import { icons } from "lucide-react";

export const SITE_NAME = "Alliance Sourcing BD";
export const SITE_DESCRIPTION =
  "Professional buying & sourcing services for apparel, garments, and industrial manufacturing";

export const CONTACT_INFO = {
  email: "info@alliancesourcingbd.com",
  phone: "+880 1700 000000",
  address: "Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh",
  mapUrl: "https://maps.google.com/?q=Dhaka+Bangladesh",
};

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Buying House", href: "/buying-house" },
  { label: "Factory & Machinery", href: "/factory-machinery" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Product Development & Sampling",
    description:
      "We ensure samples that match your exact specifications with quality craftsmanship",
    icon: "📦",
  },
  {
    id: 2,
    title: "Supplier Selection & Evaluation",
    description:
      "We find manufacturers who meet your standards and share your values",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Price Negotiation & Order Placement",
    description:
      "We secure the best terms for your orders while maintaining quality standards",
    icon: "💰",
  },
  {
    id: 4,
    title: "Production Follow-up & Quality Inspection",
    description:
      "We monitor every batch from start to finish to ensure excellence",
    icon: "✅",
  },
];

export const EXPERTISE_CATEGORIES = {
  knit: {
    title: "Knitwear",
    items: [
      { name: "Premium Cotton Tee", description: "100% cotton comfort" },
      { name: "Classic Pullover Hoodie", description: "Premium fleece, relaxed cuts" },
      { name: "Pique Polo Shirt", description: "Moisture-wicking, Comfort Styling" },
      { name: "Jersey Henley", description: "Soft weave, Timeless Style" },
    ],
  },
  woven: {
    title: "Woven",
    items: [
      { name: "Oxford Button-Down", description: "Formal & Casual Tailoring" },
      { name: "Slim Fit Chinos", description: "Modern cut & refined fabric" },
      { name: "Summer Linen Shirt", description: "Breathable, relaxed fit" },
      { name: "Unstructured Blazer", description: "Lightweight, Classic Look" },
    ],
  },
  denim: {
    title: "Denim",
    items: [
      { name: "Raw Indigo Denim", description: "Classic Streetwear style" },
      { name: "Trucker Jacket", description: "Iconic, Versatile Stitching" },
      { name: "Casual Denim Shorts", description: "Modern hem, Faded Design" },
      { name: "Slaty-Black Denim", description: "Faded fit, Masculine style" },
    ],
  },
};

export const HOW_WE_WORK = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We listen to your needs and understand your specifications",
    icon: "👂",
  },
  {
    step: 2,
    title: "Supplier Match",
    description:
      "We match you with manufacturers who meet your standards",
    icon: "🤝",
  },
  {
    step: 3,
    title: "Order Management",
    description:
      "We negotiate terms and oversee production from start to finish",
    icon: "📋",
  },
  {
    step: 4,
    title: "Quality Check",
    description:
      "Every batch is tested against your specifications and standards",
    icon: "🔬",
  },
];

export const MACHINERY = [
  {
    id: 1,
    name: "Juki DDL-9000C",
    function: "High-speed Single Needle Lockstitch",
    manufacturer: "Juki, Japan",
  },
  {
    id: 2,
    name: "Brother S-7300A",
    function: "Electronic Overlock System",
    manufacturer: "Brother, Japan",
  },
  {
    id: 3,
    name: "Yamato VG Series",
    function: "Cylinder Bed Interlock / Flatlock",
    manufacturer: "Yamato, Japan",
  },
  {
    id: 4,
    name: "Kansai Special DFB",
    function: "Multi-needle Waistband Attachment",
    manufacturer: "Kansai, Japan",
  },
  {
    id: 5,
    name: "Gerber AccuMark V14",
    function: "Automated CAD Pattern & Marker",
    manufacturer: "Gerber, USA",
  },
  {
    id: 6,
    name: "Barudan BEXY-915",
    function: "15-Head Multi-Head Embroidery",
    manufacturer: "Barudan, Japan",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Ahmed Rahman",
    role: "Founder & CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6284465a0d74cb8635c755a64103c0142f577372-Gz9PeS0Pjm2tZpXoZRpbiupzd5x2T2.jpg",
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Head of Quality Control",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6284465a0d74cb8635c755a64103c0142f577372-Gz9PeS0Pjm2tZpXoZRpbiupzd5x2T2.jpg",
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Operations Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6284465a0d74cb8635c755a64103c0142f577372-Gz9PeS0Pjm2tZpXoZRpbiupzd5x2T2.jpg",
  },
  {
    id: 4,
    name: "Priya Desai",
    role: "Lead Sourcing Specialist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6284465a0d74cb8635c755a64103c0142f577372-Gz9PeS0Pjm2tZpXoZRpbiupzd5x2T2.jpg",
  },
];

export const VALUES = [
  {
    icons: "💎",
    title: "Quality Assurance",
    description: "Rigorous testing at every production stage",
  },
  {
    icons: "🤝",
    title: "Ethical Sourcing",
    description: "Fair wages and safe working conditions",
  },
  {
    icons: "⏰",
    title: "On-time Delivery",
    description: "Your deadlines are our commitments",
  },
  {
    icons: "🌐",
    title: "Global Network",
    description: "Connected across Bangladesh and beyond",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    category: "Knitwear",
    description: "Premium quality knitted apparel with excellent craftsmanship",
    products: [
      {
        id: "knitwear-1",
        name: "Premium Cotton Tee",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "100% cotton comfort",
      },
      {
        id: "knitwear-2",
        name: "Classic Pullover Hoodie",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Premium fleece, relaxed cuts",
      },
      {
        id: "knitwear-3",
        name: "Pique Polo Shirt",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Moisture-wicking, Comfort Styling",
      },
      {
        id: "knitwear-4",
        name: "Jersey Henley",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Soft weave, Timeless Style",
      },
    ],
  },
  {
    category: "Woven",
    description: "Sophisticated woven fabrics suitable for formal and casual wear",
    products: [
      {
        id: "woven-1",
        name: "Oxford Button-Down",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Formal & Casual Tailoring",
      },
      {
        id: "woven-2",
        name: "Slim Fit Chinos",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Modern cut & refined fabric",
      },
      {
        id: "woven-3",
        name: "Summer Linen Shirt",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Breathable, relaxed fit",
      },
      {
        id: "woven-4",
        name: "Unstructured Blazer",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Lightweight, Classic Look",
      },
    ],
  },
  {
    category: "Denim",
    description: "Premium denim products with exceptional durability and style",
    products: [
      {
        id: "denim-1",
        name: "Raw Indigo Denim",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Classic Streetwear style",
      },
      {
        id: "denim-2",
        name: "Trucker Jacket",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Iconic, Versatile Stitching",
      },
      {
        id: "denim-3",
        name: "Casual Denim Shorts",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Modern hem, Faded Design",
      },
      {
        id: "denim-4",
        name: "Slaty-Black Denim",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg",
        description: "Faded fit, Masculine style",
      },
    ],
  },
];
