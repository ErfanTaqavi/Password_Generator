const copytext = document.getElementById("Password");
const Btn_copy = document.querySelector(".Copy_logo");
const Range = document.getElementById("Input_range");
const Generate = document.getElementById("Button_gen");
const Range_text = document.querySelector(".Num_range")
const Uppercace = document.getElementById("Uppercase")



let RangeNum
//func to copy in clipboard
const Copy = Btn_copy.addEventListener("click", function () {
  let copy = copytext.textContent;
  console.log(copy);
  navigator.clipboard.writeText(copy);
  alert("copy :" + copy);
});

Range.addEventListener('change',function () {
RangeNum = Math.floor(((((Range.value)/ 100)*10) + 2)  * 2);
Range_text.textContent = RangeNum


})

Generate.addEventListener("click", function () {
    RangeNum = Math.floor(((((Range.value)/ 100)*10) + 2)  * 2);
    Range_text.textContent = RangeNum
  console.log(RangeNum);
});

Uppercase.addEventListener('click', function (e) {
    if(e.target.checked) {
    document.querySelector(".Shape1").style.backgroundColor = "rgb(255, 136, 0) ";
    } else{
    document.querySelector(".Shape1").style.backgroundColor ="transparent"
    
    }

})