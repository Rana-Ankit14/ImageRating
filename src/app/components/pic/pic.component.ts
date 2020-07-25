import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PicService} from '../../services/pic.service';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  ratingHistory:Array<any> = [];

  id; secret; farm; server;
  title; description;
  name;
  reason;
  rating;
  ratingInput = true;
  reasonInput = true;
  nameInput = true;
  constructor(private route: ActivatedRoute, private pic:PicService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.server = params.get('server');
      this.secret = params.get('secret');
      this.farm = params.get('farm');
      this.pic.getPic(this.id).subscribe(pic =>{
        this.title = pic.photo.title._content;
        this.description = (pic.photo.description._content).split('<')[0];
      });
    });
  }

  submit(){
    if (this.rating === undefined){
      this.ratingInput = false;
      return;
    }
    this.ratingInput = true;
    if (this.name === undefined){
      this.nameInput = false;
      return;
    }
    this.nameInput = true;
    if (this.reason === undefined){
      this.reasonInput = false;
      return;
    }

    this.reasonInput = true;
    this.ratingHistory.push({
      id : this.id,
      secret: this.secret,
      farm: this.farm,
      server: this.server,
      name: this.name,
      reason : this.reason,
      rating: this.rating
    });
    console.log(this.ratingHistory);
    // window.location.href = '/ratings';

  }
}
