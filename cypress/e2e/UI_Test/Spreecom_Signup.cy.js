// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('SpreeCom Application', function() {

    it('Visits the SpreeCom Page and Perform Signup Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://demo.spreecommerce.org/");
    
   // Enter UserName and Password
   cy.get("button[id='account-button']").click()
   cy.get('[href="/signup"]').click()
   cy.get('#spree_user_email').type('chinmaya1236@gmail.com')
   cy.get('#spree_user_password').type('chinmaya')
   cy.get('#spree_user_password_confirmation').type('chinmaya')

   cy.get(':nth-child(5) > .btn').click()

    
    
    //Verify Dashboard Tab
    //cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    cy.get('.alert > span').should('have.text','Welcome! You have signed up successfully.')   
  })

  
  })