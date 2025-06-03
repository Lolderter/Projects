function przelic(){
const diesientkowa = document.getElementById("pobieranie");
      let liczba = Number(diesientkowa.value);

      if (isNaN(liczba) || liczba < 0 || !Number.isInteger(liczba)) {
        document.getElementById("wynik").innerText = "Podaj poprawną liczbę dziesiętną nieujemną.";
        return;
      }

      let binar = liczba.toString(2);

      let binost = binar.split('').reverse().join('')
        .match(/.{1,4}/g).map(grupa => grupa.split('').reverse().join(''))
        .reverse().join(' ');


      document.getElementById("wynik").innerHTML = `${binost}<sub>(2)</sub>`;
}