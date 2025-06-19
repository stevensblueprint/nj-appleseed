export default function Carousel({ resource }) {
  return (
    <section className="mt-4 mb-4 py-4 sm:py-8 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold text-green mb-6">
        {resource.name}
      </h2>
      <article className="mb-8 italic text-base sm:text-xl">
        {resource.description}
      </article>
      <div className="relative">
        <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 py-4 px-4">
          {resource.items &&
            resource.items.map((item, index) => (
              <div
                className="flex-shrink-0 snap-center bg-background-grey rounded-lg shadow-lg 
                           w-full sm:w-1/2 lg:w-1/3 h-56 sm:h-64 lg:h-72"
                key={`resource-item-${index}`}
              >
                <a
                  className="flex flex-col justify-between p-6 w-full h-full"
                  target="_blank"
                  href={item.url}
                >
                  <div>
                    <h3 className="text-md md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-base">{item.description}</p>
                  </div>
                  <button className="mt-4 self-start bg-primary text-white px-3 py-1 rounded">
                    Read More
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="border-b-4 border-dark-green pt-12"></div>
    </section>
  );
}
