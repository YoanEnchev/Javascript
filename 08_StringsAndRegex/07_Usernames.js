let useremails = ['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'];

printComposedEmails(useremails);

function printComposedEmails(useremails) {
    let composedEmails = [];

    for (useremail of useremails) {
        let nameAndDomains = useremail.split('@');

        let name = nameAndDomains[0];
        let domains = nameAndDomains[1];

        let firstLetters = domains.split('.')
            .map(d => d[0]);

        let composedEmail = name + "." + firstLetters.join('');
        composedEmails.push(composedEmail);
    }

    console.log(composedEmails.join(', '));
}
