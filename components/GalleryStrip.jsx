import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

const placeholderColors = [
  { bg: 'from-orange-900 to-orange-700', label: 'Burger' },
  { bg: 'from-red-900 to-red-700', label: 'Spicy Chicken' },
  { bg: 'from-yellow-900 to-yellow-700', label: 'Fries' },
  { bg: 'from-amber-900 to-amber-700', label: 'Milkshake' },
  { bg: 'from-stone-800 to-stone-600', label: 'Interior' },
  { bg: 'from-orange-800 to-red-800', label: 'Combo' },
];

export default function GalleryStrip() {
  return (
    <section className="bg-deep-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll className="text-center mb-10">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">Instagram-worthy</p>
          <h2 className="font-display text-5xl sm:text-6xl text-white">FOOD GALLERY</h2>
        </AnimateOnScroll>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
        {placeholderColors.map(({ bg, label }) => (
          <div
            key={label}
            className={`flex-none w-60 h-60 rounded-2xl overflow-hidden bg-gradient-to-br ${bg} flex items-center justify-center`}
          >
            {/* Replace with <img src="/images/gallery-x.jpg" ... /> once you have real food photos */}
            <span className="font-body text-white/30 text-sm">{label}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 px-4">
        <AnimateOnScroll>
          <Link
            href="/gallery"
            className="inline-block border border-white/20 text-white/60 font-body font-semibold px-8 py-3 rounded-full hover:border-flame hover:text-flame transition-colors"
          >
            View Full Gallery
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
