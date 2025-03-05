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

   Restart your terminal or enter a new one. To confirm deno was installed, check the version by running `deno --version`, should see something like `deno 2.1.4`

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
