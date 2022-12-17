 var menu = document.getElementById("menu"); 
 menu.addEventListener("change", function () {
   var selected = menu.options[menu.selectedIndex]; 
   switch (selected.value) {
     case "1":
      result.innerHTML = "You selected the Module option.";
     case "2":
      result.innerHTML = "You selected the I alt option.";
   } 
   for (var i = 0; i < menu.options.length; i++) {
     if (menu.options[i].selected) {
       menu.options[i].classList.add("selected");
     } else {
       menu.options[i].classList.remove("selected");
     }
   } 
 });

/* Mulighed for at skifte mellem hver måned ved brug af pilene */

const currentMonth = document.querySelector('.month-selector__current-month');
const leftArrow = document.querySelector('.bx-left-arrow-alt');
const rightArrow = document.querySelector('.bx-right-arrow-alt');

let month = new Date().getMonth();
updateMonth(month);

leftArrow.addEventListener('click', () => updateMonth(month - 1));
rightArrow.addEventListener('click', () => updateMonth(month + 1));

function updateMonth(newMonth) {
  month = (newMonth + 12) % 12;
  currentMonth.textContent = getMonthName(month);
}

function getMonthName(month) {
  const monthNames = ['Jan', 'Feb', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[month];
}


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


