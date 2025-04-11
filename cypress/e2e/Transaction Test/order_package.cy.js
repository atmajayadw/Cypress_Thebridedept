describe("Order Package Test Cases", () => {
    // Create Login function
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

    // Run this if you want to run script modulary ()
    // const clickCalendarDate = (day, month, date, year) => {
    //     // Format: "Wednesday, Apr 30, 2025"
    //     const formattedDate = `${day}, ${month} ${date}, ${year}`;
        
    //     cy.get(`div[aria-label="${formattedDate}"][role="button"]`).click().then(() => {
    //         cy.log('Date clicked ✅');
    //       });
    // }; 

    beforeEach(() => {
        // Always run in the beginning of the test
        cy.viewport(1366, 768);
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
          win.sessionStorage.clear();
        });
        
        // Create Session Login to run every test without login again in beginning
        cy.session("login-session", login);
    });

    it("Login", () => {
        // Re-visit Website & system checking user is already logged-in
        cy.visit("https://thebridedept.com/");
        cy.contains('a', 'Atmajaya').should('exist').click({ force: true });
        cy.log("Step 1: User login into website (auto-login with beforeEach)")
    });

    it("Order package test", () => {

        // Re-visit Website & system checking user is already logged-in
        cy.visit("https://thebridedept.com/");
        cy.contains('a', 'Atmajaya').should('exist');

        // Need time for dropdown is available for click then find and click "Store"
        cy.wait(500);
        cy.contains('.cursor-pointer', 'Store').click();
        cy.log('Step 2: User click dropdown menu "Store"');

        // Find and click button "Go To Store"
        cy.contains('a', 'Go To Store').should('exist').click();
        cy.log('Step 3: User click CTA "Go To Store"');

        // Find and click package "Engagement Documentation"         
        cy.contains('a', 'Engagement Documentation').should('exist').click();
        cy.log('Step 4: User click package "Engagement Documentation');

        // Find and click button "BUY"
        cy.contains('button', 'BUY').should('exist').click({ force: true });
        cy.log('Step 5: User click CTA "BUY"');
        
        // Run this if you want to run script modulary ()
        // clickCalendarDate('Wednesday', 'Apr', 30, 2025);

        // Find and select Date
        cy.get(`div[aria-label="Wednesday, Apr 30, 2025"][role="button"]`).click();
        cy.log('Step 6: User choose Date');

        // Find and click button "Continue"
        cy.contains('button', 'Continue').should('exist').click();
        cy.log('Step 7: User click CTA "Continue"');

        // System showing Xendit Page
        cy.origin('https://checkout.xendit.co/', () => {
            cy.contains('h2', 'Order Summary').should('exist');
            cy.log('Step 8: System showing Xendit Page');
        });
    }); 

});