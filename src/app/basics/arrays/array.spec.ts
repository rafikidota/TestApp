import { getRobots } from './array';
describe('Array tests', () => {
    it('it has to return at least 3 robots', () => {
        const res = getRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('it has to contains Megaman and Ultron', () => {
        const res = getRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
    });
});