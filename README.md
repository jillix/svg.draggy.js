svg.draggable.js
================
A plugin for the [svgjs.com](http://svgjs.com) library to make elements draggable.

## Usage
Include this plugin after including the svg.js library in your html document.

To make an element draggable

```javascript
var draw = new SVG('svg-container').size(400, 400);
var rect = draw.rect(100, 100);

rect.draggable();
```

Yes indeed, that's it! Now the `rect` is draggable.

## Callbacks
There are four different callbacks available, `beforedrag`, `dragstart`, `dragmove` and `dragend`. This is how you assign them:

```javascript
rect.on("dragstart", function(delta, event) {
    // Do something
});
```

The `beforedrag` callback will pass the event in the first argument:

```javascript
rect.on("beforedrag", function(delta, event) {
    // Do something
});
```

The `dragstart`, `dragmove` and `dragend` callbacks will pass the delta values (also containing an object holding the absolute coordinates) as an object in the first argument and the event as the second:

```javascript
rect.on("dragmove", function(delta, event) {
    // Do something
});
```

## Constraint
The drag functionality can be limited within a given box. You can pass the the constraint values as an object:

```javascript
rect.draggable({
    minX: 10,
    minY: 15,
    maxX: 200,
    maxY: 100
});
```

For more dynamic constraints a function can be passed as well:

```javascript
rect.draggable(function(x, y) {
    return { x: x < 1000, y: y < 300 };
});
```

With this you can also easily achieve some snapping functionality:

```javascript
var snapRange = 50;
rect.draggable(function (x, y, elem) {
    var res = {};

    res.x = x - (x % snapRange);
    res.y = y - (y % snapRange);

    return res;
});
```


## Remove
The draggable functionality can be removed with the `fixed()` method:

```javascript
rect.fixed();
```


## Viewbox
This plugin is viewBox aware but there is only one thing that you need to keep in mind. If you work with a viewBox on the parent element you need to set the width and height attributes to have the same aspect ratio. So let's say you are using `viewbox='0 0 150 100'` you have to make sure the aspect ratio of `width` and `height` is the same:

```javascript
var draw = SVG('paper').attr('viewBox', '0 0 150 100').size(600, 400);
```

## Dependencies
This module requires svg.js v0.11.

## License
See the [LICENSE](/LICENSE) file.
