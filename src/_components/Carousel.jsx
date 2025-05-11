export default function Carousel({ first, second }) {
  return (
    <>
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-[#8A9A5B] mb-6">{first.name}</h2>
        <article className="mb-8">{first.description}</article>

        <div className="relative">
          <div className="flex items-center">
            <button className="absolute left-0 z-10 text-4xl text-black">
              &#10094;
            </button>
            
            <div className="flex overflow-x-auto gap-4 py-4 px-12">
              {first.items && first.items.map((item, index) => (
                <div key={`first-item-${index}`} className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-auto object-contain mb-4"
                  />
                </div>
              ))}
            </div>
            
            <button className="absolute right-0 z-10 text-4xl text-black">
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {second && second.name && (
        <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-200">
          <h2 className="text-4xl font-light text-[#8A9A5B] mb-6">{second.name}</h2>
          <article className="mb-8">{second.description}</article>

          <div className="relative">
            <div className="flex items-center">
              <button className="absolute left-0 z-10 text-4xl text-black">
                &#10094;
              </button>
              
              <div className="flex overflow-x-auto gap-4 py-4 px-12">
                {second.items && second.items.map((item, index) => (
                  <div key={`second-item-${index}`} className="flex-shrink-0 w-full md:w-1/3 bg-white rounded-lg p-6 min-h-[250px] flex flex-col justify-between">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-auto object-contain mb-4"
                    />
                  </div>
                ))}
              </div>
              
              <button className="absolute right-0 z-10 text-4xl text-black">
                &#10095;
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}