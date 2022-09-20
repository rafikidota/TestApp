import { Player2 } from './player2';

describe('Player 2 Emit', () => {
    let player2 = new Player2();
    beforeEach(() => player2 = new Player2());
    it('it has to emit an event when takes damage', () => {
        let newHP = 0;
        player2.hpChanges.subscribe(hp => {
            newHP = hp;
        });
        player2.takeDamage(100);
        expect(newHP).toBe(0);
    });
    it('it has to emit an event when takes damage and survive if damage is less than 100 ', () => {
        let newHP = 0;
        player2.hpChanges.subscribe(hp => {
            newHP = hp;
        });
        player2.takeDamage(50);
        expect(newHP).toBe(50);
    });
});