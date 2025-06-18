import ReactMarkdown from "react-markdown";

export default function ManualChapterDropdown({ search }) {
  // Retrieve all chapter and their corresponding section
  const chapters = search
    .pages("type=chapter")
    .map((chapter) => ({
      chapter: chapter.chapter,
      id: chapter.id,
      title: chapter.title,
      body: chapter.content,
      sections: search
        .pages(`type=section chapter=${chapter.chapter}`)
        .map((section) => ({
          id: section.id,
          title: section.title,
          body: section.content,
        })),
    }))
    .sort((a, b) => a.chapter - b.chapter);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Radio inputs for each chapter */}
      {chapters.map((chapter) => (
        <input
          id={chapter.id}
          type="radio"
          name="manualtabs"
          title={`${chapter.id}-tab`}
          key={`input-${chapter.id}`}
          className={`hidden peer/${chapter.id}`}
          defaultChecked={chapter.chapter === 0} // Default to intro or first chapter
        />
      ))}

      {/* Chapter nav bar */}
      <div className="flex flex-row items-end bg-background-grey rounded shadow overflow-x-auto">
        {chapters.map((chapter) => (
          <label
            htmlFor={chapter.id}
            className="cursor-pointer px-6 py-3 hover:bg-green text-primary hover:text-white"
            key={`label-${chapter.id}`}
          >
            <p className={`text-sm font-bold text-nowrap rounded-t`}>
              {chapter.chapter === 0
                ? "INTRODUCTION"
                : `CHAPTER ${chapter.chapter}`}
            </p>
          </label>
        ))}
      </div>

      {/* Content + section dropdowns */}
      {chapters.map((chapter) => (
        <section
          key={`content-${chapter.id}`}
          className={`overflow-hidden max-h-0 peer-checked/${chapter.id}:max-h-none peer-checked/${chapter.id}:py-6`}
        >
          <h1 className="text-3xl font-bold text-dark-green mb-4">
            {chapter.title}
          </h1>
          <ReactMarkdown className="prose max-w-none">
            {chapter.body}
          </ReactMarkdown>

          {/* Section links */}
          <div className="flex flex-col mt-4 bg-gray-50 rounded shadow">
            {chapter.sections.map((section) => (
              <div
                key={section.id}
                className="px-6 py-2 border-b border-gray-200"
              >
                <h2 className="text-red-700 text-sm font-semibold mb-1">
                  {section.title}
                </h2>
                <ReactMarkdown className="prose prose-sm max-w-none">
                  {section.body}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
