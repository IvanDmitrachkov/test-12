import lesson1 from './lesson-1'
import lesson2 from './lesson-2'
import lesson3 from './lesson-3'
import lesson4 from './lesson-4'
import lesson5 from './lesson-5'

describe("level 1", () => {
    test('lesson-1', () => {
        expect(lesson1.result).toEqual(lesson1.expectResult);
    });
    test('lesson-2', () => {
        expect(lesson2.result).toEqual(lesson2.expectResult);
    });
    test('lesson-3', () => {
        expect(lesson3.result).toEqual(lesson3.expectResult);
    });    test('lesson-4', () => {
        expect(lesson4.result).toEqual(lesson4.expectResult);
    });
    test('lesson-5', () => {
        expect(lesson5.result).toEqual(lesson5.expectResult);
    });

})