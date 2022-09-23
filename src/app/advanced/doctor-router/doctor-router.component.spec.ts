import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRouterComponent } from './doctor-router.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, EMPTY, of, Subject } from 'rxjs';

class FakeRouter {
  navigate(params: Params) { }
}
class FakeActivatedRoute {
  // params: Observable<any> = of(EMPTY);
  private subject = new Subject();
  get params() {
    return this.subject.asObservable();
  }

  push(value: unknown) {
    this.subject.next(value);
  }
}

describe('DoctorRouterComponent', () => {
  let component: DoctorRouterComponent;
  let fixture: ComponentFixture<DoctorRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRouterComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DoctorRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it has to redirect to doctor page when doctor is been saved', () => {

    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith(['doctor', '123']);
  });

  it('it has to set id = new', () => {
    component = fixture.componentInstance;
    const activatedRoute:any = TestBed.inject(ActivatedRoute);// any => FakeActivatedRoute
    // const activatedRoute:FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.push({ id: 'new' });
    expect(component.id).toBe('new');
  });


});
