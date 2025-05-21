const navigationLinks = [
  { href: "/about", text: "ABOUT" },
  { href: "/faqs", text: "FAQs" },
  { href: "/manual", text: "MANUAL" },
  { href: "/videos", text: "VIDEOS" },
  { href: "/resources", text: "RESOURCES & TOOLS" },
  { href: "/practices", text: "BEST PRACTICES" },
];

export default function Footer() {
  return (
    <section>
      <footer className="bg-footer-grey text-text-color p-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="max-w-md mb-6 md:mb-0">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">EndMedDebt</span>
            <span className="text-green">NJ</span>
          </h1>
          <p className="text-sm mt-2">
            DISCLAIMER: The information on this website and in the Manual is not
            legal advice. It is a source of information to help New Jerseyans
            deal with medical debt. For legal advice, consult an attorney.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end space-y-2">
          <nav className="flex flex-wrap gap-4 mb-2 text-sm">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary font-bold"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <p className="text-xs">NJAppleseed © 2025. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
