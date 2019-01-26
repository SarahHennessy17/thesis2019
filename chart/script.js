$( document).ready(function(){

	var year = 1991;
	var counter = 0;
	var newData = demoData[counter];

new Chart(document.getElementById("chartjs-4"),
	{"type":"doughnut",
	"data":
		{"labels":["White","Black","Latino", "Asian", "Other"],
		"datasets":[{"label":"MLB data 1991","data":[68,18,14,0,0],
		// "datasets":[{newData,
		"backgroundColor":["#232F64","#D2232A","#3D3D3D", "black", "gray"]}]}
	});


$('#year').mousedown(function() {
        year += 1;
        counter += 1;
        var newData = demoData[counter];

		console.log(newData);

        $('#year').text((year));

		if (year >= 2017) {
			year = 1991;
		}
    })






});