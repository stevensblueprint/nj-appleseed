import Header from "../../_components/Header.jsx";

export default function NotFoundLayout() {
  return (
    <section>
      <head>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <main>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
      <div className="mb-8">
        <img 
          src="/assets/placeholder.png" 
          alt="NJ Appleseed Logo" 
          className="w-48 h-auto mx-auto"
        />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 Error! <a href="/" className="text-[#8A9A5B] hover:underline">Click here to go to the homepage.</a>
      </h1>
      
      <article className="text-xl text-gray-700 max-w-2xl mx-auto">
        Unfortunately, the page you are trying to access does not exist.
      </article>
    </div>
        </main>
      </body>
    </section>
  );
} 