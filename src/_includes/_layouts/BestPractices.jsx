export default function BestPractices({ title, bestPractices, comp }) {
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
        <comp.GenericHero
          title="Best Practices"
          description="Be sure to follow these steps in case of a medical emergency."
          image={{
            src: "/assets/vector/best_practices_hero.svg",
            alt: "Best Practices",
          }}
        />
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
