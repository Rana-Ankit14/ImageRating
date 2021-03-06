import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PicService} from '../../services/pic.service';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  page;
  location;
  ratingDetails;
  id;
  secret;
  farm;
  server;
  title;
  description;
  name;
  reason;
  rating;
  ratingInput = true;
  reasonInput = true;
  nameInput = true;
  currentRatings;
  constructor(private route: ActivatedRoute, private pic: PicService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.server = params.get('server');
      this.secret = params.get('secret');
      this.farm = params.get('farm');
      this.page = params.get('page');
      this.pic.getPic(this.id).subscribe(pic => {
        this.title = pic.photo.title._content;
        this.description = (pic.photo.description._content).split('<')[0];
      });
    });
  }

  submit(): void {
    if (this.rating === undefined) {
      this.ratingInput = false;
      return;
    }
    this.ratingInput = true;
    if (this.name === undefined) {
      this.nameInput = false;
      return;
    }
    this.nameInput = true;
    if (this.reason === undefined) {
      this.reasonInput = false;
      return;
    }

    this.reasonInput = true;
    this.ratingDetails = {
      id: this.id,
      secret: this.secret,
      farm: this.farm,
      server: this.server,
      name: this.name,
      reason: this.reason,
      rating: this.rating,
      title: this.title
    };

    this.currentRatings = JSON.parse(localStorage.getItem('ratingsHistory'));
    if (this.currentRatings === null){
      localStorage.setItem('ratingsHistory', JSON.stringify([this.ratingDetails]));

    }
    else {
      // this.currentRatings[this.currentRatings.length] = this.ratingDetails;
      this.currentRatings.unshift(this.ratingDetails);
      localStorage.setItem('ratingsHistory', JSON.stringify(this.currentRatings));
    }
    this.location = `/gallery;page=${this.page}`;
    window.location.href = this.location;
  }
}
