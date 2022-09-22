import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];

  constructor(public ds: DoctorService) { }

  ngOnInit(): void { }

  greetDoctor(name: string) {
    return `Hi ${name}`;
  }

  getDoctors() {
    this.ds.getDoctors().subscribe((doctors: any) => this.doctors = doctors);
  }
}
