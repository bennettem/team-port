const Intern = require("../lib/Engineer");

test("creates engineer object", () => {
  const intern = new Intern(
    "Spooky",
    "5555",
    "spooky@bug.com",
    "UWW"
  );

  expect(intern.name).toBe("Spooky");
  expect(intern.id).toBe("5555");
  expect(intern.email).toBe("spooky@bug.com");
  expect(intern.school).toBe("UWW");
});

test("get intern school", () => {
  const intern = new Intern(
    "Spooky",
    "5555",
    "spooky@bug.com",
    "UWW"
  );

  expect(intern.getSchool()).toBe("UWW");
});

test("get intern role", () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe("Intern");
});