/// <reference types="cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
describe('To Handle iFrame', function () {
    it('Visits the HDFC Net Banking Page and Perform Action', function () {
        //Visit the HDFC Netbanking Website
        cy.visit("https://netbanking.hdfcbank.com/netbanking/");

        // Enter to Frame and then perform action on element

        cy.get("frame[name='login_page']").then(function ($iframe) {
            const iframeele = $iframe.contents().find('input[name="fldLoginUserId"]')
            cy.wrap(iframeele).type('1000')
            const iframebutton = $iframe.contents().find(".btn.btn-primary.login-btn")
            cy.wrap(iframebutton).click()
            // const iframepassword = $iframe.contents().find("/html/body/div[1]/form/div[3]/div/div/div[2]/div[2]/div[1]/div[2]/input")
            // cy.wrap(iframepassword).should('have.text','Password/ IPIN]')
        })

    })
})