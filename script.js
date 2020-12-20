// API Reference: https://www.wix.com/corvid/reference
// “Hello, World!” Example: https://www.wix.com/corvid/hello-world
let spGold="#D2AB67";
let spBlue="#25203A";
let spWhite="#FFFFFF";
let selectedBorder = "3px";
let deselectedBorder = "3px";

let agate = $w('#agateButton');
let aventurine = $w('#aventurineButton');
let amethyst = $w('#amethystButton');
let jasper = $w('#jasperButton');

let agateGroup=$w('#groupAgate');
let amethystGroup=$w('#groupAmethyst');
let jasperGroup=$w('#groupJasper');
let aventurineGroup=$w('#groupAventurine');

let viewer=$w('#matView');
let matDesc = $w('#matDesc');
let prodName=$w('#heading');
let prodDesc=$w('#decription');

//-----------------agates-------------------

let whiteAgaBut = $w('#whiteAgaBut');
let yellowAgaBut = $w('#yellowAgaBut');
let blueAgaBut = $w('#blueAgaBut');
let greyAgaBut = $w('#greyAgaBut');
let greenAgaBut = $w('#greenAgaBut');
let crystalAgaBut = $w('#crystalAgaBut');
let raniAgaBut = $w('#raniAgaBut');

//image links below
let emptyImage = 'https://static.wixstatic.com/media/98f98d_3e20be646f584df18d67132ae4b7a6b8~mv2.png';

let whiteAgate='https://shilaandstyle.github.io/wip/images/agates/whiteagateShilaAndStyle.jpg';
let blueAgate = 'https://shilaandstyle.github.io/wip/images/agates/blueagateShilaAndStyle.jpg';
let raniAgate='https://shilaandstyle.github.io/wip/images/agates/raniagateShilaAndStyle.jpg';
let greyAgate='https://shilaandstyle.github.io/wip/images/agates/greyagateShilaAndStyle.jpg';
let yellowAgate='https://shilaandstyle.github.io/wip/images/agates/yellowagateShilaAndStyle.jpg';
let crystalAgate='https://shilaandstyle.github.io/wip/images/agates/crystalagateShilaAndStyle.jpg';
let greenAgate = 'https://shilaandstyle.github.io/wip/images/agates/greenagateShilaAndStyle.jpg';

let agateDesc='Agate is known to be a grounding stone; it creates emotional, physical, and intellectual balance. Used to emphasize the feelings of calmness and mindfulness in the space.'

let whiteAgateDesc='White Agate crystals delicately drizzled with ornamental gold, a true definition of luxury and elegance.';
let blueAgateDesc = 'The deep azure color of blue agate activates the peaceful and soothing nature of agate increasing positive vibes in the space.';
let raniAgateDesc='This bold pink stone is a perfect statement piece to center the power, attention, and balance in your space.';
let greyAgateDesc='The naturally set concentric patterns in the Grey Agate help heal anger and anxiety increasing mindfulness in the body.';
let yellowAgateDesc='The mosaic of yellow, brown, and beige crystals makes yellow agate a marvellous stone that reflects the healing energy of the sun';
let crystalAgateDesc='Simple and elegant choice for those calm corners in your space.';
let greenAgateDesc = 'Gold inlaid in between the forest inspired green crystals is a true fusion of royalty and simplicity.';


//-----------------amethysts-------------------

let tumblesAmeBut = $w('#tumblesAmeBut');
let Ame02But = $w('#Ame02But');
let Ame03But = $w('#Ame03But');

//image links below

let tumblesAmethyst='https://shilaandstyle.github.io/wip/images/amethysts/amethysttumblesShilaAndStyle.jpg';
let Ame02 = 'https://shilaandstyle.github.io/wip/images/amethysts/amethystsmallpinkShilaAndStyle.jpg';
let Ame03='https://shilaandstyle.github.io/wip/images/amethysts/amethystsmallsalmonShilaAndStyle.jpg';

let AmeDesc='Amethyst is a part of the original cardinal gemstones that hold ceremonial and religious significance in many cultures. It relieves stress, balances mood swings and is believed to prevent intoxication.';

