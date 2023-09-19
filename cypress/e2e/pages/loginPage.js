
const email_feild = '[id="email"]';
const password_feild = '[id="password"]';
const signIn_button = '[id="btn-login"]';

class LoginPage {
  static userLogin() {
    cy.visit("/login");
    cy.title().should("eq", "Login");
  }

  static enter_email(email) {
    let set_email;
    if (email) {
      set_email = email;
    } else {
      set_email = Cypress.env("email");
    }
    cy.get(email_feild)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.get(email_feild).should("be.visible").scrollIntoView().clear();
    if (email !== "empty") {
      cy.get(email_feild).should("be.visible").scrollIntoView().type(set_email);
    }
  }

  static enter_password(password) {
    let set_password;
    if (password) {
      set_password = password;
    } else {
      set_password = Cypress.env("password");
    }
    cy.get(password_feild)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.get(password_feild).should("be.visible").scrollIntoView().clear();
    if (password !== "empty") {
      cy.get(password_feild)
        .should("be.visible")
        .scrollIntoView()
        .type(set_password);
    }
  }

  static click_signIn() {
    cy.get(signIn_button)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  }

export default LoginPage;
