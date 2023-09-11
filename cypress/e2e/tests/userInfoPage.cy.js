/// <reference types="Cypress" />
import userInfo from "../../support/pageObjects/userInfoPageObject";
import loginPage from "../../support/pageObjects/loginPageObject";
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.session('mySession', () => {
        cy.visit(Cypress.env('base_url'))
        loginPage.defaultUserLogin()
    }) 
})

describe('Update personal details', () => {

    it('positive update', () => {
        cy.visit(Cypress.env('claim_url'))
        
        cy.contains('My Info').click()
        userInfo.enterName(faker.person.firstName())
        userInfo.saveChanges()

        //Verify that data is changed
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Success");
          });
    })

    it('negative update', () => {
        cy.visit(Cypress.env('claim_url'))

        cy.contains('My Info').click()

        userInfo.elements.firstName().clear().type(" ");
        userInfo.saveChanges();
        // Verify error message
        userInfo.elements.requiredFieldErrorMsg().should("be.visible");
    })
})