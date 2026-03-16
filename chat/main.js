function send() {
    let tekst = document.getElementById("pole").value;

    let chat = document.getElementById("chat");

    let blok = document.createElement("div");
    blok.id = "jol";

    let img = document.createElement("img");
    img.src = "Jolka.jpg";

    let p = document.createElement("p");
    p.innerText = tekst;

    blok.appendChild(img);
    blok.appendChild(p);

    chat.appendChild(blok);
}

function gen(){
    const answ = ["Świetnie","Kto gra główną rolę?","Lubisz filmy Tego reżysera?","Będę 10 minut wcześniej","Może kupimy sobie popcorn?","Ja wolę Colę","Zaproszę jeszcze Grześka","Tydzień temu też byłem w kinie na Diunie","Ja funduję bilety"] 

    const random= Math.floor(Math.random()*answ.length)
    let tekst = answ[random];

    let chat = document.getElementById("chat");

    let blok = document.createElement("div");
    blok.id = "krz";

    let img = document.createElement("img");
    img.src = "Krzysiek.jpg";

    let p = document.createElement("p");
    p.innerText = tekst;

    blok.appendChild(img);
    blok.appendChild(p);

    chat.appendChild(blok);

}

