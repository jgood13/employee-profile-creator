const Engineer = require("../lib/engineer");

test("create an Engineer object", () => {
  const engineer = new Engineer("Joe", 2, "josephgood8@gmail.com", "jgood13");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github value", () => {
  const engineer = new Engineer("Joe", 2, "josephgood8@gmail.com", "jgood13");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets role of employee", () => {
  const engineer = new Engineer("Joe", 2, "josephgood8@gmail.com", "jgood13");

  expect(engineer.getRole()).toEqual("Engineer");
});
