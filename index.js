const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const path = require("path");
const html = require("./src/genhtml.js");
const start = require("repl");
const { resolve } = require("path");
const dist = path.resolve(__dirname, "dist");
const outIndex = path.join(dist, "index.html");
const team = [];

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ManagerName",
        message: "What is the manager's name?",
        validate: (ManagerName) => {
          if (ManagerName) {
            return true;
          } else {
            console.log("Please enter Manager Name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ManagerId",
        message: "What is the manager's ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "ManagerNumber",
        message: "What is the office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.ManagerName,
        response.ManagerId,
        response.email,
        response.ManagerNumber
      );
      team.push(manager);
      newTeammate();
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EngineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "EngineerId",
        message: "What is the engineer's ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "EngineerGitHub",
        message: "What is their GitHub?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.EngineerName,
        response.EngineerId,
        response.email,
        response.EngineerGitHub
      );
      team.push(engineer);
      newTeammate();
    });
}
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "InternName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "InternId",
        message: "What is the intern's ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "InternSchool",
        message: "What is the intern's school?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.InternName,
        response.InternId,
        response.email,
        response.InternSchool
      );
      team.push(intern);
      newTeammate();
    });
}

function newTeammate() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newTeammate",
        message: "Who would you like to add next?",
        choices: ["Manager", "Engineer", "Intern", "I'm Done"],
      },
    ])
    .then((response) => {
      if (response.newTeammate === "Manager") {
        promptUser();
      } else if (response.newTeammate === "Engineer") {
        promptEngineer();
      } else if (response.newTeammate === "Intern") {
        promptIntern();
      } else if (response.newTeammate === "I'm Done") {
        console.log("Team complete");
        genTeam();
      }
    });
}

function genTeam() {
  fs.writeFileSync(outIndex, html(team), function (err) {
    if (err) {
      throw err;
    }
  });
}

promptUser();
