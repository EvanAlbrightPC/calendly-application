// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('enterValue', (boardValue) => {
	cy.get('input#number')
		.type('{selectall}')
		.type(boardValue)
})

Cypress.Commands.add('play', () => {
	cy.get('button#start')
		.click()
})

Cypress.Commands.add('createBoards', (boardSize, boardCount, differSizes) => {
	var boards = 0
	for (boards = 0; boards < boardCount; boards++) {
		cy.enterValue(boardSize)
		cy.play()
		if (differSizes == true) {
			boardSize++
		}
	}
})

Cypress.Commands.add('selectLastBoard', (lastBoardSize) => {
	var cells = 0
	var inputOrder = []
	var player1 = true
	for (cells = 0; cells < lastBoardSize; cells++) {
		cy.get('table#table>tr>td').eq(-(lastBoardSize - cells)).as('selectedCell')
			.click()
		if (player1 == true) {
			inputOrder.push('X')
			player1 = false
		} else {
			inputOrder.push('O')
			player1 = true
		}
		cy.get('@selectedCell').should('contain', inputOrder[cells])
	}
})

Cypress.Commands.add('selectLastCells', (boardSize) => {
	var cells = 0
	var inputOrder = []
	var bool = true
	for (cells = 0; cells < boardSize; cells++) {
		cy.get('table#table>tr>td').eq(-(boardSize - cells)).as('selectedCell')
			.click()
		if (bool == true) {
			inputOrder.push('X')
			bool = false
		} else {
			inputOrder.push('O')
			bool = true
		}
		cy.get('@selectedCell').should('contain', inputOrder[cells])
	}
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })