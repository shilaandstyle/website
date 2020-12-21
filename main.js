let spGold = '#D2AB67';
let spGrey = '#F8F8F8';
let spBlue =  '#25203A';
let spPink = '#F9B9B3';
let spWhite = '#FFFFFF';

//======== material functions ===========

function agateClick() {
    document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/blueagateShilaAndStyle.jpg)';
}

//========= utility functions ===========

function selMat(x) {
    x.style.backgroundColor = spGold;
    x.style.color = spWhite;
}

function deselMat(x) {
    x.style.backgroundColor = 'unset';
    x.style.color = 'unset';
}

