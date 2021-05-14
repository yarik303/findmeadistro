var EOLToggle = false;
var nLines = 0;
//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var color_list = ["#A0D468"]; 


function clicked(){
    changeButtonColor();
    if (EOLToggle == true){
        var chosentype = Math.floor((Math.random()*100)+ 1);

        if (chosentype <= 25){
            window.open(EOLredhatlinks[Math.floor(Math.random()*EOLredhatlinks.length)]);
        }
        else{
            window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
        }
    }
    else{
        window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
    }
}

function changeButtonColor(){

    document.body.style.backgroundColor = "#DA4453"; 
    document.getElementById("BigTitle").style.color = "#FFFFFF";
    document.getElementById("random-button").style.backgroundColor = "#FFFFFF";
    document.getElementById("random-button").style.borderColor = "#DA4453";
    document.getElementById("smallerTitle").style.color = "#F1F1F1";
    document.getElementById("suggestions").style.color = "#FFFFFF";
    document.getElementById("creditsanddate").style.color = "#FFFFFF";

    if (EOLToggle == true){
        document.getElementById("EOLon").style.background = "#ED5565";
        document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
    }
    else if (EOLToggle == false){
        document.getElementById("EOLoff").style.backgroundColor = "#ED5565";
        document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
    }
}

function relocateGithubHome(){
    var githubhome = "https://github.com/KripC2160/findmealinuxdistro";
    window.open(githubhome);
}

function relocateGithub(){
    var github = "https://github.com/KripC2160/findmealinuxdistro/issues";
    window.open(github);
}

function toggleEOLon(){
    if (EOLToggle == false){
        EOLToggle = true;
        changeButtonColor();
    }
}

function toggleEOLoff(){
    if (EOLToggle == true){
        EOLToggle = false;
        changeButtonColor();
    }
}