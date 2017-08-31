let text = '__invalidVariable _evenMoreInvalidVariable_ _validVariable';

extractVariables(text);

function extractVariables(text) {
    let regex = /\b_[A-Za-z\d]+\b/g;
    let matches = text.match(regex)
        .map(e => e.substr(1));

    let variables = matches.join(',')
    console.log(variables)
}
