function sumNumbers() {
    let a = document.getElementsByName('num1')[0].value;
    let b = document.getElementsByName('num2')[0].value;
    let c = document.getElementsByName('num3')[0].value;

    let sum = Number(a) + Number(b) + Number(c);
    document.getElementsByName("sum")[0].value = sum;
}