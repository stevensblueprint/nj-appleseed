export default function ManualChapterDropdown({ search }) {
  const chapters = search
    .pages("type=chapter")
    .map((chapter) => {
      return {
        chapter: chapter.chapter,
        id: chapter.id,
        sections: search.pages(`type=section chapter=${chapter.chapter}`),
        content: chapter.content,
      };
    })
    .sort((a, b) => a.chapter - b.chapter);

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
              {chapter.chapter === 0
                ? "Introduction"
                : `Chapter ${chapter.chapter}`}
            </h2>
            <img
              className="ml-2 w-4 h-4 fill-primary"
              src="/assets/vector/dropdown_arrow.svg"
              alternate="arrow"
            />
            {chapter.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="ml-4 text-sm text-secondary hover:text-primary"
              >
                {section.title}
              </a>
            ))}
            {/* TODO: Have a scrollable component where the chapter contents render */}
            {/* <p>{chapter.content}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
