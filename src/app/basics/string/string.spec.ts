// describe('String tests');

import { message } from "./string";

// it('it has to return a string');

describe('String tests', () => {
    it('it has to return a string', () => {
        const msg = message('David');
        expect(typeof msg).toBe('string');
    });
    it('it has to return a hi + sent name', () => {
        const name = 'Adrian';
        const msg = message(name);
        expect(msg).toContain(name);
    });
});