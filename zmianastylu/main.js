function color(){
    document.getElementById("p").style.color= "pink";
}

function size(){
    document.getElementById("p").style.fontSize="32px";
}

function font(){
    document.getElementById("p").style.fontFamily="comfortaa";
}

function reset(){
    const p = document.getElementById("p");
    p.style.color = "";
    p.style.fontSize = "";
    p.style.fontFamily = "";
}