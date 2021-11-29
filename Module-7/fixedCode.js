// When the factButton is clicked...
$("#factBtn").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactsArr)
	var number = Math.floor((Math.random() * booFactsArr.length));
	// We display the fact from the booFactsArr that is in the random position we just generated.
	$("#factTxt").text(booFactsArr[number])
})

// This array holds all of our Boo The Dog facts!
var booFactsArr = ["Boo is a Pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})

// When the reset button is pressed...
$("#resetBtn").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "black")
})

// When the boxGrow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
	// max-width="520px" max-height="520px" 
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})