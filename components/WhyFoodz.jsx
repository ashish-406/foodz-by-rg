import { Leaf, Zap, MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const reasons = [
  {
    Icon: Leaf,
    num: '01',
    title: 'Fresh Ingredients',
    desc: 'Quality produce sourced daily. Every dish made to order — nothing sits, nothing is rushed.',
  },
  {
    Icon: Zap,
    num: '02',
    title: 'Fast Service',
    desc: 'We respect your time. Your order is ready in minutes, every single time.',
  },
  {
    Icon: MapPin,
    num: '03',
    title: 'Local Flavours',
    desc: 'Mauritius-inspired touches in every dish. Taste the island in every bite.',
  },
];

export default function WhyFoodz() {
  return (
    <section className="bg-cream py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16">
          <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-4">The Foodz Promise</p>
          <h2
            className="font-display text-deep-black leading-none"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            WHY FOODZ?
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-px bg-deep-black/8">
          {reasons.map(({ Icon, num, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.1}>
              <div className="bg-cream p-10">
                <span className="font-display text-5xl text-flame/20 leading-none block mb-6">{num}</span>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-flame" size={20} />
                  <h3 className="font-display text-xl text-deep-black">{title}</h3>
                </div>
                <p className="font-body text-deep-black/50 leading-relaxed text-sm">{desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
