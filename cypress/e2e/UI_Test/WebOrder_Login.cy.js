describe('empty spec',()=>{
    it('passes',()=>{
        cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')
        cy.get('#ctl00_MainContent_username').type("Tester")
        cy.get('#ctl00_MainContent_password').type("test")
        cy.get('#ctl00_MainContent_login_button').click()

        cy.get('h1').should('have.text','Web Orders')

        cy.get('[href="Process.aspx"]').click()
        cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select("FamilyAlbum")
        cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type("5")

        cy.get('#ctl00_MainContent_fmwOrder_txtName').type("Chinmaya Kumar Barik")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type("Whitefield")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type("Bangalore")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox4').type("Karnataka")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type("560037")

        cy.xpath("//label[text()='Visa']").click()

        cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type("1234567890")
        cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type("12/29")

        cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()

        //cy.get('strong').should('have.text','\nNew order has been successfully added.\n')
        cy.get('strong').should('have.text', '\n                    New order has been successfully added.\n                ')

        cy.get('[href="Default.aspx"]').click()

        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Chinmaya Kumar Barik')

        cy.get('#ctl00_logout').click()
        cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")

    })

})