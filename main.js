function clickFn() {
    var button1 = document.getElementById("clickButton");
    var logoLink = document.getElementById("logo");
    button1.style.color='teal';
    logoLink.src = 'images/agates/01_100ppc-3scans.jpg';
    logoLink.style.maxWidth='200px';
    logoLink.style.maxHeight='200px';

    document.getElementById("href").href="https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript";
    document.getElementById("href").innerHTML="StackBoi is real";
    document.getElementById("href").style.backgroundImage="url('images/agates/01_100ppc-3scans.jpg')";
}

function bodyClick() {
    var logoLink = document.getElementById("logo");
    var button1 = document.getElementById("clickButton");
    logoLink.src = 'images/logos/primaryIcon-primaryBG-1.svg';
    button1.style.color='orange';
    logoLink.style.maxWidth='none';
    logoLink.style.maxHeight='none';
}