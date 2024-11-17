class RegistrationPage {
    visit() {
        cy.visit('https://www.spotify.com/');
    }
    close(){
        cy.get('[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]').click();
    }
    signUp(){
        cy.get('[data-testid="signup-button"]').click()
    }

    enterEmail(email) {
        cy.get('#username').type(email); 
    }

    next(){
        cy.get('[class="Button-sc-qlcn5g-0 VsdHm encore-text-body-medium-bold"]').click();
    }

    enterPassword(password) {
        cy.get('#new-password').type(password); 
    }

    next1(){
        cy.get('[class="Button-sc-qlcn5g-0 VsdHm encore-text-body-medium-bold"]').click()
    }
    enterName(name){
        cy.get('#displayName').type(name);
    }

    enterDateOfBirth(year, month,day) {
        cy.get('#year').type(year); 
        cy.get('#month').select(month); // Replace with the correct selector
        cy.get('#day').type(day); // Replace with the correct selector
    }

    selectGender() {
        cy.get('#gender_option_female').check({force:true}); 
    }

    Next() {
        cy.get('[data-testid="submit"]').click(); // Replace with the correct selector
    }
    

    clickSignUp() {
        cy.get('[data-testid="submit"]').click(); // Replace with the correct selector
    }

    verifySuccess() {
        cy.get('.success-message').should('contain', 'Account created successfully'); 
    }
    verifyErrorMessage(message) {
        cy.get('.error-message').should('contain', message); // Replace with actual error message selector
    }
    
}

export default RegistrationPage;