let tumblesAmeDesc='Amethyst tumbles  - The royal shades of purple play well with golden and brown tones forming beautiful unique patterns.';
let Ame02Desc = '';
let Ame03Desc='';


//-----------------aventurines-------------------

let redAveBut = $w('#redAveBut');
let ltgreenAveBut = $w('#ltgreenAvenBut');
let drkgreenAveBut = $w('#drkgreenAvenBut');

//image links below
let redAve='https://shilaandstyle.github.io/wip/images/aventurines/redaventurineShilaAndStyle.jpg';
let ltgreenAve = 'https://shilaandstyle.github.io/wip/images/aventurines/lightgreenaventurineShilaAndStyle.jpg';
let drkgreenAve='https://shilaandstyle.github.io/wip/images/aventurines/darkgreenaventurineShilaAndStyle.jpg';

let aventurineDesc='Aventurine is a stone of opportunity. It attracts luck, abundance, and success. It encourages optimism and a fearless quest for life.';

let redAveDesc='Red Aventurine brings luck and success to the beholder. As a result, this brilliant stone also helps those around it develop an optimistic outlook of the world.';
let lightgreenAveDesc = 'The vibrant greens of this stone make it full of life. Light Green Aventurine is a perfect piece to cheer up the energy of the space.';
let darkgreenAveDesc='Dark Green Aventurine - this fauvist stone brings in the impression of wild forest in the indoor spaces signifying abundance and prosperity.';

//--------------jasper-----------
let jasperDesc = 'Jasper is a stone of stability. It provides protection and absorbs negative energy. This comforting stone will bring in a sense of strength and security into the space.';

let fancyJasBut = $w('#groupJasper');
let fancyJasper = 'https://shilaandstyle.github.io/wip/images/jaspers/fancyjasperShilaAndStyle.jpg';
let fancyJasDesc='The beautiful melange of crimson, milky white, and beige makes fancy jasper an attractive stone for home decorators.';

let fadeOptions = {
      "duration":480,
      "delay":0
};

$w.onReady(function () {
agateButton_click();
});

export function agateButton_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
selectButton(agate);
deselectButton(amethyst);
deselectButton(jasper);
deselectButton(aventurine);

spShow(agateGroup);
spHide(amethystGroup);
spHide(jasperGroup);
spHide(aventurineGroup);

matDesc.text=agateDesc;

whiteAgaBut_click();
}

export function amethystButton_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
selectButton(amethyst);
deselectButton(agate);
deselectButton(jasper);
deselectButton(aventurine);

spShow(amethystGroup);
spHide(agateGroup);
spHide(jasperGroup);
spHide(aventurineGroup);

matDesc.text=AmeDesc;

tumblesAmeBut_click();
}

export function jasperButton_click (event) {
selectButton(jasper);
deselectButton(agate);
deselectButton(amethyst);
deselectButton(aventurine);

spShow(jasperGroup);
spHide(agateGroup);
spHide(amethystGroup);
spHide(aventurineGroup);

matDesc.text=jasperDesc;

groupJasper_click();
}

export function aventurineButton_click (event) {
selectButton(aventurine);
deselectButton(agate);
deselectButton(amethyst);
deselectButton(jasper);

spShow(aventurineGroup);
spHide(agateGroup);
spHide(jasperGroup);
spHide(amethystGroup);

matDesc.text=aventurineDesc;
redAveBut_click();
}


//==================supporting functions>>>>>>>>>>>>>>>>>>>agate

function selectButton (x) {
x.style.backgroundColor=spGold;
x.style.color=spWhite;
}

function deselectButton (x) {
x.style.backgroundColor='#ffffff';
x.style.color=spBlue;
}

function spShow (x) {
x.show('fade',fadeOptions);
}

function spHide (x) {
x.hide();
}

function selectProd (x) {
x.style.borderColor=spGold;
x.style.borderWidth=selectedBorder;
}

function deselectProd (x) {
x.style.borderColor='#ffffff';
x.style.borderWidth=deselectedBorder;
}

export function whiteAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=whiteAgate;
prodDesc.text=whiteAgateDesc;
prodName.text='White Agate with Gold Inlay (SAG 06)';

selectProd(whiteAgaBut);
deselectProd(blueAgaBut);
deselectProd(raniAgaBut);
deselectProd(greenAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greyAgaBut);
deselectProd(crystalAgaBut);
}



