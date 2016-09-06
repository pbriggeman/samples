describe("CONFIG SETTINGS", function() {
    var config = require('../config')();
    it("Should load app name", function(next) {
        expect(config.app_name).toBe('Portfolio');
        next();
    });
});
