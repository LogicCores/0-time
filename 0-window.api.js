
exports.forLib = function (LIB) {

    var exports = {};

    // TODO: Load adapters as needed on demand

    exports.adapters = {
        moment: require("./for/moment/0-window.api").forLib(LIB)
    }

    exports.forContexts = function (contexts) {
    
        var exports = {};
    
        var Context = exports.Context = function (defaults) {
            var self = this;
        
            var state = LIB._.extend({
            }, defaults || {});
    
    
        }
        Context.prototype = Object.create(LIB.EventEmitter.prototype);
        Context.prototype.contexts = contexts;
    
        return exports;
    }

    return exports;
}
