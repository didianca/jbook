![Alt Text](./public/logo-png.png)
# [Neditor](https://master.d3opb0106jd55l.amplifyapp.com/)

---
## Introduction
Neditor is a versatile online sandbox playground designed for developers seeking a quick and efficient way to experiment with JavaScript. With code cells and text cells, users can easily write, run, and document their code snippets, creating a hassle-free environment for exploration.

## Key Features
- **Flexible** Structure: Arrange code cells and text cells in any order and quantity to suit your workflow.
- **Persistence**: Your data is stored locally, ensuring privacy, and cannot be shared between users.
- **Technologies Used**: Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/docs/), [Redux](https://redux.js.org/), [redux-persist](https://www.npmjs.com/package/redux-persist), [monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react), [uiw/react-md-editor](https://www.npmjs.com/package/@uiw/react-md-editor) and [Bulmaswatch](https://jenil.github.io/bulmaswatch/).
- **Deployment**: Automated and accelerated development lifecycle, ensuring consistent and reliable deployments - [AWS Amplify](https://docs.amplify.aws/javascript/how-amplify-works/)
### Usage tips

  - For Markdown documentation style text editor, use the Add Text button 
  - For JavaScript sandbox code editor , use the Add Code top right corner of each individual cell
  - For deleting a cell there is a cross button in the top right corner of each individual cell as well
  - For previewing results of your code, there is a built-in "show()" function which allows you to log the results to the preview window
  - If you'd like to resie your editors, use the dotted components on each cell to drag and resize as needed.
  - Messy code? Don't worry! The Format button inside the code cell should take care of that for you. Just use it as needed!

## Design Principles
Built on the single responsibility concept, Neditor leverages TypeScript's strict typing for enhanced code quality and maintainability. The interface is intentionally uncomplicated and user-friendly, providing a polished and seamless experience for developers of all levels.

## Achievements
As the creator of Neditor, this project has been instrumental in honing TypeScript skills and gaining a deeper understanding of React development.

## Contribution
Feel free to contribute, report issues, or suggest improvements. Your feedback is valuable in making Neditor an even more powerful and user-friendly tool.

## Developer guide
1. Clone the repository
2. Install dependencies using `npm install --legacy-peer-deps`;
3. Run the application using `npm run start`;

> Note: Use `--legacy-peer-deps` to  restore peerDependency installation behavior from NPM v4 through v6. Issue seems to stem from using react v 17+. See following stackoverflow [thread](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh) for more info on the matter.

<!-- Add more Documentation above this line -->

## Credits

This project was developed as part of **Stephen Grinder's**: *React and Typescript: Build a Portfolio Project* Udemy course. Special thanks to Stephen for providing valuable insights and knowledge.

- Udemy Course: [React and Typescript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/)
- Instructor: [Stephen Grinder](https://www.udemy.com/user/sgslo/)

<!-- Uncomment once course complete.

## License

This project is licensed under the [Your License Name] - see the [LICENSE.md](LICENSE.md) file for details.
-->
