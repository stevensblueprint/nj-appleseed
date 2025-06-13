export default function Home({ title, children, bestPractices, comp }) {
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
        <comp.GenericHero text="Best Practices" image_url="/assets/image.png" />
        {bestPractices.map((practice, index) => (
          <comp.Practice
            key={index}
            number={index + 1}
            content={practice.content}
          />
        ))}
        <comp.Footer />
      </body>
    </html>
  );
}
