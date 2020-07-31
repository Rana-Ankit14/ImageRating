import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppComponent} from './app.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {PicComponent} from './components/pic/pic.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {RatingsComponent} from './components/ratingsHistory/ratings.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PicComponent,
    NavbarComponent,
    NotfoundComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GalleryComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'pic',
        component: PicComponent
      },
      {
        path: 'ratingsHistory',
        component: RatingsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
