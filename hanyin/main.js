var c = document.createElement('canvas');
var ctx = c.getContext('2d');


var $main = document.querySelector('main');
c.width = $main.clientWidth;
c.height = $main.clientHeight;

var buttons = document.querySelectorAll('.button');
var width = 3;
for(var i = 0; i < 2; i++) {
    ctx.rect(buttons[i].offsetLeft - $main.offsetLeft,
             buttons[i].offsetTop - $main.offsetTop,
             buttons[i].offsetWidth,
             buttons[i].offsetHeight);
    ctx.strokeStyle="#000";
    ctx.stroke();
};


var imgd = ctx.getImageData(0, 0, c.width, c.height);
var pix = imgd.data;

for (var i = 0, n = pix.length; i < n; i += 4) {
    if(pix[i+3] > 0) {
        pix[i+3] = 0;
    } else {
        pix[i  ] = 0;
        pix[i+1] = 0;
        pix[i+2] = 0;
        pix[i+3] = 255;
    }
}
ctx.putImageData(imgd, 0, 0);

var dt = c.toDataURL('image/png');
console.log(dt);
console.log(1);

document.querySelector('main').style.webkitMask = "url(" + dt + ")";


var buttons = document.querySelectorAll('.button');
for(var i = 0; i < 2; i++) {
    buttons[i].onclick = function() {
        alert('you click me!');
    };
}
