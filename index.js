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
    </head>
    <body>
      <header>
        <nav class="jumbotron jumbotron-fluid is-primary bg-success">
          <div class="display-5 font-weight-bold mb-0 h1 w-100 text-center text-white">
            Team Profile
          </div>
        </nav>
      </header>
      <div class="row m-5">`;
  fs.writeFile("./dist/index.html", htmlStart, (err) => {
    if (err) throw err;
  });

  for (let i = 0; i < teamArr.length; i++) {
    let cards = ``;
    if (teamArr[i].officeNum) {
      cards += `<div class="col-sm-4">
      <div class="card shadow-lg mb-5">
        <div class="card-body">
        <div class="card-body bg-primary">
        <h3 class="card-title text-white">${teamArr[i].name}</h3>
        <h5 class="card-subtitle text-white">${teamArr[i].role}</h5>
        </div>
        <div class="list-group">
        <p class="card-text list-group-item"> ID:${teamArr[i].id}</p>
        <p class="card-text list-group-item">Email: <a href="mailto:${teamArr[i].email}" class="card-text">${teamArr[i].email}</a></p>
        <p class="card-text list-group-item"> Office Number:${teamArr[i].officeNum}</p>
        </div>
        </div>
    </div>
  </div>`;
    } else if (teamArr[i].github) {
      cards += `<div class="col-sm-4">
      <div class="card shadow-lg mb-5">
        <div class="card-body">
        <div class="card-body bg-primary">
        <h3 class="card-title text-white">${teamArr[i].name}</h3>
        <h5 class="card-subtitle text-white">${teamArr[i].role}</h5>
        </div>
        <div class="list-group">
        <p class="card-text list-group-item"> ID:${teamArr[i].id}</p>
        <p class="card-text list-group-item">Email: <a href="mailto:${teamArr[i].email}" class="card-text">${teamArr[i].email}</a></p>
        <p class="card-text list-group-item"> Github:<a href="https://github.com/${teamArr[i].github}" target="_blank">${teamArr[i].github}</a></p>
        </div>
        </div>
    </div>
  </div>`;
    } else {
      cards += `<div class="col-sm-4">
      <div class="card shadow-lg mb-5">
        <div class="card-body">
        <div class="card-body bg-primary">
        <h3 class="card-title text-white">${teamArr[i].name}</h3>
        <h5 class="card-subtitle text-white">${teamArr[i].role}</h5>
        </div>
        <div class="list-group">
        <p class="card-text list-group-item"> ID:${teamArr[i].id}</p>
        <p class="card-text list-group-item">Email: <a href="mailto:${teamArr[i].email}" class="card-text">${teamArr[i].email}</a></p>
        <p class="card-text list-group-item"> School:${teamArr[i].school}</p>
        </div>
        </div>
    </div>
  </div>`;
    }
    fs.appendFile("./dist/index.html", cards, (err) => {
      if (err) throw err;
    });
  }
  finalTouch();
};

finalTouch = () => {
  fs.appendFile(
    "./dist/index.html",
    `</div>
    </html>`,
    (err) => {
      if (err) throw err;
    }
  );
};

startApp();
