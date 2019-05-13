document.addEventListener('DOMContentLoaded',function () {
    const aboutElement = document.querySelector('h2');
    const profile = getGitHubProfile();


    // getGitHubProfile()
    //     .done((data, text) => {
    //         console.log(data);
    //     })
    //     .fail((request, status, error) => {
    //         console.log(request, status, error);
    //     });

    fillAboutInfo(aboutElement, profile);


});



//Laat een aantal info elementjes van mijn github profiel zien op de pagina via jquery functies. Zoals avatar_url, html_url, repos_urls datum evt

