/**
 * Created by Pia on 15.01.18.
 */
class Kontakt{
    constructor(fornavn, etternavn, telefon){
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
    }
    get fulltNavn(){
        return `${this.fornavn} ${this.etternavn}`;
    }
    get tabellrad(){
        return `
            <tr> 
                <td>${this.fulltNavn}</td>
                <td>${this.telefon}</td>
                <td>
                    <button class="button" onclick="slettKontakt('${this.telefon}')">X</button>
                </td>
            </tr>
        `;
    }
}