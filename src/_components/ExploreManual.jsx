export default function ExploreManual() {
  const Card = ({ href, imgSrc, imgAlt, buttonText, description }) => (
    <a
      href={href}
      className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-2xl transition-shadow"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-28 h-28 mb-4 object-contain"
      />
      <button className="bg-red-700 text-white px-4 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[200px]">
        {buttonText}
      </button>
      <p className="text-center text-sm sm:text-base mt-3">{description}</p>
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
        <h2 className="text-4xl font-bold text-green mb-6 sm:mb-12">
          EXPLORE OUR SITE
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start h-full">
            <a href="/manual">
              <img
                src="/assets/vector/manual.svg"
                alt="Manual"
                className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex items-center gap-2 mt-auto group">
              <a href="manual" className="inline-block">
                <h3 className="relative text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-red-700 group-hover:scale-105 transition-transform duration-500">
                  <span className="sm:hidden inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1.5 after:bg-red-700 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 pb-1">
                    READ THE MANUAL
                  </span>
                  <div className="hidden sm:block">
                    <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1.5 after:bg-red-700 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 pb-1">
                      READ THE
                    </span>
                    <br />
                    <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1.5 after:bg-red-700 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 pb-1">
                      MANUAL
                    </span>
                  </div>
                </h3>
              </a>

              <a href="/manual">
                <img
                  src="/assets/vector/arrow_forward.svg"
                  alt="Arrow"
                  className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 group-hover:scale-110 transition-transform duration-500"
                />
              </a>
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
