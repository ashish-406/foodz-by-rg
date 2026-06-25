import { MapPin, Clock, Phone } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const hours = [
  { day: 'Monday – Friday', time: '10:00 – 22:00' },
  { day: 'Saturday', time: '09:00 – 23:00' },
  { day: 'Sunday', time: '10:00 – 21:00' },
];

export default function LocationHours() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">Come Visit Us</p>
          <h2 className="font-display text-5xl sm:text-6xl text-deep-black">FIND US</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-flame flex-none mt-1" size={22} />
                <div>
                  <p className="font-body font-semibold text-deep-black mb-1">Address</p>
                  <p className="font-body text-deep-black/65">
                    Riverside Shopping Centre<br />
                    Rivière du Rempart, Mauritius
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-flame flex-none mt-1" size={22} />
                <div className="w-full">
                  <p className="font-body font-semibold text-deep-black mb-3">Opening Hours</p>
                  <table className="font-body text-deep-black/65 text-sm w-full">
                    <tbody>
                      {hours.map(({ day, time }) => (
                        <tr key={day} className="border-b border-deep-black/10">
                          <td className="py-2.5 pr-8">{day}</td>
                          <td className="py-2.5 font-semibold text-deep-black">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-flame flex-none mt-1" size={22} />
                <div>
                  <p className="font-body font-semibold text-deep-black mb-1">Contact</p>
                  <a
                    href="https://wa.me/23000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-flame hover:underline font-medium"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-80 bg-deep-black/10 border border-deep-black/10">
              <iframe
                src="https://maps.google.com/maps?q=-20.1096296,57.687659&output=embed&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Foodz by RG — Rivière du Rempart, Mauritius"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
