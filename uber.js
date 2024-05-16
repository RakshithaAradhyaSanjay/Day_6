var UberPricing = /** @class */ (function () {
    function UberPricing(baseFare, perMileRate, perMinuteRate) {
        this.baseFare = baseFare;
        this.perMileRate = perMileRate;
        this.perMinuteRate = perMinuteRate;
    }
    UberPricing.prototype.setBaseFare = function (baseFare) {
        this.baseFare = baseFare;
    };
    UberPricing.prototype.setPerMileRate = function (perMileRate) {
        this.perMileRate = perMileRate;
    };
    UberPricing.prototype.setPerMinuteRate = function (perMinuteRate) {
        this.perMinuteRate = perMinuteRate;
    };
    UberPricing.prototype.calculateFare = function (distanceInMiles, durationInMinutes) {
        var distanceCharge = this.perMileRate * distanceInMiles;
        var timeCharge = this.perMinuteRate * durationInMinutes;
        return this.baseFare + distanceCharge + timeCharge;
    };
    return UberPricing;
}());
// Example usage:
var uberRide = new UberPricing(2.00, 1.50, 0.25); // Base fare: $2, Per mile: $1.50, Per minute: $0.25
var totalFare = uberRide.calculateFare(5, 10); // 5 miles, 10 minutes
console.log("The total fare for the ride is: $".concat(totalFare.toFixed(2)));
