'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-[#1a0800] to-deep-black" />
      {/* Ambient orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame/10 rounded-full blur-3xl pointer-events-none" />
      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep-black to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-flame text-sm tracking-[0.35em] uppercase mb-5"
        >
          Riverside Shopping Centre · Mauritius
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-[clamp(4rem,14vw,9rem)] text-white leading-none mb-3"
        >
          REAL FOOD.
          <br />
          <span className="text-flame">REAL FAST.</span>
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
          className="h-[3px] bg-flame mb-7 origin-left w-48 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="font-body text-white/60 text-lg mb-10 max-w-md mx-auto"
        >
          Fresh ingredients, bold flavours, and the fastest service in Rivière du Rempart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-flame text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-base"
          >
            See Our Menu
          </a>
          <a
            href="#find-us"
            className="border border-white/30 text-white font-body font-semibold px-8 py-4 rounded-full hover:border-flame hover:text-flame transition-colors text-base"
          >
            Find Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-10 bg-gradient-to-b from-flame/60 to-transparent" />
      </motion.div>
    </section>
  );
}
