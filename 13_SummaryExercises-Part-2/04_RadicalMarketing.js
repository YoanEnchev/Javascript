let input = [
    'A',
    'B',
    'B-A',
    'C',
    'A-B',
    'C-B',
    'C-A'
];

registerAndPrintMostImpotrant(input)

function registerAndPrintMostImpotrant(input) {
    let person_subscribers = new Map();
    let person_subscribedTo = new Map();

    let regex_subscibe = /.*-.*/;

    for (line of input) {
        if (regex_subscibe.test(line)) { //subscribe
            [subscriber, person] = line.split('-');

            if (person_subscribers.has(person) && person_subscribers.has(subscriber)) { //exsisting names
                if (subscriber !== person) { // noone can subscribe for hisself/herself
                    person_subscribedTo.get(subscriber).add(person);
                    person_subscribers.get(person).add(subscriber);
                }
            }

            else { //invalid input -> ignore it
                continue;
            }
        }

        else { //register
            let name = line;

            if (!person_subscribers.has(name)) {
                person_subscribers.set(name, new Set());
                person_subscribedTo.set(name, new Set());
            }

            else { //already registered - ignore it
                continue;
            }
        }
    }

    let person_subscribers_sorted = Array.from(person_subscribers) //sorts by number of subscribers
        .sort((a, b) => (b[1].size - a[1].size));

    let person_subscribedTo_sorted = Array.from(person_subscribedTo) //sorts by number of subscription
        .sort((a, b) => (b[1].size - a[1].size));

    let mostImportant_name = "";

    if (person_subscribers_sorted[0][1].size > person_subscribers_sorted[1][1].size) { // no equal amount of subscribers for first place
        mostImportant_name = person_subscribers_sorted[0][0];
    }

    else {
        for ([name, subscribedTo] of person_subscribedTo_sorted) {

            let mostSubscribers_person = person_subscribers.get(name).size;
            let currentPerson = person_subscribers_sorted[0][1].size;

            if (mostSubscribers_person === currentPerson) { //    
                mostImportant_name = name;
                break;
            }
        }
    }

    (function output() {
        console.log(mostImportant_name);
        let subscribers_names = Array.from(person_subscribers.get(mostImportant_name));

        for (let i = 1; i <= subscribers_names.length; i++) {

            console.log(`${i}. ${subscribers_names[i - 1]}`);
        }
    })(mostImportant_name, person_subscribers);
}