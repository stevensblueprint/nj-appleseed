import ReactMarkdown from "react-markdown";

export default function ManualSectionDropdown({ search }) {
  const sections = search
    .pages("type=section")
    .map((section) => ({
      id: section.id,
      title: section.title,
      section: section.section,
      chapter: section.chapter,
      body: section.content,
    }))
    .sort((a, b) => a.chapter - b.chapter);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Radio inputs for each section */}
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

      {/* Styling for manual dropdown */}
      <div className="flex flex-row bg-background-grey rounded shadow relative">
        {Object.entries(
          sections.reduce((acc, section) => {
            acc[section.chapter] = acc[section.chapter] || [];
            acc[section.chapter].push(section);
            return acc;
          }, {}),
        ).map(([chapter, chapterSections]) => (
          <div className="relative group" key={`chapter-${chapter}`}>
            <div className="cursor-pointer px-8 py-3 font-bold text-primary group-hover:bg-green group-hover:text-white">
              Chapter {chapter}
            </div>
            <div className="absolute top-full left-0 mt-0 min-w-max hidden group-hover:flex flex-col bg-white rounded shadow-lg z-10">
              {chapterSections.map((section) => (
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

      {/* Content Of Each Individual Section */}
      {sections.map((section) => (
        <section
          key={`content-${section.id}`}
          className={`overflow-hidden max-h-0 peer-checked/${section.id}:max-h-none peer-checked/${section.id}:py-6`}
        >
          <ReactMarkdown className="prose max-w-none">
            {section.body}
          </ReactMarkdown>
        </section>
      ))}
    </section>
  );
}
