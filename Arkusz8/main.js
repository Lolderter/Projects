function oblicz() {
    var wybranaDlugosc = document.querySelector('input[name="dlugosc"]:checked');
    if (!wybranaDlugosc) {
        alert("Wybierz długość włosów!");
        return;
    }

    var cenaBazowa;

    if (wybranaDlugosc.value === "25") {
        cenaBazowa = 25;
    } else if (wybranaDlugosc.value === "30") {
        cenaBazowa = 30;
    } else if (wybranaDlugosc.value === "40") {
        cenaBazowa = 40;
    } else if (wybranaDlugosc.value === "50") {
        cenaBazowa = 50;
    } 

    var cenaPromocyjna = cenaBazowa - 10;
   

    var wynik = document.getElementById("wynik").innerHTML = "Cena promocyjna:"+cenaPromocyjna;
 
}
