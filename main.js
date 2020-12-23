let spGold = '#D2AB67';
let spGrey = '#F8F8F8';
let spBlue =  '#25203A';
let spPink = '#F9B9B3';
let spWhite = '#FFFFFF';

let selectedMat = 'agate';

let agateDesc='Agate is known to be a grounding stone; it creates emotional, physical, and intellectual balance. Used to emphasize the feelings of calmness and mindfulness in the space.'

let whiteAgateDesc='White Agate crystals delicately drizzled with ornamental gold, a true definition of luxury and elegance.';
let blueAgateDesc = 'The deep azure color of blue agate activates the peaceful and soothing nature of agate increasing positive vibes in the space.';
let raniAgateDesc='This bold pink stone is a perfect statement piece to center the power, attention, and balance in your space.';
let greyAgateDesc='The naturally set concentric patterns in the Grey Agate help heal anger and anxiety increasing mindfulness in the body.';
let yellowAgateDesc='The mosaic of yellow, brown, and beige crystals makes yellow agate a marvellous stone that reflects the healing energy of the sun';
let crystalAgateDesc='Simple and elegant choice for those calm corners in your space.';
let greenAgateDesc = 'Gold inlaid in between the forest inspired green crystals is a true fusion of royalty and simplicity.';


let amethystDesc = 'Amethyst is a part of the original cardinal gemstones that hold ceremonial and religious significance in many cultures. It relieves stress, balances mood swings and is believed to prevent intoxication.';

let greaterAmeDesc='Amethyst tumbles  - The royal shades of purple play well with golden and brown tones forming beautiful unique patterns.';
let tumblesAmeDesc = '';


let jasperDesc = 'Jasper is a stone of stability. It provides protection and absorbs negative energy. This comforting stone will bring in a sense of strength and security into the space.';
let fancyJasDesc='The beautiful melange of crimson, milky white, and beige makes fancy jasper an attractive stone for home decorators.';

let aventurineDesc='Aventurine is a stone of opportunity. It attracts luck, abundance, and success. It encourages optimism and a fearless quest for life.';

let redAveDesc='Red Aventurine brings luck and success to the beholder. As a result, this brilliant stone also helps those around it develop an optimistic outlook of the world.';
let lightgreenAveDesc = 'The vibrant greens of this stone make it full of life. Light Green Aventurine is a perfect piece to cheer up the energy of the space.';
let darkgreenAveDesc='Dark Green Aventurine - this fauvist stone brings in the impression of wild forest in the indoor spaces signifying abundance and prosperity.';



//======== material functions ===========

function agateClick() {
    console.log('agateClick function starts');
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

    document.getElementById('mat-description').innerHTML=agateDesc;
    
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
    document.getElementById('mat-description').innerHTML=amethystDesc;
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
    document.getElementById('mat-description').innerHTML=jasperDesc;
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
    document.getElementById('mat-description').innerHTML=aventurineDesc;
}

function prod1click() {
    document.getElementById('prod-button-1').focus({preventScroll:true});
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
function prod2click() {
    document.getElementById('prod-button-2').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/blueagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/agates/blueagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/blueagateSideBacklitShilaAndStyle.jpg';
    }

    else if (selectedMat === 'amethyst') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/amethysts/amethystsmallpinkShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/amethysts/amethysttumblesFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/amethysts/amethysttumblesSideBacklitShilaAndStyle.jpg';
    }

    else if (selectedMat === 'aventurine') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/aventurines/lightgreenaventurineShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/aventurines/lightgreenaventurineFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/aventurines/lightgreenaventurineSideBacklitShilaAndStyle.jpg';
    }
}
function prod3click() {
    document.getElementById('prod-button-3').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/greyagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/agates/greyagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/greyagateSideBacklitShilaAndStyle.jpg';
    }

    else if (selectedMat === 'aventurine') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/aventurines/darkgreenaventurineShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='./images/aventurines/darrkgreenaventurineFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/aventurines/darkgreenaventurineSideBacklitShilaAndStyle.jpg';
    }
}
function prod4click() {
    document.getElementById('prod-button-4').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/raniagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='images/agates/rainagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/raniagateSideBacklitShilaAndStyle.jpg';
    }
}
function prod5click() {
    document.getElementById('prod-button-5').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/crystalagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='images/agates/crystalagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/crystalagateSideBacklitShilaAndStyle.jpg';
    }
}
function prod6click() {
    document.getElementById('prod-button-6').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/greenagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='';
        document.getElementById('semi-precious-backlit-side').src='';
    }
}
function prod7click() {
    document.getElementById('prod-button-7').focus();
    if (selectedMat === 'agate') {
        document.getElementById('semi-precious-product-viewer').style.backgroundImage='url(./images/agates/yellowagateShilaAndStyle.jpg)';
        document.getElementById('semi-precious-backlit-front').src='images/agates/yellowagateFrontBacklitShilaAndStyle.jpg';
        document.getElementById('semi-precious-backlit-side').src='./images/agates/yellowagateSideBacklitShilaAndStyle.jpg';
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