console.log('Loaded!');
var element = document.getElementById('main-text');

//CHanges the text of main Sectipn
element.innerHTML = "Hasura";

//Move the image
var img = document.getElementById('madi');

img.onclick = function() {
    img.style.marginLeft = '100px';
    
}