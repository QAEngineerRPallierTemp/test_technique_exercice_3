describe('The new candidate page', () => {
	beforeEach(() => {
		cy.login()

		cy.visit('/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')
	})

	it('greets with the creation modal', () => {
		//Header
		cy.get('.modal-content h1')
    	  .should('contain', 'Ajouter un nouveau candidat')
    	  .and('have.class', 'card-form-title')

    	cy.get('.modal-content a i')
    	  .should('have.class', 'card-form-close')

    	//Form
    	cy.get('card-form-form').then(($cardForm) => {
		 	
		})
	})
})