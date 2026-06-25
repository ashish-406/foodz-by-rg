import { Camera, Globe, Phone } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#find-us', label: 'Find Us' },
];

export default function Footer() {
  return (
    <footer className="bg-soft-gray border-t border-white/5 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="font-display text-3xl text-flame mb-3">FOODZ BY RG</p>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Real food, real fast. Find us on Royal Road, Rivière du Rempart, Mauritius.
            </p>
          </div>

          <div>
            <p className="font-body font-semibold text-white text-sm mb-4 uppercase tracking-wider">Pages</p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-white/40 text-sm hover:text-flame transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body font-semibold text-white text-sm mb-4 uppercase tracking-wider">Follow Us</p>
            <p className="font-body text-white/40 text-xs mb-3">@_foodzbyrg</p>
            <div className="flex gap-4 mb-5">
              <a
                href="https://instagram.com/_foodzbyrg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @_foodzbyrg"
                className="text-white/40 hover:text-flame transition-colors"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-flame transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://wa.me/23057591140"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/40 hover:text-flame transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed">
              Royal Road<br />
              Rivière du Rempart 31113<br />
              Mauritius
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="font-body text-white/20 text-xs">
            © {new Date().getFullYear()} Foodz by RG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
