import { generateRandomNr } from "./generateRandomNr";
import{test,expect} from "@jest/globals"

test('generates numbers within the correct interval' ,()=>{
    let testNumber=generateRandomNr(1,5)
    expect(testNumber).toBeGreaterThanOrEqual(1)
    expect(testNumber).toBeLessThanOrEqual(5)
})