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

      <div className="flex flex-row items-end bg-background-grey rounded shadow overflow-x-auto">
        {sections.map((section) => (
          <label
            htmlFor={section.id}
            className="cursor-pointer px-6 py-3 hover:bg-green text-primary hover:text-white"
            key={`label-${section.id}`}
          >
            <p className={`text-sm font-bold text-nowrap rounded-t`}>
              {section.title}
            </p>
          </label>
        ))}
      </div>

      {/* Content + section dropdowns */}
      {sections.map((section) => (
        <section
          key={`content-${section.id}`}
          className={`overflow-hidden max-h-0 peer-checked/${section.id}:max-h-none peer-checked/${section.id}:py-6`}
        >
          <h1 className="text-3xl font-bold text-dark-green mb-4">
            {section.title}
          </h1>
          <ReactMarkdown className="prose max-w-none">
            {section.body}
          </ReactMarkdown>
        </section>
      ))}
    </section>
  );
}
