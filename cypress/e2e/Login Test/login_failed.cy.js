describe("Login Page Test Cases", () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
    });


    it("Login with Empty Credentials", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();

        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {

            // Find and click button Login
            cy.contains('button', 'Login').click();    

            // Assert with Error message
            cy.contains('div', 'Invalid email or password').should('be.visible');    
        });
    });

    it("Login with Incorrect Credentials", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();

        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {
            // Find & Input Email
            cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
        
            // Find and Input Password
            cy.get("input[name='password']").should("be.visible").type("jay1234");
        
            // Find and click button Login
            cy.contains('button', 'Login').click();    

            // Assert with Error message
            cy.contains('div', 'Invalid email or password').should('be.visible');    
        });
    });
});