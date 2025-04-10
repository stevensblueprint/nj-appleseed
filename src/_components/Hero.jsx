export default function Hero() {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-10 text-white max-w-lg">
        <h1 className="text-5xl font-bold font-serif mb-4 relative">
          Giving a{" "}
          <span className="inline-block relative">
            voice
            <img
              src="/assets/green_line.png"
              alt=""
              className="absolute left-0 bottom-0 w-full h-2"
              style={{ transform: "translateY(100%)" }}
            />
          </span>
        </h1>
        <p className="text-xl mb-6 font-serif">to the people of New Jersey.</p>
        <a
          href="#"
          className="bg-red-800 text-white py-4 px-6 rounded text-center hover:bg-red-900 transition-colors"
        >
          DONATE TODAY
        </a>
      </div>
    </header>
  );
}
