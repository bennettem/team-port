const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer(
    "Dougal",
    "0123",
    "dougal@bug.com",
    "dougalbug"
  );

  expect(engineer.name).toBe("Dougal");
  expect(engineer.id).toBe("0123");
  expect(engineer.email).toBe("dougal@bug.com");
  expect(engineer.github).toBe("dougalbug");
});

test("get engineer github username", () => {
  const engineer = new Engineer(
    "Dougal",
    "0123",
    "dougal@bug.com",
    "dougalbug"
  );

  expect(engineer.getGithub()).toBe("dougalbug");
});

test("get engineer role", () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe("Engineer");
});
