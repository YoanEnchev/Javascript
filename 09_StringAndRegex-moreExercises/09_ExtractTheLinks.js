let text = ['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'];

extractLinks(text);

function extractLinks(text) {
    let regex = /www\.[a-zA-Z\d-]+(\.[a-z]+)+/g;
    let validLinks = [];

    for (sentence of text) {
        let matches = sentence.match(regex);

        if (matches !== null) {
            validLinks.push(matches);
        }
    }

    console.log(validLinks.join('\n'));
}