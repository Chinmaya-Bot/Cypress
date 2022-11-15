// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('SpreeCom Application', function() {

    it('Visits the SpreeCom Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://demo.spreecommerce.org/");
    
   // Enter UserName and Password
   cy.get("button[id='account-button']").click()
   cy.get('[href="/login"]').click()
    cy.get("input[placeholder='Email']").type('chinmaya@gmail.com')
    cy.get("input[placeholder='Password']").type('chinmaya')
    cy.get('#new_spree_user > .btn').click()
    //cy.get("input[type='submit']").click()
    //Verify Dashboard Tab
    //cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    cy.get('.alert > span').should('have.text','Logged in successfully')    
  })
   
   it('Logout from spreecom',function(){
    cy.get("button[id='account-button']").click()
    cy.get('[href="/logout"]').click()

    cy.get('.alert > span').should('have.text','Signed out successfully.')
   })

  
  })