export default function ManualHero() {
    return (
      <header
        className="relative h-[480px] md:h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/image.png')" }}
      >
        <div className="z-10 flex flex-col p-10 text-black items-center">
          <p className="md:text-7xl max-w-2xl font-normal text-5xl pb-8 text-center">Explore our manual for resources on <b>medical debt.</b></p>
          <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/assets/docs/ConsumerMedicalDebtAppleseedManual.pdf" // add path to pdf manual
            className="bg-primary hover:bg-secondary px-6 py-3 flex flex-row  items-center justify-center rounded-lg"
            download={"Medical_Debt_Appleseed_Manual"} // add what we want the manual to be called when added
          >
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="px-2">
                <path d="M29.75 21.25V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V21.25M9.91667 14.1667L17 21.25M17 21.25L24.0833 14.1667M17 21.25V4.25" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <p className="text-white text-lg font-bold">DOWNLOAD A COPY</p>
          </a>
          <div className="bg-dark-green px-6 py-3 flex flex-row items-center justify-center rounded-lg">
                <p className="text-white text-lg font-bold">English | ᐯ</p>
          </div>
          </div>
          
        </div>
      </header>
    );
  }
  