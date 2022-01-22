const repositoriesUrl = {
  "default-vite": "https://github.com/rivaslive/crn-graphql.git",
  graphql: "https://github.com/rivaslive/crn-graphql.git",
  rest: "https://github.com/rivaslive/crn-graphql.git",
};

const questions = [
  {
    type: "input",
    name: "appName",
    message: "Please enter your new project's name.",
  },
  {
    type: "list",
    name: "template",
    message: "Select template for your api.",
    choices: ["default-vite", "graphql", "rest"],
  },
];

module.exports = {
  questions,
  repositoriesUrl,
};
