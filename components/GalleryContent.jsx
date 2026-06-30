'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slots = [
  {
    id: 1,
    span: 'md:col-span-2 md:row-span-2',
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&h=900&auto=format&fit=crop&q=80',
    alt: 'Indian food platter',
    label: 'The Signature Experience',
    concept: 'Royal Indian Cuisine',
  },
  {
    id: 2,
    span: '',
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Grilled tandoori dish',
    label: 'Clay Oven Perfection',
    concept: 'Tandoori',
  },
  {
    id: 3,
    span: '',
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Indian curry and spices',
    label: 'Rich & Aromatic',
    concept: 'Curry',
  },
  {
    id: 4,
    span: '',
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Biryani rice dish',
    label: 'Fragrant Basmati',
    concept: 'Biryani',
  },
  {
    id: 5,
    span: '',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Colourful food bowl',
    label: 'Mine, Meefon & Riz',
    concept: 'Fuzzion Plates',
  },
  {
    id: 6,
    span: 'md:col-span-2',
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&h=400&auto=format&fit=crop&q=80',
    alt: 'Food spread',
    label: 'Two concepts. One roof. Endless flavour.',
    concept: 'The Spread',
  },
  {
    id: 7,
    span: '',
    src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Fresh drinks and mocktails',
    label: 'Virgin Mojito & More',
    concept: 'Mocktails',
  },
  {
    id: 8,
    span: '',
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&auto=format&fit=crop&q=80',
    alt: 'Indian naan bread',
    label: 'Baked in the Tandoor',
    concept: 'Naan & Bread',
  },
];

export default function GalleryContent() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="bg-deep-black py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-4">Indian &amp; Fuzzion Food</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2
                className="font-display text-white leading-none"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                GALLERY
              </h2>
              <a
                href="https://instagram.com/_foodzbyrg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/30 text-xs hover:text-flame transition-colors flex items-center gap-2 self-start sm:self-auto"
              >
                <span className="w-1 h-1 rounded-full bg-flame" />
                Follow @_foodzbyrg on Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            {slots.map((slot) => (
              <motion.div
                key={slot.id}
                className={`${slot.span} relative overflow-hidden rounded-xl cursor-pointer group`}
                onClick={() => setActive(slot)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={slot.src}
                  alt={slot.alt}
                  fill
                  priority={slot.id === 1}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Gradient overlay — always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-body text-[9px] uppercase tracking-[0.25em] text-flame mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {slot.concept}
                  </p>
                  <p className="font-display text-white leading-tight" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
                    {slot.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/96 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={active.src.replace('w=600', 'w=1200').replace('w=900', 'w=1400')}
                  alt={active.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-flame text-xs uppercase tracking-widest mb-2">{active.concept}</p>
                <p className="font-display text-white text-3xl leading-tight">{active.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
