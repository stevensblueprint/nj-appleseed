## Setup for Devs

1. Ensure that you have Deno installed. We are using Deno 2 (version 2.2.2). You can skip this step if you do. If you don't or are unsure, you can use the following command to install it.

   **Homebrew users:**

   `brew install deno`

   **Linux/Non-Homebrew Users:**

   Run the following in your terminal:

   `curl -fsSL https://deno.land/x/install/install.sh | sh`

   If you are using bash run `code $HOME/.bashrc` to open your bash configuration file in VSCode.

   If you are using zsh run `code $HOME/.zshrc` to open your zsh configuration file in VSCode.

   In your respective file add the following:

   ```
   export DENO_INSTALL="/home/REPLACE_WITH_YOUR_USER/.deno"
   export PATH="$DENO_INSTALL/bin:$PATH"
   ```

   Re-run the curl command.

   Restart your terminal or enter a new one. To confirm deno was installed, check the version by running `deno --version`, should see something like `deno 2.2.2`

   You can find more information on the [Deno Docs](https://docs.deno.com/runtime/manual/getting_started/installation)

2. We need to clone the repository, which can be done with the following command:

   - _For beginners_, we recommend having a folder on your computer where you plan on having this repo be stored.
     1. To do such, open your Finder or File Explorer alongside a blank new VSCode window.
     2. Drag the folder (that you wish to have this repository put into) inside of the VSCode window OR do File > Open Folder in VSCode.
     3. Now, inside VSCode open the terminal (In the Top Menu Bar press 'View' > 'Terminal'). You can now run the below command.
   - cloning via https:

     `git clone https://github.com/stevensblueprint/nj-appleseed.git`

3. We can run the project using the following command:

   `deno task serve`

4. You did it! You should see the project running on `http://localhost:3000`

## Content Management System (CMS)

To make it easier for NJ Appleseed contributors to manage content, we are setting
up a Content Management System (CMS) using [LumeCMS](https://lume.land/cms/).

The CMS configuration can be managed in _cms.ts.

To run the CMS locally, you can use the following command:

```bash
deno task lume
```

The following content will be managed through the CMS:
- **Manual Website Content**: The individual page of the manual will be managed. We will create
a CMS collection for each of the individual sections of the manual. Each section
will have its own markdown file (TODO: Create naming convention) and will be 
placed in a folder called `manual`. We might have folders for each chapter such
that the structure is like this:
  ```
  manual/
    chapter-1/
      section-1.md
      section-2.md
    chapter-2/
      section-1.md
      section-2.md
  ```
- **Manual PDF Uploads**: The manual PDF in both Spanish and English can be 
changed through the CMS. We will need to use `cms.upload()`. More info can be found
here: https://lume.land/cms/getting-started/uploads/ 
- **Best Practices**: The best practices can be managed through a single document
- **FAQ**: The FAQ can be managed through a single document
- **Resources**: The resources can be managed through a single document
- **Videos**: The videos can be managed through a single document
- **Homepage**: The homepage can be managed through a single document


ALternative:
Each section of the manual is its own PDF.
We add an Iframe to show the PDF for the manual. This way we can keep the design
of the manual and makes it easier to manage the content. This content might also 
be more appealing to users. 