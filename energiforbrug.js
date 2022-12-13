 // Get the dropdown menu
 var menu = document.getElementById("menu"); // Add an event listener for the change event
 menu.addEventListener("change", function () {
   // Get the selected option
   var selected = menu.options[menu.selectedIndex]; // Update the result div using a switch statement
   switch (selected.value) {
     case "1":
       break;
     case "2":
       break;
   } // Loop through all options in the dropdown menu
   for (var i = 0; i < menu.options.length; i++) {
     // Check if the option is selected
     if (menu.options[i].selected) {
       // If the option is selected, add a "selected" class to the option
       menu.options[i].classList.add("selected");
     } else {
       // If the option is not selected, remove the "selected" class from the option
       menu.options[i].classList.remove("selected");
     }
   } 
 });

 const labels =  ['Man. 05.12.2022 ', 'Tir. 06.12.2022', 'Ons. 07.12.2022', 'Tors. 08.12.2022', 'Fre. 09.12.2022', 'Lør. 10.12.2022', 'Søn. 11.12.2022']
 const data = {
     labels: labels,
     datasets: [{
         label: 'Energiforbrug i kWh',
         data: [65, 59, 80, 81, 56, 55, 40],
         backgroundColor: [
             'rgba(54, 162, 235, 0.2)',
         ],
         borderColor: [
             'rgba(54, 162, 235, 1)'
         ],
         borderWidth: 1,
         borderRadius: 20,
         barPercentage: 0.5,
     }]
     };
 
     
 /*config block*/
 
const config = {
    type: 'bar',
            data,
    options: {
        maintainAspectRatio: false, /*take out default sizing*/
        scales: {
            y: {
            beginAtZero: true
            }
            }
    }
};   
 
const config2 = {
    type: 'pie',
        data,
    options: {
        maintainAspectRatio: false, /*take out default sizing*/    
    }
};
     
     
 
 /*render block*/
let myChart = new Chart (
    document.getElementById('myChart'),
    config
    );
 
 
 
function chartType(type) {
    //destroy Chart
    myChart.destroy ();
        if (type === 'bar') {
            myChart = new Chart (
            document.getElementById('myChart'),
            config
            );   
            }        
         
             
        if (type === 'pie') {
            myChart = new Chart (
            document.getElementById('myChart'),
            config2
            );   
            }
         
};
 
 
 
 /*For each*/ 
var forbrug = [
    {
    Date: "05.12.2022",
    kwh: "65 kwh"
    },
    {
    Date: "06.12.2022",
    kwh: "59 kwh"
    },
    {
    Date: "07.12.2022",
    kwh: "80 kwh"
    },
    {
    Date: "08.12.2022",
    kwh: "81 kwh"
    },
    {
    Date: "09.12.2022",
    kwh: "56 kwh"
    },
    {
    Date: "10.12.2022",
    kwh: "55 kwh"
    },
    {
    Date: "11.12.2022",
    kwh: "40 kwh"
    }
];
 
forbrug.forEach(function(forbrug){
    console.log(forbrug)
    });