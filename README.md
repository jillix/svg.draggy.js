# svg.draggy.js [![Version](https://img.shields.io/npm/v/svg.draggy.js.svg)](https://www.npmjs.com/package/svg.draggy.js) [![Downloads](https://img.shields.io/npm/dt/svg.draggy.js.svg)](https://www.npmjs.com/package/svg.draggy.js)

> A JavaScript library for dragging SVG things.

## Usage

Include this library after including `svg.js` in your html document. [Here you can see a demo](http://jillix.github.io/svg.draggy.js/).

To make an element draggable, just do:

```js
var draw = new SVG('svg-container').size(400, 400);
var rect = draw.rect(100, 100);

rect.draggy();
```

Yes indeed, that's it! Now the `rect` is draggable. :sparkles:

## Events

There are four different events available you can llisten to: `beforedrag`, `dragstart`, `dragmove` and `dragend`. This is how you assign them:

The `event` object has some custom data added by this library:

 - `event.detail.delta` is an object containing:
    
     - `x` and `y`: The element coordinates.
     - `movedX` and `movedY`: The element total movement values (available only in `dragmove` event).
    
 - `event.detail.event` is an object containing the original event

#### `dragstart`
```js
rect.on('dragstart', function(event) {
    // Do something
});
```
#### `beforedrag`
```js
rect.on('beforedrag', function(event) {
    // Do something
});
```
#### `dragmove`
```js
rect.on('dragmove', function(event) {
    // Do something
});
```
### Constraint

The drag functionality can be limited within a given box. You can pass the the constraint values as an object:

```js
rect.draggy({
    minX: 10,
    minY: 15,
    maxX: 200,
    maxY: 100
});
```

For more dynamic constraints a function can be passed as well:

```js
rect.draggy(function(x, y) {
    return { x: x < 1000, y: y < 300 };
});
```

With this you can also easily achieve some snapping functionality:

```js
var snapRange = 50;
rect.draggy(function (x, y, elem) {
    var res = {};

    res.x = x - (x % snapRange);
    res.y = y - (y % snapRange);

    return res;
});
```
### Remove

The draggable functionality can be removed with the `fixed()` method:

```js
rect.fixed();
```
### Viewbox

This plugin is viewBox aware but there is only one thing that you need to keep in mind. If you work with a viewBox on the parent element you need to set the width and height attributes to have the same aspect ratio. So let's say you are using `viewbox='0 0 150 100'` you have to make sure the aspect ratio of `width` and `height` is the same:

```js
var draw = SVG('paper').attr('viewBox', '0 0 150 100').size(600, 400);
```

[![svg.draggy.js](http://i.imgur.com/tXn2w8f.jpg)](http://jillix.github.io/svg.draggy.js/)

## :cloud: Installation
    

Check out the [`src`](/src) directory to download the needed files and include them on your page.

If you're using this module in a CommonJS environment, you can install it from `npm` and `require` it:

```sh
$ npm i --save svg.draggy.js
```

        
## :memo: Documentation
        
### `draggy(constraint)`
Makes an element draggable.

#### Params
- **Object|Function** `constraint`: An object containing the constraint values or a function which gets the `x` and `y` values
and returns a boolean or an object containing the `x` and `y`
boolean values.`false` skips moving while `true` allows it.

#### Return
- **SVG** The SVG element.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [jillix][website]
    
[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E&year=2012#license-mit
[website]: 
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md