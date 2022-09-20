import { Player } from './class';

describe('Class tests', () => {
    let player = new Player();

     beforeAll(()=>{
        //  console.log('beforeAll');
     });

     beforeEach(()=>{
        //  console.log('beforeEach');
        // player.hp = 100;
        player = new Player()
    });
    
    afterAll(()=>{
        //  console.log('afterAll');
    });
    
    afterEach(()=>{
        //  console.log('afterEach');
        // player.hp = 100;
     });
    

    it('it has to return 80 hp, if takes 20 damage', () => {
        // const player = new Player();
        const res = player.takeDamage(20);

        expect(res).toBe(80);
    });
    it('it has to return 50 hp, if takes 50 damage', () => {
        // const player = new Player();
        const res = player.takeDamage(50);

        expect(res).toBe(50);
    });
    it('it has to return 0 hp, if takes 100 damage', () => {
        // const player = new Player();
        const res = player.takeDamage(100);

        expect(res).toBe(0);
    });
});