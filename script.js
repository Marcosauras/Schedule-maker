//add a function that lets you save what you wrote in local cache so it will be here even if you reload the page
// need to add event listeners to all buttons so that it willl know to save when it is pressed.
// style the slots based off the time of day so that it is easier for me to know what I need to finish.
let currentDay = dayjs().format('dddd, MMMM D')
$("#currentDay").text(currentDay);

var nineAm = document.getElementById('0900')
var tenAm = document.getElementById('1000')
var elevenAm = document.getElementById('1100')
var twelvePm = document.getElementById('1200')
var onePm = document.getElementById('1300')
var twoPm = document.getElementById('1400')
var threePm = document.getElementById('1500')
var fourPm = document.getElementById('1600')
var fivePm = document.getElementById('1700')
var saveBtn = document.getElementsByClassName('save-btn')

for(var i = 0; i < saveBtn.length; i++){
  saveBtn[i].addEventListener('click', saveProgress)
}
function eventsSaved (){
  let todo = localStorage.getItem("todos")

}


function saveProgress(){
  console.log("hey I got clicked")


}