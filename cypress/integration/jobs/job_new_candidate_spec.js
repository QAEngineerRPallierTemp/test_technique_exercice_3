describe('The new candidate page', () => {
	beforeEach(() => {
		cy.login()

		cy.visit('/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')
	})

	it('greets with Ajouter un nouveau candidat', () => {
		cy.contains('h1', 'Ajouter un nouveau candidat')
	})
})