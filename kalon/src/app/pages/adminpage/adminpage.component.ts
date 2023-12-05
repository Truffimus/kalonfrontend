import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {

  constructor() {}

  addBookForm = new FormGroup({
    title: new FormControl(''),
    publisher: new FormControl(''),
    author: new FormControl(''),
    pud: new FormControl('')
  });

  public page = 0;

  myMethod(pageId: number){

    console.log("clicked");

    switch(pageId){
      case 0: 
        this.page = 0;
        break;
      case 1: 
        this.page = 1;
        break;
      case 2: 
        this.page = 2;
        break;
      case 3: 
        this.page = 3;
        break;
      case 4: 
        this.page = 4;
        break;
      default:
        this.page = 0
        break;

    }
      
    }

}
