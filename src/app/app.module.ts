import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediates/spies/doctor.component';
import { DoctorComponent } from './intermediates_integration/doctor/doctor.component';
import { HospitalComponent } from './intermediates_integration/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
