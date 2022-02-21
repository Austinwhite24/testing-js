const func = require('./functions.js')

test('should return 2', () => {
    expect(func.returnTwo()).toBe(2)
})

test('should return Hello, plus the (name.) passed in', () => {
    expect(func.greeting('James')).toBe('Hello, James.')
    expect(func.greeting("Jill")).toBe('Hello, Jill.')
})

test('should return the sum of both numbers passed in', () => {
    expect(func.add(1,2)).toBe(3)
    expect(func.add(5,9)).toBe(14)
})

describe("Math functions", () => {
    test('should return the sum of both numbers passed in', () => {
        expect(func.add(1,2)).toBe(3)
        expect(func.add(5,9)).toBe(14)
    })

    test('should return the sum of both numbers passed in * eachother', () => {
        expect(func.multiply(1,2)).toBe(2)
        expect(func.multiply(5,9)).toBe(45)
    })

    test('should return the sum of the first number / the 2nd number', () => {
        expect(func.divide(50,2)).toBe(25)
        expect(func.divide(10,2)).toBe(5)
    })

    test('should return the sum of the first number minus the 2nd number', () => {
        expect(func.subtract(7,2)).toBe(5)
        expect(func.subtract(6,2)).toBe(4)
    })
})

// test('should return Hello, Jill.', () => {
//     expect(func.greeting("Jill")).toBe('Hello, Jill.')
// })

// test('should return 3', () => {
//     expect(func.add(1,2)).toBe(3)
// })

// test('should return 14', () => {
//     expect(func.add(5,9)).toBe(14)
// })



