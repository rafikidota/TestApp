import { BoosterComponent } from './booster.component';
describe('BoosterComponent Unit', () => {
    let componet: BoosterComponent;

    beforeEach(() => {
        componet = new BoosterComponent();
    });

    it('progress can not be greater than 100', () => {
        componet.progress = 50;
        componet.changingValue(5);
        expect(componet.progress).toBe(55);
    });
});