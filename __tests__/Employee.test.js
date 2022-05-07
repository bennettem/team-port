const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Louie", "1234", "louie@bug.com");

  expect(employee.name).toBe("Louie");
  expect(employee.id).toBe("1234");
  expect(employee.email).toBe("louie@bug.com");
});

test("get employee name", () => {
  const employee = new Employee("Louie", "1234", "louie@bug.com");

  expect(employee.getName()).toBe("Louie");
});

test("get employee id", () => {
  const employee = new Employee("Louie", "1234", "louie@bug.com");

  expect(employee.getId()).toBe("1234");
});

test("get employee email", () => {
  const employee = new Employee("Dave", "1234", "louie@bug.com");

  expect(employee.getEmail()).toBe("louie@bug.com");
});

test("get employee role", () => {
  const employee = new Employee();

  expect(employee.getRole()).toBe("Employee");
});
