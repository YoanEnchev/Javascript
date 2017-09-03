let heroData = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

presentAsJSON(heroData);

function presentAsJSON(heroData) {
    let allHeroes = [];

    for (currentHeroData of heroData) {
        let tokens = currentHeroData.split(/\s+\/\s+/);
        [name, level, items] = tokens;

        if (tokens.length > 2) {
            items = items.split(", ");
        }

        else {
            items = []; //no items
        }

        let hero = { name: name, level: Number(level), items: items };
        allHeroes.push(hero);

    }

    console.log(JSON.stringify(allHeroes));
}
