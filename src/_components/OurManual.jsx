export default function OurManual() {
  const scroll = (direction) => {
    const container = document.getElementById("manual-scroll");
    const scrollAmount = 340;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-light text-[#8A9A5B] mb-6">
          Explore our manual
        </h1>
        <article className="text-gray-800 mb-8">
          Introduction to the purpose and content of the manual. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed vulputate nisi ut
          bibendum egestas. Suspendisse neque elit, aliquam et interdum at,
          luctus in neque.
        </article>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow"
          >
            &#10094;
          </button>

          <div
            id="manual-scroll"
            className="flex overflow-x-auto scroll-smooth gap-4 pb-4 px-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {[1, 2, 3, 4, 5, 6].map((chapter) => (
              <div
                key={chapter}
                className="bg-white rounded-xl shadow-md p-6 w-[300px] flex-shrink-0"
              >
                <h3 className="font-bold text-lg mb-1">Chapter {chapter}</h3>
                <h4 className="uppercase text-xs font-semibold text-gray-600 mb-2">
                  Rights of Uninsured Patients
                </h4>
                <p className="text-sm text-gray-800 mb-4">
                  For those who have health insurance of some kind – private
                  insurance through your job or an individual policy bought on
                  an insurance exchange, or through some public program like NJ
                  FamilyCare, Medicaid or Medicare, this is for you.
                </p>
                <button className="bg-red-800 text-white text-sm py-2 px-4 rounded hover:bg-red-900 transition-colors">
                  READ MORE
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
