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

//COMPARE ADD TEAM NAMES ON CHOICE
function pickTeam(){

  var newTeam = teamData[0];

$('#team1').text(newTeam["teamName"]);

console.log(newTeam["teamName"])

}

for(var i=0; i< teamData.length;i++)
{
//creates option tag
  jQuery('<option/>', {
        value: teamData[i]["teamName"],
        html: teamData[i]["teamName"],
        }).appendTo('.dropdown select'); 
        //appends to select if parent div has id dropdown
}




});