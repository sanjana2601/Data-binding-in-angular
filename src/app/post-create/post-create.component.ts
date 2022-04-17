import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  product:string = "Flowers";
  name:string = "Sanjana";
  imageUrl:string = "assets/flowers.jpg";
  msg:string ="";
  onAddCart(){
    this.msg = "Product addded in cart"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
