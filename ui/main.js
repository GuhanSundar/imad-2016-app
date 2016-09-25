console.log('Loaded!');
var element = document.getElementById('main-text');

//CHanges the text of main Sectipn
element.innerHTML = "Welcome";

//Move the image
var img = document.getElementById('guhDP');
var marginLeft=0;

function moveRight () {
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+ 'px'
}

img.onclick = function() {
    var interval = setInterval(moveRight,20);

}