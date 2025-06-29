# End Medical Debt New Jersey - Website

![Static Badge](https://img.shields.io/badge/Lume-JavaScript-blue)
![Static Badge](https://img.shields.io/badge/Tailwind-CSS-green)
![Static Badge](https://img.shields.io/badge/Blueprint_2025-0078E8)

The website is live at [endmeddebtnj.org](https://endmeddebtnj.org) and its goal is to provide a comprehensive online resource for understanding and managing medical debt in New Jersey. It includes a detailed manual, resources, and guides to help individuals navigate the complexities of medical billing, insurance, and debt collection.

The code here may be out of date, as the production repository has been forked to [here](https://github.com/New-Jersey-Appleseed/nj-appleseed).

## Getting Started

### Prerequisites

- **[Deno](https://deno.com/)**: The runtime for executing Lume. (version 2.2.2 is recommended)
- **[Lume](https://lume.land/)**: The static site generator used to build the website.
- **[Node.js](https://nodejs.org/en)**: Used for running formatting tasks for Tailwind utilties.
- Must be added to the [New Jersey Appleseed organization](https://github.com/New-Jersey-Appleseed) on GitHub to contribute.

### Starting Steps

1. Clone the repository:
   ```git clone git@github.com:New-Jersey-Appleseed/nj-appleseed.git```

2. Change into the project directory:
   ```cd nj-appleseed```

3. Install Node.js dependencies:
   ```npm install```

4. Install deno dependencies and run the website:
   ```deno task serve```

You did it! You should see the project running on `http://localhost:3000`

To run the format task for Tailwind utilities, use:
```npm run format:write```

## File Structure (src)

Each markdown file in the root of the `src` directory is a page on the website. The file names are used to generate the URLs, so they should be descriptive and follow a consistent naming convention.

### src/_components

Includes reusable components that are used across the website. These components are built using JSX styled syntax and can be found in the `_components` directory. Any new components should be added here to maintain consistency and reusability across the site.

### src/_includes/_layouts

The `_includes/_layouts` directory contains the layout files for the website. These files define the overall structure of the pages and are composed of reusable components. Each markdown file specifies a layout in its frontmatter, which determines how the page is rendered.

### src/assets/

- At the root of the `assets` directory are all images used on the website
- **docs** contains PDF files of the full medical debt manual and other resources
- **manual** contains images of certain portions of the manual that are not
  easily represented in markdown, such as income tables.
- **vector** contains SVG files used throughout the site, such as icons and clipart.

### src/css/styles.css

Contains Tailwind global styles and Vanilla CSS. Some portions of the markdown file required Vanilla CSS to render correctly.

### src/js/scroll.js

This file contains JavaScript code that handles scrolling and navigation behavior specifically for the /manual page. It ensures that when a user clicks on a section in the manual's navigation bar, the page scrolls smoothly to the top of the page.

### src/manual/

The `manual` directory contains all written content for the online medical debt manual. Files are organized into subdirectories by chapter and follow a strict naming and metadata convention to support rendering and navigation.

Each section of the manual is a separate Markdown file, and only one section is visible at a time on the `/manual` page. This improves readability by limiting how much content appears on screen at once.

The files have the following metadata structure:

   ```yaml
   ---
   chapter: <CHAPTER_NUMBER>
   section: <SECTION_NUMBER>
   title: "Section <SECTION_NUMBER>: <SECTION_TITLE>"
   id: ch<CHAPTER_NUMBER>-s<SECTION_NUMBER>
   indexable: true
   ---
   ```

   **Note** the `section` field is always 0 for the start of the chapter.

All files must follow the format **chX-sY.md**, where:
- X is the chapter number
- Y is the section number
This convention applies to both the filename and the id field in the frontmatter metadata.

## Special Thanks

Special thanks to [New Jersey Appleseed Public Interest Law Center](https://njappleseed.org/), [New Jersey Citizen Action](https://www.njcitizenaction.org/), and [NJ For Health Care](https://njforhealthcare.org/) for creating the original manual and providing the content for this website.

Also thank you to the [members of Stevens Blueprint](https://sitblueprint.com/projects/nj-appleseed/) who designed and developed the website.
