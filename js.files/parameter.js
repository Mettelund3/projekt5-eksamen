//PH//

let slider1 = document.getElementById("ph_slider");
let output1 = document.getElementById("txt1");
output1.innerHTML = slider1.value;

const numbers = [6.0, 6.3, 6.8, 7, 7.3];

// Generate a random number within the range of the array's length
const randomIndex = Math.floor(Math.random() * numbers.length);

// Iterate through the array and write the value at the index of the random number
for (let i = 0; i < numbers.length; i++) {
  if (i === randomIndex) {
    slider1.value=(numbers[i]);
    output1.innerHTML = slider1.value;
  }
}

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

slider1.addEventListener('input',function()  {
  const currentValue = slider1.value; 
  let x = document.getElementById("ikon1");

  if (currentValue < 6.0 || currentValue > 7.5) {
    x.style.display = "block";
  } 
    else {
      x.style.display = "none";
}
})
 
//Temperatur//

let slider2 = document.getElementById("temp_slider");
let output2 = document.getElementById("txt2");
output2.innerHTML = slider2.value;

const numbers2 = [18, 19, 20, 23, 25];

// Generate a random number within the range of the array's length
const randomIndex2 = Math.floor(Math.random() * numbers.length);

// Iterate through the array and write the value at the index of the random number
for (let i = 0; i < numbers2.length; i++) {
  if (i === randomIndex2) {
    slider2.value=(numbers2[i]);
    output2.innerHTML = slider2.value;
  }
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

slider2.addEventListener('input',function()  {
  const currentValue = slider2.value; 
  let x = document.getElementById("ikon2");

  if (currentValue < 17 || currentValue > 26) {
    x.style.display = "block";
  } 
    else {
      x.style.display = "none";
}
})

//Relative humidity//

let slider3 = document.getElementById("rh_slider");
let output3 = document.getElementById("txt3");
output3.innerHTML = slider3.value;

const numbers3 = [41, 46, 50, 53, 59];

// Generate a random number within the range of the array's length
const randomIndex3 = Math.floor(Math.random() * numbers.length);

// Iterate through the array and write the value at the index of the random number
for (let i = 0; i < numbers3.length; i++) {
  if (i === randomIndex3) {
    slider3.value=(numbers3[i]);
    output3.innerHTML = slider3.value;
  }
}

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

slider3.addEventListener('input',function()  {
  const currentValue = slider3.value; 
  let x = document.getElementById("ikon3");

  if (currentValue < 40 || currentValue > 60) {
    x.style.display = "block";
  } 
    else {
      x.style.display = "none";
}
})

//Co2//

let slider4 = document.getElementById("co2_slider");
let output4 = document.getElementById("txt4");
output4.innerHTML = slider4.value;

const numbers4 = [632, 723, 947, 1142, 1428];

// Generate a random number within the range of the array's length
const randomIndex4 = Math.floor(Math.random() * numbers.length);

// Iterate through the array and write the value at the index of the random number
for (let i = 0; i < numbers4.length; i++) {
  if (i === randomIndex4) {
    slider4.value=(numbers4[i]);
    output4.innerHTML = slider4.value;
  }
}

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

slider4.addEventListener('input',function()  {
  const currentValue = slider4.value; 
  let x = document.getElementById("ikon4");

  if (currentValue < 600 || currentValue > 1500) {
    x.style.display = "block";
  } 
    else {
      x.style.display = "none";
}
})

//EC//

let slider5 = document.getElementById("ec_slider");
let output5 = document.getElementById("txt5");
output5.innerHTML = slider5.value;

const numbers5 = [1.1, 1.2, 1.3, 1.4, 1.5];

// Generate a random number within the range of the array's length
const randomIndex5 = Math.floor(Math.random() * numbers.length);

// Iterate through the array and write the value at the index of the random number
for (let i = 0; i < numbers5.length; i++) {
  if (i === randomIndex5) {
    slider5.value=(numbers5[i]);
    output5.innerHTML = slider5.value;
  }
}

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

slider5.addEventListener('input',function()  {
  const currentValue = slider5.value; 
  let x = document.getElementById("ikon5");

  if (currentValue < 1.0 || currentValue > 1.6) {
    x.style.display = "block";
  } 
    else {
      x.style.display = "none";
}
})
