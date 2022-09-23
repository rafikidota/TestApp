import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-router',
  templateUrl: './doctor-router.component.html'
})
export class DoctorRouterComponent implements OnInit {

  id!: string;

  constructor(
    public router: Router,
    public ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  saveDoctor(){
    this.router.navigate(['doctor','123'])
  }

}
