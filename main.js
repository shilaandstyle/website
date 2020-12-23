let spGold = '#D2AB67';
let spGrey = '#F8F8F8';
let spBlue =  '#25203A';
let spPink = '#F9B9B3';
let spWhite = '#FFFFFF';

let selectedMat = 'agate';

//======== material functions ===========

function agateClick() {
    selMat(document.getElementById('button-agate'));
    deselMat(document.getElementById('button-amethyst'));
    deselMat(document.getElementById('button-jasper'));
    deselMat(document.getElementById('button-aventurine'));

    selectedMat = 'agate';

    prod1click();

    document.getElementById('prod-button-1').style.display='block';
    document.getElementById('prod-button-1').style.backgroundImage = 'url(./images/thumbnails/whiteagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-1').innerHTML = 'SAG 06'

    document.getElementById('prod-button-2').style.display='block';
    document.getElementById('prod-button-2').style.backgroundImage = 'url(./images/thumbnails/blueagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-2').innerHTML = 'SAG 06'

    document.getElementById('prod-button-3').style.display='block';
    document.getElementById('prod-button-3').style.backgroundImage = 'url(./images/thumbnails/greyagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-3').innerHTML = 'SAG 06'

    document.getElementById('prod-button-4').style.display='block';
    document.getElementById('prod-button-4').style.backgroundImage = 'url(./images/thumbnails/raniagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-4').innerHTML = 'SAG 06'

    document.getElementById('prod-button-5').style.display='block';
    document.getElementById('prod-button-5').style.backgroundImage = 'url(./images/thumbnails/crystalagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-5').innerHTML = 'SAG 06'

    document.getElementById('prod-button-6').style.display='block';
    document.getElementById('prod-button-6').style.backgroundImage = 'url(./images/thumbnails/greenagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-6').innerHTML = 'SAG 06'

    document.getElementById('prod-button-7').style.display='block';
    document.getElementById('prod-button-7').style.backgroundImage = 'url(./images/thumbnails/yellowagateShilaAndStyle.jpg)';
    document.getElementById('prod-button-7').innerHTML = 'SAG 06'
}

function amethystClick() {

    selectedMat = 'amethyst';

    deselMat(document.getElementById('button-agate'));
    selMat(document.getElementById('button-amethyst'));
    deselMat(document.getElementById('button-jasper'));
    deselMat(document.getElementById('button-aventurine'));

    document.getElementById('prod-button-1').style.display='block';
    document.getElementById('prod-button-1').style.backgroundImage = 'url(./images/amethysts/amethysttumblesShilaAndStyle.jpg)';
    document.getElementById('prod-button-1').innerHTML = 'SAG 06'

    document.getElementById('prod-button-2').style.display='block';
    document.getElementById('prod-button-2').style.backgroundImage = 'url(./images/amethysts/amethystsmallpinkShilaAndStyle.jpg)';
    document.getElementById('prod-button-2').innerHTML = 'SAG 06'

    document.getElementById('prod-button-3').style.display='none';
    document.getElementById('prod-button-4').style.display='none';
    document.getElementById('prod-button-5').style.display='none';
    document.getElementById('prod-button-6').style.display='none';
    document.getElementById('prod-button-7').style.display='none';

    prod1click();
}

function jasperClick() {

    selectedMat = 'jasper';

    deselMat(document.getElementById('button-agate'));
    deselMat(document.getElementById('button-amethyst'));
    selMat(document.getElementById('button-jasper'));
    deselMat(document.getElementById('button-aventurine'));

    document.getElementById('prod-button-1').style.display='block';
    document.getElementById('prod-button-1').style.backgroundImage = 'url(./images/jaspers/fancyjasperShilaAndStyle.jpg)';
    document.getElementById('prod-button-1').innerHTML = 'SAG 06'

    document.getElementById('prod-button-2').style.display='none';
    document.getElementById('prod-button-3').style.display='none';
    document.getElementById('prod-button-4').style.display='none';
    document.getElementById('prod-button-5').style.display='none';
    document.getElementById('prod-button-6').style.display='none';
    document.getElementById('prod-button-7').style.display='none';

    prod1click();
}

function aventurineClick() {

    selectedMat='aventurine';

    deselMat(document.getElementById('button-agate'));
    deselMat(document.getElementById('button-amethyst'));
    deselMat(document.getElementById('button-jasper'));
    selMat(document.getElementById('button-aventurine'));

    document.getElementById('prod-button-1').style.display='block';
    document.getElementById('prod-button-1').style.backgroundImage = 'url(./images/aventurines/redaventurineShilaAndStyle.jpg)';
    document.getElementById('prod-button-1').innerHTML = 'SAG 06'

    document.getElementById('prod-button-2').style.display='block';
    document.getElementById('prod-button-2').style.backgroundImage = 'url(./images/aventurines/lightgreenaventurineShilaAndStyle.jpg)';
    document.getElementById('prod-button-2').innerHTML = 'SAG 06'

    document.getElementById('prod-button-3').style.display='block';
    document.getElementById('prod-button-3').style.backgroundImage = 'url(./images/aventurines/darkgreenaventurineShilaAndStyle.jpg)';
    document.getElementById('prod-button-3').innerHTML = 'SAG 06'

    document.getElementById('prod-button-4').style.display='none';
    document.getElementById('prod-button-5').style.display='none';
    document.getElementById('prod-button-6').style.display='none';
    document.getElementById('prod-button-7').style.display='none';

    prod1click();
}

function prod1click() {
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/whiteagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/agates/whiteagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/whiteagateSideBacklitShilaAndStyle.jpg';
    }

    else if (selectedMat === 'amethyst') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/amethysts/amethysttumblesShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/amethysts/amethysttumblesFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/amethysts/amethysttumblesSideBacklitShilaAndStyle.jpg';
    }

    else if (selectedMat === 'jasper') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/jaspers/fancyjasperFrontBacklitShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/jaspers/fancyjasperFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/jaspers/fancyjasperBacklitSideShilaAndStyle.jpg';
    }

    else if (selectedMat === 'aventurine') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/aventurines/redaventurineShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/aventurines/redaventurineFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/aventurines/redaventurineSideBacklitShilaAndStyle.jpg';
    }
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