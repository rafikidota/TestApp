import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress!: ElementRef;

  //tslint:disable-next-line:no-input-rename
  @Input('name') legend: string = 'Legend';
  @Input() progress: number = 50;

  //tslint:disable-next-line:no-output-rename
  @Output('updateValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onChanges(newValue:number){

      if ( newValue >= 100 ) {
        this.progress = 100;
      }else if ( newValue <= 0 ) {
        this.progress = 0;
      }else {
        this.progress = newValue;
      }
  
      this.txtProgress.nativeElement.value = this.progress;
  
      this.changeValue.emit( this.progress );
  
    }
  
    changingValue( valor: number ) {
  
      if ( this.progress >= 100 && valor > 0 ) {
        this.progress = 100;
        return;
      }
  
      if ( this.progress <= 0 && valor < 0 ) {
        this.progress = 0;
        return;
      }
  
      this.progress = this.progress + valor;
  
      this.changeValue.emit( this.progress );
  
  }

}
