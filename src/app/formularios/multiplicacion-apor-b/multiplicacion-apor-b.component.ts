import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-apor-b',
  templateUrl: './multiplicacion-apor-b.component.html',
  styleUrls: ['./multiplicacion-apor-b.component.css']
})
export class MultiplicacionAporBComponent {
  num1:number=0;
  num2:number=0;
  res:string="";

  calcular(){
    let num2 = this.num2;
    for(let i = 0; i < num2; i++){
      if(i==0){
        this.res += this.num1;
      }
      else if(i>=1){
        this.res += "+"+this.num1;
      }
    }
    this.res += " = "+ this.num1*this.num2;
  }
}
