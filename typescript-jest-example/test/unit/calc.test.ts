import { sum } from "../../src/calc"

describe('add function', () => {
    it('should return 15 for 10 + 5', () => {
        expect(sum(5, 10)).toBe(20)
    })
})