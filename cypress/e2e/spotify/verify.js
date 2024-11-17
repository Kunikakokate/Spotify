 class Verify{
    link(){
        cy.visit('https://open.spotify.com/')
    }

    titleOnSignup(){
        cy.get('[class="encore-text encore-text-title-large"]').should('have.text','Sign up to start listening')
    }
 }
 export default Verify;