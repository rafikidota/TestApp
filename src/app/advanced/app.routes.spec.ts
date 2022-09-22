import { routes } from "./app.routes";
import { DoctorComponent } from '../intermediates_integration/doctor/doctor.component';

describe('Main routes', () => {
    it('it has to exist route /doctor/:id', () => {
        expect(routes).toContain({
            path:'doctor/:id',
            component: DoctorComponent
        })
    });
});