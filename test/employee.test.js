const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Can show Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
  });

  it("Can set name", () => {
    const name = "Joe";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  it("Can set id", () => {
    const e = new Employee("Joe", 100);
    expect(e.id).toBe(100);
  });

  it("Can set email", () => {
    const e = new Employee("Joe", 1, "test@email.com");
    expect(e.email).toBe("test@email.com");
  });

  describe("getName", () => {
    it("Can get name with getName()", () => {
      const e = new Employee("Joe");
      expect(e.getName()).toBe("Joe");
    });
  });

  describe("getId", () => {
    it("Can get id with getId()", () => {
      const e = new Employee("Joe", 100);
      expect(e.getId()).toBe(100);
    });
  });

  describe("getEmail", () => {
    it("Can get email with getEmail()", () => {
      const e = new Employee("Joe", 1, "test@email.com");
      expect(e.getEmail()).toBe("test@email.com");
    });
  });

  describe("getRole", () => {
    it('getRole() should return "Employee"', () => {
      const e = new Employee("Joe", 1, "test@test.com");
      expect(e.getRole()).toBe("Employee");
    });
  });
});
