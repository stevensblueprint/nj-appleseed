export default function AddVideo({ videos }) {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <iframe 
                src={`https://www.youtube.com/embed/${videos.link}`}
                className="w-full h-96"
                title={videos.header}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </section>
    );
}