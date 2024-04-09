// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. VARIABLES FOR NUM COUNTER

var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var plus10Btn = document.getElementById("plus10");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");
var plus50Btn = document.getElementById("plus50");

// 2. NUMBER COUNTER

plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
plus10Btn.addEventListener("click", add10);
minus1Btn.addEventListener("click", sub1);
minus50Btn.addEventListener("click", sub50);
plus50Btn.addEventListener("click", add50);

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

// 3. STORY CREATOR
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}
// 4. RANDOM NUMBER GENS

var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand2 = Math.random() * 100;
  rand2 = rand2.toFixed(0);
  rand2OutEl.innerHTML = rand2;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand3 = Math.random() * 11 + -5;
  rand3 = rand3.toFixed(0);
  rand3OutEl.innerHTML = rand3;
}
// 5. RANDOM PAGE COLOR
var pageColor = document.getElementById("random-rgb");

pageColor.addEventListener("click", randomCol);

function randomCol() {
  var red = Math.random() * 255;
  red = red.toFixed(0);

  var green = Math.random() * 255;
  green = green.toFixed(0);

  var blue = Math.random() * 255;
  blue = blue.toFixed(0);

  document.getElementById(
    "body"
  ).style.background = `rgb(${red},${green},${blue})`;
}

// 6. RANDOM FONT SIZE
var randFont = document.getElementById("random-size");

randFont.addEventListener("click", randomFont);

function randomFont() {
  var size = Math.random() * 20 + 5;
  size = size.toFixed(0);
  document.getElementById("body").style.fontSize = `${size}px`;
}

// 7. RESET PAGE

var resetpage = document.getElementById("reset");

resetpage.addEventListener("click", undo);

function undo() {
  window.location.reload();
}

// 8. RANDOM 4
document.getElementById("rand4").addEventListener("click", showRand4);

function showRand4() {
  let smallNum = +document.getElementById("rand-in1").value;
  let largeNum = +document.getElementById("rand-in2").value;

  let randomNum = Math.random() * (largeNum - smallNum + 1) + smallNum;
  randomNum = Math.floor(randomNum);

  document.getElementById("rand4-out").innerHTML = randomNum;
}
