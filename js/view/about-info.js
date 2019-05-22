const fillAboutInfo = (profile) => {
    const aboutElement = document.querySelector('div.about');
    console.log("hier gaat het nog goed");
    aboutElement.querySelector('h4').textContent = profile.login;
    aboutElement.querySelector('p.id').textContent = profile.id;
    aboutElement.querySelector('p.avatar').textContent = profile.avatar_url;
    aboutElement.querySelector('p.url').textContent = profile.repos_url;
    console.log("hier gaat het nog steeds goed");

};
