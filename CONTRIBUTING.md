# 🚀 Contribution Workflow

Thank you for your interest in contributing to this project! 🎉 Follow the steps below to set up your development environment and submit contributions.

## 🏁 Getting Started

1. **🔗 Fork the Repository**: Click the "Fork" button on the GitHub repository page to create your own copy. You can fork the repository using:

   - [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop)
   - [Command Line](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository)
   - [GitHub Codespaces](https://github.com/features/codespaces)

1. **📂 Clone Your Fork**: Clone your forked repository to your local machine:
   ```sh
   git clone https://github.com/YOUR_USERNAME/vue3-openlayers.git
   cd vue3-openlayers
   ```
1. **📦 Install Dependencies**: Run the following command to install required dependencies:
   ```sh
   npm install
   ```
1. **💻 Start Local Development**: Use the following command to start the development environment:
   ```sh
   npm run serve
   ```
1. **📜 Read Guidelines**: Have you read the [code of conduct](CODE_OF_CONDUCT.md)?

## 🔄 Keeping Your Fork Updated

To sync your fork with the latest changes from the main repository:

1. **🌍 Add the Main Repository as a Remote** (if not already added):

   ```sh
   git remote add upstream https://github.com/MelihAltintas/vue3-openlayers.git
   ```

2. **📥 Fetch the Latest Changes**:

   ```sh
   git fetch upstream
   ```

3. **🔀 Merge the Changes into Your Local Branch**:

   ```sh
   git checkout main
   git merge upstream/main
   ```

4. **📤 Push the Updated Branch to Your Fork**:

   ```sh
   git push origin main
   ```

## 🛠️ Making Changes

Ensure your changes include documentation updates where applicable. Follow the steps above to create a new branch and make your updates.

Before submitting, review your pull request:

- Confirm user experience matches the design.
- Ensure content and code accuracy.
- Check for grammar and style guide adherence.
- Troubleshoot any failing checks.

1. **🌿 Create a Branch**: Before making changes, create a new branch:

   ```sh
   git checkout -b feature/your-feature-name
   ```

2. **✏️ Make Your Changes**: Edit files and implement your changes.

3. **🎨 Verify Style**: Follow Code Guidelines by checking for lint errors and format code correctly:

   ```sh
   npm run lint # check for linting issues
   npm run lint-fix # check for linting issues and auto-fix if possible
   npm run format # format the code using prettier
   ```

4. **✅ Commit Your Changes**: Follow conventional commit messages:

   ```sh
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **🚀 Push Your Branch**: Push your changes to your fork:

   ```sh
   git push origin feature/your-feature-name
   ```

## 🔃 Submitting a Pull Request

1. Go to the original repository on GitHub.
2. Click on "New Pull Request".
3. Select your branch and provide a clear description of your changes.
4. Submit the pull request. 🎯

## 🔍 Code Review & Merging

We review every PR to ensure high content quality.

- ✅ Your pull request will be reviewed by maintainers.
- ✏️ You may be asked to make modifications.
- Reviews are respectful and constructive.
- Follow-up on review comments and mark as resolved when done.
- 🎉 Once approved, your changes will be merged into the main branch.

## 📌 Additional Notes

- 🔍 Ensure that all changes adhere to the project's coding guidelines.
- 🧪 Run tests before submitting changes (if applicable).
- 🔄 Keep your branch up to date with the latest changes from `main`.

### ⛙ Merging

Upon merging, you'll be recognized in the [contributor chart](https://github.com/MelihAltintas/vue3-openlayers/graphs/contributors).

Thank you for contributing! 🙌
