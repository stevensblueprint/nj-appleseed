export default function Resources({ title, sections, comp }) {
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
                <comp.GenericHero text="Resources & Tools" image_url="/assets/image.png"/>
                
                {sections.map((section, index) => (
                  index % 2 === 0 ? (
                    <comp.Carousel 
                      key={`section-${index}`}
                      first={section} 
                      second={sections[index + 1] || { name: "", description: "", items: [] }} 
                    />
                  ) : null
                ))}
                
                <comp.Footer />
              </body>
            </html>
    );
}
