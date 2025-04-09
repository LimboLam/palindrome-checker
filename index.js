const input = document.getElementById("input").value;

function palindrome() {
    let palindrome = "";
    
    for (let i = 1; i <= input.length; i++) {
        palindrome += input[input.length - i];
    }

    console.log(palindrome);
}