import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { PRACTICE, CONTACT } from "@/config/practice";

const MapPin = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/services", label: "SERVICES" },
    { href: "/doctors",  label: "DOCTORS" },
    { href: "/about",    label: "ABOUT" },
    { href: "/blog",     label: "BLOG" },
    { href: "/contact",  label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-2">

        {/* Left: logo + name */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt={PRACTICE.displayName} className="h-9 w-auto" />
          <span className="text-minimal text-foreground hidden sm:inline">{PRACTICE.displayName.toUpperCase()}</span>
        </Link>

        {/* Center: nav links — desktop only */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          {links.map(link => (
            <Link key={link.href} to={link.href} className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: pin + Call Now + hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://www.google.com/maps/place/Baltimore+Uptown+Dentist/@39.339074,-76.6228229,16.74z/data=!4m6!3m5!1s0x89c805227b104507:0x8b8b56d4cf5dc9aa!8m2!3d39.3367691!4d-76.6187057!16s%2Fg%2F1tdk1kfv?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Google Maps"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Call Now
          </a>
          <Button variant="ghost" size="sm" className="md:hidden px-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown — nav links only */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-5 space-y-4">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
