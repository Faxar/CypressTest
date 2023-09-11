class userInfoPageObject {
    elements= {
        firstName: () => cy.get('input[name="firstName"]'),
        saveBtn: () => cy.get('button[type="submit"]'),
        requiredFieldErrorMsg: () => cy.contains("Required"),
    }

    enterName(name) {
        this.elements.firstName().clear().type(name);
    }

    saveChanges() {
        this.elements.saveBtn().eq(0).click({ force: true });
      }
}

module.exports = new userInfoPageObject()