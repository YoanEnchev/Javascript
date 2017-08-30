let email = 'valid@email.bg';

emailValidation(email);

function emailValidation(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;;

    let isValid = pattern.test(email);

    if (isValid) {
        console.log('Valid')
    }

    else {
        console.log('Invalid');
    }

}
