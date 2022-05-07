const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const path = require("path");
const html = require("./src/genhtml.js");
const start = require("repl");
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
      },
      {
        type: "input",
        name: "ManagerId",
        message: "What is the manager's ID",
      },
      {
        type: "input",
        name: "ManagerEmail",
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
        response.Manageremail,
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
        name: "EngineerEmail",
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
        response.Engineeremail,
        response.EngineerNumber
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
        name: "InternEmail",
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
        response.Internemail,
        response.InternNumber
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
        name: "NewTeammate",
        message: "Who would you like to add next?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((response) => {
      if (response.newTeammate === "Manager") {
        promptUser();
      } else if (response.newTeammate === "Engineer") {
        promptEngineer();
      } else if (response.newTeammate === "Intern") {
        promptIntern();
      } else if (response.newTeammate === "None") {
        console.log("Team complete");
        genTeam();
      }
    });
}

function genTeam() {
  fs.writeFileSync(outIndex, html(team), (error) => {
    if (error) {
      console.log("error");
    }
    // genhtml line 75 notes linked here to html(team)
  });
}
