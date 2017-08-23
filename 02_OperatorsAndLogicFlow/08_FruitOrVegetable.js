let food = "cherry";

fruitOrVegi(food)

function fruitOrVegi(food) {
    switch (food) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit')
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegerable')
            break;
        default:
            console.log('unknown');
    }
}
