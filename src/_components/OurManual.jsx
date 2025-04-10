import { data } from "./OurManualData.js";

export default function OurManual() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  return (
    <section className="flex flex-col md:flex-row px-6 py-12 mx-auto gap-[150px] bg-neutral-200">
      <section className="flex flex-col md:flex-row px-6 py-12 mx-auto gap-[150px] max-w-6xl">
        <div className="flex-1">
          <h1 className="text-4xl font-light text-[#8A9A5B] mb-6">
            Explore our manual
          </h1>
          <article className="text-gray-800 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate nisi ut bibendum egestas. Suspendisse neque elit, aliquam
            et interdum at, luctus in neque.
          </article>

          <div className="relative flex items-center overflow-hidden max-w-6xl">
            <button
              onClick={slideLeft}
              className="opacity-50 hover:opacity-100 cursor-pointer z-10"
              aria-label="Scroll Left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              id="slider"
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {data.map((item) => (
                <div
                  key={item.title}
                  className="inline-block align-top w-[250px] bg-white rounded-xl shadow-md p-6 mx-2 overflow-hidden"
                >
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <h3 className="uppercase text-xs tracking-widest mt-2 mb-4">
                    {item.subheading}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 break-words whitespace-normal">
                    {item.paragraph}
                  </p>
                  <button className="bg-red-700 text-white px-4 py-2 text-sm rounded-md">
                    {item.button_text}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={slideRight}
              className="opacity-50 hover:opacity-100 cursor-pointer z-10"
              aria-label="Scroll Right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
