export default function GenericHero({
  title,
  description,
  image,
}) {
  return (
    <section className="grow flex space-between flex-col min-h-[600px] lg:flex-row lg:items-center relative overflow-hidden bg-primary text-white px-6 md:px-12 lg:px-32">
      <div className="py-8 md:py-16 lg:py-0 w-full lg:pr-16">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl leading-snug md:leading-[1.3] tracking-wide mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl leading-snug md:leading-[1.3] mb-6 md:mb-10 lg:mb-14">
          {description}
        </p>
      </div>
      <div className="flex sm:w-full lg:w-3/4 justify-center p-2 sm:p-16 lg:max-w-[600px] lg:max-h-[550px] mb-8">
        <img
          src={image.src}
          alt={image.alt}
          className={image.className ?? ""}
        />
      </div>
    </section>
  );
}