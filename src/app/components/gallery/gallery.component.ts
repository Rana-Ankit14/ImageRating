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

  constructor(private gallery: GalleryService) {
  }

  ngOnInit(): void {
    this.gallery.getGallery().subscribe(pic => {
      this.newPics = pic.photos.photo;
      this.previousRatings = JSON.parse(localStorage.getItem('ratingsHistory'));
      if (this.previousRatings === null) {
        this.pics = this.newPics;
        return;
      }
      // Removing duplicates pics
      this.result = this.newPics.filter(newPic => !this.previousRatings.some(({id}) => newPic.id === id));
      // shorting the length of the array that is holding the pics
      this.newResult = this.result.splice(0, this.result.length - this.previousRatings.length + 1);
      // combining both the previous ratingsHistory array and newly receive pics array through api without duplicates
      this.pics = this.previousRatings.concat(this.newResult);
    });

  }

}
