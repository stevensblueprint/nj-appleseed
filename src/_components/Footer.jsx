export default function Footer() {
  // TODO: Make a global import for both Header and Footer
  const navigationLinks = [
    { href: "/about", text: "ABOUT" },
    { href: "/faqs", text: "FAQs" },
    { href: "/manual", text: "MANUAL" },
    { href: "/videos", text: "VIDEOS" },
    { href: "/resources", text: "RESOURCES & TOOLS" },
    { href: "/practices", text: "BEST PRACTICES" },
  ];

  return (
    <footer className="flex bg-footer-grey p-16">
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <img
          src="/assets/EndMedDebtLogo.png"
          alt="End Medical Debt Logo"
          className="max-h-24 max-w-36 md:max-w-48 md:max-h-24"
        ></img>
        <p>
          DISCLAIMER: The information on this website and in the Manual is not
          legal advice. It is a source of information to help New Jerseyans deal
          with medical debt. For legal advice, consult an attorney. 
        </p>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 gap-4 text-right">
        <div className="flex flex-row gap-6 justify-end">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 font-bold transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="italic">
          New Jersey Appleseed Public Law Center @2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
