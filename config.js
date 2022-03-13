const repositoriesUrl = {
  'api-graphql': 'https://github.com/rivaslive/api-graphql.git',
  'api-rest': 'https://github.com/rivaslive/api-rest.git',
  'ts-api-rest': 'https://github.com/rivaslive/ts-api-rest.git'
};

const questions = [
  {
    type: 'input',
    name: 'appName',
    message: "Please enter your new project's name.",
  },
  {
    type: 'list',
    name: 'template',
    message: 'Select template for your api.',
    choices: ['api-rest', 'api-graphql', 'ts-api-rest'],
  },
];

module.exports = {
  questions,
  repositoriesUrl,
};
