const Employee = require("../lib/Employee")

test("Testing that an employee object is created", () => {
    const person = new Employee('Greg', 7, 'greg@batman.com');

    expect(person.name).toEqual(expect.any(String));
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
});

test("testing getName()", () => {
    const person = new Employee('Greg', 7, 'greg@Batman.com');

    expect(person.getName()).toEqual(expect.stringContaining(person.name));
});

test("testing getId()", () => {
    const person = new Employee('Greg', 7, 'greg@Batman.com');

    expect(person.getId()).toEqual(expect.any(Number));
});

test("testing getEmail()", () => {
    const person = new Employee('Greg', 7, 'greg@Batman.com');

    expect(person.getEmail()).toEqual(expect.stringContaining(person.email));
});

test("testing getRole() should return 'Employee'", () => {
    const person = new Employee('Greg', 7, 'greg@Batman.com');

    expect(person.getRole()).toBe('Employee');
})
