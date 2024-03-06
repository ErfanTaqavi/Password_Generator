const copytext = document.getElementById("Password");
const Btn_copy = document.querySelector(".Copy_logo");
const Range = document.getElementById("Input_range");
const Generate = document.getElementById("Button_gen");
const Range_text = document.querySelector(".Num_range");
const Uppercace = document.getElementById("Uppercase");
const Lowercase = document.getElementById("Lowercase");
const Numbers = document.getElementById("Numbers");
const Symbols = document.getElementById("Symbols");
const Title_lvl = document.querySelector(".Title_lvl");

let RangeNum;
let I_check = 0;
let Sterength_range = 0;
let Sterength = ["EASY", "MEDIUM", "HARD", "DIFFICULT"];
let UpAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let LowAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let Numeic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let Special_Char = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];
let All_char = [];
var totalShapes = 4;

let Upcase = 0;
let Lowcase = 0;
let Numcase = 0;
let Symcase = 0;

//func to copy in clipboard
const Copy = Btn_copy.addEventListener("click", function () {
  let copy = copytext.textContent;
  console.log(copy);
  navigator.clipboard.writeText(copy);
  alert("copy :" + copy);
});
RangeNum = 4
Range.addEventListener("change", function () {

  RangeNum = Math.floor(((Range.value / 100) * 10 + 2) * 2);
  Range_text.textContent = RangeNum;
});

// Generate.addEventListener("click", function () {
//   RangeNum = Math.floor(((Range.value / 100) * 10 + 2) * 2);
//   Range_text.textContent = RangeNum;
//   console.log(RangeNum);
// });

// Function to update background colors based on I_check value
function updateShapes(I_check) {
  for (var j = 1; j <= I_check; j++) {
    var shapeElement = document.querySelector(`.Shape${j}`);
    console.log(shapeElement); // Check if the element is selected
    if (shapeElement) {
      shapeElement.style.background = "rgb(255, 136, 0)";
    } else {
      console.log(`Shape${j} not found`);
    }
    if (I_check !== 0) {
      Title_lvl.textContent = Sterength[j - 1];
    }
  }

  // Change background to transparent for remaining shapes
  for (var k = I_check + 1; k <= totalShapes; k++) {
    var remainingShape = document.querySelector(`.Shape${k}`);
    if (remainingShape) {
      remainingShape.style.background = "transparent";
    }
    if (I_check === 0) {
      Title_lvl.textContent = "";
    }
  }
}

Uppercase.addEventListener("click", function (e) {
  if (e.target.checked) {
    I_check += 1;
    Upcase += 1;
  } else {
    I_check -= 1;
  }
  updateShapes(I_check);
});

Lowercase.addEventListener("click", function (e) {
  if (e.target.checked) {
    I_check += 1;
    Lowcase += 1;
  } else {
    I_check -= 1;
  }
  updateShapes(I_check);
});

Numbers.addEventListener("click", function (e) {
  if (e.target.checked) {
    I_check += 1;
    Numcase += 1;
  } else {
    I_check -= 1;
  }
  updateShapes(I_check);
});

Symbols.addEventListener("click", function (e) {
  if (e.target.checked) {
    I_check += 1;
    Symcase += 1;
  } else {
    I_check -= 1;
  }
  updateShapes(I_check);
});

let result = "";
// function Random_char() {
//   let resultLength = RangeNum
//   for (let i = 0; i < resultLength; i++) {
//     let index = (Math.floor(Math.random()*All_char.length) ) 
//     result += All_char[index] ;

//   }
//   return result
// }

Generate.addEventListener("click", function (e) {
  if (Upcase === 1) {
    for (var i = 0; i < UpAlphabet.length; i++) {
      All_char.push(UpAlphabet[i])
    }
  }
  if (Lowcase === 1) {
    for (var i = 0; i < LowAlphabet.length; i++) {
      All_char.push(LowAlphabet[i])
    }  }
  if (Numcase === 1) {
    for (var i = 0; i < Numbers.length; i++) {
      All_char.push(Numbers[i])
    }  }
  if (Symcase === 1) {
    for (var i = 0; i < Special_Char.length; i++) {
      All_char.push(Special_Char[i])
    }  }if(Upcase !== 1 &&Lowcase !== 1 && Numcase !== 1 && Symcase !== 1) {
      alert("Please select at least one input from the list")
      
    }
  console.log(All_char.length,All_char);

  for (let i = 1; i <=RangeNum; i++) {
    let index = (Math.floor(Math.random()*All_char.length) ) 
    console.log(index)
    result += All_char[index] ;
    console.log(result)
}

copytext.textContent = result
});


