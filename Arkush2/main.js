function oblicz() {
    var sczerokosc = parseFloat(document.getElementById("width").value);
    var dlugosc = parseFloat(document.getElementById("length").value); 
    var typ = 0;

    if (document.getElementById("laminowane").checked) {
        typ = 12;
    } else if (document.getElementById("winylowe").checked) {
        typ = 14;
    } else if (document.getElementById("podlogowa").checked) {
        typ = 18;
    }

    var total = 0;
    if (!isNaN(sczerokosc) && !isNaN(dlugosc) && typ !== 0) {
        var powerzchnia = sczerokosc * dlugosc;
        total = powerzchnia * typ;
        document.getElementById("result").innerHTML = "Cena: " + total + " zł"; 
    } else {
        alert("Wprowadź poprawne dane!");
    }
}
