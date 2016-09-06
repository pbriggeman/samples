var request = require("request");

var base_url = "http://localhost:3000/";

describe("SAMPLES SERVER --> ", function() {
    describe("GET /", function() {
        it("Returns Status Code 200", function(next) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                next();
            });
        });

        it("Contains App Title", function(next) {
            request.get(base_url, function(error, response, body) {
                expect(body).toContain("Portfolio");
                next();
            });
        });
    });
});
