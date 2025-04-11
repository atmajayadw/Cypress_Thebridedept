describe("Login Page Test Cases", () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
    });
  
    it("Login with Correct Credentials", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();
        cy.log("Step 1: User visit Website & click CTA Member")
    
        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {
            // Find & Input Email
            cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
            cy.log("Step 2: User input correct Email")
        
            // Find and Input Password
            cy.get("input[name='password']").should("be.visible").type("jay123");
            cy.log("Step 3: User input correct Password")
        
            // Find and click button Login
            cy.contains('button', 'Login').click();  
            cy.log('Step 4: User click CTA "Login"');

        });

        // Find and click User after login
        cy.contains('a', 'Atmajaya').click({ force: true });
        cy.log('Step 5: System validating login creds');

        // Access Dashboard page & Assert
        cy.origin('https://member.thebridedept.com', () => {
            cy.contains('div', 'Latest articles you might like').should('be.visible');   
            cy.log('Step 6: Login success and showing copy "Latest articles you might like" as an Assertion');
        });
    });

    it("Logout", () => {
        // User visit Website & click CTA Member
        cy.visit("https://thebridedept.com/");    
        cy.title().should("eq", "The Bride Dept");
        cy.contains('a', 'Member').click();
        cy.log("Step 1: User visit Website & click CTA Member")
    
        // Find Login Button, Email & Password field
        cy.origin('https://member.thebridedept.com', () => {
            // Find & Input Email
            cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
            cy.log("Step 2: User input correct Email")
        
            // Find and Input Password
            cy.get("input[name='password']").should("be.visible").type("jay123");
            cy.log("Step 3: User input correct Password")
        
            // Find and click button Login
            cy.contains('button', 'Login').click();  
            cy.log('Step 4: User click CTA "Login"');  
        });

        // Find and click User
        cy.contains('a', 'Atmajaya').click({ force: true });
        cy.log('Step 5: System validating login creds');

        // Access Dashboard page & Click Logout
        cy.origin('https://member.thebridedept.com', () => {
            cy.contains('button', 'Logout').click();
            cy.log('Step 6: User click CTA "Logout"');  

            // Back to Login page & Assert
            cy.contains('div', ' Login As Member ').should('be.visible');
            cy.log('Step 7: Logout success and showing copy "Login As Member" as an Assertion');
        });     
    });
    
  });