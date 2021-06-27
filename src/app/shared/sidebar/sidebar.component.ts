import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get hitorialDeBusqueda():string[]{
    return this._gifsServices.historial;
  }
  
  constructor(private _gifsServices:GifsService) { }

  BuscarGif(gif:string):void{
    this._gifsServices.BuscarGifs(gif);
  }
}
