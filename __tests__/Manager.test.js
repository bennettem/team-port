const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Bug", "0000", "bug@bug.com", "555-555-5555");

  expect(manager.name).toBe("Bug");
  expect(manager.id).toBe("0000");
  expect(manager.email).toBe("bug@bug.com");
  expect(manager.officeNumber).toBe("555-555-5555");
});

test("get role", () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe("Manager");
});
