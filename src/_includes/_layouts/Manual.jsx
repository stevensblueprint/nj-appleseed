import Header from "../../_components/Header.jsx";
import ManualHero from "../../_components/ManualHero.jsx";
import ManualComp from "../../_components/ManualComp.jsx";

export default function Manual({ title }) {
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
        <ManualHero />
        <ManualComp />
        </body>
    </html>
  );
}
