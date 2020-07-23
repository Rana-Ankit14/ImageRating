import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getGallery():Observable<any>{
    return this.http.get<any>('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2e57eac93f1cd79bfa7d13c5fba36c6d&gallery_id=66911286-72157656404563712&per_page=30&format=json&nojsoncallback=1&auth_token=72157715205700067-0c72fbcd3c178eea&api_sig=38d75f2034b82982aa0b86822ff6236a');
  }
}