export function blueAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here:
viewer.background.src=blueAgate;
prodDesc.text=blueAgateDesc;
prodName.text='Blue Agate (SAG 05)';

selectProd(blueAgaBut);
deselectProd(whiteAgaBut);
deselectProd(raniAgaBut);
deselectProd(greenAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greyAgaBut);
deselectProd(crystalAgaBut);
}

export function raniAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=raniAgate;
prodDesc.text=raniAgateDesc;
prodName.text='Rani Agate (SAG 04)';

selectProd(raniAgaBut);
deselectProd(whiteAgaBut);
deselectProd(blueAgaBut);
deselectProd(greenAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greyAgaBut);
deselectProd(crystalAgaBut);
}

export function greenAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=greenAgate;
prodDesc.text=greenAgateDesc;
prodName.text='Light Green Agate with Gold Inlay (SAG 01)';

selectProd(greenAgaBut);
deselectProd(whiteAgaBut);
deselectProd(raniAgaBut);
deselectProd(blueAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greyAgaBut);
deselectProd(crystalAgaBut);
}



export function yellowAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=yellowAgate;
prodDesc.text=yellowAgateDesc;
prodName.text='Yellow Agate (SAG 07)';

selectProd(yellowAgaBut);
deselectProd(whiteAgaBut);
deselectProd(raniAgaBut);
deselectProd(blueAgaBut);
deselectProd(greenAgaBut);
deselectProd(greyAgaBut);
deselectProd(crystalAgaBut);
}

export function greyAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=greyAgate;
prodDesc.text=greyAgateDesc;
prodName.text='Grey Agate (SAG 03)';

selectProd(greyAgaBut);
deselectProd(whiteAgaBut);
deselectProd(raniAgaBut);
deselectProd(blueAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greenAgaBut);
deselectProd(crystalAgaBut);
}



export function crystalAgaBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=crystalAgate;
prodDesc.text=crystalAgateDesc;
prodName.text='Crystal Agate (SAG 02)';

selectProd(crystalAgaBut);
deselectProd(whiteAgaBut);
deselectProd(raniAgaBut);
deselectProd(blueAgaBut);
deselectProd(yellowAgaBut);
deselectProd(greyAgaBut);
deselectProd(greenAgaBut);
}

export function tumblesAmeBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=tumblesAmethyst;
prodDesc.text=tumblesAmeDesc;
prodName.text='Amethyst Tumbles (SAM 01)';

selectProd(tumblesAmeBut);
deselectProd(Ame02But);
deselectProd(Ame03But);
}

export function Ame02But_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=Ame02;
prodDesc.text=Ame02Desc;
prodName.text='Amethyst 02 (SAM 02)';

deselectProd(tumblesAmeBut);
selectProd(Ame02But);
deselectProd(Ame03But);
}



export function Ame03But_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=Ame03;
prodDesc.text=Ame03Desc;
prodName.text='Amethyst 03 (SAM 03)';

deselectProd(tumblesAmeBut);
deselectProd(Ame02But);
selectProd(Ame03But);
}

export function redAveBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=redAve;
prodDesc.text=redAveDesc;
prodName.text='Red Aventurine (SAV 01)';

deselectProd(ltgreenAveBut);
deselectProd(drkgreenAveBut);
selectProd(redAveBut);
}

export function ltgreenAvenBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=ltgreenAve;
prodDesc.text=lightgreenAveDesc;
prodName.text='Light Green Aventurine (SAV 02)';

selectProd(ltgreenAveBut);
deselectProd(drkgreenAveBut);
deselectProd(redAveBut);
}

export function drkgreenAvenBut_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=drkgreenAve;
prodDesc.text=darkgreenAveDesc;
prodName.text='Dark Green Aventurine (SAV 03)';

deselectProd(ltgreenAveBut);
selectProd(drkgreenAveBut);
deselectProd(redAveBut);
}


export function groupJasper_click(event) {
// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// Add your code for this event here: 
viewer.background.src=fancyJasper;
prodDesc.text=fancyJasDesc;
prodName.text='Fancy Jasper (SJA 01)';

selectProd(fancyJasBut);
}