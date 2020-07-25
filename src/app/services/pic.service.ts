import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PicService {
  url = 'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&';
  id;
  params;

  constructor(private http: HttpClient) {
  }

  getPic(id): Observable<any> {
    this.id = id;
    this.params = `api_key=${environment.flickr.key}&photo_id=${this.id}&format=json&nojsoncallback=1`;
    console.log(this.params);
    return this.http.get<any>( this.url+ this.params);

  }
}

