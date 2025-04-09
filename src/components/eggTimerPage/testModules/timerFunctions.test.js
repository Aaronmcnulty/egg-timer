
import { vi, describe, it, expect, afterAll } from 'vitest'
import { minuteSum, secondSum } from '../timerFunctions';

describe("minuteSum() Tests", () => {

    it("should return a number",  () => {
        expect(minuteSum(60)).toEqual(1)
        expect(minuteSum(60)).toBeTypeOf('number')
        expect(minuteSum(60)).not.toBeTypeOf('string')
    })

    it("should return a number when passed a string",  () => {
        expect(minuteSum('60')).toEqual(1)
        expect(minuteSum('60')).toBeTypeOf('number')
    })

    it("should return the total times the argument can be divided by 60",  () => {
        expect(minuteSum(60)).toEqual(1)
        expect(minuteSum(120)).toEqual(2)
        expect(minuteSum(180)).toEqual(3)
        expect(minuteSum(360)).toEqual(6)
    })

    it("Should round down to the nearest full multiple of 60",  () => {
        expect(minuteSum(157)).toEqual(2)
        expect(minuteSum(117)).toEqual(1)
        expect(minuteSum(197)).toEqual(3)
    })

    it("should return 0 when the argument cannot be divided by 60",  () => {
        expect(minuteSum(30)).toEqual(0)
        expect(minuteSum(59)).toEqual(0)
        expect(minuteSum(3)).toEqual(0)
    })

}) 

describe("secondSum() Tests", () => {

    it("should return a number",  () => {
        expect(secondSum(61)).toEqual(1)
        expect(secondSum(61)).toBeTypeOf('number')
        expect(secondSum(61)).not.toBeTypeOf('string')
    })

    it("Should return a number when passed a string",  () => {
        expect(secondSum('61')).toEqual(1)
        expect(secondSum('61')).toBeTypeOf('number')
    })

    it("Should divide the argument by 60 and return the remainder",  () => {
        expect(secondSum(61)).toEqual(1)
        expect(secondSum(121)).toEqual(1)
        expect(secondSum(181)).toEqual(1)
        expect(secondSum(361)).toEqual(1)
    })

    it("Should return 0 if the number is fully divisible by 60",  () => {
        expect(secondSum(60)).toEqual(0)
        expect(secondSum(180)).toEqual(0)
        expect(secondSum(120)).toEqual(0)
    })

}) 