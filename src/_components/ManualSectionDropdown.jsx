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

  const groupedSections = sections.reduce((acc, section) => {
    acc[section.chapter] = acc[section.chapter] || [];
    acc[section.chapter].push(section);
    return acc;
  }, {});

  const adjacents = sections.map((section, index) => {
    const prev = index > 0 ? sections[index - 1] : null;
    const next = index < sections.length - 1 ? sections[index + 1] : null;
    return {
      id: section.id,
      prev: prev
        ? { id: prev.id, title: prev.title, chapter: prev.chapter }
        : null,
      next: next
        ? { id: next.id, title: next.title, chapter: next.chapter }
        : null,
    };
  });
    .sort((a, b) => {
      if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter;
      }
      return a.section - b.section;
    }); // Sort by chapter, then by section within chapter

  const groupedSections = sections.reduce((acc, section) => {
    acc[section.chapter] = acc[section.chapter] || [];
    acc[section.chapter].push(section);
    return acc;
  }, {});

  const adjacents = sections.map((section, index) => {
    const prev = index > 0 ? sections[index - 1] : null;
    const next = index < sections.length - 1 ? sections[index + 1] : null;
    return {
      id: section.id,
      prev: prev
        ? { id: prev.id, title: prev.title, chapter: prev.chapter }
        : null,
      next: next
        ? { id: next.id, title: next.title, chapter: next.chapter }
        : null,
    };
  });

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div id="manual-top" />
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

      {/* Desktop Table of Contents */}
      <div className="max-md:hidden flex flex-wrap rounded relative sticky top-0 z-20 py-2">
        <NavigationLinks groupedSections={groupedSections} />
      </div>

      {/* Mobile Table of Contents */}
      <div className="flex md:hidden text-xs rounded relative sticky top-0 z-20 py-2">
        <NavigationLinks groupedSections={groupedSections} mobile={true} />
      </div>

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

      {/* Adjacents for each section */}
      {adjacents.map((adjacent) => (
        <div
          key={`nav-${adjacent.id}`}
          className={`hidden peer-checked/${adjacent.id}:flex justify-between mt-4`}
        >
          {adjacent.prev && (
            <label
              htmlFor={adjacent.prev.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded w-1/2 manual-label"
            >
              ← Previous -{" "}
              {`${adjacent.prev.chapter !== 0 && adjacent.prev.section !== 0 ? `Chapter ${adjacent.prev.chapter}` : ""}`}{" "}
              {adjacent.prev.title}
            </label>
          )}
          {adjacent.next && (
            <label
              htmlFor={adjacent.next.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded w-1/2 manual-label"
            >
              Next -{" "}
              {`${adjacent.next.chapter !== 0 && adjacent.next.section !== 0 ? `Chapter ${adjacent.next.chapter}` : ""}`}
              , {adjacent.next.title} →
            </label>
          )}
        </div>
      ))}

      {/* Adjacents for each section */}
      {adjacents.map((adjacent) => (
        <div
          key={`nav-${adjacent.id}`}
          className={`hidden peer-checked/${adjacent.id}:flex justify-between mt-4`}
        >
          {adjacent.prev && (
            <label
              htmlFor={adjacent.prev.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded w-1/2 manual-label"
            >
              ← Previous -{" "}
              {`${adjacent.prev.chapter !== 0 && adjacent.prev.section !== 0 ? `Chapter ${adjacent.prev.chapter}` : ""}`}{" "}
              {adjacent.prev.title}
            </label>
          )}
          {adjacent.next && (
            <label
              htmlFor={adjacent.next.id}
              className="cursor-pointer px-6 py-3 hover:text-green text-primary rounded w-1/2 manual-label"
            >
              Next -{" "}
              {`${adjacent.next.chapter !== 0 && adjacent.next.section !== 0 ? `Chapter ${adjacent.next.chapter}` : ""}`}
              , {adjacent.next.title} →
            </label>
          )}
        </div>
      ))}
    </section>
  );
}

function NavigationLinks({ groupedSections, mobile = false }) {
  return Object.entries(
    groupedSections, // Group sections by chapter
  ).map(([chapter, chapterSections]) => (
    <div
      className="relative group focus-within:block"
      key={`chapter-${chapter}`}
    >
      <label className="cursor-pointer block w-full bg-background-grey px-4 sm:px-6 lg:px-12 py-3 font-bold text-primary group-hover:bg-green group-hover:text-white">
        {mobile
          ? Number(chapter) === 0
            ? "Intro"
            : `Ch. ${chapter}`
          : Number(chapter) === 0
            ? "Introduction"
            : `Chapter ${chapter}`}
      </label>
      <div className="absolute top-full left-0 w-full max-w-screen hidden group-hover:flex group-focus-within:flex flex-col bg-white rounded shadow-lg z-10 max-h-[60vh] overflow-y-auto text-left">
        {chapterSections.map((section) => (
          <label
            htmlFor={section.id}
            key={`label-${section.id}`}
            className="cursor-pointer px-2 sm:px-6 py-3 hover:bg-green hover:text-white text-primary manual-label"
          >
            {mobile ? `Sec. ${section.section}` : section.title}
          </label>
        ))}
      </div>
    </div>
  ));
}

function NavigationLinks({ groupedSections, mobile = false }) {
  return Object.entries(
    groupedSections, // Group sections by chapter
  ).map(([chapter, chapterSections]) => (
    <div
      className="relative group focus-within:block"
      key={`chapter-${chapter}`}
    >
      <label className="cursor-pointer block w-full bg-background-grey px-4 sm:px-6 lg:px-12 py-3 font-bold text-primary group-hover:bg-green group-hover:text-white">
        {mobile
          ? Number(chapter) === 0
            ? "Intro"
            : `Ch.${chapter}`
          : Number(chapter) === 0
            ? "Introduction"
            : `Chapter ${chapter}`}
      </label>
      <div className="absolute top-full left-0 w-full max-w-screen hidden group-hover:flex group-focus-within:flex flex-col bg-white rounded shadow-lg z-10 max-h-[75vh] overflow-y-auto text-left">
        {chapterSections.map((section) => (
          <label
            htmlFor={section.id}
            key={`label-${section.id}`}
            className="cursor-pointer px-2 sm:px-6 py-3 hover:bg-green hover:text-white text-primary manual-label"
          >
            {mobile ? `Sec.${section.section}` : section.title}
          </label>
        ))}
      </div>
    </div>
  ));
}
