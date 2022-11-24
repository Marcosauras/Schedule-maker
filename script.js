//add a function that lets you save what you wrote in local cache so it will be here even if you reload the page
// need to add event listeners to all buttons so that it will know to save when it is pressed.
// style the slots based off the time of day so that it is easier for me to know what I need to finish.
var nineAm = document.getElementById('0900')
var tenAm = document.getElementById('1000')
var elevenAm = document.getElementById('1100')
var twelvePm = document.getElementById('1200')
var onePm = document.getElementById('1300')
var twoPm = document.getElementById('1400')
var threePm = document.getElementById('1500')
var fourPm = document.getElementById('1600')
var fivePm = document.getElementById('1700')

let currentDay = dayjs().format('dddd, MMMM D')
$("#currentDay").text(currentDay);
// tells current time by the hour
let hourOfDay = dayjs().hour()
// changes class to change style based off what time it is.
console.log(hourOfDay)
if(hourOfDay === 9){
  nineAm.children[1].classList.add("present")
  tenAm.children[1].classList.add("future")
  elevenAm.children[1].classList.add("future")
  twelvePm.children[1].classList.add("future")
  onePm.children[1].classList.add("future")
  twoPm.children[1].classList.add("future")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
} else if (hourOfDay === 10){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("present")
  elevenAm.children[1].classList.add("future")
  twelvePm.children[1].classList.add("future")
  onePm.children[1].classList.add("future")
  twoPm.children[1].classList.add("future")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
}else if (hourOfDay === 0){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("present")
  twelvePm.children[1].classList.add("future")
  onePm.children[1].classList.add("future")
  twoPm.children[1].classList.add("future")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
} else if (hourOfDay === 12){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("present")
  onePm.children[1].classList.add("future")
  twoPm.children[1].classList.add("future")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
}else if (hourOfDay === 13){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("present")
  twoPm.children[1].classList.add("future")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
} else if (hourOfDay === 14){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("present")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
} else if (hourOfDay === 15){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("present")
  threePm.children[1].classList.add("future")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
} else if (hourOfDay === 16){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("past")
  threePm.children[1].classList.add("present")
  fourPm.children[1].classList.add("future")
  fivePm.children[1].classList.add("future")
}  else if (hourOfDay === 17){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("past")
  threePm.children[1].classList.add("past")
  fourPm.children[1].classList.add("present")
  fivePm.children[1].classList.add("future")
}  else if (hourOfDay === 18){
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("past")
  threePm.children[1].classList.add("past")
  fourPm.children[1].classList.add("past")
  fivePm.children[1].classList.add("present")
}else{
  nineAm.children[1].classList.add("past")
  tenAm.children[1].classList.add("past")
  elevenAm.children[1].classList.add("past")
  twelvePm.children[1].classList.add("past")
  onePm.children[1].classList.add("past")
  twoPm.children[1].classList.add("past")
  threePm.children[1].classList.add("past")
  fourPm.children[1].classList.add("past")
  fivePm.children[1].classList.add("past")
} 


// this function will save text in the textarea element to local storage
$(document).ready(function(){
  // this tell to listen to the save-btn class to activate the function
  $('.save-btn').on('click', function() {
    // sets the value of todo to the sibling of the button, which is the textarea under the class .todo
    var todo = $(this).siblings('.todo').val();
    // sets the value of timeTaskIsDue to id value of the parent of the button, which is the div element.
    var timeTaskIsDue = $(this).parent().attr('id');
    // stores the todo under timeTaskIsDue
    localStorage.setItem(timeTaskIsDue, todo);
  })
  // these all pull the saved information into the textarea from local storage.
  $('#0900 .todo').val(localStorage.getItem('0900'));
  $('#1000 .todo').val(localStorage.getItem('1000'));
  $('#1100 .todo').val(localStorage.getItem('1100'));
  $('#1200 .todo').val(localStorage.getItem('1200'));
  $('#1300 .todo').val(localStorage.getItem('1300'));
  $('#1400 .todo').val(localStorage.getItem('1400'));
  $('#1500 .todo').val(localStorage.getItem('1500'));
  $('#1600 .todo').val(localStorage.getItem('1600'));
  $('#1700 .todo').val(localStorage.getItem('1700'));
})

