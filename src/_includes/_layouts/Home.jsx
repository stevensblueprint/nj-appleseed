export default function Home({ title, children, comp }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-00LR9GZHMZ"></script>
      <script>
        {() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-00LR9GZHMZ');}}
      </script>
      <body>
        <comp.Header />
        <comp.MainHero />
        <comp.OurPurpose />
        <comp.Footer />
      </body>
    </html>
  );
}
