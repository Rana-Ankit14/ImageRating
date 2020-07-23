import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PicService {
  url;
  id;
  secret = '1ac8e9626a22528f';
  constructor(private http:HttpClient) { }

  getPic(id,secret){
    this.url ='https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=2e57eac93f1cd79bfa7d13c5fba36c6d&photo_id='+id+'&secret='+secret+'&format=json&nojsoncallback=1&auth_token=72157715205700067-0c72fbcd3c178eea&api_sig=6291f308aac12dc0310a4ef9f2cf4f9c';

    return this.http.get<any>(this.url);
  }
}
