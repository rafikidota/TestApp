import { increase } from "./number";

describe('Number tests', () => {
    it('it has to return 100 if number is greater than 100', () => {
        const res = increase(300);
        expect(res).toBe(100);
    });
    it('it has to return number + 1 if it is less than 100', () => {
        const res = increase(50);
        expect(res).toBe(51);
    });

});