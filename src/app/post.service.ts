import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, filter, switchMap } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  result: any;
  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get("/api/posts").pipe(map((response: Response) => {
      console.log("res in ser", response)
      this.result = response
      return this.result
    }));
  }

  getPost(id) {
    return this._http.get("/api/details/" + id).pipe(map((response: Response) => {
      this.result = response
      return this.result

    }));
  }

  addPost(post) {
    let headers = new HttpHeaders({ 'Content-type': 'application/json' })

    return this._http.post('/api/post', post, { headers: headers })
      .pipe(map((response: Response) => {
        this.result = response
        return this.result

      }));
  }



}
