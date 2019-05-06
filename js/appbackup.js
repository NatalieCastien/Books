document.addEventListener('DOMContentLoaded',function () {

    const books = [
        {
            id: 1,
            isbn: 9780132350884,
            title: 'Clean Code',
            subtitle: 'A Handbook of Agile Software Craftmanship',
            author: 'Robert C. Martin',
            price: 35.95,
            pages: 464,
            publisher: 'Pearson Education',
            description: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.`,
            image: 'book-clean-code.jpg',
        },

        {
            id: 2,
            isbn: 9781449344917,
            title: 'Learning PHP Design Patterns',
            subtitle: '',
            author: 'William Sanders',
            price: 29.99,
            pages: 350,
            publisher: "O\'Reilly Media",
            description: 'Build server-side applications more efficiently and improve your PHP programming skills in the process by learning how to use design patterns in your code. This book shows you how to apply several object-oriented patterns through simple examples, and demonstrates many of them in full-fledged working applications.',
            image: 'book-learning-php-design-patterns.jpg',
        },

        {
            id: 3,
            isbn: 9780321965516,
            title: "Don't make me think",
            subtitle: 'A Common Sense Approach to Web Usability',
            author: 'Steve Krug',
            price: 43.99,
            pages: 216,
            publisher: "Pearson Education",
            description: "Since Don't Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug's guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it's one of the best-loved and most recommended books on the subject. Now Steve returns with fresh perspective to reexamine the principles that made Don't Make Me Think a classic-with updated examples and a new chapter on mobile usability.",
            image: 'book-dont-make-me-think.jpg',
        }];



    alert(books[1].author)

    const cats = [
        'Persian',
        'Siamese',
        'Ragdoll'
    ];

    // alert(cats[1]);
    cats.push('Dutch');



    // for (let i = 0 ; i < cats.length; i++) {
    //     console.log(cats[i]);
    // }



    const listCats = (cats) => {
        const createCatListItem = (cat) => {
            const catListItem = document.createElement('li');
            catListItem.textContent = cat;
            catListItem.className = 'default';

            catListItem.addEventListener('click', function(event) {
                // event.target.className = 'active';
                //  event.target.classList.toggle('active');
                //  event.target.classList.add('hover');
                const clickedItem = event.target;
                console.log(clickedItem.parentNode);
                clickedItem.parentNode.removeChild(clickedItem);
            });

            return catListItem;
        };

        const catsList = document.querySelector('ul.cats');

        cats.forEach(function(cat) {
            const catListItem = createCatListItem(cat);

            catsList.appendChild(catListItem);
        });
    };



    listCats(cats);
    // cats.forEach(function(cat, index) {
    //     console.log(catslist);
    // });

    // console.log(cats);

    for (let i = 0; i < 5; i++) {
        console.log('i = ' + i);
    }

    const genereerBericht = (naam) => {
        return `Hallo ${naam}. Welkom!`;
    };

    // function genereerBericht(naam) {
    //     return 'Hallo ' + naam + '. Welkom!';
    // }

    const tekst = genereerBericht('Piet');

    //alert(tekst);
    //console.log(tekst);
    document.getElementById('berichtContainer').textContent = tekst;



// Bereken prompts
    const berekenUitkomst = () => {
        // Input ophalen
        // Calculatie uitvoeren
        // resultaat teruggeven


        const number1 = prompt('Eerste getal');
        const number2 = prompt('tweede getal');
        const operator = prompt('operator');

        const result = calculate(number1, number2, operator);

        return result;

    };

    //const result = berekenUitkomst();
    //document.getElementById('rekenUitkomst').textContent = result;




// Rekenmachine

    document.getElementById('calc').addEventListener('click', () => {
        const number1 = parseInt(document.getElementById('getal1').value);
        const number2 = parseInt(document.getElementById('getal2').value);
        const operator = document.getElementById('operator').value;

        const result = calculate(number1, number2, operator);

        document.getElementById('resulttext').textContent = result;
    });

});








//     // Creer een functie die getallen 1 en 2 bij elkaar optelt. En schrijf de uitkomst weg op scherm.
//
//     // Uitdaging 2 (bij voldoende tijd): Creer een calculator met form veldjes op scherm, als volgt:
//     // INPUT TYPE TEXT (getal 1) - SELECT (met +, -, / , *) - INPUT TYPE TEXT (getal 2) - KNOP ( = ) - INPUT TYPE TEKST (uitkomst)
// }