#!/usr/bin/env node
"use strict";

const inquirer = require("inquirer");
const { spawnSync } = require("child_process");
const { questions, repositoriesUrl } = require("./config");

console.log("Esto lo reconoce");
const createProject = ({ appName, template }) => {
  const child = spawnSync("git", [
    "clone",
    repositoriesUrl[template],
    `${process.cwd()}/${appName}`,
  ]);
  console.log(`${child.stderr}`);
  console.log("🚀 Created project successfully");
};

const createQuestions = () => {
  inquirer.prompt(questions).then((answers) => {
    const { appName, template } = answers;
    if (!appName || !template) {
      createQuestions();
    } else {
      createProject({ appName, template });
    }
  });
};

createQuestions();
