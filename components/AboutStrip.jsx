import AnimateOnScroll from './AnimateOnScroll';

export default function AboutStrip() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <AnimateOnScroll>
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="font-display text-5xl sm:text-6xl text-deep-black leading-none mb-5">
            BORN TO<br />FEED THE CROWD
          </h2>
          <p className="font-body text-deep-black/65 text-lg leading-relaxed">
            Foodz by RG started with a simple idea: great food does not have to be complicated.
            We bring bold flavours, fresh ingredients, and fast service to the heart of Riverside
            Shopping Centre. Whether you are grabbing a quick lunch or treating the whole family,
            we have got you covered.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-deep-black/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/20 to-deep-black/60 flex items-center justify-center">
              <p className="font-display text-8xl text-flame/20 select-none">RG</p>
            </div>
            <div className="absolute inset-0 border-2 border-flame/20 rounded-2xl" />
            {/* Replace the div above with <img src="/images/about.jpg" alt="Foodz by RG" className="w-full h-full object-cover" /> once you have real photos */}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
