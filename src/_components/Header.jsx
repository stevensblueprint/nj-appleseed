const navigationLinks = [
  { href: "/faqs", text: "FAQs" },
  { href: "/videos", text: "VIDEOS" },
  { href: "/resources", text: "RESOURCES & TOOLS" },
  { href: "/practices", text: "BEST PRACTICES" },
  { href: "/manual", text: "MANUAL" },
];

export default function Header() {
  return (
    <header className="relative px-4">
      <nav className="flex flex-col">
        <input
          type="checkbox"
          id="accordianMenu"
          title="Mobile Menu"
          className="hidden peer"
        />
        <div className="flex flex-row justify-between p-6 items-center">
          <div>
            <a href="/">
              <img
                src="/assets/EndMedDebtLogo.png"
                alt="End Medical Debt Logo"
                className="max-h-24 max-w-36 md:max-w-48 md:max-h-24"
              ></img>
            </a>
          </div>
          <div className="lg:hidden">
            <label htmlFor="accordianMenu" className="cursor-pointer label">
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6 h16 M4 12 h16 M4 18 h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="max-lg:hidden flex flex-row">
            {desktopNavigationLinks()}
          </div>
        </div>
        <div className="lg:hidden overflow-hidden peer-checked:max-h-screen max-h-0 flex flex-col transition-all duration-300 pb-3">
          {mobileNavigationLinks()}
        </div>
      </nav>
    </header>
  );
}

function desktopNavigationLinks() {
  return navigationLinks.map((link) => {
    const isManual = link.href === "/manual";
    return (
      <a
        key={link.href}
        href={link.href}
        className={
          "text-base font-semibold py-2 transition-colors duration-200 " +
          (isManual
            ? "bg-primary text-white rounded px-5 mx-1 hover:bg-primary/10 hover:text-primary"
            : "px-5 hover:bg-gray-100 hover:text-primary rounded")
        }
      >
        {link.text}
      </a>
    );
  });
}

function mobileNavigationLinks() {
  return navigationLinks.map((link) => (
    <a
      href={link.href}
      className="text-base px-5 py-2 font-semibold hover:font-bold hover:underline underline-offset-4 decoration-2"
    >
      {link.text}
    </a>
  ));
}
