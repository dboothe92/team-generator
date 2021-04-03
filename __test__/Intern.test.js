const Intern = require('../lib/Intern');

test("Testing intern object", () => {
    const person = new Intern('Greg', 7, 'greg@batman.com', 'University of Utah');

    expect(person.name).toEqual(expect.any(String));
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    expect(person.school).toEqual(expect.any(String));
})

test('Testing getSchool()', () => {
    const person = new Intern('Greg', 7, 'greg@batman.com', 'University of Utah');

    expect(person.getSchool()).toEqual(expect.stringContaining(person.school));
});

test("Testing getRole(). should return 'Intern'", () => {
    const person = new Intern('Greg', 7, 'greg@batman.com', 'University of Utah');

    expect(person.getRole()).toBe('Intern');
})