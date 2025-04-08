
function round(){
    
    var liczba = parseFloat(document.getElementById("pole").value)

    if(Number.isInteger(liczba)) {
        alert("Wrong number")
        return;

    }
    var wynikceil = Math.ceil(liczba)
    var wynikfloor = Math.floor(liczba)
    var wynikround= Math.round(liczba)
    var wyniktrunc = Math.trunc(liczba)





document.getElementById("wynikceil").innerHTML = wynikceil
document.getElementById("wynikfloor").innerHTML = wynikfloor
document.getElementById("wynikround").innerHTML = wynikround
document.getElementById("wyniktrunc").innerHTML = wyniktrunc
}
