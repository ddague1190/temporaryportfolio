const links = [
    'https://fishnstik.herokuapp.com/',
    'https://secure-lowlands-39459.herokuapp.com',
    'https://ddague1190.github.io/calculator/',
    'https://ddague1190.github.io/article_horseculture/',
    'https://ddague1190.github.io/article_kawasakivoyager/',
    'https://ddague1190.github.io/randomImageLover/',
    'https://www.tinyshelterarchive.com/'
];

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => card.addEventListener('click', ()=> window.location.href=links[index]))