import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PicComponent } from './components/pic/pic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RatingsComponent } from './components/ratings/ratings.component';

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
    RouterModule.forRoot([
        {
          path: '',
          component: GalleryComponent
        },
        {
          path : 'pic',
          component : PicComponent
        },
      {
        path : 'ratings',
        component : RatingsComponent
      },
      {
        path : '**',
        component : NotfoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
