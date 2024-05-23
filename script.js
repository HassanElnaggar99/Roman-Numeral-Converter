const convertionTable = {
  "+1000": "M",
  "+900": "CM",
  "+500": "D",
  "+400": "CD",
  "+100": "C",
  "+90": "XC",
  "+50": "L",
  "+40": "XL",
  "+10": "X",
  "+9": "IX",
  "+5": "V",
  "+4": "IV",
  "+1": "I",
}

const romanConverter = (num) => {
  let ans = "";
  Object.keys(convertionTable).forEach((item) => {
    let count = Math.floor(num / Number(item));
    ans += convertionTable[item].repeat(count);
    num -= count * Number(item);
  })
  return ans;
}

// console.log(romanConverter(123));



const inputText = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInput = (input) => {
  output.classList.remove("hidden");

  let num = parseInt(input)
  if (!num) {
    output.classList.add("error");
    output.textContent = "Please enter a valid number";
  } else if (num < 1) {
    output.classList.add("error");
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    output.classList.add("error");
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = romanConverter(num);
    output.classList.remove("error");
  }
}

convertBtn.addEventListener("click", () => {
  checkInput(inputText.value);
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput(inputText.value);
  }
})
