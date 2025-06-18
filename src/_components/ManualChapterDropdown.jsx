export default function ManualChapterDropdown({ search }) {
  const sections = search.pages("type=section");

  // const Navigation = {
  //   "Introduction": ["ch0-s0"],
  //   "Chapter 1": ["ch1-s0", "ch1-s1", "ch1-s2"],
  //   "Chapter 2": ["ch2-s0", "ch2-s1", "ch2-s2"],
  //   "Chapter 3": ["ch3-s0", "ch3-s1", "ch3-s2"],
  //   "Chapter 4": ["ch4-s0", "ch4-s1", "ch4-s2"],
  // }

  const chapters = search
    .pages("type=chapter")
    .map((chapter) => {
      return {
        chapter: chapter.chapter,
        id: chapter.id,
        sections: chapter.sections,
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
            {/* TODO: Have a scrollable component where the chapter contents render */}
            {/* <p>{chapter.content}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
