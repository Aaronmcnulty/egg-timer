
import { vi, describe, it, expect, afterAll } from 'vitest'
import { minuteSum } from '../timerFunctions';

describe("Timer Controls Component", () => {


    it("should return a number",  () => {
        expect(minuteSum(60)).toEqual(1)
        expect(minuteSum(60)).toBeTypeOf('number')
        expect(minuteSum(60)).not.toBeTypeOf('string')
    })

    it("should return a when passed a string",  () => {
        expect(minuteSum(60)).toEqual(1)
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