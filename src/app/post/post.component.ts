import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any;
  postForm: FormGroup
  constructor(private _postService: PostService, fb: FormBuilder, private router: Router) {
    this.postForm = fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
      'url': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],

    })
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(res => {
        console.log("res in comp", res)
        this.posts = res
      })
  }

  addPost(post) {
    this._postService.addPost(post)
      .subscribe(newPost => {
        this.posts.push(newPost);
        this.router.navigateByUrl('/');
      })
  }

}
