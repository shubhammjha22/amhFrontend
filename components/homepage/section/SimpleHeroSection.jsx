import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SimpleHeroSection({ hero }) {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{hero.title}</h1>

          <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
            {hero.subtitle}
          </p>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {hero.description}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 px-8 py-6 text-lg"
          >
            <Link href={hero.ctaLink}>{hero.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
