import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../../services/gallery.service';
import {global} from '@angular/compiler/src/util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  page = 1;
  pics;
  newPics;
  previousRatings;
  result;
  newResult;
  value;

  constructor(private gallery: GalleryService) {
  }

  ngOnInit(): void {
    this.callingApi();
  }

  next(): void {
    this.page++;
    this.callingApi(this.page);
  }

  previous(): void {
    this.page--;
    this.callingApi(this.page);
  }

  callingApi(currentPage = 1): void {
    this.gallery.getGallery(currentPage).subscribe(pic => {
      this.newPics = pic.photos.photo;
      this.previousRatings = JSON.parse(localStorage.getItem('ratingsHistory'));
      if (this.previousRatings === null) {
        this.pics = this.newPics;
        return;
      }

      this.newPics.forEach((newPic, newPicIndex) => {
        this.previousRatings.some(({id}, index) => {
          if (newPic.id === id) {
            this.newPics[newPicIndex] = this.previousRatings[index];
            return true;
          }
          return false;
        });
        console.log(this.value);
        return true;
      });
      this.pics = this.newPics;
    });

  }

}
