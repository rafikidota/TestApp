import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class DoctorService {

    constructor(public http: HttpClient) { }

    getDoctors() {
        return this.http.get('...').pipe(
            map((res: any) => res['doctors'])
        );
    }

    addDoctor(doctor: any) {
        return this.http.post('...', doctor).pipe(
            map((res: any) => res['doctor'])
        );
    }

    deleteDoctor(id: string) {
        return this.http.delete('...').pipe(
            map((res: any) => res['doctor'])
        );
    }


}
