const userData = require("../../fixtures/orangehrmlive")
class loginPageObject {
    elements = {
        loginTitle: () => cy.get(".oxd-text--h5"),
        txtUserName: () => cy.get("input[name='username']"),
        txtPassword: () => cy.get("input[name='password']"),
        submitButton: () => cy.get("button[type='submit']"),
        invalidCredentials: () => cy.get("div[role='alert']")
    }
    

    setUserName(username) {
        this.elements.txtUserName().type(username)
    }

    setPassword(password) {
        this.elements.txtPassword().type(password)
    }

    pressLoginButton() {
        this.elements.submitButton().click()
    }

    defaultUserLogin() {
        this.elements.txtUserName().clear({force: true}).type(userData.username)
        this.elements.txtPassword().clear({force: true}).type(userData.password)
        this.elements.submitButton().click()
    }
}

module.exports = new loginPageObject()