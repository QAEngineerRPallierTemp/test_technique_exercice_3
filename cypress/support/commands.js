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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Login en dur via session
Cypress.Commands.add("login", () => {
	cy.setCookie(
		'user.id',
		'NDAxNTA=--ae2c97b951a2aa2c447626e32932a5f232cf35b2',
		{
			'httpOnly':true,
			'path':'/',
			'sameSite':'Lax'
		}
	)
	cy.getCookie('user.id').should('have.property', 'value', 'NDAxNTA=--ae2c97b951a2aa2c447626e32932a5f232cf35b2')
	cy.setCookie(
		'wk_session',
		'4f0d17281134dc46ea2eb64a35c67c22',
		{
			'domain':'.welcomekit.co',
			'httpOnly':true,
			'path':'/',
			'sameSite':'Lax',
			'secure':true
		}
	)
	cy.getCookie('user.id').should('have.property', 'value', 'NDAxNTA=--ae2c97b951a2aa2c447626e32932a5f232cf35b2')
})