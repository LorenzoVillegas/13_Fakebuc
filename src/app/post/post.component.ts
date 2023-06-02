import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from './post.model.js';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post;
  comment:boolean
  error:boolean

  constructor(){
    this.comment = false
    this.error = false
  }


  addLike(){
    this.post.add_like()
  }

  commentAppear(){

  
    this.error = false

    if (this.comment){
      this.comment = false
    }else{
      this.comment = true
    }
  }

  add_comment(commento: HTMLTextAreaElement){
    if (commento.value == ''){
      this.error = true
    }else{
      this.error = false
      this.post.add_comment(commento.value)
      commento.value = ''
    }
    }

  }
