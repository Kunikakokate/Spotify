import LoginPage from "../../e2e/spotify/login";
import RegistrationPage from "../../e2e/spotify/registration";
import Verify from "../../e2e/spotify/verify";

describe('Verify', () => {
    const verify=new Verify();
    const registrationPage=new RegistrationPage()
    const loginPage=new LoginPage
    
    it('Verify link', () => {
        verify.link();
        cy.url().should('include','https://open.spotify.com/');
        
    });
    it('Verify title on sign up page', () => {
        registrationPage.visit();
        cy.wait(4000);
        registrationPage.close();
        registrationPage.signUp();
        verify.titleOnSignup();
        //cy.go('back');

    });
    it('To go Back page', () => {
        
        registrationPage.visit();
        cy.wait(2000);
        registrationPage.close();
        registrationPage.signUp();
        cy.wait(2000);
        cy.go('back');
        loginPage.login();
        cy.go('back');
    
       
    });
});