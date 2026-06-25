'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { id: 1, label: 'The Classic', bg: 'from-orange-900 to-orange-700', tall: true },
  { id: 2, label: 'Spicy Inferno', bg: 'from-red-900 to-red-700', tall: false },
  { id: 3, label: 'Loaded Fries', bg: 'from-yellow-900 to-yellow-700', tall: false },
  { id: 4, label: 'Fresh Lemonade', bg: 'from-lime-900 to-lime-700', tall: false },
  { id: 5, label: 'Double Stack', bg: 'from-stone-800 to-stone-600', tall: true },
  { id: 6, label: 'Milkshake', bg: 'from-pink-900 to-pink-700', tall: false },
  { id: 7, label: 'Onion Rings', bg: 'from-amber-900 to-amber-700', tall: false },
  { id: 8, label: 'Restaurant', bg: 'from-neutral-800 to-neutral-600', tall: false },
  { id: 9, label: 'Veggie Delight', bg: 'from-green-900 to-green-700', tall: false },
];

export default function GalleryContent() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="bg-deep-black pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">Food &amp; Vibes</p>
            <h1 className="font-display text-6xl sm:text-7xl text-white">GALLERY</h1>
            <p className="font-body text-white/40 mt-3 text-sm">Replace placeholders with real food photos when available.</p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-2xl group"
                onClick={() => setSelected(photo)}
              >
                <div
                  className={`w-full bg-gradient-to-br ${photo.bg} ${
                    photo.tall ? 'h-72 md:h-80' : 'h-44 md:h-52'
                  } flex items-center justify-center group-hover:brightness-110 transition-all duration-300`}
                >
                  <span className="font-body text-white/30 text-sm">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-80 h-96 bg-gradient-to-br ${selected.bg} rounded-2xl flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-display text-4xl text-white/60">{selected.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
