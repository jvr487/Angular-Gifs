import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultSearchGifs, Gifs } from '../interfaces/gifs.inteface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'RgdDIPji1MqPwJxwAxEXdQxFzXO2OTFf';
  private _url:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gifs[]=[];
  get historial(){
    return [...this._historial];
  }

  constructor(private _http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  BuscarGifs(nombreGif:string): void{
    
    if(nombreGif.trim().length !== 0  && !this._historial.includes(nombreGif.trim().toLowerCase())){
      this._historial.unshift(nombreGif.trim().toLowerCase());
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key',this._apiKey)
    .set('q',nombreGif)
    .set('limit','10');


    this._http.get<ResultSearchGifs>(`${this._url}/search`,{ params })
    .subscribe((resp) =>{
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    })
    
  }
}
