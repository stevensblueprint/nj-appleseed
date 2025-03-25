import Header from "../../_components/Header.jsx";
import OurMission from "../../_components/OurMissions.jsx";

export default function Home({ title, children }) {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body className="bg-gray-100 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </body>
        </html>
    );
}