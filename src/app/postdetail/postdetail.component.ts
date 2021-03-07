import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_models/post';
import { PostmangerService } from '../_services/postmanger.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  post:Post;
  id;

  constructor(private _postService:PostmangerService,private _route:ActivatedRoute) {
    this._route.params.subscribe(params => {
      this.id = +params['id'];       
    });
  }
  
  ngOnInit(): void {
    this._postService.getpostbyId(this.id).subscribe(response => {
      this.post = response;
    });
  }

}
