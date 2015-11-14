
function displayServerLocalTime (moment) {
    if (displayServerLocalTime._didDisplay) {
        return;
    }
    displayServerLocalTime._didDisplay = true;
    console.log("Server local time:", moment().format("dddd, MMMM Do YYYY, h:mm:ss a Z"));
}

exports.forLib = function (LIB) {

    var exports = {};

    const MOMENT = LIB["moment"];
    const MOMENT_TZ = LIB["moment-timezone"];

    exports.spin = function (context) {

        function moment () {

    		var args = Array.prototype.slice.call(arguments);

    		if (!context.config.zone) {
    		    return MOMENT.apply(MOMENT, args);
    		} else
    		if (args.length > 0) {
    			if (args[0]._isAMomentObject) {
    				return args[0].tz(context.config.zone)
    			} else
    			// Check if we have a 'Date' object.
    			if (typeof args[0].toISOString === "function") {
    				return MOMENT_TZ.tz(args[0].toISOString(), context.config.zone);
    			} else {
    				args.push(context.config.zone);
    				return MOMENT.tz.apply(MOMENT, args);
    			}
    		} else {
    			// Create a local moment.
    			return MOMENT_TZ.tz(context.config.zone);
    		}
        }
        
        displayServerLocalTime(moment);

        return {
            moment: moment
        }
    }

    return exports;
}
