import { FormBuilder } from '@angular/forms';
import { FormRegister } from './form';
describe('Forms', () => {
    
    let component: FormRegister;
    
    beforeEach(() => {
        component = new FormRegister(new FormBuilder());
    });
    
    it('it has to create a form with 2 fields, email and password', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('email is required', () => {
        const control = component.form.get('email');
        control?.setValue('dlesmes@nauta.cu');
        expect(control?.valid).toBeTruthy();
    });

    it('email has to be valid', () => {
        const control = component.form.get('email');
        control?.setValue('dlesmes@nauta.cu');
        expect(control?.valid).toBeTruthy();
    });

});