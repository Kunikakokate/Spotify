import RegistrationPage from "../../e2e/spotify/registration";

describe('Spotify Registration Page Tests', () => {
    //const registrationPage = new ReegisterationPag();
    const registrationPage=new RegistrationPage();
    
        //registrationPage.visit();
        //cy.wait(5000);
    

    // it('Should register a user successfully', () => {
    //    // registrationPage.wait(4000);
    //     registrationPage.visit();
    //     cy.wait(2000);
    //     registrationPage.close();

    //     registrationPage.signUp();
    //     registrationPage.enterEmail('3testuser1@example.com');
    //     cy.wait(4000);
    //     registrationPage.next();
    //     registrationPage.enterPassword('Password123!');
    //     cy.wait(4000);
    //     registrationPage.next1();
    //     registrationPage.enterName('TestUser');
    //     cy.wait(4000);
    //     registrationPage.enterDateOfBirth('1991', 'June', '19');
    //     cy.wait(4050);
    //     registrationPage.selectGender();
    //     registrationPage.Next();
    //     cy.wait(5000);
    //     registrationPage.clickSignUp();
    //     cy.wait(4000);
    //     registrationPage.verifySuccess();
    // });

    it('Should show error for existing email', () => {
        registrationPage.visit();
        cy.wait(2000);
        registrationPage.close();

        registrationPage.signUp();
        registrationPage.enterEmail('1testuser1@example.com');
        cy.wait(4000);
        registrationPage.next();
        cy.wait(4000);
        registrationPage.enterPassword('Password123!');
        cy.wait(4000);
        registrationPage.next1();
        registrationPage.enterName('testUser');
        cy.wait(4000);
        registrationPage.enterDateOfBirth('1999', 'June', '15');
        cy.wait(4050);
        registrationPage.selectGender();
        registrationPage.Next();
        cy.wait(5000);
        registrationPage.clickSignUp();
        registrationPage.verifyErrorMessage('Email address already exist'); 
    });

    //it('Should show error for weak password', () => {
    //     registrationPage.enterEmail('testuser@example.com');
    //     registrationPage.enterConfirmEmail('testuser@example.com');
    //     registrationPage.enterPassword('12345'); // Weak password
    //     registrationPage.enterProfileName('TestUser');
    //     registrationPage.enterDateOfBirth('15', 'June', '1990');
    //     registrationPage.selectGender('male');
    //     registrationPage.agreeToTerms();
    //     registrationPage.clickSignUp();
    //     registrationPage.verifyErrorMessage('Password is too weak'); // Replace with actual error message
    // });

    // it('Should show error for missing mandatory fields', () => {
    //     registrationPage.clickSignUp();
    //     registrationPage.verifyErrorMessage('Please fill out all required fields'); // Replace with actual error message
    // });

    // it('Should show error for underage users', () => {
    //     registrationPage.enterEmail('testuser@example.com');
    //     registrationPage.enterConfirmEmail('testuser@example.com');
    //     registrationPage.enterPassword('Password123!');
    //     registrationPage.enterProfileName('TestUser');
    //     registrationPage.enterDateOfBirth('15', 'June', '2015'); // User is under 13
    //     registrationPage.selectGender('male');
    //     registrationPage.agreeToTerms();
    //     registrationPage.clickSignUp();
    //     registrationPage.verifyErrorMessage('You must be at least 13 years old to sign up'); // Replace with actual error message
    // });
});
