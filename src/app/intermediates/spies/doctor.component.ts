import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
    selector: 'app-doctors',
    template: `
    <p>
      doctors works!
    </p>
  `,
    styles: []
})
export class DoctorsComponent implements OnInit {

    public doctors: any[] = [];
    public msgError!: string;

    constructor(public _doctorService: DoctorService) { }

    ngOnInit() {
        this._doctorService.getDoctors()
            .subscribe(doctors => this.doctors = doctors);
    }

    addDoctor() {
        const doctor = { name: 'Doctor Juan Carlos' };

        this._doctorService.addDoctor(doctor)
            .subscribe({
                next: (doctorDB: any) => {
                    this.doctors.push(doctorDB);
                },
                error: (err) => {
                    this.msgError = err;
                }
            });
    }

    deleteDoctor(id: string) {
        const result = confirm('Are you sure do you want to delete this doctor?');

        if (result) {
            this._doctorService.deleteDoctor(id);
        }
    }
}
