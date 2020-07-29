import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// set per_page = 30-numberOfItemInLocalStorage
// check for duplicate photos
// remove the duplicate values pics and if filter+ratingHistory = 30 then combine of else remove remaing item from filter array
// if the rating is present display on the grid
export class GalleryService {
  keyword ='food'
  url : string = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
  params = `api_key=${environment.flickr.key}&tags=${this.keyword}&per_page=30&format=json&nojsoncallback=1`;
  constructor(private http:HttpClient) { }

  getGallery():Observable<any>{
    return this.http.get<any>(this.url+this.params);
  }
}
