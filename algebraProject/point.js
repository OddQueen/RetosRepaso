"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = this.x - anotherPoint.getX();
        var dy = this.y - anotherPoint.getY();
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.calcularQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (pointsArray) {
        if (pointsArray.length === 0) {
            throw new Error("Mamma mia! El array está vacío");
        }
        var minDistance = this.calculateDistance(pointsArray[0]);
        var nearestPoint = pointsArray[0];
        for (var i = 1; i < pointsArray.length; i++) {
            var distance = this.calculateDistance(pointsArray[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = pointsArray[i];
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
