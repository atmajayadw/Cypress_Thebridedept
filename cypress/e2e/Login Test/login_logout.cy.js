describe("Login Page Test Cases", () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
    });
  
    it("Login with Correct Credentials", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();
    
        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {
            // Find & Input Email
            cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
        
            // Find and Input Password
            cy.get("input[name='password']").should("be.visible").type("jay123");
        
            // Find and click button Login
            cy.contains('button', 'Login').click();    
        });

        // Find and click User
        cy.contains('a', 'Atmajaya').click({ force: true });

        // Access Dashboard page & Assert
        cy.origin('https://member.thebridedept.com', () => {
            cy.contains('div', 'Latest articles you might like').should('be.visible');    
        });

    });

    it("Logout", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();
    
        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {
            // Find & Input Email
            cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
        
            // Find and Input Password
            cy.get("input[name='password']").should("be.visible").type("jay123");
        
            // Find and click button Login
            cy.contains('button', 'Login').click();    
        });

        // Find and click User
        cy.contains('a', 'Atmajaya').click({ force: true });

        // Access Dashboard page & Assert
        cy.origin('https://member.thebridedept.com', () => {
            cy.contains('button', 'Logout').click();    
        });     
    });
    
  });