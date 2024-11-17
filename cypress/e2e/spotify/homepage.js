class home{
clickLegal(){
    cy.get('[href="https://www.spotify.com/in-en/legal/"]').click()
}
clickSafetyPrivacy(){
    cy.get('[href="https://www.spotify.com/in-en/safetyandprivacy/"]').click()
}
clickPrivacyPolicy(){
    cy.get('[href="https://www.spotify.com/in-en/legal/privacy-policy/"]').click()
}
clickCookies(){
    cy.get('[href="https://www.spotify.com/in-en/legal/cookies-policy/"]').click()
}
clickAboutAds(){
    cy.get('[href="https://www.spotify.com/in-en/legal/privacy-policy/#s3"]').click()
}
clickAccessibility(){
    cy.get('[href="https://www.spotify.com/in-en/accessibility/"]').click()
}

}
export default home;