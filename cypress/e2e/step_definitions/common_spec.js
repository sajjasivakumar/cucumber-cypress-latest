import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../common/commonPage";
import loginPage from "../pages/loginPage";

Given(/^user login into console$/, () => {
  cy.session(
    "loginTestingUser",
    () => {
      loginPage.userLogin();
      loginPage.enter_email();
      loginPage.enter_password();
      loginPage.click_signIn();
    },
    {
      cacheAcrossSpecs: true,
    },
  );
});

When(/^user validates "(.*)"$/, (message) => {
  commonPage.validate_Message(message);
});

When(/^user validates element visible "(.*)"$/, (element) => {
  commonPage.validate_Element_Visable(element);
});

When(/^user enters "(.*)" in the search filter$/, (name) => {
  commonPage.filter_Search(name);
});

When(/^user clicks on link "(.*)"$/, (link) => {
  commonPage.click_link(link);
});

When(/^user validates new page loaded with url contains "(.*)"$/, (url) => {
  commonPage.urlContains(url);
});

When(/^user navigates back$/, () => {
  commonPage.navigates_back();
});
