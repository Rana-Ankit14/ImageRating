import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PicService} from '../../services/pic.service';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  id;
  secret;
  farm;
  server;
  constructor(private route:ActivatedRoute, private pic:PicService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id= params.get('id');
      this.server= params.get('server');
      this.secret= params.get('secret');
      this.farm= params.get('farm');


    })
  }

}
