const div = document.getElementById('tekst');

function zmienKolor() {
  if (!div.classList.contains('kolor')) {
    div.classList.add('kolor');
  } else {
    div.classList.remove('kolor');
  }
}

function zmienRozmiar() {
  if (!div.classList.contains('rozmiar')) {
    div.classList.add('rozmiar');
  } else {
    div.classList.remove('rozmiar');
  }
}

function zmienCzcionke() {
  if (!div.classList.contains('czcionka')) {
    div.classList.add('czcionka');
  } else {
    div.classList.remove('czcionka');
  }
}
function line() {
  if (!div.classList.contains('line')) {
    div.classList.add('line');
  } else {
    div.classList.remove('line');
  }
}

function resetuj() {
  div.classList.remove('kolor', 'rozmiar', 'czcionka');
}
