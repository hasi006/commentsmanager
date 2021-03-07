import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../_models/post';
import { PostmangerService } from '../_services/postmanger.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  showDetails:boolean = false;
  posts:Post[];
  post:Post;

  constructor(private _postService:PostmangerService,private route:Router) { }

  ngOnInit(): void {
    this._postService.getposts().subscribe(response => {
      this.posts = response;
    },error => {
      console.log(error);
    })
  }

  postClick(_post:Post){
    this.route.navigate(["/details",_post.id]);
  }

}
