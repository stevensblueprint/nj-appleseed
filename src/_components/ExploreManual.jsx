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
      <p className="text-center mt-3 text-gray-700 text-sm">{description}</p>
    </a>
  );

  const cards = [
    {
      href: "/faqs",
      imgSrc: "/assets/vector/faq.svg",
      imgAlt: "FAQ",
      buttonText: "FAQs",
      description: "Get answers to Frequently Asked Questions",
    },
    {
      href: "/practices",
      imgSrc: "/assets/vector/best.svg",
      imgAlt: "Practices",
      buttonText: "BEST PRACTICES",
      description: "Follow these best Practices",
    },
    {
      href: "/resources",
      imgSrc: "/assets/vector/tools.svg",
      imgAlt: "Resources & Tools",
      buttonText: "RESOURCES & TOOLS",
      description: "Legal services, websites, and additional support",
    },
    {
      href: "/videos",
      imgSrc: "/assets/vector/videos.svg",
      imgAlt: "Videos",
      buttonText: "VIDEOS",
      description: "Helpful videos on handling medical debt",
    },
  ];

  return (
    <section className="bg-background-grey py-12 md:py-24">
      <div className="px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green mb-12">
          EXPLORE OUR SITE
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <img
              src="/assets/vector/manual.svg"
              alt="Manual"
              className="w-48 h-48 mb-6 object-contain"
            />
            <div className="flex items-center gap-6">
              <a href="manual" className="group inline-block">
                <h3 className="relative text-5xl font-bold text-red-700">
                  <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1.5 after:bg-red-700 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 pb-1">
                    READ THE
                  </span>
                </h3>
                <h3 className="relative text-5xl font-bold text-red-700 mt-2">
                  <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1.5 after:bg-red-700 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 pb-1">
                    MANUAL
                  </span>
                </h3>
              </a>
              <img
                src="/assets/vector/arrow_forward.svg"
                alt="Arrow"
                className="w-20 h-20"
              />
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
