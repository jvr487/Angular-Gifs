import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gifs } from '../interfaces/gifs.inteface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados():Gifs[]{
    return this._gifsServices.resultados;
  } 
  constructor(private _gifsServices:GifsService) { }


}
