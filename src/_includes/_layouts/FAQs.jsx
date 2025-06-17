export default function FAQs({ title, faqs, text, comp }) {
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
          title="Frequently Asked Questions"
          description="Find answers to common questions people have regarding medical debt."
          image={{
            src: "/assets/vector/faq_hero.svg",
            alt: "FAQs",
          }}
        />
        <div className="px-6 pb-36 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <comp.FAQDropdown contents={faq} index={index} />
          ))}
        </div>
        <comp.Footer />
      </body>
    </html>
  );
}
