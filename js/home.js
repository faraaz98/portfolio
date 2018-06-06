function changeTheme(themeNumber) {
  // get css theme tag
  let themeTag = document.querySelectorAll('link')[2];
  if (themeNumber == 0) {
    // change to dark
    themeTag.setAttribute('href', 'css/dark.css');
  } else if (themeNumber == 1) {
    // change to light
    themeTag.setAttribute('href', 'css/light.css');
  }
}
