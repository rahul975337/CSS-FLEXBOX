//Challenge 1:Age in days
function ageInDays() {
  var birthYear = prompt("what were you born... Good Friend?");
  var ageInDay = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDay + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
////////challenge 2
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "https://media1.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif";
  div.appendChild(image);
}
