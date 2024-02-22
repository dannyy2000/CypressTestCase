describe("The organization admin signIn",function(){

    it("signIn",function(){
 
      cy.visit("https://systest-app.enum.africa/login")
      cy.get('input[name="email"]').type('jummy@mailinator.com')
      cy.get('input[name="password"]').type('Password321$')
 
      cy.get('button[type="submit"]').click()
 
      cy.url().should('include','https://systest-app.enum.africa/ats/dashboard')
    })
  })