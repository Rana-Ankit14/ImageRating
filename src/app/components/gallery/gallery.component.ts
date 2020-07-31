import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../../services/gallery.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

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
  value;

  constructor(private gallery: GalleryService, private route: ActivatedRoute, private location:Location) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.get('page') !== null){
        this.page = parseInt(params.get('page'));
      }
      this.location.replaceState(this.location.path().split(';')[0], '');

    });
    this.callingApi(this.page);

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
        return true;
      });
      this.pics = this.newPics;
    });

  }

}
