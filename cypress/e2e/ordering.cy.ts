describe("Pizza House ordering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Makes an orded", () => {
    cy.get("span").should("contain.text", "the pizza of the day");
    cy.contains("order takeaway").click();
    cy.get("h2")
      .should("contain.text", "Napoleana")
      .get("div")
      .get("button")
      .contains("Add To Cart")
      .click();
    cy.contains("+").click();
    cy.get("button").contains("CHECK OUT").click();
    cy.reload();
  });
});
