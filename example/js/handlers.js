window.addEventListener("load", function () {
    var svg = new SVG(document.querySelector(".graph")).size("100%", 500);
    svg.circle(80).fill("#C2185B").draggy();
    svg.circle(50).fill("#E91E63");
    svg.circle(100).fill("#FF5252");

    // Plain draggy
    svg.rect(100, 100).center(150, 150).draggy();

    // Grouped draggy
    var group = svg.group().draggy();
    group.rect(100, 100).center(200, 150);
    group.rect(100, 100).center(200, 270);

    // Constraind with object
    var elm = draw.rect(100,100).center(650, 150).draggy({
        minX: 400
      , minY: 50
      , maxX: 800
      , maxY: 400
    });

    var s = null
      , t = null
      ;

    elm.on("dragstart", function() {
      s = elm.clone().opacity(0.2);
      t = draw.rect(400, 350).move(400, 50).fill('none').stroke('#0fa');
    });

    elm.on("dragmove", function() {
      s.animate(200, '>').move(e.x(), e.y());
    });

    elm.on("dragend", function() {
      t.remove();
      s.remove();
    });

    // Constraind with function
    draw.rect(100,100).center(900, 150).draggy(function(x, y) {
        return {
            x: x < 1000
          , y: y < 300
        };
    });
});
