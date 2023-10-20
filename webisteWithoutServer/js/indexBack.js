function overYears() {
    document.body.style.backgroundImage = "url('images/index/seasonsMidjourney.jpg')";
    center();
    var div = document.getElementById("years");

    div.style.backgroundColor = ('rgba(96, 96, 97, 0.6)');
}
function overAnimals() {
    document.body.style.backgroundImage = "url('images/index/animalsMidjourney2.jpg')";
    center();

    var div = document.getElementById("animals");

    div.style.backgroundColor = ('rgba(96, 96, 97, 0.6)');
}

function overMacro() {
    document.body.style.backgroundImage = "url('images/index/macroMidjourney.jpg')";
    center();

    var div = document.getElementById("macro");

    div.style.backgroundColor = ('rgba(96, 96, 97, 0.6)');
    
}

function overBlackAWhite() {
    document.body.style.backgroundImage = "url('images/index/blackAWhiteMidjourney.jpg')";
    center();

    var div = document.getElementById("blackAwhite");

    div.style.backgroundColor = ('rgba(96, 96, 97, 0.6)');
}

function overAstro() {
    document.body.style.backgroundImage = "url('images/index/astroMidjourney.jpg')";
    center();

    var div = document.getElementById("astro");

    div.style.backgroundColor = ('rgba(96, 96, 97, 0.6)');

}

function center() {
    document.body.style.backgroundPosition = "center";
}


function out() {
    document.body.style.backgroundImage = "url('images/index/backgroundFin.jpg')";
    center();

    var divs = document.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
