export default function About({ title, text, organizations, comp }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <comp.Header />
        <comp.GenericHero text="About Us" image_url="/assets/image.png" />
        <p className="px-8 text-lg max-w-6xl mx-auto">{text}</p>
        <div className="px-6 pb-36 max-w-6xl mx-auto">
          {organizations.map((organization, index) => (
            <comp.GenericDropdown contents={organization} index={index} />
          ))}
        </div>
        <comp.Footer />
      </body>
    </html>
  );
}
