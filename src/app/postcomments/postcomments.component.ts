import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { comments } from '../_models/comments';
import { PostmangerService } from '../_services/postmanger.service';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.css']
})
export class PostcommentsComponent implements OnInit,AfterViewInit {

  @Input() postId;
  allpostComments:comments[];
  searchOptions = ["Name","Email","Body"];
  selectedFilterOption = "Name";
  filteredList:comments[];
  displaycommentsList:comments[];
  numberofComments:number =0;

  constructor(private _postservice:PostmangerService) { }
  ngAfterViewInit(): void {
    this.getPostComments();
  }

  ngAfterContentInit(): void {
    
  }

  ngOnInit(): void {
     
  }

  searchComments(value:string){
    switch(this.selectedFilterOption){
      case "Email":
        this.filteredList = this.allpostComments.filter(x => x.email.toLowerCase()
          .includes(value.toLowerCase()));
          break;
      case "Body":
        this.filteredList = this.allpostComments.filter(x => x.body.toLowerCase()
          .includes(value.toLowerCase()));
          break;
      default:
        this.filteredList = this.allpostComments.filter(x => x.name.toLowerCase()
          .includes(value.toLowerCase()));
        break;
    }

    if(this.filteredList.length > 0)
      this.displaycommentsList = this.filteredList;
    else
      this.displaycommentsList = this.allpostComments;

    this.setNumberOfComments();
  }

  setfilterOption(option:string){
    this.selectedFilterOption=option;
  }

  private getPostComments(){
    this._postservice.getpostcomments(this.postId).subscribe(
      response => {
          this.allpostComments = response;
          this.displaycommentsList = this.allpostComments;
          this.setNumberOfComments();
      }
    )
  }

  setNumberOfComments(){
    this.numberofComments = this.displaycommentsList.length;
  }

}
