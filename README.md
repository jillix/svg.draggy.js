# svg.draggy.js
A JavaScript library for dragging SVG things.

## Usage
Include this library after including `svg.js` in your html document.

To make an element draggable, just do:

```js
var draw = new SVG('svg-container').size(400, 400);
var rect = draw.rect(100, 100);

rect.draggy();
```

Yes indeed, that's it! Now the `rect` is draggable. :sparkles:

### Events
There are four different events available you can llisten to: `beforedrag`, `dragstart`, `dragmove` and `dragend`. This is how you assign them:

The `event` object has some custom data added by this library:

 - `event.detail.delta` is an object containing the `x` and `y` values
 - `event.detail.event` is an object containing the original event

#### `dragstart`

```js
rect.on("dragstart", function(event) {
    // Do something
});
```

#### `beforedrag`

```js
rect.on("beforedrag", function(event) {
    // Do something
});
```

#### `dragmove`

```js
rect.on("dragmove", function(event) {
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


## Remove
The draggable functionality can be removed with the `fixed()` method:

```js
rect.fixed();
```


### Viewbox
This plugin is viewBox aware but there is only one thing that you need to keep in mind. If you work with a viewBox on the parent element you need to set the width and height attributes to have the same aspect ratio. So let's say you are using `viewbox='0 0 150 100'` you have to make sure the aspect ratio of `width` and `height` is the same:

```js
var draw = SVG('paper').attr('viewBox', '0 0 150 100').size(600, 400);
```

## Documentation
### `draggy(constraint)`
Makes an element draggable.

#### Params
- **Object|Function** `constraint`: An object containing the constraint values or a function which gets the `x` and `y` values
and returns a boolean or an object containing the `x` and `y`
boolean values.`false` skips moving while `true` allows it.

#### Return
- **SVG** The SVG element.


## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
