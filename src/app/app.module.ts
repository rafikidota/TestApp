import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediates/spies/doctor.component';
import { DoctorComponent } from './intermediates_integration/doctor/doctor.component';
import { HospitalComponent } from './intermediates_integration/hospital/hospital.component';
import { BoosterComponent } from './intermediates_integration/booster/booster.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { DoctorRouterComponent } from './advanced/doctor-router/doctor-router.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    BoosterComponent,
    NavbarComponent,
    DoctorRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
