let name = 'Pesho'
let email = 'pesho@softuni.bg';
let phone = '90-60-90';
let text = ['Hello, <!username!>! <@fdsfs@>',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your <![a-zA-Z]+!>/ username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']

fillPlaceholders(name, email, phone, text);

function fillPlaceholders(name, email, phone, text) {
    let regex_name = /<![a-zA-Z]+!>/g;
    let regex_email = /<@[a-zA-Z]+@>/g;
    let regex_phone = /<\+[a-zA-z]+\+>/g;

    for (sentence of text) {
        let filledPlaceholders = sentence;

        filledPlaceholders = filledPlaceholders.split(regex_name)
            .join(name);

        filledPlaceholders = filledPlaceholders.split(regex_email)
            .join(email);

        filledPlaceholders = filledPlaceholders.split(regex_phone)
            .join(phone);

        console.log(filledPlaceholders);
    }
}
