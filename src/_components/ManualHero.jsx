export default function ManualHero() {
  return (
    <header
      className="relative w-full h-80 sm:h-screen bg-center"
      style={{ backgroundImage: "url('/assets/manual_hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-2xl md:text-6xl font-bold mb-6 py-16 px-32">
          Explore our manual for resources on <strong>medical debt.</strong>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
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
      className={`${backgroundColor} ${hoverColor} border-lg text-white px-6 py-2 rounded-md flex items-center justify-center`}
    >
      <img src="/assets/vector/download.svg" className="pr-2" alt="Download" />
      <strong>{text}</strong>
    </a>
  );
}
