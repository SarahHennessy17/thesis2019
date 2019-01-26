$( document).ready(function(){

	var year = 1991;
	var counter = 0;
	var newData = demoData[counter];

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var pickedYear = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
  var pickedYear = this.value;
  var counter = this.value;
  var newData = demoData[pickedYear];
        
        $('#year').text(newData["label"]);

	$(".white").css('height', newData["white"] + "vw");
    $(".black").css('height', newData["black"] + "vw");
    $(".latino").css('height', newData["latino"] + "vw");
    $(".asian").css('height', newData["asian"] + "vw");
    $(".other").css('height', newData["other"] + "vw");

    $(".white").css('width', newData["white"] + "vw");
    $(".black").css('width', newData["black"] + "vw");
    $(".latino").css('width', newData["latino"] + "vw");
    $(".asian").css('width', newData["asian"] + "vw");
    $(".other").css('width', newData["other"] + "vw");

    $(".white").css('font-size', newData["white"] + "px");
    $(".black").css('font-size', newData["black"] + "px");
    $(".latino").css('font-size', newData["latino"] + "px");
    $(".asian").css('font-size', newData["asian"] + "px");
    $(".other").css('font-size', newData["other"] + "px");

    if (newData["asian"] >= 0.5) {
      $(".asian").removeClass("hide");
    }
    // if (pickedYear == 12) {
    //   $(".data").addClass("hide");
    // }
    else {
      $(".asian").addClass("hide");
      $(".data").removeClass("hide");
    }

}





});