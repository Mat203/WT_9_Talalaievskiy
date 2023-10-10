describe('getFactorial', function() {
    it('should return 120 when the input is 5', function() {
        assert.equal(getFactorial(5), 120)
    });

    it('should return 120 when the input is "5"', function() {
        assert.equal(getFactorial('5'), 120)
    });

    it('should return "not a number" when the input is "blabla"', function() {
        assert.equal(getFactorial('blabla'), 'not a number')
    });

    it('should return 1 when the input is 0', function() {
        assert.equal(getFactorial(0), 1)
    });
});

describe('multiply', function() {
    it('should return 60 when the input is 2,3,10', function() {
        assert.equal(multiply(2)(3)(10)(), 60)
    });

    it('should return -769072 when the input is -1,677,568,2', function() {
        assert.equal(multiply(-1)(677)(568)(2)(), -769072)
    });

    it('should return 3 when the input is 3', function() {
        assert.equal(multiply(3)(), 3)
    });

});
