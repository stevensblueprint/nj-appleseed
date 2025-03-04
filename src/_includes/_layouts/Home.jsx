export default function Home({ children, title, about, url }) {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body className="bg-gray-100 min-h-screen">
          <header className="bg-white shadow-md py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
            </div>
          </header>
  
          <main className="container mx-auto px-4 py-8">
            {about && (
              <section className="mb-10 bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{about.title}</h2>
                <p className="text-gray-700">{about.description}</p>
              </section>
            )}
            <div className="bg-white p-6 rounded shadow-md prose max-w-none">
              {children}
            </div>
          </main>
  
          <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
              <p>© {new Date().getFullYear()} Blueprint</p>
            </div>
          </footer>
        </body>
      </html>
    );
  }