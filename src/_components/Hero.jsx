export default function Header() {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-10 text-white max-w-lg">
        <h1 className="text-5xl font-bold mb-4">Giving a voice</h1>
        <p className="text-xl mb-6">to the people of New Jersey.</p>
        <a
          href="#"
          className="bg-primary hover:hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          DONATE TODAY
        </a>
      </div>
    </header>
  );
}
