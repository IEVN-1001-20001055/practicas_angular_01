import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  convertir: string='';
  celsius:string='';
  fahrenheit:string='';
  resultado:number=0;
  Convertir:string='';



  Calcular():void{
    if (this.convertir === 'celsius') {
      this.resultado = (parseInt(this.Convertir) - 32 ) * 5/9;
    } 
    else if (this.convertir === 'fahrenheit') {
      this.resultado = parseInt(this.Convertir) * 1.8 + 32 ;
    }

  }


}
