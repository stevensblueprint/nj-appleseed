export default function ManualPage({
  comp,
  title,
  chapter,
  section,
  children,
}) {
  // TODO: Use search to get and group each by chapter and section
  // TODO: add an additional prop to .md metadata called url.
  // TODO: Key will be the chapter/section, value will be the URL to that section.
  // TODO: Create a sidebar similar to https://www.njcourts.gov/self-help/forms
  // const navigation = {
  //   "Chapter 1"
  // }

  /**
   * TODO: Have section title next to book. Almost like a hero. Introduction on the actual manual page with content component and sidebar. Each individual page will have a return to manual in its hero
   */
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-00LR9GZHMZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-00LR9GZHMZ");
        `,
          }}
        />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <comp.Header />
        <div id="manual-content" className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </div>
        <comp.Footer />
      </body>
    </html>
  );
}
