document.addEventListener('DOMContentLoaded',function () {
    const aboutElement = document.querySelector('div.about');
    // const profile = getGitHubProfile();
    // fillAboutInfo(aboutElement, getProfile());

    getGitHubProfile()
        .done(function getProfile(profile) {
           // alert(profile.id);
            aboutElement.querySelector('h4').textContent = profile.login;
            aboutElement.querySelector('p.id').textContent = profile.id;
            aboutElement.querySelector('p.avatar').textContent = profile.avatar_url;
            aboutElement.querySelector('p.url').textContent = profile.repos_url;
            // console.log("hier gaat het nog steeds goed");
        })
        .fail((request, status, error) => {
            console.log(request, status, error);
        });
});


