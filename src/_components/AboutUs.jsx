export default function AboutUs( {organizations, comp} ) {
  return (
    <section className="flex flex-col md:justify-between px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-green">ABOUT US</h1>
      <div className="pb-36 max-w-6xl mx-auto">
          {organizations.map((organization, index) => (
            <comp.AboutDropdown contents={organization} index={index} />
          ))}
        </div>
    </section>
  );
}
