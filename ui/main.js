console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'new value';

// Move the image
var element = document.getElementById('madi');
var marginleft = 0;
function moveRight () {
    marginleft = margin + 10;
    img.style.marginleft = marginlefft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
    
};  