$( document).ready(function(){

	var year = 1991;
	var counter = 0;
	var newData = demoData[counter];
   
    //CHANGE YEAR TEXT        
    // $('#year').text(newData["label"]);

//DROPDOWN MENU
for(var i=0; i< teamData.length;i++){//creates option tag
  $('<option/>', {
        // value: teamData[i]["teamName"],
        value: i,
        html: teamData[i]["teamName"],
        }).appendTo('.dropdown select'); 
        //appends to select
}

//DO THINGS WHEN TEAM1 IS SELECTED
$(".teamName1").change(function () {
    var team1 = $(".teamName1 option:selected").val();
    var newData = teamDemo[team1];
    
    $(".white1").css('background-color', teamData[team1]["color1"]);
    $(".black1").css('background-color', teamData[team1]["color2"]);
    $(".latino1").css('background-color', teamData[team1]["color3"]);
    $(".asian1").css('background-color', teamData[team1]["color4"]);
    $(".other1").css('background-color', teamData[team1]["color5"]);

    $(".white1").css('height', newData["white"] + "vh");
    $(".black1").css('height', newData["black"] + "vh");
    $(".latino1").css('height', newData["latino"] + "vh");
    $(".asian1").css('height', newData["asian"] + "vh");
    $(".other1").css('height', newData["other"] + "vh");

    if (newData["asian"] <= 3) {
      $("#asian1percent").addClass("hide");
    }
    else {
      $("#asian1percent").removeClass("hide");
    }

    if (newData["other"] <= 3) {
      $("#other1percent").addClass("hide");
    }
    else {
      $("#other1percent").removeClass("hide");
    }

});

//DO THINGS WHEN TEAM2 IS SELECTED
$(".teamName2").change(function () {
    var team2 = $(".teamName2 option:selected").val();
    var newData = teamDemo[team2];
    
    $(".white2").css('background-color', teamData[team2]["color1"]);
    $(".black2").css('background-color', teamData[team2]["color2"]);
    $(".latino2").css('background-color', teamData[team2]["color3"]);
    $(".asian2").css('background-color', teamData[team2]["color4"]);
    $(".other2").css('background-color', teamData[team2]["color5"]);

    $(".white2").css('height', newData["white"] + "vh");
    $(".black2").css('height', newData["black"] + "vh");
    $(".latino2").css('height', newData["latino"] + "vh");
    $(".asian2").css('height', newData["asian"] + "vh");
    $(".other2").css('height', newData["other"] + "vh");

    if (newData["asian"] <= 3) {
      $("#asian2percent").addClass("hide");
    }
    else {
      $("#asian2percent").removeClass("hide");
    }

    if (newData["other"] <= 3) {
      $("#other2percent").addClass("hide");
    }
    else {
      $("#other2percent").removeClass("hide");
    }

});


});





