import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook-site';
  posts: Post[]

  error: boolean

  postAlt: number;

  constructor(){
    this.posts = []
    this.posts = [
      new Post('Giovanni', 'Daje Roma'),
      new Post('Matteo', 'Wow'),
      new Post('Marco', 'Ehi')
    ]

    this.error = false
    this.postAlt = 470
  }
  sortPosts(): Post[]{
    return this.posts.sort((a: Post, b: Post) => (b.like - a.like))
  }

  addPost(autore: HTMLInputElement, testo: HTMLTextAreaElement) {
    if (autore.value != '' && testo.value != ''){
      this.postAlt = 470
      this.error = false


      this.posts.push(new Post(autore.value, testo.value))
      autore.value = ''
      testo.value = ''
    }else{
      this.error = true
      this.postAlt = 510

    }
    
  }
}