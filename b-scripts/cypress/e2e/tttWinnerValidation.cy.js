describe('Asserts on winner/loser logic', () => {
	it('Allows X to win and asserts that "X" is displayed in the Congratulations message', () => {
		var boardSize = 3
		var boardCount = 1
		cy.visit('')
		cy.createBoards(boardSize, boardCount)
		var cells = 0
		var count = 0
		var inputOrder = []
		var player1 = true
		for (cells = 0; cells < (boardSize + (boardSize - 1)); cells++) {
			cy.get('table#table>tr>td').eq(count)
				.click()
			if (player1 == true) {
				inputOrder.push('X')
				count = count + 3
				player1 = false
			} else {
				inputOrder.push('O')
				count = (count - (boardSize - 1))
				player1 = true
			}			
		}
		cy.get('div#endgame').should((winningText) => {
			expect(winningText).to.contain('Congratulations player ' + inputOrder[inputOrder.length - 1])
		})
	})
})