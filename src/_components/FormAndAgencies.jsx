export default function FormAndAgencies(title, comp) {
  return (
    <>
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-[#8A9A5B] mb-6">Forms</h2>
        <article className="mb-8">Description here!</article>

        <div className="relative">
          <div className="flex items-center">
            <button className="absolute left-0 z-10 text-4xl text-black">
              &#10094;
            </button>

            <div className="flex overflow-x-auto gap-4 py-4 px-12">
              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                <img
                  src="/assets/placeholder.png"
                  alt="Form placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>

              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                <img
                  src="/assets/placeholder.png"
                  alt="Form placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>

              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                <img
                  src="/assets/placeholder.png"
                  alt="Form placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>
            </div>

            <button className="absolute right-0 z-10 text-4xl text-black">
              &#10095;
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-[#8A9A5B] mb-6">Agencies</h2>
        <article className="mb-8">
          links to agencies with whom to file complaints
        </article>

        <div className="relative">
          <div className="flex items-center">
            <button className="absolute left-0 z-10 text-4xl text-black">
              &#10094;
            </button>

            <div className="flex overflow-x-auto gap-4 py-4 px-12">
              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col">
                <img
                  src="/assets/placeholder.png"
                  alt="Agency placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>

              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                <img
                  src="/assets/placeholder.png"
                  alt="Agency placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>

              <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                <img
                  src="/assets/placeholder.png"
                  alt="Agency placeholder"
                  className="w-full h-auto object-contain mb-4"
                />
              </div>
            </div>

            <button className="absolute right-0 z-10 text-4xl text-black">
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
