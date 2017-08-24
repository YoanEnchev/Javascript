let inches = 11;

convertToFeetAndInches(inches)

function convertToFeetAndInches(inches) {
    let feet_beforeDecPoint = Math.floor(inches / 12);
    let inches_afterDecPoint = inches - feet_beforeDecPoint * 12;

    console.log(`${feet_beforeDecPoint}'-${inches_afterDecPoint}"`);
}