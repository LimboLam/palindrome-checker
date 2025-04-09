const input = document.getElementById("input");
const text = document.getElementById("text");
let evaluation;

function palindrome() {
    let palindrome = "";
    
    for (let i = 1; i <= input.value.length; i++) {
        palindrome += input.value[input.value.length - i];
    }

    if (palindrome === input.value) {
        evaluation = true;
        console.log(true);
    } else {
        evaluation = false;
        console.log(false);
    }

    text.textContent = evaluation;
    return;
}