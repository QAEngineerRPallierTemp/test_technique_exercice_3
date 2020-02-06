// As an exercise from https://www.youtube.com/watch?v=5XQOK0v_YRE
// Need to click on the reCAPTCHA so cy.wait(10000) :s
// Next, let do the real things with session, fixtures, etc.. :)
describe('The login page', () => {
	beforeEach(() => {
		cy.visit('/users/sign_in?locale=fr')
	})

	it('greets with Sign in', () => {
		cy.contains('h1', 'Connexion')
		cy.contains('button', 'Se connecter')
	})

	it('links to /users/password/new', () => {
		cy
		.contains('Mot de passe oublié ?')
		.should('have.attr', 'href', '/users/password/new')
	})

	it('requires reCAPTCHA', () => {
		cy.get('form').contains('Se connecter').click()
		cy.get('.alert-error')
		  .should('contain', 'reCAPTCHA verification failed, please try again.')
	})

	it('requires email', () => {
		cy.wait(10000)
		cy.get('form').contains('Se connecter').click()
		cy.get('.alert-error')
		  .should('contain', 'Email ou mot de passe incorrect.')
	})

	it('requires password', () => {
		cy.wait(10000)
		cy.get('#user_email').type('kevin+wttj-68a4640dae4c3b4aa8b33cd9@wttj.co')
		cy.get('form').contains('Se connecter').click()
		cy.get('.alert-error')
		  .should('contain', 'Email ou mot de passe incorrect.')
	})

	it('requires valid email and password', () => {
		cy.wait(10000)
		cy.get('#user_email').type('kevin+wttj-68a4640dae4c3b4aa8b33cd9@wttj.co')
		cy.get('#user_password').type('password')
		cy.get('form').contains('Se connecter').click()
		cy.get('.alert-error')
		  .should('contain', 'Email ou mot de passe incorrect.')
	})

	it('navigates to /dashboard/o/dkxzma3/jobs on successful login', () => {
		cy.wait(10000)
		cy.get('#user_email').type('kevin+wttj-68a4640dae4c3b4aa8b33cd9@wttj.co')
		cy.get('#user_password').type('+8=hSA_apTlpC4n')
		cy.get('form').contains('Se connecter').click()
		cy.location('pathname').should('eq', '/dashboard/o/dkxzma3/jobs')
	})
})