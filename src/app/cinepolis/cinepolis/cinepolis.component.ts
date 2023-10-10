import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  compradores:number = 0;
  boletos:number = 0;
  cantidad:number = 0;
  total:number = 0;
  descuentoTarjeta: boolean = false;
  descuentoBoletos: boolean = false;
  error: string = '';
  descuento: string = '';
  precio:number = 12.000;
  tarjeta: string = '';
  salida: boolean = false;


  acciones() {  
    this.cantidad = this.compradores * 7;
    
    if (this.boletos <= this.cantidad) {
      this.valorPagar();
    } else {
      this.total = 0;
      this.salida = false;
      this.error = 'No podemos procesar la compra';
    }
}


valorPagar() {
  this.error = '';
  this.descuento = '';
  
  let descuentoPorcentaje = 0;
  
  if (this.boletos < 3) {
    descuentoPorcentaje = 0;
  } else if (this.boletos < 6) {
    descuentoPorcentaje = 10;

  } else if (this.boletos > 7) {
    descuentoPorcentaje = 15;
  }

  if (this.tarjeta == 'no') {
    const descuentoDecimal = descuentoPorcentaje / 100;
    this.total = this.boletos * this.precio - this.boletos * this.precio * descuentoDecimal;
    
  } else if (this.tarjeta == 'si') {
    const descuentoDecimal = descuentoPorcentaje / 100;
    this.total = this.boletos * this.precio - this.boletos * this.precio * descuentoDecimal;
    this.total -= this.total * 0.1; 
  }else{
    const descuentoDecimal = descuentoPorcentaje / 100;
    this.total = this.boletos * this.precio - this.boletos * this.precio * descuentoDecimal;
  }
  

  

  this.descuentoBoletos = descuentoPorcentaje > 0;
  this.salida = true;
}


descuentoTar(){
  this.descuentoTarjeta = true;
}

DescuentoTar(){
  this.descuentoTarjeta = false;
}

borrar() {
  this.cantidad = 0;
  this.total = 0;
  this.error = '';
  this.descuento = '';
  this.salida = false;
  this.descuentoTarjeta = false;
  this.descuentoBoletos = false;
  }
}



