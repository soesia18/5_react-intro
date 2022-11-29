// Simon Schöggler - 15.11.2022
// 5AHIF
// react-intro


describe('react spec', () => {
  it('should visit localhost', () => {
    cy.visit('http://localhost:3000')
  })
  it('should containts left to do', () => {
    cy.contains('left to do')
  })
  it('should containts Add Todo', () => {
    cy.contains('Add Todo')
  })
  it('should containts Clear Completed Todos', () => {
    cy.contains('Clear Completed Todos')
  })
  it('should insert todo click Add todo', () => {
    cy.get('input')
      .type('To Do')
    cy.contains('Add Todo').click()
  })
  it('should contains no extra url', () => {
    
    cy.url().should('include', '/')
  })
  it('should check checkbox and remove finished task', () => {
    cy.get('label input').check()
    cy.contains('Clear Completed Todos').click()
  })
})