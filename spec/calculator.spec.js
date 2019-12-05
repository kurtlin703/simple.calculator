let calculator = require("../src/calculator")


describe("Add func", function(){
    it("adds two numbers and returns a sum", function(){
        expect(calculator.add(1,2)).toBe(3);
    })
    it("adds two numbers and returns a sum", function(){
        expect(calculator.add(-1,-1)).toBe(-2);
    })

    it("adds multiple numbers", function(){
        expect(calculator.add(1,2,3,4,5)).toBe(15);
    })
    it("adds two numbers and returns a sum", function(){
        expect(calculator.add(1,2)).toBe(3);
    })
    it("adds two numbers and returns a sum", function(){
        expect(calculator.add(-1,-1)).toBe(-2);
    })
})

describe("multiply func", function(){
    it("multiply two numbers and returns a sum", function(){
        expect(calculator.multiply(-1,3)).toBe(-3)
    })
    it("multiply multiple numbers and returns a sum", function(){
        expect(calculator.multiply(1,2,3,4,5)).toBe(120)
    })
    it("multiply multiple numbers and returns a sum", function(){
        expect(calculator.multiply(1,3)).toBe(3)
})
it("multiply multiple numbers and returns a sum", function(){
    expect(calculator.multiply(-1,3)).toBe(-3)
})
})