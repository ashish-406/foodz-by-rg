import AnimateOnScroll from './AnimateOnScroll';

const stats = [
  { num: '30+', label: 'Menu Items' },
  { num: '2', label: 'Concepts' },
  { num: '1', label: 'Location' },
];

export default function AboutStrip() {
  return (
    <section className="bg-cream py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">
          <AnimateOnScroll>
            <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-6">Our Story</p>
            <h2
              className="font-display text-deep-black leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              BORN LOCAL.<br />MADE BOLD.
            </h2>
            <p className="font-body text-deep-black/60 text-lg leading-relaxed max-w-lg">
              Right on Royal Road in Rivière du Rempart, Foodz by RG is where Mauritius comes to eat.
              Two concepts under one roof — The Royal Indian Cuisine and Fuzzion Street Food —
              brought together by bold flavours, fresh ingredients, and a kitchen that never cuts corners.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-green-600/10 border border-green-600/20 rounded-full px-5 py-2.5 mt-7">
              <span className="w-2 h-2 rounded-full bg-green-600 flex-none" />
              <span className="font-body text-green-700 text-xs font-semibold tracking-wide">
                100% Halal — No Pork, No Beef
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="md:pt-14">
            <div className="flex md:flex-col gap-8 md:gap-10 border-l border-deep-black/10 pl-8">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-5xl text-flame leading-none">{num}</p>
                  <p className="font-body text-deep-black/40 text-xs uppercase tracking-widest mt-1.5">{label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
