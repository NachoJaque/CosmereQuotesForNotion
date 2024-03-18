const quotes1 = [
    'Life Before Death. Strength Before Weakness. Journey Before Destination. - The Way of Kings',
    'Life breaks us, then we fill the cracks with something stronger. - OathBringer',
    'Every man is a hero of his own story. - OathBringer',
    'I will take responsibility for what I have done. If I must fall, I will rise each time a better man. - OathBringer',
    'You can beat anybody, so long as you don’t let them fight back properly. - The Bands of Mourning',
    'It has always seemed to me that a coward is a person who cares more about what people say than about what is right. Bravery isn’t about what people call you. It’s about who you know yourself to be. - Skyward',
    'The most important step a man can take. It’s not the first one, is it? It’s the next one. Always the next step. - OathBringer',
    'All stories told have been told before. We tell them to ourselves, as did all men who ever were. And all men who ever will be. The only things new are the names. - Words of Radiance',
    'No one ever accomplished anything by being content with who they were. We accomplish great things by reaching toward who we could become. - Rhythm of War',
    'A man is what he has a passion about. I’ve found that if you give up what you want most for what you think you should want more, you’ll just end up miserable. - Breeze, The Hero of Ages',
    'You can’t kill me. I represent that one thing you’ve never been able to kill, no matter how hard you try. I am hope. - Kelsier, The Final Empire',
    'Failure is refusing to fight. Failure is remaining quiet and hoping someone else will fix the problem. - Calamity',
    'Do not dash if you only have the strength to walk, and do not waste your time pushing on the walls that will not give. More importantly, don’t shove where a pat would be sufficient. - Elantris',
    'That’s what trust is. It’s about giving someone else power over you. Power to hurt you. - The Hero of Ages',
    'It’s easy to believe in something when you win all the time. The losses are what define a man’s faith. - Elend, The Well of Ascension',
    'You don’t have to believe in my miracles. You can call them accidents or coincidences if you must. But don’t pity me for my faith. And don’t presume that you’re better, just because you believe something different. - Jewels, Warbreaker',
    'Good men can make terrible kings. But bad men cannot make good kings. - Tindwyl, The Well of Ascension'
];

const quotes = [
    'Escribo estas palabras en acero, pues todo lo que no este escrito en metal es indigno de confianza. | Kwaan, El pozo de la Ascencion',
    '-No lo comprendéis -gimió-. No sabeis lo que hago por la humanidad. Era vuestro dios, aunque no pudierais comprenderlo. Al matarme, os habéis condenado...|Rashek|El Imperio Final',
    '-La fe no es solo para los bellos momentos y los días felices. ¿Qué es la fe, qué es creer, si no continúas en ella después del fracaso? Vin fruncio el ceño. -Cualquiera puede creer en alguien, o en algo, que siempre tiene  éxito, señora. Pero en el fracaso... Ah, en eso sé que es difícil creer, con certeza y confianza. Es muy  difícil tener valor.|Sazed|El Imperio Final',
]



const imagenes = [
    
];

let quotesLength = quotes.length;
let imagenesLength = imagenes.length;




function newQuote() {
    var randomNumber1 = Math.floor(Math.random()*quotesLength);
    var randomNumber2 = Math.floor(Math.random()*imagenesLength);
    //var imagenAleatoria = imagenes[randomNumber2]
    const currentQuote = quotes[randomNumber1];

    const [quote, author, book] = currentQuote.split('|');
    document.getElementById('quoteDisplay').innerHTML = quote;
    document.getElementById('authorDisplay').innerHTML = author;
    document.getElementById('bookDisplay').innerHTML = book;
    //document.body.style.backgroundImage = "url('${imagenAleatoria}')";
}