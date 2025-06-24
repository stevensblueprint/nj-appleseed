import ReactMarkdown from "react-markdown";

export default function ManualSectionDropdown({ search }) {
  // Retrieve every page in the 'manual' directory which is marked as type "section"
  const sections = search
    .pages("type=section")
    .map((section) => ({
      id: section.id,
      title: section.title,
      section: section.section,
      chapter: section.chapter,
      body: section.content, // markdown content
    }))
    .sort((a, b) => {
      if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
      }
      return a.section - b.section;
    }); // Sort by chapter, then by section within chapter

  const adjacents = sections.map((section, index) => {
    const prev = index > 0 ? sections[index - 1] : null;
    const next = index < sections.length - 1 ? sections[index + 1] : null;
    return {
      id: section.id,
      prev: prev ? { id: prev.id, title: prev.title } : null,
      next: next ? { id: next.id, title: next.title } : null,
    };
  });

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div id="manual-top" />
      {/* Inputs for each section */}
      {sections.map((section) => (
        <input
          id={section.id}
          type="radio"
          name="manualtabs"
          title={`${section.id}-tab`}
          key={`input-${section.id}`}
          className={`hidden peer/${section.id}`}
          defaultChecked={section.chapter === 0}
        />
      ))}

      {/* Labels for inputs and styling for manual dropdown */}
      <div className="flex flex-wrap md:flex-row flex-col rounded relative sticky top-0 z-20">
        {Object.entries(
          sections.reduce((acc, section) => {
            acc[section.chapter] = acc[section.chapter] || [];
            acc[section.chapter].push(section);
            return acc;
          }, {}),
        ).map(([chapter, chapterSections]) => (
          <div
            className="relative group focus-within:block"
            key={`chapter-${chapter}`}
          >
            <label
              htmlFor={`${chapterSections[0].id}`}
              className="cursor-pointer block w-full bg-background-grey px-8 py-3 font-bold text-primary group-hover:bg-green group-hover:text-white"
            >
              {Number(chapter) === 0 ? "Introduction" : `Chapter ${chapter}`}
            </label>
            <div className="absolute top-full left-0 w-full md:min-w-max hidden group-hover:flex group-focus-within:flex flex-col bg-white rounded shadow-lg z-10">
              {chapterSections
                .filter((section) => section.section !== 0) // Only include sections that are not 0
                .map((section) => (
                  <label
                    htmlFor={section.id}
                    key={`label-${section.id}`}
                    className="cursor-pointer px-6 py-3 hover:bg-green hover:text-white text-primary sm:whitespace-nowrap manual-label"
                  >
                    {section.title}
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Adjacents for each section */}
      {adjacents.map((adjacent) => (
        <div
          key={`nav-${adjacent.id}`}
          className={`hidden peer-checked/${adjacent.id}:flex justify-between mt-4`}
        >
          {adjacent.prev && (
            <label
              htmlFor={adjacent.prev.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded"
            >
              ← Previous: {adjacent.prev.title}
            </label>
          )}
          {adjacent.next && (
            <label
              htmlFor={adjacent.next.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded"
            >
              Next: {adjacent.next.title} →
            </label>
          )}
        </div>
      ))}

      {/* Content of each individual section */}
      {sections.map((section) => (
        <section
          key={`content-${section.id}`}
          className={`overflow-hidden max-h-0 peer-checked/${section.id}:max-h-none peer-checked/${section.id}:py-12`}
          id="manual-content"
        >
          <ReactMarkdown className="prose max-w-none">
            {section.body}
          </ReactMarkdown>
        </section>
      ))}
    </section>
  );
}
