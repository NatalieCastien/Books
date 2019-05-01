document.addEventListener('DOMContentLoaded',function () {

    function genereerBericht(naam) {
        return 'Hallo ' + naam + '. Welkom!';
    }

    var tekst = genereerBericht('Piet');

    //alert(tekst);
    //console.log(tekst);
    document.getElementById('berichtContainer').textContent = tekst;




    function berekenUitkomst() {
        var getal1 = prompt('Eerste getal');
        var getal2 = prompt('tweede getal');

        var uitkomst = parseInt(getal1) + parseInt(getal2);
        return uitkomst;

    }
    var result = berekenUitkomst();
    document.getElementById('rekenUitkomst').textContent = result;



});

document.getElementById('calc').addEventListener("click", function() {
    function calculate() {
        var getal1 = document.getElementById(getal1);
        var getal2 = document.getElementById(getal2);

        var result = parseInt(getal1) + parseInt(getal2);
        return result;
    }

    var result = calculate();
    document.getElementById('result').textContent = result;
});






//     // Creer een functie die getallen 1 en 2 bij elkaar optelt. En schrijf de uitkomst weg op scherm.
//
//     // Uitdaging 2 (bij voldoende tijd): Creer een calculator met form veldjes op scherm, als volgt:
//     // INPUT TYPE TEXT (getal 1) - SELECT (met +, -, / , *) - INPUT TYPE TEXT (getal 2) - KNOP ( = ) - INPUT TYPE TEKST (uitkomst)
// }