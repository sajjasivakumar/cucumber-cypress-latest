const search_filter = "#SearchFilter";
const timeout_10 = 10000;
const timeout_5 = 5000;
const timeout_1 = 1000;

class CommonPage {
  static filter_Search(networkName) {
    cy.get(search_filter).should("be.visible").scrollIntoView().clear();
    cy.getValue(networkName).then((value) => {
      cy.get(search_filter).should("be.visible").scrollIntoView().type(value);
    });
  }

  static validate_Message(message) {
    cy.xpath('//*[contains(text(),"' + message + '")]')
      .first()
      .invoke("text")
      .then(($button) => {
        const messageStr = $button;
        expect(messageStr.toLowerCase().trim()).to.have.string(
          message.toLowerCase().trim(),
        );
      });
  }

  static validate_Element_Visable(details) {
    cy.xpath("//*[contains(" + details + ")]").should("be.visible");
  }

  static click_link(link) {
    cy.wait(timeout_5);
    cy.xpath('//*[contains(@href,"' + link + '")]')
      .eq(0)
      .should("be.visible")
      .invoke("removeAttr", "target")
      .scrollIntoView()
      .click({ force: true });
    cy.wait(timeout_10);
  }

  static urlContains(link) {
    cy.url().should("include", link);
  }

  static navigates_back(link) {
    cy.wait(timeout_1);
    cy.go("back");
    cy.wait(timeout_1);
  }
}

export default CommonPage;
