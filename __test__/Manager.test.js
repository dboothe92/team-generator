const Manager = require("../lib/Manager");

test("Checking the Manager object", () => {
    const person = new Manager('Greg', 6, 'greg@batman.com', 123);

    expect(person.name).toEqual(expect.any(String));
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    expect(person.officeNumber).toEqual(expect.any(Number));
})

test("testing getRole(), should return 'Manager'", () => {
    const person = new Manager('Greg', 6, 'greg@batman.com', 123);

    expect(person.getRole()).toBe('Manager');
})