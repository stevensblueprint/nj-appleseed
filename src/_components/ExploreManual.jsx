export default function ExploreManual() {
  const Card = ({ href, imgSrc, imgAlt, buttonText, description }) => (
    <a
      href={href}
      className="bg-white rounded-lg p-6 flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-28 h-28 mb-4 object-contain"
      />
      <button className="bg-red-700 text-white px-8 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[180px]">
        {buttonText}
      </button>
      <p className="text-center mt-3 text-gray-700 text-sm">
        {description}
      </p>
    </a>
  );

  const cards = [
    {
      href: "/faqs",
      imgSrc: "/assets/faq.png",
      imgAlt: "FAQ",
      buttonText: "FAQs",
      description: "Get answers to Frequently Asked Questions"
    },
    {
      href: "/best-practices",
      imgSrc: "/assets/best.png",
      imgAlt: "Best Practices",
      buttonText: "BEST PRACTICES",
      description: "Follow these best Practices"
    },
    {
      href: "/resources",
      imgSrc: "/assets/tools.png",
      imgAlt: "Resources & Tools",
      buttonText: "RESOURCES & TOOLS",
      description: "Legal services, websites, and additional support"
    },
    {
      href: "/videos",
      imgSrc: "/assets/videos.png",
      imgAlt: "Videos",
      buttonText: "VIDEOS",
      description: "Helpful videos on handling medical debt"
    }
  ];

  return (
    <section className="bg-background-grey py-12 md:py-24">
      <div className="px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green mb-12">
          EXPLORE OUR SITE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <svg viewBox="0 0 300 400" className="w-full max-w-md h-auto mb-8">
              <rect x="20" y="50" width="200" height="280" rx="5" fill="#C53030" />
              <rect x="50" y="80" width="220" height="300" rx="5" fill="#4B7C4F" />
              <rect x="30" y="60" width="210" height="290" rx="5" fill="#B91C1C" />
              <rect x="40" y="70" width="190" height="270" rx="5" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" />
              <rect x="60" y="100" width="150" height="8" rx="2" fill="#E5E7EB" />
              <rect x="60" y="120" width="130" height="6" rx="2" fill="#E5E7EB" />
              <rect x="60" y="135" width="140" height="6" rx="2" fill="#E5E7EB" />
              <rect x="60" y="150" width="120" height="6" rx="2" fill="#E5E7EB" />
              <rect x="60" y="180" width="150" height="6" rx="2" fill="#E5E7EB" />
              <rect x="60" y="195" width="110" height="6" rx="2" fill="#E5E7EB" />
              <rect x="60" y="210" width="140" height="6" rx="2" fill="#E5E7EB" />
            </svg>

            <div className="flex items-center gap-6">
              <h3 className="text-5xl font-bold text-red-700 hover:underline">
                READ THE
                <br />
                MANUAL
              </h3>

              <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
                <path
                  d="M20 32L44 32M44 32L36 24M44 32L36 40"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}