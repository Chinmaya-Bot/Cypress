let  updateID = 0;
describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token token", token);
      });
    });

    it("should get all records",() =>{
        cy.getLocalStorage("access_token").should("exist");
        cy.getLocalStorage("access_token").then(token => {
            console.log("access_token", token);
            cy.request({
                method: 'GET',
                url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
                auth: {
                    bearer: token
                }
            }).then((response)=>{
                cy.log(response.body.data[0].id)
                updateID=response.body.data[0].id
                console.log(updateID)
            })
        });
    });
    //console.log(updateID)
    it("Update an Address", () => {
        cy.getLocalStorage("access_token").should("exist");
        cy.getLocalStorage("access_token").then(token => {
        console.log("access_token", token);
        console.log(updateID)
        cy.request({
          method: 'PATCH',
          url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses/'+updateID,
          auth: {
              bearer: token       
          },
          body :
          {
              "address": {
                firstname: "Rajat",
                lastname: "Barik",
                address1: "Delhi",
                address2: "3rd Floor",
                city: "Bethesda",
                phone: "3014445002",
                zipcode: "20814",
                state_name: "MD",
                country_iso: "US"
              }
      }}).then((response)=>{
      expect(response.status).to.equal(200);
       // response.body is automatically serialized into JSON
       cy.log(response.body);
       expect(response.body.data).to.have.property('type','address')
       expect(response.body.data.attributes).to.have.property('address1','Delhi')
       expect(response.body.data.attributes).to.have.property('firstname','Rajat')
  });
});
});
});