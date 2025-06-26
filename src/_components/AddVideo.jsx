export default function AddVideo({ videos }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
            {videos.map((video) => (
                <div>
                    <iframe 
                        src={`https://www.youtube.com/embed/${video.link}`}
                        className="w-full h-96"
                        title={video.header}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    </section>
  );
}

