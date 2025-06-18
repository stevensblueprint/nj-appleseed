export default function ManualChapterDropdown({ search }) {
  const chapters = search
    .pages("type=chapter")
    .map((chapter) => ({
      id: chapter.id,
      chapter_number: chapter.chapter_number,
      title: chapter.title,
      content: chapter.content,
    }))
    .sort((a, b) => a.chapter_number - b.chapter_number);

  // TODO: In the markdown files, add <div id="section-id">...</div>
  // to allow navigation to jump to those specific sections.

  return (
    <div className="flex gap-4">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold">
            {chapter.chapter_number === 0
              ? "Introduction"
              : `Chapter ${chapter.chapter_number}`}
          </h2>
          {/* TODO: Have a scrollable component where the chapter contents render */}
          {/* <p>{chapter.content}</p> */}
        </div>
      ))}
    </div>
  );
}
