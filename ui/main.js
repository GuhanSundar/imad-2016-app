console.log('Loaded!');
var element = document.getElementById('main-text');

//CHanges the text of main Sectipn
element.innerHTML = "Hasura";

//Move the image
var img = document.getElementById('madi');
var marginLeft=0;

function moveRight () {
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+ 'px'
}

function moveLeft () {
    marginRight=marginRight+1;
    img.style.marginRight=marginRight + 'px'
} 

img.onclick = function() {
   var i=1;
   if(i++%2 === 0)
     var interval = setInterval(moveRight,20);
    else 
      var interval1 = setInterval(moveLeft,20);
}