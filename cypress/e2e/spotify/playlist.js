class Playlist{
    artist(){
        cy.get('[aria-labelledby="card-title-spotify:artist:1wRPtKGflJrBx9BmLsSwlU-0 card-subtitle-spotify:artist:1wRPtKGflJrBx9BmLsSwlU-0"]').click();
    }
    play(){
        cy.get('[class="ButtonInner-sc-14ud5tc-0 hKFGwn encore-bright-accent-set"]').click({force:true});
    }

    loginafter(){
        cy.get('[class="Link-sc-k8gsk-0 eTBDM"]').click();
    }
}
export default Playlist;