export default function Footer() {
  const navigationLinks = [
    { href: "/about", text: "ABOUT" },
    { href: "/faqs", text: "FAQs" },
    { href: "/videos", text: "VIDEOS" },
    { href: "/resources", text: "RESOURCES & TOOLS" },
    { href: "/practices", text: "BEST PRACTICES" },
    { href: "/manual", text: "MANUAL" },
  ];

  return (
    <footer className="flex flex-col sm:flex-row bg-footer-grey p-4 sm:p-16 gap-6 sm:gap-0">
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <img
          src="/assets/EndMedDebtLogo.png"
          alt="End Medical Debt Logo"
          className="max-h-20 max-w-32 sm:max-w-48 sm:max-h-24"
        />
        <p className="text-xs sm:text-base">
          DISCLAIMER: The information on this website and in the Manual is not
          legal advice. It is a source of information to help New Jerseyans deal
          with medical debt. For legal advice, consult an attorney.
        </p>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 gap-4 sm:text-right">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-y-2 gap-x-6 lg:hidden text-xs sm:text-base">
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
          <div className="hidden lg:flex lg:flex-row lg:gap-6 lg:justify-end text-xs sm:text-base">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 font-bold whitespace-nowrap transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <p className="italic text-xs sm:text-base">
          New Jersey Appleseed Public Law Center @2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
