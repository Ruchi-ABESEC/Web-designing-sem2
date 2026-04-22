function reverseNumber() {
    let num = document.getElementById("num").value;
    let rev = 0;

    num = parseInt(num);

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    document.getElementById("result").innerHTML =
        "Reversed Number: " + rev;
}


