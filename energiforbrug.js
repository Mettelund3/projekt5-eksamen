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