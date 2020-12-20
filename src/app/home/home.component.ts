import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(res => {
      this.posts = res;
      console.log("res in comp", res)
    });
  }

}