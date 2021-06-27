import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private _gifServices:GifsService){}
  
  buscar(){
    const elemenBuscar = this.txtBuscar.nativeElement;
    
    this._gifServices.BuscarGifs(elemenBuscar.value)
    elemenBuscar.value = '';
  }

}
