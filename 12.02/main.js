


function calculate(){
    let kal = 0
    let count= document.getElementById("count").value
    let cena = document.getElementById("cena").value
    let glaze = document.getElementById("glaze").checked
    let x2 = document.getElementById("x2").checked
    
    kal = count*cena
    if(glaze){
        kal = kal+100
    }
     if(x2){
        kal = kal+200
    }
    
    document.getElementById("result").innerHTML="Szamcznego zjadłeś " +kal +" kcal";
}