import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from '../intermediates_integration/hospital/hospital.component';
import { DoctorComponent } from '../intermediates_integration/doctor/doctor.component';
import { BoosterComponent } from '../intermediates_integration/booster/booster.component';

export const routes: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'doctor/:id', component: DoctorComponent },
    { path: '**', component: BoosterComponent },
];

