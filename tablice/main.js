let auto = ["BMW", "Audi", "Opel", "Skoda", "Mercedes"];

function pokaz(){
    document.getElementById("wynik").innerHTML = auto.join(", ");
}

function dodajAuto(){
    let nowe = prompt("Podaj markę auto:");
    auto.push(nowe);
    pokaz();
}

function usunOstatnie(){
    auto.pop();
    pokaz();
}

function dodajPoczatek(){
    let nowe = prompt("Podaj markę auto:");
    auto.unshift(nowe);
    pokaz();
}

function usunPierwsze(){
    auto.shift();
    pokaz();
}

function czySkoda(){
    if(auto.includes("Skoda")){
        document.getElementById("wynik").innerHTML = "Skoda jest w tablicy";
    }else{
        document.getElementById("wynik").innerHTML = "Skody nie ma w tablicy";
    }
}

function sortuj(){
    auto.sort();
    pokaz();
}

function pierwsza(){
    document.getElementById("wynik").innerHTML = auto[0];
}

function liczba(){
    document.getElementById("wynik").innerHTML = "Liczba elementów: " + auto.length;
}

function pierwszaDruga(){
    document.getElementById("wynik").innerHTML = auto[0] + ", " + auto[1];
}

function oddzielneLinie(){
    document.getElementById("wynik").innerHTML = auto.join("<br>");
}