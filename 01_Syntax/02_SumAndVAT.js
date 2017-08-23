function Calculate() {
    let numbers = document.getElementsByName('numbers')[0].value;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }

    let VAT = sum * 0.2;
    let total = sum + VAT;

    document.getElementsByName("sum")[0].value = sum;
    document.getElementsByName("VAT")[0].value = VAT;
    document.getElementsByName("total")[0].value = total;
}
