let location_altText = ['smiley.gif', 'Smiley Face'];

composeTag(location_altText);

function composeTag(location_altText) {
    let location = location_altText[0];
    let altText = location_altText[1];

    console.log(`<img src="${location}" alt="${altText}">`);
}
