//Points: 87/100
//total for exam: 377/400

let input = [{ system: 'Tau', candidate: 'Flying Shrimp', votes: 150 },
{ system: 'Tau', candidate: 'Space Cow', votes: 100 },
{ system: 'Theta', candidate: 'Space Cow', votes: 10 },
{ system: 'Sigma', candidate: 'Space Cow', votes: 200 },
{ system: 'Sigma', candidate: 'Flying Shrimp', votes: 75 },
{ system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
{ system: 'Omicron', candidate: 'Octocat', votes: 75 }];

summarize(input);

function summarize(input) {
    let map = new Map() // Map -> system is key, and map of candidate and votes is value
    let system_candidateWithMostVotes = new Map(); //is filled in getFinalistsAndVotesAndSort()

    for (election of input) {
        let system = election.system;
        let candidate = election.candidate;
        let votes = election.votes;

        if (!map.has(system)) { //system check
            map.set(system, new Map());
        }

        if (!map.get(system).has(candidate)) { //candidate check
            map.get(system).set(candidate, 0);
        }

        let votesUntilNow = map.get(system).get(candidate);
        map.get(system).set(candidate, votesUntilNow + votes); //update votes
    }

    let map_finalists = getFinalistsAndVotesAndSort(); //each finalist's votes

    let moreThanHalfVotes = checkIfSomeoneHasMoreThanHalf(map_finalists);


    if (moreThanHalfVotes) {
        let winnerAndVotes = map_finalists[0];
        let name = winnerAndVotes[0];
        let votes = winnerAndVotes[1];

        console.log(`${name} wins with ${votes} votes`);

        let followUpName = map_finalists[1][0];
        console.log(`Runner up: ${followUpName}`);

        let systemAndVotes = new Map();

        for ([system, candidateAndVotes] of map) {
            let candidateWithMostVotes = Array.from(candidateAndVotes)
                .sort((a, b) => b[1] - a[1])[0][0]

            if (candidateWithMostVotes === followUpName) {

                let sumVotes = Array.from(candidateAndVotes.values())
                    .reduce((a, b) => a + b);

                systemAndVotes.set(system, sumVotes);
            }
        }

        systemAndVotes = Array.from(systemAndVotes)
            .sort((a, b) => b[1] - a[1]);

        for ([system, votes] of systemAndVotes) {
            console.log(`${system}: ${votes}`);
        }
    }

    else {
        let allVotes = 0;

        let candidate_1 = '';
        let candidate_2 = '';

        let count = 0; //get only two

        for ([name, votes] of map_finalists) {
            allVotes += votes;
            count++;

            if (count === 1) {
                candidate_1 = name;
            }

            if (count === 2 && votes !== 0) {
                candidate_2 = name;
            }
        }

        let percent_1 = Math.floor((map_finalists[0][1] / allVotes) * 100);

        if (percent_1 !== 100) {
            let percent_2 = Math.floor((map_finalists[1][1] / allVotes) * 100);
            console.log(`Runoff between ${candidate_1} with ${percent_1}% and ${candidate_2} with ${percent_2}%`);
        }

        else {
            console.log(`${candidate_1} wins with ${allVotes} votes`);
            console.log(`${candidate_1} wins unopposed!`);
        }
    }

        function getWinnersBySystem(map) {
            let winnersInSystems = new Map();

            for ([system, candidateAndVotes] of map) {
                console.log(candidateAndVotes)
            }
        }

        function checkIfSomeoneHasMoreThanHalf(map_finalists) {
            let allVotes = map_finalists
                .reduce((a, b) => a[1] + b[1]); //sum all votes for systems
            let mostVotesForCandidate = map_finalists[0][1];

            if (allVotes / 2 < mostVotesForCandidate) {
                return true;
            }

            return false;
        }

        function getFinalistsAndVotesAndSort() {
            let finalists = new Map();

            for ([system, candidatesAndVotes] of map) {
                let winnerInSystem = Array.from(candidatesAndVotes)
                    .sort((a, b) => b[1] - a[1])[0][0]; //get name of the person with most votes

                let sumOfVotesInSystem = Array.from(candidatesAndVotes.values()) //get array of votes
                    .reduce((a, b) => a + b); //sum all votes for systems

                if (!finalists.has(winnerInSystem)) { // in case one candidate wins more than one system
                    finalists.set(winnerInSystem, 0);
                }

                let votesUntilNow = finalists.get(winnerInSystem);

                finalists.set(winnerInSystem, votesUntilNow + sumOfVotesInSystem);
            }

            let finalists_sorted = Array.from(finalists).sort((a, b) => b[1] - a[1]);

            return finalists_sorted
        }
    
}