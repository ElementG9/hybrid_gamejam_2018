var game = function () {
    titleScreen();
};
var titleScreen = function () {
    var img = loadImage("assets/background.bmp");
    for (var w = 0; w < width; w += 4) {
        for (var h = 0; h < height; h += 4) {
            image(img,w,h);
        }
    }
};