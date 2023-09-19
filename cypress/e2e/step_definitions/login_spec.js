import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";

Given(/^user navigates to console$/, () => {
  loginPage.userLogin();
});


When(/^user enters email as "(.*)"$/, (email) => {
  loginPage.enter_email(email);
});

When(/^user enters password as "(.*)"$/, (pass) => {
  loginPage.enter_password(pass);
});

Then(/^user clicks on Sign In button$/, () => {
  loginPage.click_signIn();
});