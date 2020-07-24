import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PicService {
  // url  = 'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&';
  // id;
  // params;
  // secret;
  constructor(private http:HttpClient) { }
  //
  // getPic(id,secret):Observable<any>{
  // this.id = id;
  // this.secret = secret;
  // this.params = `api_key=${environment.flickr.key}&id=${this.id}&secret=${this.secret}&format=json&nojsoncallback=1&secret=${environment.flickr.secret}`;
  //   console.log(this.url+this.params);
  //   return this.http.get<any>(this.url+this.params);
  // }
}
