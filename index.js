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
          "Welcome to the profile generator! Please start by entering the Manager name:",
      },
      {
        name: "managerEmail",
        type: "input",
        message: "What is the Manager email?",
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
          addHtml();
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

addHtml = () => {
  let html = "";
  console.log("Complete! now check out the HTML page!");
  const htmlStart = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./dist/style.css" />
    </head>
    <body>
      <header>
        <nav class="jumbotron jumbotron-fluid is-primary bg-success" id="navbar id="navbar">
          <div class="navbar-brand mb-0 h1 w-100 text-center text-white" id="navbarText">
            Team Profile
          </div>
        </nav>
      </header>`;
  fs.writeFile("./dist/index.html", htmlStart, (err) => {
    if (err) throw err;
  });

  for (let i = 0; i < teamArr.length; i++) {
    let cards = `<main class="d-flex-row" style="align-content:space-between">
    <div class="card" style="width: 15rem">
    <div class="card-body">
      <h4 class="card-title">${teamArr[i].name}</h4>
      <h5 class="border-bottom">${teamArr[i].role}</h5>
      <p class="card-text"> ID:${teamArr[i].email}</p>
      <p class="card-text">Email: <a href="mailto:${teamArr[i].email}" class="card-text btn btn-primary">${teamArr[i].email}</a>`;
    if (teamArr[i].officeNum) {
      cards += `<p class="card-text"> Office Number:${teamArr[i].officeNum}</p>`;
    } else if (teamArr[i].github) {
      cards += `<p class="card-text"> Github:<a href="${teamArr[i].github}" target="_blank">${teamArr[i].github}</a></p>`;
    } else {
      cards += `<p class="card-text"> School:${teamArr[i].school}</p>`;
    }
    cards += `</div>
            </div>
            </main>
            <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"
            ></script>
        </html>`;
    fs.appendFile("./dist/index.html", cards, (err) => {
      if (err) throw err;
    });
  }
};

startApp();
