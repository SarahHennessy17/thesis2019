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

	$(".white").css('height', newData["white"] + "vh");
    $(".black").css('height', newData["black"] + "vh");
    $(".latino").css('height', newData["latino"] + "vh");
    $(".asian").css('height', newData["asian"] + "vh");
    $(".other").css('height', newData["other"] + "vh");

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

// $('#year').mousedown(function() {
//         year += 1;
//         counter += 1;
//         var newData = demoData[counter];

// 		// console.log(newData);

//         $('#year').text((year));

//         $(".white").css('height', newData["white"] + "vh");
//         $(".black").css('height', newData["black"] + "vh");
//         $(".latino").css('height', newData["latino"] + "vh");
//         $(".asian").css('height', newData["asian"] + "vh");
//         $(".other").css('height', newData["other"] + "vh");

// 		if (year >= 2017) {
// 			year = 1991;
// 			counter = 0;
// 		}
//     })



});