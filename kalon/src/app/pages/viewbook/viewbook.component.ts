import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {
    
  constructor() { }

  ngOnInit(): void {
    console.log("ngoninit");

  }

  notWishlist: number = 0;

  toggleWishlist(toggle: number){
    switch(toggle){
      case 0: 
        this.notWishlist = 0;
        break;
      case 1: 
        this.notWishlist = 1;
        break;
    }
  }

}