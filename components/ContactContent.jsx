'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Send, CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const hours = [
  { day: 'Monday', time: '11:00 – 21:00' },
  { day: 'Tuesday', time: '11:00 – 21:00' },
  { day: 'Wednesday', time: '11:00 – 21:00' },
  { day: 'Thursday', time: '11:00 – 21:00' },
  { day: 'Friday', time: '11:00 – 21:00' },
  { day: 'Saturday', time: '11:00 – 21:00' },
  { day: 'Sunday', time: '11:00 – 21:00' },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-soft-gray py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-14">
          <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-4">Royal Road · Rivière du Rempart</p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            FIND US
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info + map */}
          <AnimateOnScroll>
            <div className="space-y-7 mb-10">
              <div className="flex gap-4">
                <MapPin className="text-flame flex-none mt-0.5" size={18} />
                <div>
                  <p className="font-body font-semibold text-white text-sm mb-1">Address</p>
                  <p className="font-body text-white/45 text-sm leading-relaxed">
                    Royal Road<br />
                    Rivière du Rempart 31113, Mauritius
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-flame flex-none mt-0.5" size={18} />
                <div className="w-full">
                  <p className="font-body font-semibold text-white text-sm mb-3">Opening Hours</p>
                  <table className="font-body text-sm w-full">
                    <tbody>
                      {hours.map(({ day, time }) => (
                        <tr key={day} className="border-b border-white/6">
                          <td className="py-2.5 pr-8 text-white/40">{day}</td>
                          <td className="py-2.5 font-semibold text-white text-right">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-flame flex-none mt-0.5" size={18} />
                <div>
                  <p className="font-body font-semibold text-white text-sm mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/23057591140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-flame text-sm hover:underline"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 border border-white/8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d57.6902339!3d-20.1096296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217cff7dacde51ab%3A0xcfda0d0b5ce12244!2sFoodz%20by%20RG!5e0!3m2!1sen!2smu!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Foodz by RG — Royal Road, Rivière du Rempart"
              />
            </div>
          </AnimateOnScroll>

          {/* Right: form */}
          <AnimateOnScroll delay={0.15}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-16">
                <CheckCircle className="text-flame" size={48} />
                <h3 className="font-display text-3xl text-white">Message Sent!</h3>
                <p className="font-body text-white/40 text-sm">We will get back to you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="font-body text-flame text-sm hover:underline mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-white/35 text-xs block mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-deep-black border border-white/8 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-flame transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-white/35 text-xs block mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-deep-black border border-white/8 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-flame transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-white/35 text-xs block mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-deep-black border border-white/8 rounded-xl px-4 py-3.5 font-body text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-flame transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-flame text-white font-body font-semibold py-4 rounded-xl text-sm hover:bg-orange-600 transition-all hover:shadow-[0_8px_24px_rgba(255,92,0,0.35)] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
