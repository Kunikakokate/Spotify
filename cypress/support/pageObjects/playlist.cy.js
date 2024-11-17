import LoginPage from "../../e2e/spotify/login";

import playList from "../../e2e/spotify/playlist";
describe('PlayList', () => {
    const loginPage=new LoginPage();
    const playlist=new playList();
    it('play song after login', () => {
        loginPage.visit();
        cy.wait(4000);
        loginPage.close();
        cy.wait(4050);
        playlist.artist();
        cy.wait(4050);
        playlist.play();
        playlist.loginafter();
        loginPage.email('1testuser1@example.com');
        loginPage.password('Password123!')
        cy.wait(4000);
        loginPage.loginbutton();
        
    });
    
});