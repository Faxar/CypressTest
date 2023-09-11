/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPageObject";
import mainPage from "../../support/pageObjects/mainPageObject";

beforeEach(() => {
    cy.visit(Cypress.env('base_url'))
})

describe('Login test', () => {

    it('Positive login test', () => {
        loginPage.defaultUserLogin(userData)

        mainPage.elements.dashBoardText().should('be.visible')
    })

    it('Negative login test', () => {
        loginPage.setUserName("xyz@gmail.com")
        loginPage.setPassword("654321")
        loginPage.pressLoginButton()

        loginPage.elements.invalidCredentials().should('be.visible')
    })
    
})
