class mainPageObject {
    elements = {
        dashboardSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
        userDropdownList: () => cy.get(".oxd-userdropdown-tab > .oxd-icon"),
        backToClaimsList: () => cy.get('button[class="oxd-button oxd-button--medium oxd-button--ghost orangehrm-sm-button"]'),
        submitExpence: () => cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-sm-button"]'),
        createClaimButton: () => cy.get('button[type="submit"]'),
        remarksTxt: () => cy.get('textArea[class*="oxd-textarea"]'),
        employeeNameTxt: () => cy.get('input[placeholder="Type for hints..."]'),
        assignClaimButton: () => cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]'),
        dashBoardText: () => cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'),
        dropdownAboutAlert: () => cy.get(".orangehrm-modal-header > .oxd-text")
    }

    dropDown = 'div[class="oxd-select-text oxd-select-text--active"]'
    
    selectEvent() {
        cy.get(this.dropDown).eq(0).click()
        cy.contains("Accommodation").click()
    }

    selectCurrency() {
        cy.get(this.dropDown).eq(1).click()
        cy.contains("Euro").click()
    }

    userDropdownList() {
        this.elements.userDropdownList().click();
    }
}

module.exports = new mainPageObject()