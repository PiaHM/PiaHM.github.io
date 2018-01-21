/**
 * Created by Pia on 15.01.18.
 */
let frmKontakter = document.getElementById("frmKontakter");
let tbKontakter = document.getElementById("tbKontakter");
let inpFornavn = document.getElementById("inpFornavn");
let inpEtternavn = document.getElementById("inpEtternavn");
let inpTelefon = document.getElementById("inpTelefon");

let kontakter = new Map();

function oppdaterTabell() {
    tbKontakter.innerHTML = "";
    for (let kontakt of kontakter.values()){
        tbKontakter.innerHTML += kontakt.tabellrad;
    }
    let kontakterSomArray = Array.from(kontakter.values());
    localStorage.mineKontakter = JSON.stringify(kontakterSomArray);
}

function slettKontakt(telefon) {
    kontakter.delete(telefon);
    oppdaterTabell();
}

frmKontakter.onsubmit = function (evt) {
    evt.preventDefault();
    let fornavn = inpFornavn.value;
    let etternavn = inpEtternavn.value;
    let telefon = inpTelefon.value;
    let nyKontakt = new Kontakt(fornavn, etternavn, telefon);
    kontakter.set(telefon, nyKontakt);
    oppdaterTabell();
    inpFornavn.value = inpEtternavn.value = inpTelefon.value = "";
    inpFornavn.focus();
};

if(localStorage.mineKontakter){
    let mineLagredeKontakter = JSON.parse(localStorage.mineKontakter);
    for (let k of mineLagredeKontakter){
        let nyKontakt = new Kontakt(k.fornavn, k.etternavn, k.telefon);
        kontakter.set(nyKontakt.telefon, nyKontakt);
    }
    oppdaterTabell();
}




