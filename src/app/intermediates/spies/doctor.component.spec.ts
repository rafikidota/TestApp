import { EMPTY, Observable, of, throwError } from 'rxjs';
import { DoctorsComponent } from './doctor.component';
import { DoctorService } from './doctor.service';

describe('DoctorComponent', () => {
    let component: DoctorsComponent;
    const service = new DoctorService(null!);
    beforeEach(() => {
        component = new DoctorsComponent(service);
    });

    it('Init: it has to load the doctors', () => {
        const doctors = ['doctor1', 'doctor2', 'doctor3']
        spyOn(service, 'getDoctors').and.callFake(() => {
            return of([doctors]);
        });
        component.ngOnInit();
        expect(component.doctors.length).toBeGreaterThan(0);
    });

    it('it has to connect to server to add a doctor', () => {
        const spy = spyOn(service, 'addDoctor').and.callFake((doctor: any) => {
            return of(EMPTY)
        });
        component.addDoctor();
        expect(spy).toHaveBeenCalled();
    });

    it('it has to add a new doctor', () => {
        const doctor = { id: 1, name: 'David' };
        spyOn(service, 'addDoctor').and.returnValue(of(doctor));
        component.addDoctor();
        expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    });

    it('if adding fails, msgError has to be equals to service error', () => {

        const error = 'Doctor not added';
        spyOn(service, 'addDoctor').and.returnValue(throwError(() => new Error(error).message))
        component.addDoctor();
        expect(component.msgError).toBe(error);
    });

    it('it has to connect to server to delete a doctor', () => {
        spyOn(window,'confirm').and.returnValue(true);
        const spy  = spyOn(service,'deleteDoctor').and.returnValue(of(EMPTY));
        component.deleteDoctor('1');
        expect(spy).toHaveBeenCalledOnceWith('1');
    });

    it('it does not have to connect to server to delete a doctor', () => {
        spyOn(window,'confirm').and.returnValue(false);
        const spy  = spyOn(service,'deleteDoctor').and.returnValue(of(EMPTY));
        component.deleteDoctor('1');
        expect(spy).not.toHaveBeenCalledOnceWith('1');
    });

});