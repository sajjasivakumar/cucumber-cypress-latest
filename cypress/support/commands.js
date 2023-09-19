// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-iframe";
import "cypress-file-upload";

Cypress.Commands.add("highlight", { prevSubject: "element" }, ($element) => {
  cy.wrap($element)
    .should("exist")
    .then(($el) => {
      $el[0].style.setProperty("border", `2px solid red`);
      $el[0].style.setProperty("background-color", `yellow`);
    });
});

Cypress.Commands.add("setValue", (key, value) => {
  cy.writeFile("cypress/fixtures/" + key + ".json", { [key]: value });
});

// Cypress.Commands.add('setValue', (key) => {
//   return cy.fixture(key).then((data) => {
//     if (data.hasOwnProperty(key)) {
//       const serializableData = {
//         chainerid: data[key].chainerid,
//       };
//       const jsonString = JSON.stringify(serializableData);
//       return jsonString;
//     } else {
//       throw new Error(`Key '${key}' not found in the fixture.`);
//     }
//   });
// });

// Cypress.Commands.add("getValue", (key) => {
//   return cy.fixture(key).then((data) => {
//     return data[key];
//   });
// });

Cypress.Commands.add("getValue", (key) => {
  cy.fixture("" + key + ".json").then((data) => {
    const value = data[key];
    if (value === undefined) {
      throw new Error(`Key '${key}' not found in the fixture.`);
    }
    return value;
  });
});
