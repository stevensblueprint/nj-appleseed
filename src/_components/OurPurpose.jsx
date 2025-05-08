export default function OurPurpose() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between px-6 py-12 md:py-36 max-w-5xl mx-auto">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl font-bold text-dark-green">OUR PURPOSE</h1>

        <article className="py-[26px] text-black text-xl">
          Medical debt is a growing crisis affecting millions of Americans,
          often pushing families into financial hardship. This platform will
          provide downloadable legal guides, sample forms, FAQs, and video
          tutorials to help individuals navigate medical debt disputes,
          insurance appeals, and payment negotiations. The site will also
          connect users with legal aid services and resources, making it easier
          for them to access the support they need.
        </article>

        <a
          href="/about"
          className="bg-primary text-white py-4 px-16 md:max-w-xs text-xl font-bold rounded-lg text-center hover:bg-secondary transition-colors"
        >
          About us
        </a>
      </div>

      <div className="flex items-center justify-center min-h-64 md:max-w-xs max-md:py-[26px] mt-6 px-4">
        <img
          src="/assets/medical_debt.png"
          alt="Placeholder Image"
          className="h-auto object-contain"
        />
      </div>
    </section>
  );
}
