import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../pages/loginPage';



Given(/^user navigates to nf console$/, () => {
    loginPage.userLogin();
});



Then(/^user clicks on continue button$/, () => {
    loginPage.click_continue_button();
});

When(/^user enters email as "([^"]*)"$/, (email) => {
    loginPage.enter_email(email);
});

When(/^user enters password as "([^"]*)"$/, (pass) => {
    loginPage.enter_password(pass);
});

Then(/^user clicks on Sign In button$/, () => {
    loginPage.click_signIn();
});







