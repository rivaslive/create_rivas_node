#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const { spawnSync } = require('child_process');
const { questions, repositoriesUrl } = require('./config');

const createProject = ({ appName, template }) => {
  const verifyGitInstall = spawnSync('git', ['--version']);

  if (verifyGitInstall.error) {
    return console.error(
      'Git is not installed. Please install git and try again.'
    );
  }

  const cloneRepo = spawnSync('git', [
    'clone',
    repositoriesUrl[template],
    `${process.cwd()}/${appName}`,
  ]);

  if (cloneRepo.error) {
    return console.log(`${cloneRepo.stderr}`);
  }

  try {
    process.chdir(`${process.cwd()}/${appName}`);
    console.log(`cd ./${appName}`);

    let packageManager = 'yarn';
    const verifyYarnInstall = spawnSync('yarn', ['--version']);

    if (verifyYarnInstall.error) {
      packageManager = 'npm';
    }

    console.log(`installing devs using ${packageManager}`);
    const installDeps = spawnSync(packageManager, ['install'], {
      stdio: 'inherit',
    });

    if (installDeps.error) {
      return console.log(`${installDeps.stderr}`);
    }

    console.log('🚀 Created project successfully');
    console.log(`Access with cd ${appName}`);
    return console.log(
      `execute ${packageManager}${packageManager !== 'yarn' ? 'run' : ''} dev`
    );
  } catch (error) {
    return console.error(error);
  }
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
