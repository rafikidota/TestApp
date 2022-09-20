import { message } from "./string";

describe('String tests', () => {
    it('it has to return a string', () => {
        const res = message('David');
        expect(typeof res).toBe('string');
    });
    it('it has to return a hi + sent name', () => {
        const name = 'Adrian';
        const res = message(name);
        expect(res).toContain(name);
    });
});