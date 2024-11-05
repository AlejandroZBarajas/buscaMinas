import { Component , Input} from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {
  @Input() row: number [] = []


}
