import LoginPage from "../../e2e/spotify/login";
describe('Login page', () => {
    const loginPage=new LoginPage();
    it('Login Successful', () => {
        loginPage.visit();
        cy.wait(4000);
        loginPage.close();
        loginPage.login()
        loginPage.email('1testuser1@example.com');
        loginPage.password('Password123!');
        loginPage.loginbutton();
        cy.wait(4000);
        loginPage.loginsuccess();
    });
});