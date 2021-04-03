const Engineer = require("../lib/Engineer")

test("tests Engineer object", () => {
    const person = new Engineer('Greg', 7, 'greg@batman.com', 'github');

    expect(person.name).toEqual(expect.any(String));
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    expect(person.github).toEqual(expect.any(String));
})