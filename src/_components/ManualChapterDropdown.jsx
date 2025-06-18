export default function ManualChapterDropdown({ search }) {
  const sections = search.pages("type=section");

  const chapters = sections.filter((section) => section.section === 0);

  // TODO: In the markdown files, add <div id="section-id">...</div>
  // to allow navigation to jump to those specific sections.

  return (
    <section className="flex flex-col py-8 px-52">
      <h1 className="text-4xl font-bold text-dark-green mb-6">Full Manual</h1>
      <div className="flex">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="flex items-center bg-background-grey md:px-12 py-4 rounded shadow"
          >
            <h2 className="text-lg text-primary font-bold">
              {chapter.chapter_number === 0
                ? "Introduction"
                : `Chapter ${chapter.chapter_number}`}
            </h2>
            <img
              className="ml-2 w-4 h-4 fill-primary"
              src="/assets/vector/dropdown_arrow.svg"
              alternate="arrow"
            />
            {/* TODO: Have a scrollable component where the chapter contents render */}
            {/* <p>{chapter.content}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
