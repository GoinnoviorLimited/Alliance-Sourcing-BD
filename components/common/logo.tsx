import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity duration-300">
      <div className="w-10 h-10 relative flex-shrink-0">
        <Image
          src="/logo.jpg"
          alt="Alliance Sourcing BD"
          fill
          className="object-contain rounded-md"
          priority
        />
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-sm font-bold leading-none" style={{ fontFamily: 'var(--font-syne)' }}>ALLIANCE</span>
        <span className="text-xs font-semibold leading-none" style={{ fontFamily: 'var(--font-syne)' }}>SOURCING BD</span>
      </div>
    </Link>
  );
}
