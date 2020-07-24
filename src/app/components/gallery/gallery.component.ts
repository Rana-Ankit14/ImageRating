import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pics;
  constructor(private gallery:GalleryService) { }

  ngOnInit(): void {
    this.gallery.getGallery().subscribe(pic =>{
      this.pics = pic.photos.photo;
      console.log(pic);
    });
  }

}
