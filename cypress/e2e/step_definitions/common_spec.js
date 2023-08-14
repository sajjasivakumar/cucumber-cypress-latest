import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import commonPage from '../common/commonPage';

When(/^user validates "([^"]*)"$/, (message) => {
    commonPage.validate_Message(message);
});

When(/^user validates element visible "([^"]*)"$/, (element) => {
    commonPage.validate_Element_Visable(element);
});

When(/^user enters "([^"]*)" in the search filter$/, (name) => {
    cy.fixture("NetworkData").then((networkdata) => {
        commonPage.filter_Search(networkdata[name]);
    })
});



