export default function ManualChapterDropdown({ search }) {
  const chapters = search.pages("type=chapter").map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    content: chapter.content,
  }));

  return (
    <div className="flex flex-col gap-4">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{chapter.title}</h2>
          <p>{chapter.content}</p>
        </div>
      ))}
    </div>
  );
}
