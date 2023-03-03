const enemiesPath = '../assets/Enemies/';
const enemiesTemplate = document.getElementById('enemy-template');
const enemiesContainer = document.getElementById('enemies-container');
const enemies = [
    {
        name: 'Luslug',
    },
    {
        name: 'Rochevre',
    },
    {
        name: 'Wanderer',
    },
    {
        name: 'Waltzers',
    },
    {
        name: 'DrillBot',
    },
    {
        name: 'Lonzon',
    },
    {
        name: 'Gulgul',
    },
    {
        name: 'ManglerFish',
    },
];

enemies.map((enemy) => {
    const card = document.createElement('a');
    card.href = './enemy_detail.html';
    card.classList.add('enemy-container');
    card.innerHTML = enemiesTemplate.cloneNode(true).innerHTML;

    card.querySelector('.enemy-icon').setAttribute(
        'src',
        enemiesPath + enemy.name + '.svg'
    );
    card.querySelector('.enemy-name').textContent = enemy.name;
    enemiesContainer.appendChild(card);
});
