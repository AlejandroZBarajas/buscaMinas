import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { RowComponent } from './components/row/row.component';



@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent,
    RowComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BoardComponent,
    SquareComponent,
    RowComponent 
  ]
})
export class BoardModule { }
