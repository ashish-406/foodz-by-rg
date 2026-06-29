'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-black">
      {/* Asymmetric glows */}
      <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-flame/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-flame/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full text-center px-4">
        {/* Location eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-px bg-flame/40" />
          <span className="font-body text-white/35 text-xs tracking-[0.3em] uppercase">
            Royal Road · Rivière du Rempart · Mauritius
          </span>
          <div className="w-10 h-px bg-flame/40" />
        </motion.div>

        {/* FOODZ — the hero itself */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(5.5rem, 23vw, 20rem)' }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Foodz <span className="text-orange-500">by RG</span>
          </motion.h1>
        </div>

        {/* BY RG divider row */}
        <motion.div
          className="flex items-center justify-center gap-5 mt-3 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-transparent to-flame/50" />
          <span className="font-display text-flame tracking-[0.35em]" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}>
            BY RG
          </span>
          <div className="h-px flex-1 max-w-[160px] bg-gradient-to-l from-transparent to-flame/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-body text-white/35 text-sm sm:text-base mb-10 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          Real Food · Bold Flavours · Fast Service
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
        >
          <a
            href="#menu"
            className="inline-block bg-flame text-white font-body font-semibold px-10 py-4 rounded-full text-sm hover:bg-orange-600 transition-all hover:shadow-[0_8px_32px_rgba(255,92,0,0.4)]"
          >
            Explore Menu
          </a>
          <a
            href="#find-us"
            className="inline-block border border-white/12 text-white/55 font-body font-semibold px-10 py-4 rounded-full text-sm hover:border-flame hover:text-flame transition-all"
          >
            Find Us
          </a>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-flame/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
