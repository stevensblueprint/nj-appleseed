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
    .sort((a, b) => a.section - b.section); // Sort by section number i.e 1-4

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
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
      <div className="flex flex-row rounded relative">
        {Object.entries(
          sections.reduce((acc, section) => {
            acc[section.chapter] = acc[section.chapter] || [];
            acc[section.chapter].push(section);
            return acc;
          }, {}),
        ).map(([chapter, chapterSections]) => (
          <div className="relative group" key={`chapter-${chapter}`}>
            <label
              htmlFor={`${chapterSections[0].id}`}
              className="cursor-pointer bg-background-grey px-8 py-3 font-bold text-primary group-hover:bg-green group-hover:text-white"
            >
              {Number(chapter) === 0 ? "Introduction" : `Chapter ${chapter}`}
            </label>
            <div className="absolute top-full left-0 mt-2 min-w-max hidden group-hover:flex flex-col bg-white rounded shadow-lg z-10">
              {chapterSections
                .filter((section) => section.section !== 0) // Only include sections that are not 0
                .map((section) => (
                  <label
                    htmlFor={section.id}
                    key={`label-${section.id}`}
                    className="cursor-pointer px-6 py-3 hover:bg-green hover:text-white text-primary whitespace-nowrap"
                  >
                    {section.title}
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Content of each individual section */}
      {sections.map((section) => (
        <section
          key={`content-${section.id}`}
          className={`overflow-hidden max-h-0 peer-checked/${section.id}:max-h-none peer-checked/${section.id}:py-12`}
        >
          <ReactMarkdown className="prose max-w-none">
            {section.body}
          </ReactMarkdown>
        </section>
      ))}
    </section>
  );
}
