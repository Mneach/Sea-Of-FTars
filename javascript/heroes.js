const heroesPath = '../assets/Heroes/';
const heroesTemplate = document.getElementById('hero-template');
const heroesContainer = document.getElementById('heroes-container');
const heroes = [
    {
        name: 'Valere',
    },
    {
        name: 'Zale',
    },
    {
        name: 'Garl',
    },
    {
        name: 'Teask',
    },
    {
        name: 'Keenathan',
    },
    {
        name: 'Erlina',
    },
    {
        name: 'Brugaves',
    },
    {
        name: 'Moraine',
    },
];

heroes.map((hero) => {
    const card = document.createElement('a');
    card.href = './hero_detail.html';
    card.classList.add('hero-container');
    card.innerHTML = heroesTemplate.cloneNode(true).innerHTML;

    card.querySelector('.hero-name').textContent = hero.name;
    card.querySelector('.hero-icon').setAttribute(
        'src',
        heroesPath + hero.name + '.svg'
    );

    heroesContainer.appendChild(card);
});
