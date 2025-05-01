export default function GenericHero({ text, image_url }) {
    return (
      <header>
      <div
        className={`bg-[url(${image_url})] relative h-[158px] md:h-screen bg-cover bg-center flex items-center justify-center`}
      >
        <div className="z-10 flex p-0 md:p-10 h-0 md:h-screen text-black items-center overflow-hidden">
          <p className="md:text-7xl max-w-5xl font-bold text-5xl text-center align-middle">{text}</p>
        </div>
      </div>
      <div className="flex p-8 text-black items-center justify-center">
          <p className="md:hidden max-w-2xl font-bold text-5xl text-center align-middle">{text}</p>
      </div>
      </header>
    );
  }
  