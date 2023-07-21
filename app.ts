const input1 = document.getElementById("number1")! as HTMLInputElement;
const input2 = document.getElementById("number2")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLElement;
const sum = document.querySelector("p")! as HTMLElement;

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

button.addEventListener("click", () => {
  const result = add(+input1.value, +input2.value).toString();
  sum.innerHTML = result;
});
