describe('Checks that icons are rendered in the correct cell', () => {
	it('Asserts that values from extra boards of the same size are rendered in correct cells', () => {
		cy.visit('')
		cy.createBoards(Cypress.env('boardSize'), Cypress.env('boardCount'))
		cy.selectLastCells(Cypress.env('boardSize'))
	})
	
	it('Asserts that values entered in boards of differing sizes are rendered in correct cells', () => {
		cy.visit('')
		var lastBoardWidth = 0
		var lastBoardSize = 0
		cy.createBoards(Cypress.env('boardSize'), Cypress.env('boardCount'), true)
		cy.get('table#table').children().last().find('td').then((tableWidth) => {
			lastBoardWidth = tableWidth.length
			var lastBoardSize = lastBoardWidth * lastBoardWidth
			cy.selectLastBoard(lastBoardSize)
		})
	})
})