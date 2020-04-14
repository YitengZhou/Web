"use strict";
var circle = { x: 3, y: 4, radius: 5 };
var square = { x: circle.x, y: circle["y"] };
circle.diameter = 12;
circle.radius = 6;
square["y"] = 7;
console.log(circle);