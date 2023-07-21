var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var button = document.querySelector("button");
var sum = document.querySelector("p");
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    var result = add(+input1.value, +input2.value).toString();
    sum.innerHTML = result;
});
