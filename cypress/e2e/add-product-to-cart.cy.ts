describe('Add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search a product and add to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="product/"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
