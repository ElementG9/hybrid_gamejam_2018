var canvas;
var setup = function() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    game();
}
window.onresize = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
    game();
};