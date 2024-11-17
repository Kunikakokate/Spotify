class LoginPage{
    visit() {
        cy.visit('https://www.spotify.com/');
    }
    close(){
        cy.get('[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]').click();
    }
    login(){
        cy.get('[data-testid="login-button"]').click();
    }
    email(email){
        cy.get('#login-username').type(email);
    }
    password(password){
        cy.get('#login-password').type(password);
    }
    loginbutton(){
        cy.get('#login-button').click();
    }
    loginsuccess(){
        cy.log('Account created successfully');
    }
}
export default LoginPage;