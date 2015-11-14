
exports.forLib = function (LIB) {

    var exports = {};

    exports.spin = function (context) {

        // TODO: Adjust timezone based on config or preference.

        return {
            moment: LIB.moment
        }
    }

    return exports;
}
