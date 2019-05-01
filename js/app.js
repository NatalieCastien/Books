document.addEventListener('DOMContentLoaded',function () {

    function genereerBericht(naam) {
        return 'Hallo ' + naam + '. Welkom!';
    }

    var tekst = genereerBericht('Piet');

    //alert(tekst);
    //console.log(tekst);
    document.getElementById('berichtContainer').textContent = tekst;


    var getal1 = prompt();
    var getal2 = prompt();

    // Creer een functie die getallen 1 en 2 bij elkaar optelt. En schrijf de uitkomst weg op scherm.

    // Uitdaging 2 (bij voldoende tijd): Creer een calculator met form veldjes op scherm, als volgt:
    // INPUT TYPE TEXT (getal 1) - SELECT (met +, -, / , *) - INPUT TYPE TEXT (getal 2) - KNOP ( = ) - INPUT TYPE TEKST (uitkomst)
});

