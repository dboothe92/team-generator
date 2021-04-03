const fs = require('fs');
const path = require('path');

templatesDir = path.resolve(__dirname, '../templates');

const layout = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerLayout(manager))
        .join("")
      );

    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerLayout(engineer))
        .join("")
      );
      
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internLayout(intern))
        .join("")
      );

      return mainLayout(html.join(""));
};

  const managerLayout = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = placeHolderReplace(template, "name", manager.getName());
    template = placeHolderReplace(template, "role", manager.getRole());
    template = placeHolderReplace(template, "email", manager.getEmail());
    template = placeHolderReplace(template, "id", manager.getId());
    template = placeHolderReplace(template, "officeNumber", manager.getOfficeNumber());
    return template;
  };

  const engineerLayout = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = placeHolderReplace(template, "name", engineer.getName());
    template = placeHolderReplace(template, "role", engineer.getRole());
    template = placeHolderReplace(template, "email", engineer.getEmail());
    template = placeHolderReplace(template, "id", engineer.getId());
    template = placeHolderReplace(template, "github", engineer.gitHub());
    return template;
  };

  const internLayout = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = placeHolderReplace(template, "name", intern.getName());
    template = placeHolderReplace(template, "role", intern.getRole());
    template = placeHolderReplace(template, "email", intern.getEmail());
    template = placeHolderReplace(template, "id", intern.getId());
    template = placeHolderReplace(template, "school", intern.getSchool());
    return template;
  };

  const mainLayout = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return placeHolderReplace(template, "team", html);
  };

  const placeHolderReplace = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  module.exports = layout;