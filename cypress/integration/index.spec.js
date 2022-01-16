describe('Calculator ', () => {
  it('has inital value "zero"', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=result]').should('have.value', '0');
  });

  it('one plus two is three', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=1]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=equals]').click();
    cy.get('[data-cy=result]').should('have.value', '3');
  });

  it('one minus two is negative one', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=1]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=equals]').click();
    cy.get('[data-cy=result]').should('have.value', '-1');
  });

  it('two multiplied by three is six', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=3]').click();
    cy.get('[data-cy=equals]').click();
    cy.get('[data-cy=result]').should('have.value', '6');
  });

  it('nine divided by two is four point five', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=9]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=equals]').click();
    cy.get('[data-cy=result]').should('have.value', '4.5');
  });

  it('"AC" reset result to zero', () => {
    cy.visit('../../index.html');
    cy.get('[data-cy=1]').click();
    cy.get('[data-cy=2]').click();
    cy.get('[data-cy=3]').click();
    cy.get('[data-cy=AC]').click();
    cy.get('[data-cy=result]').should('have.value', '0');    
  })
});
