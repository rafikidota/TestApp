import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BoosterComponent } from './booster.component';

describe('BoosterComponent', () => {
  let component: BoosterComponent;
  let fixture: ComponentFixture<BoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoosterComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it has to show legend and progress', () => {
    component.legend = 'Loading progress';
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('Loading progress');
  });

  //TODO: fix this test
  xit('it has to show progress value in the input', () => {
    component.changingValue(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      // const elem: HTMLInputElement = input.nativeElement;
      expect(input.value).toBe('55');
    });
  });

  xit('it has to increase/decrease by 5 when clicking on button',()=>{
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click',null);
    expect(component.progress).toBe(45);
    buttons[1].triggerEventHandler('click',null);
    expect(component.progress).toBe(50);
  });
  
  xit('it has to show legend and progress', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click',null);
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('45');
  });

});
