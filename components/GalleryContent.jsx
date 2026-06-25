'use client';

import { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slots = [
  { id: 1, span: 'md:col-span-2 md:row-span-2', label: 'Hero Dish' },
  { id: 2, span: '', label: 'Tandoori Plate' },
  { id: 3, span: '', label: 'Spicy Bowl' },
  { id: 4, span: '', label: 'Street Pita' },
  { id: 5, span: '', label: 'Fuzzion Wrap' },
  { id: 6, span: 'md:col-span-2', label: 'The Spread' },
  { id: 7, span: '', label: 'Milkshake' },
  { id: 8, span: '', label: 'Kitchen' },
];

export default function GalleryContent() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="bg-deep-black py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-4">Food &amp; Vibes</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2
                className="font-display text-white leading-none"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                GALLERY
              </h2>
              <p className="font-body text-white/25 text-xs max-w-xs">
                Real photos coming soon. Drop your food shots to @_foodzbyrg on Instagram.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {slots.map((slot) => (
              <div
                key={slot.id}
                className={`${slot.span} relative overflow-hidden rounded-xl cursor-pointer group bg-soft-gray border border-white/5 hover:border-flame/30 transition-colors`}
                onClick={() => setActive(slot)}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30 group-hover:opacity-60 transition-opacity">
                  <Camera size={24} className="text-white" />
                  <span className="font-body text-white text-xs tracking-wider">{slot.label}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-flame/0 group-hover:bg-flame/5 transition-colors" />
              </div>
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
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="w-80 h-80 bg-soft-gray rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Camera size={36} className="text-white/20" />
              <p className="font-display text-3xl text-white/30">{active.label}</p>
              <p className="font-body text-white/15 text-xs">Photo coming soon</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
