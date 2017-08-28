let commands = ['add', 'add', 'remove', 'add', 'add'];

addAndRemove(commands);

function addAndRemove(commands) {
    let elements = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'add') {
            elements.push(i + 1);
        }

        else {
            elements.pop();
        }
    }

    if (elements.length == 0) {
        console.log('Empty');
    }

    else {
        console.log(elements.join('\n'));
    }
}
