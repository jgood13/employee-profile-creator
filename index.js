const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");

const teamArr = [];

startApp = () => {
  inquirer
    .prompt([
      {
        name: "managerName",
        type: "input",
        message:
          "Welcome to the profile generator! Please start by entering the Manager name",
      },
      {
        name: "managerEmail",
        type: "input",
        message: "What is the Manager email",
      },
      {
        name: "officeNum",
        type: "number",
        message: "What is the office number?",
      },
    ])
    .then((response) => {
      const manName = response.managerName;
      const manEmail = response.managerEmail;
      const officeNum = response.officeNum;
      const id = 1;
      const newMan = new Manager(manName, id, manEmail, officeNum);
      teamArr.push(newMan);
      addEmpPrompt();
    });
};

const addEmpPrompt = () => {
  inquirer
    .prompt([
      {
        name: "startOver",
        type: "list",
        choices: ["yes, add Engineer", "yes, add intern", "no"],
      },
    ])
    .then((response) => {
      switch (response.startOver) {
        case "yes, add Engineer":
          addEngineer();
          break;
        case "yes, add intern":
          addIntern();
          break;
        case "no":
          finishRender();
          break;
      }
    });
};

addEngineer = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the Engineer?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the email of the Engineer?",
      },
      {
        name: "github",
        type: "input",
        message: "What is the github username of the Engineer?",
      },
    ])
    .then((response) => {
      const name = response.name;
      const id = teamArr.length + 1;
      const email = response.email;
      const github = response.github;
      const newEngineer = new Engineer(name, id, email, github);
      teamArr.push(newEngineer);
      addEmpPrompt();
    });
};

addIntern = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the intern?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the email of the intern?",
      },
      {
        name: "school",
        type: "input",
        message: "What is the school/university of the intern?",
      },
    ])
    .then((response) => {
      const name = response.name;
      const id = teamArr.length + 1;
      const email = response.email;
      const school = response.school;
      const newIntern = new Intern(name, id, email, school);
      teamArr.push(newIntern);
      addEmpPrompt();
    });
};

finishRender = () => {};

startApp();
