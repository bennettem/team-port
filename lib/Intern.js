const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name = "", school) {
    super(name);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
