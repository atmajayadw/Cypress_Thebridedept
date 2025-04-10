describe("Login Page Test Cases", () => {
    // Simpen logic login di function
    const login = () => {
      cy.visit("https://thebridedept.com/");
      cy.contains('a', 'Member').click();
  
      cy.origin('https://member.thebridedept.com', () => {
        cy.get("input[name='email']").should("be.visible").type("atmajaya.dw@gmail.com");
        cy.get("input[name='password']").should("be.visible").type("jay123");
        cy.contains('button', 'Login').click();
      });

      cy.visit("https://thebridedept.com/");
    };
  
    beforeEach(() => {
      cy.viewport(1366, 768);
  
      // Jalankan login sekali dan reuse session-nya
      cy.session("login-session", login);
    });
  
    it("Login", () => {
      cy.visit("https://thebridedept.com/");
      cy.contains('a', 'Atmajaya').should('exist');
      cy.contains('a', 'Atmajaya').click({ force: true });
    });

    it("Logout", () => {
        cy.visit("https://thebridedept.com/");
        cy.contains('a', 'Atmajaya').should('exist');
        cy.contains('a', 'Atmajaya').click({ force: true });

        cy.origin('https://member.thebridedept.com', () => {
            cy.contains('button', 'Logout').click().then(() => {
              cy.log('Logout clicked ✅');
            });
        }); 
        
      });
  

  });
  