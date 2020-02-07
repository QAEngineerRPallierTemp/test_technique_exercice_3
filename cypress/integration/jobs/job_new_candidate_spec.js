describe('The new candidate page', () => {
	beforeEach(() => {
		cy.login()

		cy.visit('/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')
	})

	it('greets with the creation modal', () => {
		//Header
		cy.get('h1')
    	  .should('contain', 'Ajouter un nouveau candidat')
    	  .and('have.class', 'card-form-title')

    	cy.get('.modal-content a.card-form-close i')
    	  .should('have.class', 'zmdi zmdi-close')

    	//Form
    	cy.get('form')
    	  .should('have.class', 'card-form-form')

	    	//Block 'Informations générales'
	    	//Header
			cy.get('form h2').eq(0)
	    	  .should('contain', 'Informations générales')
	    	  .and('have.class', 'block-title')

			cy.get('form h2 i').eq(0)
			  .should('have.class', 'zmdi zmdi-account')

			//Nom*
	    	cy.get('form')
		      .contains('Nom')
			  .should('have.attr', 'for', 'firstname')

			cy.get('form abbr').eq(0)
			  .should('have.class', 'required')
			  .and('contain', '*')

			cy.get('[name=firstname]')
			  .should('have.attr', 'placeholder', 'Prénom')
			  .and('have.attr', 'type', 'text')
			  .and('contain', '')

			cy.get('[name=lastname]')
			  .should('have.attr', 'placeholder', 'NOM')
			  .and('have.attr', 'type', 'text')
			  .and('contain', '')

			//Poste actuel
	    	cy.get('form')
		      .contains('Poste actuel')

			cy.get('[name=subtitle]')
			  .and('have.attr', 'placeholder', 'Ex: CEO @WTTJ, Dev full stack, etc.')
			  .and('have.attr', 'type', 'text')
			  .and('contain', '')

			//Email*
	    	cy.get('form')
		      .contains('Email')

			cy.get('form abbr').eq(1)
			  .should('have.class', 'required')
			  .and('contain', '*')

			cy.get('[name=email]')
			  .should('have.attr', 'type', 'text')
			  .and('contain', '')

			//Téléphone
	    	cy.get('form')
		      .contains('Téléphone')

			cy.get('[name=phone]')
			  .should('have.attr', 'type', 'text')
			  .and('contain', '')

			//Photo de profil
	    	cy.get('form')
		      .contains('Photo de profil')

	    	cy.get('form')
		      .contains('Importer une image')
			  .should('have.class', 'file-input-btn')

			cy.get('form div div.form-group label i').eq(0)
			  .should('have.class', 'zmdi zmdi-upload')

			cy.get('[name=image]')
			  .should('have.attr', 'type', 'file')
			  .and('contain', '')

			//Adresse
	    	cy.get('form')
		      .contains('Adresse')

			cy.get('[name=address]')
			  .should('have.attr', 'type', 'text')
			  .and('contain', '')

			//Ville
	    	cy.get('form')
		      .contains('Ville')

			cy.get('[name=city]')
			  .should('have.attr', 'type', 'text')
			  .and('contain', '')

			//Code Postal
	    	cy.get('form')
		      .contains('Code postal')

			cy.get('[name=zip_code]')
			  .should('have.attr', 'type', 'text')
			  .and('contain', '')

			//Pays
			cy.get('form div div.form-group label.jungle-select-label i').eq(0)
			  .should('have.class', 'zmdi zmdi-chevron-down')

	    	cy.get('form')
		      .contains('Sélectionnez un pays')

			cy.get('form div div.form-group a.jungle-select-filter input').eq(0)
			  .should('have.attr', 'autocomplete', 'disabled')

			//Block 'Sa présence sur Internet'
	    	//Header
			cy.get('form h2').eq(1)
	    	  .should('contain', 'Sa présence sur Internet')
	    	  //.and('have.class', 'block-title')

			cy.get('form h2 i').eq(1)
			  .should('have.class', 'zmdi zmdi-globe-alt')

			//Site internet
	    	cy.get('form')
		      .contains('Site internet')
			  .should('have.attr', 'for', 'media_website')

			cy.get('[name=media_website]')
			  .should('have.attr', 'placeholder', 'http://www.moi.com')
			  .and('contain', '')

			//Linkedin
	    	cy.get('form')
		      .contains('Linkedin')
			  .should('have.attr', 'for', 'media_linkedin')

			cy.get('[name=media_linkedin]')
			  .should('have.attr', 'placeholder', 'https://fr.linkedin.com/pub/moi/')
			  .and('contain', '')

			//Twitter
	    	cy.get('form')
		      .contains('Twitter')
			  .should('have.attr', 'for', 'media_twitter')

			cy.get('[name=media_twitter]')
			  .should('have.attr', 'placeholder', 'https://twitter.com/moi')
			  .and('contain', '')

			//Afficher tous les champs
	    	cy.get('form')
		      .contains('Afficher tous les champs')
			  .should('have.class', 'card-form-toggle-fields-link')

			cy.get('form div div.card-form-toggle-fields a i')
			  .should('have.class', 'zmdi zmdi-plus-circle-o')

			//Block 'Sa candidature'
	    	//Header
			cy.get('form h2').eq(2)
	    	  .should('contain', 'Sa candidature')
	    	  .and('have.class', 'block-title')

			cy.get('form h2 i').eq(2)
			  .should('have.class', 'zmdi zmdi-file-text')

			//Statut
			cy.get('form div div.form-group label.jungle-select-label i').eq(1)
			  .should('have.class', 'zmdi zmdi-chevron-down')


	    	cy.get('form')
		      .contains('Nouveau')
			  //.should('have.attr', 'title', '[object Object]') BUG

			cy.get('form div div.form-group a.jungle-select-filter input').eq(1)
			  .should('have.attr', 'autocomplete', 'disabled')

			//CV
	    	cy.get('form')
		      .contains('CV')

	    	cy.get('form')
		      .contains('Importer un fichier')
			  .should('have.class', 'file-input-btn')

			cy.get('form div div.form-group label i').eq(3)
			  .should('have.class', 'zmdi zmdi-upload')

			cy.get('[name=resume]')
			  .should('have.attr', 'type', 'file')
			  .and('contain', '')

			//Lettre de motivation
	    	cy.get('form')
		      .contains('Lettre de motivation')
			  .should('have.attr', 'for', 'cover_letter')

			cy.get('[name=cover_letter]')
			  .should('have.attr', 'name', 'cover_letter')
			  //.and('have.class', 'undefined') BUG ?

			//Réponses
	    	cy.get('form')
		      .contains('Réponses')

	    	cy.get('form')
		      .contains('What Motivates You at Work?')

			cy.get('form textarea').eq(1)
			  //.and('have.class', 'undefined') BUG ?

	    	cy.get('form')
		      .contains('What Motivates You In Life?')

			cy.get('form textarea').eq(2)
			  //.and('have.class', 'undefined') BUG ?

			//Origine
	    	cy.get('form')
		      .contains('Origine')
			  .should('have.attr', 'for', 'referrer')

			cy.get('[name=referrer')
			  .should('have.attr', 'type', 'text')
			  .and('have.attr', 'placeholder', 'Ex: twitter.com, welcometothejungle.co, mail, etc.')
			  .and('contain', '')

	    	cy.get('form')
		      .contains('Cette information sert notamment à l\'onglet \'statistiques\'.')

			//Block 'Actions'
	    	//Enregistrer
	    	cy.get('form')
		      .contains('Enregistrer')
	    	  .should('have.class', 'btn btn-primary btn-big')

	    	cy.get('form div.form-actions button i')
	    	  .should('have.class', 'zmdi zmdi-check')
	})

	it('requires Prénom', () => {
		cy.get('form')
		  .contains('Enregistrer')
    	  .should('be.disabled')
	})

	it('requires NOM', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires NOM')

		cy.get('form')
		  .contains('Enregistrer')
    	  .should('be.disabled')
	})

	it('requires Email', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Email')

		cy.get('[name=lastname]')
		  .type('Lastname requires Email')

		cy.get('form')
		  .contains('Enregistrer')
    	  .should('be.disabled')
	})

	it('requires valid Email', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Email')

		cy.get('[name=lastname]')
		  .type('Lastname requires Email')

		cy.get('[name=email]')
		  .type('email')

		cy.get('form')
		  .contains('Enregistrer')
    	  .should('be.disabled')

		cy.get('[name=lastname]')
		   .click()

		cy.get('form')
		  .find('.zmdi-alert-circle')

		cy.get('[name=email]')
		  .type('@email')

		cy.get('form')
		  .contains('Enregistrer')
    	  .should('be.disabled')

		cy.get('[name=lastname]')
		   .click()

		cy.get('form')
		  .find('.zmdi-alert-circle')
	})

	it('requires valid Téléphone (or not)', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Téléphone valid')

		cy.get('[name=lastname]')
		  .type('Lastname requires Téléphone valid')

		cy.get('[name=email]')
		  .type('email@requirestelephonevalid.fr')

		cy.get('[name=phone]')
		  .type('Attention chérie ça va couper !')
		 
		// cy.get('form')
		//  .contains('Enregistrer')
    	//  .should('be.disabled')
    	//
		// cy.get('[name=lastname]')
		//   .click()
		//
		// cy.get('form')
		//   .find('.zmdi-alert-circle')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b')
	})

	it('requires valid Code postal (or not)', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Code postal valid')

		cy.get('[name=lastname]')
		  .type('Lastname requires Code postal valid')

		cy.get('[name=email]')
		  .type('email@requirescodepostalvalid.fr')

		cy.get('[name=zip_code]')
		  .type('£33‡ šρ3@ķķ@Ƹρš ‡ƸƸ£')
		 
		// cy.get('form')
		//  .contains('Enregistrer')
    	//  .should('be.disabled')
    	//
		// cy.get('[name=lastname]')
		//   .click()
		//
		// cy.get('form')
		//   .find('.zmdi-alert-circle')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b')
	})

	it('requires valid Site internet', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Site internet valid')

		cy.get('[name=lastname]')
		  .type('Lastname requires Site internet valid')

		cy.get('[name=email]')
		  .type('email@requiressiteinternetvalid.fr')

		cy.get('form')
		  .contains('Site internet')
		  .type('knoc knoc knoc')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')

    	cy.get('body')
		  .contains('Impossible de créer ce candidat.')

		cy.get('body')
		  .contains('Profile media website : is an invalid URL')
	})

	it('requires valid Linkedin', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Linkedin valid')

		cy.get('[name=lastname]')
		  .type('Lastname requires Linkedin valid')

		cy.get('[name=email]')
		  .type('email@requireslinkedinvalid.fr')

		cy.get('form')
		  .contains('Linkedin')
		  .type('Allo !? Allo !? Allo !?')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')

    	cy.get('body')
		  .contains('Impossible de créer ce candidat.')

		cy.get('body')
		  .contains('Profile media linkedin : is an invalid URL')
	})

	it('requires valid Twitter', () => {
		cy.get('[name=firstname]')
		  .type('Firstname requires Twitter valid')

		cy.get('[name=lastname]')
		  .type('Lastname requires Twitter valid')

		cy.get('[name=email]')
		  .type('email@requirestwitterinvalid.fr')

		cy.get('form')
		  .contains('Twitter')
		  .type('C\'est l\'été pour la vie')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b/new-candidate/392777')

    	cy.get('body')
		  .contains('Impossible de créer ce candidat.')

		cy.get('body')
		  .contains('Profile media twitter : is an invalid URL')
	})

	it('navigate to /dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b on successful creating a simple candidat', () => {
		cy.get('[name=firstname]')
		  .type('Firstname simple')

		cy.get('[name=lastname]')
		  .type('Lastname simple')

		cy.get('[name=email]')
		  .type('email@simple.fr')

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b')
	})

	it('navigate to /dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b on successful creating an almost complete candidat', () => {
		cy.get('[name=firstname]')
		  .type('Firstname complete')

		cy.get('[name=lastname]')
		  .type('Lastname complete')

		cy.get('[name=email]')
		  .type('email@complete.fr')

		cy.get('[name=subtitle]')
		  .type('Explorateur')

		cy.get('[name=phone]')
		  .type('0772233446')

		cy.get('[name=address]')
		  .type('Vallée de la Hunza')

		cy.get('[name=city]')
		  .type('Shangri-La')

		cy.get('[name=zip_code]')
		  .type('00700')

		cy.get('form div div.form-group a.jungle-select-filter input').eq(0)
		  .type('France')
		cy.get('form div.jungle-select-item')
		  .contains('France')
		  .click()

		cy.get('[name=media_website]')
		  .type('http://www.nous.com')

		cy.get('[name=media_linkedin]')
		  .type('https://fr.linkedin.com/pub/99FR/')

		cy.get('[name=media_twitter]')
		  .type('https://twitter.com/mesange')

		cy.get('[name=cover_letter]')
		  .type('Là, tout n’est qu’ordre et beauté, Luxe, calme et volupté.')

		cy.get('form textarea').eq(1)
		  .type('Creation and success through sharing')

		cy.get('form textarea').eq(2)
		  .type('Finding the good in the others and make it shine')

		cy.get('[name=referrer')
		  .type('welcome')
		cy.get('.react-autosuggest__suggestion.react-autosuggest__suggestion--first')
		  .click()

		cy.get('form')
		  .contains('Enregistrer')
    	  .click()

    	cy.location('pathname')
    	  .should('eq', '/dashboard/o/dkxzma3/jobs/2XMOI_yq66e6b')
	})
})