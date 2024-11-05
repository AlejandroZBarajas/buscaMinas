import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value : number = 0 
  clicked: boolean = false

  onClick(){
    this.clicked=true
  }

  getValue(): string{
    return this.clicked?(this.value===1 ? '*' :  '0'): ('')
  }
}
