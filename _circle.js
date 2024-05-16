var Circle = /** @class */ (function () {
    function Circle(_radius, _color) {
        this.radius = _radius;
        this.color = _color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (value) {
        this.radius = value;
    };
    Circle.prototype.getCircle = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.getArea = function () {
        var s = this.getCircle();
        return s;
    };
    return Circle;
}());
var circle = new Circle("10", "red");
console.log("The area of the Circle is ".concat(circle.getArea()));
