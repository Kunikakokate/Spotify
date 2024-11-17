import Home from "../../e2e/spotify/homepage";
import RegistrationPage from "../../e2e/spotify/registration";
describe('Home Page', () => {
    const home=new Home();
    const registrationPage=new RegistrationPage();
    it('Click on links', () => {
        registrationPage.visit();
        cy.wait(4000);
        registrationPage.close();
        cy.wait(2000);
        home.clickLegal();
        cy.go('back');
        cy.wait(4000);
        home.clickSafetyPrivacy();
        cy.go('back');
        cy.wait(4000);
        home.clickPrivacyPolicy();
        cy.go('back');
        cy.wait(4000);
        home.clickCookies();
        cy.go('back');
        cy.wait(4000);
        home.clickAboutAds();
        cy.go('back');
        cy.wait(5000);
        home.clickAccessibility();
        cy.go('back');
    });
    
});