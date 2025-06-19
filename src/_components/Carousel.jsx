export default function Carousel({ first }) {
  return (
    <>
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#367800] mb-6">{first.name}</h2>
        <article className="mb-8">{first.description}</article>
        <div className="relative">
          <div className="flex items-center">
            <div className="flex overflow-x-auto gap-4 py-4 px-12">
              {first.items &&
                first.items.map((item, index) => (
                  <div
                    key={`first-item-${index}`}
                    className="flex w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between"
                  ></div>
                ))}
            </div>
          </div>
        </div>
        <div className="border-b-4 border-[#B2B2B2] mt-12"></div>
      </section>
    </>
  );
}
