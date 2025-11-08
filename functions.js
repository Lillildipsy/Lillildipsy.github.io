function setCookie(name, value){
  const date = new Date();
  date.setTime(date.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname){
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function toggleDarkMode(toggle=true){
    var elementArr = document.getElementsByClassName("adaptiveTheme")
    for (let i = 0; i < elementArr.length; i++){
        elementArr[i].classList.toggle("darkMode");
    }
    if (toggle == false){
        return;
    }
    if (getCookie("adaptiveTheme") != "light"){
        setCookie("adaptiveTheme", "light")
    }
    else{
        setCookie("adaptiveTheme", "dark")
    }
}
