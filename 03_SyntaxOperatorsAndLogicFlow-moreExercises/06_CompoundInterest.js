let compoundData = [100000, 5, 12, 25];

compoundInterest(compoundData);

function compoundInterest(compoundData) {

    let principalSum = compoundData[0];
    let interestRate = compoundData[1]; //in percent
    let compoudingPeriod = compoundData[2]; // in months
    let timespan = compoundData[3]; // in years

    let compoudingFrequancy = 12  / compoudingPeriod;

    let interestRate_fraction = interestRate * 1 / 100;

    let compoundInterest = principalSum * (1 + interestRate_fraction / compoudingFrequancy) ** (compoudingFrequancy * timespan);
    console.log(compoundInterest.toFixed(2));
}
