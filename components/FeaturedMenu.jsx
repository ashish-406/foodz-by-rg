import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

const dishes = [
  {
    name: 'The Classic',
    desc: 'Juicy beef patty, lettuce, tomato, pickles & secret sauce',
    price: 'Rs 180',
    emoji: '🍔',
  },
  {
    name: 'Spicy Inferno',
    desc: 'Crispy chicken, jalapeños, sriracha mayo & coleslaw',
    price: 'Rs 195',
    emoji: '🌶️',
  },
  {
    name: 'Double Stack',
    desc: 'Two beef patties, double cheese & caramelised onions',
    price: 'Rs 220',
    emoji: '🥩',
  },
];

export default function FeaturedMenu() {
  return (
    <section className="bg-deep-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">What We Serve</p>
          <h2 className="font-display text-5xl sm:text-6xl text-white">OUR FAVOURITES</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <AnimateOnScroll key={dish.name} delay={i * 0.1}>
              <div className="bg-soft-gray rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-[#1a0800] to-soft-gray flex items-center justify-center">
                  <span className="text-7xl" aria-hidden="true">{dish.emoji}</span>
                  {/* Replace with <img src={`/images/${dish.name.toLowerCase().replace(' ', '-')}.jpg`} ... /> once you have real photos */}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl text-white">{dish.name}</h3>
                    <span className="font-body font-bold text-flame ml-3 flex-none">{dish.price}</span>
                  </div>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12" delay={0.3}>
          <Link
            href="/menu"
            className="inline-block border border-flame text-flame font-body font-semibold px-8 py-3 rounded-full hover:bg-flame hover:text-white transition-colors"
          >
            View Full Menu
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
