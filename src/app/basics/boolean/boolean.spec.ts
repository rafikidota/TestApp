import { isBoolean } from "./boolean";

describe('Boolean tests', () => {
    it('it has to return true', () => {
      const res = isBoolean();
    //   expect(res).toBe(true);
      expect(res).toBeTruthy();
    });
   

});