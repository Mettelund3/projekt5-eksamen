 // Get the dropdown menu
 var menu = document.getElementById("menu"); // Add an event listener for the change event
 menu.addEventListener("change", function () {
   // Get the selected option
   var selected = menu.options[menu.selectedIndex]; // Update the result div using a switch statement
   switch (selected.value) {
     case "1":
       result.innerHTML = "Du har valgt Moduler";
       break;
     case "2":
       result.innerHTML = "Du har valgt I alt";
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
   } // Use a setTimeout() function to delay the fade-out effect
   setTimeout(function () {
     // Fade out the result div using the opacity property
     result.style.opacity = 0;
   }, 3000); // Delay the fade-out effect for 3 seconds
 });