// this group of variables create the size of the
// array for each body part and creates the cooresponding array
let skin = 84;
let skinarr = [];
let eyes = 20;
let eyesarr = [];
let ears = 45;
let earsarr = [];
let nose = 30;
let nosearr = [];
let lips = 12;
let lipsarr = [];
let background = 400;
let backgroundarr = [];

let visualsearchimages = 95;
let arr = [];
//starts the imgTimer function
var timer = setInterval(imgTimer, 500);

//this function reloads the page
 /*setTimeout(function(){
window.location.reload(1);
}, 30000);
*/

function imgTimer() {
  //populates the first array
  for(let i=1; i<=visualsearchimages; i++) {
    arr.push("visualsearchimages/"+"_"+i.toString()+".jpeg");
  }
  // populates the skin array
  for(let i=1; i<=skin; i++) {
    skinarr.push("sp/skin/"+"skin"+i.toString()+".jpeg");
  }
  //populates the eyes array
  for(let i=1; i<=eyes; i++) {
    eyesarr.push("sp/eyes/"+"eye"+i.toString()+".jpeg");
  }
  //populates the ears array
  for(let i=1; i<=ears; i++) {
    earsarr.push("sp/ears/"+"ear"+i.toString()+".jpeg");
  }
  //populates the nose array
  for(let i=1; i<=nose; i++) {
    nosearr.push("sp/nose/"+"nose"+i.toString()+".jpeg");
  }
  //populates the lips array
  for(let i=1; i<=lips; i++) {
    lipsarr.push("sp/lips/"+"lips"+i.toString()+".jpeg");
  }
  //populates the background array
  for(let i=1; i<=background; i++) {
    backgroundarr.push("sp/background/"+"_"+i.toString()+".jpeg");
  }

  console.log(skinarr)

  //skin array
  for (var k = 0; k < 10; k++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin"+[k]);
    img.setAttribute("class", "img");
    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);
    //img.style.opacity = 1;
    //logging the current name of the file being created
    //console.log([k]);
  }
  //ear1
  for (var m = 0; m < 1; m++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [ears]
    img.src = earsarr[Math.floor(Math.random() * earsarr.length)];
    //sets the atrribute id to ears
    img.setAttribute("id", "ear"+[m]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'ears'
    document.getElementById('grid').appendChild(img);
  }
  //the first eyeball
  for (var l = 0; l < 1; l++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [eyes]
    img.src = eyesarr[Math.floor(Math.random() * eyesarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "eye1");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'eyes'
    document.getElementById('grid').appendChild(img);
  }
  //skin array
  for (var q = 0; q < 1; q++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin10");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //the second eyeball
  for (var n = 0; n < 1; n++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [eyes]
    img.src = eyesarr[Math.floor(Math.random() * eyesarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "eye2");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'eyes'
    document.getElementById('grid').appendChild(img);
  }
  //ear 2-3
  for (var o = 0; o < 2; o++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [ears]
    img.src = earsarr[Math.floor(Math.random() * earsarr.length)];
    //sets the atrribute id to ears
    img.setAttribute("id", "ears"+[o]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'ears'
    document.getElementById('grid').appendChild(img);
  }
  //skin array
  for (var r = 0; r < 1; r++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin11");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //nose array
  for (var s = 0; s < 1; s++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[Math.floor(Math.random() * nosearr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "nose");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //skin
  for (var t = 0; t < 1; t++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin12");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //ears 4-5
  for (var u = 0; u < 2; u++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [ears]
    img.src = earsarr[Math.floor(Math.random() * earsarr.length)];
    //sets the atrribute id to ears
    img.setAttribute("id", "earsa"+[u]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'ears'
    document.getElementById('grid').appendChild(img);
  }
  //skin
  for (var w = 0; w < 1; w++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin13");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //nose array
  for (var x = 0; x < 1; x++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[Math.floor(Math.random() * nosearr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "nose1");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //skin
  for (var y = 0; y < 1; y++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skin14");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //ear 6
  for (var z = 0; z < 1; z++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [ears]
    img.src = earsarr[Math.floor(Math.random() * earsarr.length)];
    //sets the atrribute id to ears
    img.setAttribute("id", "ear6");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'ears'
    document.getElementById('grid').appendChild(img);
  }
  //skin
  for (var a = 0; a < 2; a++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skina"+[a]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //nose array
  for (var b = 0; b < 1; b++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[Math.floor(Math.random() * nosearr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "nose2");
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //skin
  for (var c = 0; c < 3; c++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skinb"+[c]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //lips
  for (var d = 0; d < 3; d++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[Math.floor(Math.random() * lipsarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "lip"+[d]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //skin
  for (var e = 0; e < 2; e++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "skinc"+[e]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //lips
  for (var f = 0; f < 3; f++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[Math.floor(Math.random() * lipsarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "lipa"+[f]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //skin
  for (var g = 0; g < 6; g++) {
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = skinarr[Math.floor(Math.random() * skinarr.length)];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "sking"+[g]);
    img.setAttribute("class", "img");
    img.style.opacity = 1;

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);

    //logging the current name of the file being created
    //console.log([k]);
  }
  //clears the setinterval function
  clearInterval(timer);
}

var timer2 = setInterval(randomimagepicker, 200);

function randomimagepicker() {
  //row1
  document.getElementById('skin0').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin1').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin2').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin3').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin4').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  //row2
  document.getElementById('skin5').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin6').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin7').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin8').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skin9').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  //row3
  document.getElementById('ear0').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  document.getElementById('eye1').src = eyesarr[Math.floor(Math.random() * eyesarr.length)]
  document.getElementById('skin10').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('eye2').src = eyesarr[Math.floor(Math.random() * eyesarr.length)]
  document.getElementById('ears0').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  //row4
  document.getElementById('ears1').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  document.getElementById('skin11').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('nose').src = nosearr[Math.floor(Math.random() * nosearr.length)]
  document.getElementById('skin12').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('earsa0').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  //row5
  document.getElementById('earsa1').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  document.getElementById('skin13').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('nose1').src = nosearr[Math.floor(Math.random() * nosearr.length)]
  document.getElementById('skin14').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('ear6').src = earsarr[Math.floor(Math.random() * earsarr.length)]
  //row6
  document.getElementById('skina0').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skina1').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('nose2').src = nosearr[Math.floor(Math.random() * nosearr.length)]
  document.getElementById('skinb0').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('skinb1').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  //row7
  document.getElementById('skinb2').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('lip0').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('lip1').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('lip2').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('skinc0').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  //row8
  document.getElementById('skinc1').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('lipa0').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('lipa1').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('lipa2').src = lipsarr[Math.floor(Math.random() * lipsarr.length)]
  document.getElementById('sking0').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  //row9
  document.getElementById('sking1').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('sking2').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('sking3').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('sking4').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  document.getElementById('sking5').src = skinarr[Math.floor(Math.random() * skinarr.length)]
  // write a function that changes the .src of elements by id
  // first step is to give each photo an independednt id
}

pageScroll();
function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}
