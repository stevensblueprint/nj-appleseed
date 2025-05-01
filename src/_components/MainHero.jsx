export default function MainHero() {
  return (
    <header
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: "url(/assets/image.png)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
    <div className="relative z-10 flex flex-col justify-center items-start h-full p-10 text-white max-w-lg md:max-w-xl">
    <p className="md:text-6xl text-5xl md:leading-snug font-black md:mx-6 max-w-5xl align-middle">Empowering individuals to protect their financial well-being.</p>
    </div>
  </header>
  );
}
