/// <reference types="Cypress" />
import loginPage from "../../support/pageObjects/loginPageObject";
import mainPage from "../../support/pageObjects/mainPageObject";
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.session('mySession', () => {
        cy.visit(Cypress.env('base_url'))
        loginPage.defaultUserLogin()
    }) 
})

describe('Claims', () => {

    it('Create new claim', () => {
        cy.visit(Cypress.env('claim_url'))
        //Open claims tab
        cy.contains('Claim').click()
        //Fill data and crate claim
        mainPage.elements.assignClaimButton().click()
        mainPage.elements.employeeNameTxt().type("abc")
        cy.contains("abc def").click()
        mainPage.selectEvent()
        mainPage.selectCurrency()
        let randomText = faker.word.words()
        mainPage.elements.remarksTxt().type(randomText)
        mainPage.elements.createClaimButton().click()
        mainPage.elements.submitExpence().click()
        //Return back to the claim list
        mainPage.elements.backToClaimsList().click()
        //Check that newly created claim is visible
        cy.contains(randomText).should('be.visible')
    })

})

describe('User dropdown', () => {

    it("Display About alert", () => {
        cy.visit(Cypress.env('claim_url'))
        //Opens user dropdown list
        mainPage.userDropdownList();
        //Taps on about
        cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(0).click();
        //Verify that correct text is displayed
        mainPage.elements.dropdownAboutAlert().should("have.text", "About");
    });
})