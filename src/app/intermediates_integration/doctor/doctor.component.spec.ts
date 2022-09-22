import { DoctorComponent } from './doctor.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';


describe('DoctorComponent', () => {
    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DoctorComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                DoctorService
            ],
        });
        fixture = TestBed.createComponent(DoctorComponent);
        component = fixture.componentInstance;
    });

    it('it has to create the component', () => {
        expect(component).toBeTruthy();
    });

    it('it has to return doctor name', () => {
        const name = 'David';
        const res = component.greetDoctor(name);
        expect(res).toContain(name);
    });


});