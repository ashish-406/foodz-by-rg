'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slots = [
  {
    id: 1,
    span: 'md:col-span-2 md:row-span-2',
    concept: 'Royal Indian Cuisine',
    label: 'The Signature Experience',
    gradient: 'from-orange-900 via-red-800 to-rose-900',
    dot: 'bg-orange-400',
    text: 'text-orange-300',
  },
  {
    id: 2,
    span: '',
    concept: 'Tandoori',
    label: 'Clay Oven Perfection',
    gradient: 'from-red-900 via-orange-800 to-amber-900',
    dot: 'bg-red-400',
    text: 'text-red-300',
  },
  {
    id: 3,
    span: '',
    concept: 'Curry',
    label: 'Rich & Aromatic',
    gradient: 'from-amber-900 via-yellow-800 to-orange-900',
    dot: 'bg-amber-400',
    text: 'text-amber-300',
  },
  {
    id: 4,
    span: '',
    concept: 'Fuzzion',
    label: 'Street Food Vibes',
    gradient: 'from-violet-900 via-purple-800 to-indigo-900',
    dot: 'bg-violet-400',
    text: 'text-violet-300',
  },
  {
    id: 5,
    span: '',
    concept: 'Noodles & Rice',
    label: 'Mine, Meefon & Riz Frite',
    gradient: 'from-teal-900 via-cyan-800 to-sky-900',
    dot: 'bg-teal-400',
    text: 'text-teal-300',
  },
  {
    id: 6,
    span: 'md:col-span-2',
    concept: 'The Spread',
    label: 'Two concepts. One roof. Endless flavour.',
    gradient: 'from-zinc-800 via-stone-700 to-neutral-800',
    dot: 'bg-zinc-400',
    text: 'text-zinc-300',
  },
  {
    id: 7,
    span: '',
    concept: 'Mocktails',
    label: 'Virgin Mojito & More',
    gradient: 'from-pink-900 via-rose-800 to-fuchsia-900',
    dot: 'bg-pink-400',
    text: 'text-pink-300',
  },
  {
    id: 8,
    span: '',
    concept: '100% Halal',
    label: 'No Pork · No Beef',
    gradient: 'from-green-900 via-emerald-800 to-teal-900',
    dot: 'bg-green-400',
    text: 'text-green-300',
  },
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
              <a
                href="https://instagram.com/_foodzbyrg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-white/30 text-xs hover:text-flame transition-colors flex items-center gap-2 self-start sm:self-auto"
              >
                <span className="w-1 h-1 rounded-full bg-flame" />
                Follow @_foodzbyrg for real food shots
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {slots.map((slot) => (
              <motion.div
                key={slot.id}
                className={`${slot.span} relative overflow-hidden rounded-xl cursor-pointer group bg-gradient-to-br ${slot.gradient}`}
                onClick={() => setActive(slot)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Subtle noise texture */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                  }}
                />

                {/* Text content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className={`font-body text-[9px] uppercase tracking-[0.25em] ${slot.text} mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {slot.concept}
                  </span>
                  <span className="font-display text-white leading-tight" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}>
                    {slot.label}
                  </span>
                </div>

                {/* Flame accent corner dot */}
                <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${slot.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
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
              className={`w-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${active.gradient}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 flex flex-col gap-3">
                <span className={`font-body text-[9px] uppercase tracking-[0.3em] ${active.text}`}>
                  {active.concept}
                </span>
                <p className="font-display text-3xl text-white leading-tight">{active.label}</p>
                <div className="h-px bg-white/10 my-2" />
                <p className="font-body text-white/40 text-xs leading-relaxed">
                  Real food photos coming soon. Follow us on Instagram for a taste of what we serve daily.
                </p>
                <a
                  href="https://instagram.com/_foodzbyrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-body text-xs font-semibold text-white/70 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${active.dot}`} />
                  @_foodzbyrg
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
