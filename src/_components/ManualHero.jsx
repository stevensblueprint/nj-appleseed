export default function ManualHero() {
  return (
    <header
      className="relative w-full h-80 sm:h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/manual_hero_2.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4 sm:px-16 lg:px-32">
          Explore our manual for resources on <strong>medical debt.</strong>
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <DownloadButton
            href="/assets/docs/ConsumerGuideEnglish.pdf"
            text="DOWNLOAD A COPY | ENGLISH"
            backgroundColor="bg-dark-green"
            hoverColor="hover:bg-dark-green/80"
          />
          <DownloadButton
            href="/assets/docs/ConsumerGuideSpanish.pdf"
            text="DESCARGAR UNA COPIA | ESPAÑOL"
            backgroundColor="bg-primary"
            hoverColor="hover:bg-secondary"
          />
        </div>
      </div>
    </header>
  );
}

function DownloadButton({ href, text, backgroundColor, hoverColor }) {
  return (
    <a
      href={href}
      download
      className={`${backgroundColor} ${hoverColor} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md flex items-center justify-center w-full sm:w-auto`}
    >
      <img
        src="/assets/vector/download.svg"
        className="w-5 h-5 pr-2"
        alt="Download"
      />
      <strong className="text-sm sm:text-base">{text}</strong>
    </a>
  );
}
