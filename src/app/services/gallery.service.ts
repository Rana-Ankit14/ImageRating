import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getGallery():Observable<any>{
    return this.http.get<any>('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2e57eac93f1cd79bfa7d13c5fba36c6d&tags=food&per_page=31&page=&format=json&nojsoncallback=1&auth_token=72157715205700067-0c72fbcd3c178eea&api_sig=460766514ae8e5ee4fe5fcd72afc3349');
  }
}
