import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  rows: number[][]=[]
  revelados: boolean[][]=[]

  ngOnInit(): void {
      this.generatesBoard()
  }

  generatesBoard(){
    for(let i=0; i<10; i++){
      const row = this.generatesRow()
      this.rows.push(row)
      this.revelados.push(new Array(10).fill(false))
    }
  }

  generatesRow():number[]{
    let row = new Array(10).fill(0)
    const minePosition = Math.floor(Math.random()*10)
    row[minePosition] = 1
    return row
  }

  revelar(row:number, col:number):void{
    if(this.revelados[row][col]){
      return
    }
    this.revelados[row][col]=true
    if(this.rows[row][col] === 0 ){
      this.revelarPegados(row,col)
    }
  }

  revelarPegados(row:number, col:number):void{
    const stack:{row:number, col:number}[]=[{row,col}]

    while(stack.length>0){
      const {row,col} = stack.pop()!

      if(this.revelados[row][col]) continue

      this.revelados[row][col] = true

      if(this.rows[row][col] === 0 ){
        const pegados = this.getPegados(row,col)
        pegados.forEach(({row: r,col: c}) => {
          if(!this.revelados[r][c]) {

            stack.push({row:r, col:c})
          }
        })
      }
    }
  }

  getPegados(row:number, col:number):{row:number, col:number}[]{
    const pegados:{row:number, col:number}[]=[]
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1] 
    ]
    for(let [dx, dy] of directions){
      const newRow = row +dx 
      const newCol = col + dy

      if(newRow >= 0 && newRow < 10 && newCol >= 0 && newCol <10){
        pegados.push({row: newRow, col: newCol})
      }
    }
    return pegados
  }
}
