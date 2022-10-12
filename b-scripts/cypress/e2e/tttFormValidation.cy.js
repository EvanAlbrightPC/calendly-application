describe('Checks that only valid entries can have "Play" clicked', () => {
	it('Attempts creation of invalid board and expects the "Play" button to be disabled', () => {
		cy.visit('')
		cy.enterValue(1)
		cy.get('button#start').should('be.disabled')
		cy.enterValue(21)
		cy.get('button#start').should('be.disabled')
		cy.enterValue('Hello World')
		cy.get('button#start').should('be.disabled')
	})
	
	it('Attempts creation of valid board and expects the "Play" button to be enabled', () => {
		cy.visit('')
		cy.enterValue(5)
		cy.get('button#start').should('be.enabled')
	})
})