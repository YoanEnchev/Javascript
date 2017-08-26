let questionsAndAnswers = ["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"];

printTemplate(questionsAndAnswers)

function printTemplate(questionsAndAnswers) {
    let template = '<?xml version="1.0" encoding="UTF-8"?>\n';
    template += "<quiz>\n";

    for (var i = 0; i <= questionsAndAnswers.length - 1; i++) {
        if (i % 2 == 0) {
            template += addQuestion(questionsAndAnswers[i]);
        }

        else {
            template += addAnswer(questionsAndAnswers[i]);
        }
    }

    template += '</quiz>';

    console.log(template);

    function addQuestion(question) {
        let questionTag = '  <question>\n';
        questionTag += `    ${question}\n`;
        questionTag += '  </question>\n';

        return questionTag;
    }

    function addAnswer(answer) {
        let answerTag = '  <answer>\n';
        answerTag += `    ${answer}\n`;
        answerTag += '  </answer>\n';

        return answerTag;
    }
}

