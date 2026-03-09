function baza(){
    document.getElementById("section1").style.display="block";
    document.getElementById("block2").style.backgroundColor="#FFAEA5"
    document.getElementById("block3").style.backgroundColor="#FFAEA5"
    document.getElementById("block1").style.backgroundColor="mistyrose"
    
}
function opisy(){
    document.getElementById("section2").style.display="block";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
    document.getElementById("block2").style.backgroundColor="mistyrose"
    document.getElementById("block1").style.backgroundColor="#FFAEA5"
    document.getElementById("block3").style.backgroundColor="#FFAEA5"
}
function galeria(){
    document.getElementById("section3").style.display="block";
    document.getElementById("section1").style.display="none";
    document.getElementById("section2").style.display="none";
    document.getElementById("block3").style.backgroundColor="mistyrose"
    document.getElementById("block1").style.backgroundColor="#FFAEA5"
    document.getElementById("block2").style.backgroundColor="#FFAEA5"
}