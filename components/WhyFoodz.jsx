import { Leaf, Zap, MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const reasons = [
  {
    Icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'We source quality produce daily so every bite is as good as it should be.',
  },
  {
    Icon: Zap,
    title: 'Fast Service',
    desc: "We know you're hungry. Your order is ready in minutes, every single time.",
  },
  {
    Icon: MapPin,
    title: 'Local Flavours',
    desc: 'Mauritius-inspired touches in every dish. Taste the island in every bite.',
  },
];

export default function WhyFoodz() {
  return (
    <section className="bg-soft-gray py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">The Foodz Promise</p>
          <h2 className="font-display text-5xl sm:text-6xl text-white">WHY FOODZ?</h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-10">
          {reasons.map(({ Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.15} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flame/10 border border-flame/30 mb-6">
                <Icon className="text-flame" size={28} />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{title}</h3>
              <p className="font-body text-white/50 leading-relaxed">{desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
