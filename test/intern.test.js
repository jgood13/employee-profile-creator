const Intern = require("../lib/intern");

test("Can set school", () => {
  const e = new Intern("Joe", 1, "test@email.com", "Denver University");
  expect(e.school).toBe("Denver University");
});

test('getRole() should return "Intern"', () => {
  const e = new Intern("Joe", 1, "test@email.com", "Denver University");
  expect(e.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
  const e = new Intern("Foo", 1, "test@test.com", "Denver University");
  expect(e.getSchool()).toBe("Denver University");
});
