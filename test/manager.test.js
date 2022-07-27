const Manager = require("../lib/manager");

test("Checks if you can set officeNumber with constructors", () => {
  const employee = new Manager("Joe", 1, "joseph.good8@gmail.com", 1337);
  expect(employee.officeNum).toBe(1337);
});

test("checks if getRole returns 'Manager'", () => {
  const employee = new Manager("Joe", 1, "joseph.good8@gmail.com", "jgood13");
  expect(employee.getRole()).toBe("Manager");
});
