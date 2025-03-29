export default function Header() {
    return (
      <header
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image.png')" }}
      >
        <div className="relative z-10 flex flex-col justify-center h-full p-10 text-black max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Explore our manual for resources on medical debt.</h1>
          <a
            href="#"
            className="bg-maroon text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.75 21.25V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V21.25M9.91667 14.1667L17 21.25M17 21.25L24.0833 14.1667M17 21.25V4.25" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            DOWNLOAD A COPY
          </a>
        </div>
      </header>
    );
  }
  