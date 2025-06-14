export default function OurPurpose() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl font-bold text-green">OUR PURPOSE</h1>

        <article className="py-[24px] text-black text-xl">
          Medical debt is a growing crisis affecting millions of Americans,
          often pushing families into financial hardship. This platform will
          provide downloadable legal guides, sample forms, FAQs, and video
          tutorials to help individuals navigate medical debt disputes,
          insurance appeals, and payment negotiations. The site will also
          connect users with legal aid services and resources, making it easier
          for them to access the support they need.
        </article>
      </div>

      <div className="flex items-center justify-center min-h-64 md:h-48 md:max-w-xs max-md:py-[26px] px-4">
        <img
          src="/assets/ourpurpose.png"
          alt="Our Purpose Image"
          className="h-auto object-contain"
        />
      </div>
    </section>
  );
}
