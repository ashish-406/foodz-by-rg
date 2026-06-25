'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Send, CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const hours = [
  { day: 'Monday – Friday', time: '10:00 – 22:00' },
  { day: 'Saturday', time: '09:00 – 23:00' },
  { day: 'Sunday', time: '10:00 – 21:00' },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-deep-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">
            We Would Love to Hear from You
          </p>
          <h1 className="font-display text-6xl sm:text-7xl text-white">CONTACT US</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Info + map */}
          <AnimateOnScroll>
            <div className="space-y-8 mb-8">
              <div className="flex gap-4">
                <MapPin className="text-flame flex-none mt-1" size={22} />
                <div>
                  <p className="font-body font-semibold text-white mb-1">Address</p>
                  <p className="font-body text-white/55">
                    Riverside Shopping Centre<br />
                    Rivière du Rempart, Mauritius
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-flame flex-none mt-1" size={22} />
                <div className="w-full">
                  <p className="font-body font-semibold text-white mb-3">Opening Hours</p>
                  <table className="font-body text-white/55 text-sm w-full">
                    <tbody>
                      {hours.map(({ day, time }) => (
                        <tr key={day} className="border-b border-white/10">
                          <td className="py-2.5 pr-8">{day}</td>
                          <td className="py-2.5 font-semibold text-white">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-flame flex-none mt-1" size={22} />
                <div>
                  <p className="font-body font-semibold text-white mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/23000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-flame hover:underline font-medium"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=-20.1096296,57.687659&output=embed&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Foodz by RG location"
              />
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={0.2}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-20">
                <CheckCircle className="text-flame" size={52} />
                <h3 className="font-display text-4xl text-white">Message Sent!</h3>
                <p className="font-body text-white/50">We will get back to you as soon as possible.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="font-body text-flame hover:underline text-sm mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-white/50 text-sm block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-soft-gray border border-white/10 rounded-xl px-4 py-3 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-flame transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-white/50 text-sm block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-soft-gray border border-white/10 rounded-xl px-4 py-3 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-flame transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-white/50 text-sm block mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-soft-gray border border-white/10 rounded-xl px-4 py-3 font-body text-white placeholder:text-white/20 focus:outline-none focus:border-flame transition-colors resize-none"
                    placeholder="What is on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-flame text-white font-body font-semibold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
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
