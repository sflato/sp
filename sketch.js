let visualsearchimages = 95;
let arr = [];
var timer = setInterval(imgTimer, 1000);

setTimeout(function(){
   window.location.reload(1);
}, 10000);

function imgTimer() {
  for(var i=1; i<=visualsearchimages; i++) {

    arr.push("visualsearchimages/"+"_"+i.toString()+".jpeg");

  }

  console.log(arr)

  for (var i = 0; i < arr.length; i++) {
    clearInterval();
    //creates <img> tag
    let img = document.createElement('img');
    //sets the img src to the current position of the array [arr]
    img.src = arr[i];
    //sets the atrribute id to visualsearch
    img.setAttribute("id", "visualsearch");

    //appends the new img as a child of the div with an id 'grid'
    document.getElementById('grid').appendChild(img);
    //logging the current name of the file being created
    console.log(arr[i]);

  }

  clearInterval(timer);

}

  /*setInterval(function(){
    for(var i=1; i<=visualsearchimages; i++) {

      arr.push("visualsearchimages/"+"_"+i.toString()+".jpeg");

    }

    console.log(arr)

    for (var i = 0; i < arr.length; i++) {
      clearInterval();
      //creates <img> tag
      let img = document.createElement('img');
      //sets the img src to the current position of the array [arr]
      img.src = arr[i];
      //sets the atrribute id to visualsearch
      img.setAttribute("id", "visualsearch");

      //appends the new img as a child of the div with an id 'grid'
      document.getElementById('grid').appendChild(img);
      //logging the current name of the file being created
      console.log(arr[i]);

    }
  }, 500);
*/

  pageScroll();

  function pageScroll() {
      window.scrollBy(0,10);
      scrolldelay = setTimeout(pageScroll,1);
  }
