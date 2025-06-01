export default function MainHero() {
  return (
    <header
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/stethoscope.png)" }}
    >
      <div
        className="flex flex-col justify-center items-start h-full w-full px-4 py-10 md:px-10 text-white max-w-lg md:max-w-xl
        bg-gradient-to-r from-black from-30% via-black/80 via-80% to-transparent"
      >
        <p className="relative z-10 md:text-6xl text-3xl md:leading-snug font-black md:mx-6 max-w-full md:max-w-5xl align-middle">
          Empowering individuals to address the challenge of Medical Debt.
        </p>
      </div>
    </header>
  );
}
