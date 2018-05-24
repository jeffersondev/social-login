const $ = document.querySelector.bind(document)

function onSignIn(googleUser) {
  renderUserProfile(googleUser)
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance()
  auth2.signOut().then(function () {
    renderUserProfile()
  })
}

function renderUserProfile(googleUser) {
  console.log(googleUser)
  if (googleUser) {
    const profile = googleUser.getBasicProfile()
    console.log('ID: ' + profile.getId())
    console.log('Full Name: ' + profile.getName())
    console.log('Given Name: ' + profile.getGivenName())
    console.log('Family Name: ' + profile.getFamilyName())
    console.log('Image URL: ' + profile.getImageUrl())
    console.log('Email: ' + profile.getEmail())
  } else {
    console.log('User signed out.')
  }
}

function initialize() {
  if (auth2.isSignedIn.get()) {
    renderUserProfile(auth2.currentUser.get())
  }
}

initialize()
