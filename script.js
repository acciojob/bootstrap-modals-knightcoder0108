//your code here
it("should display the modal when the button is clicked", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("#newton-modal").should("exist");
    cy.get('#open-modal').click();
    cy.get("#newton-modal").should('be.visible');
});
it("should hide the modal when the close button is clicked", () => {
    cy.visit(baseUrl + "/main.html");
    cy.get('#open-modal').click();
    cy.get("#newton-modal").should('be.visible');
    cy.get('.modal-footer button').click();
    cy.get("#newton-modal").should('not.be.visible');
});
