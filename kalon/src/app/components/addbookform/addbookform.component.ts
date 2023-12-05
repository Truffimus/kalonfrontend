import { Component } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbookform',
  templateUrl: './addbookform.component.html',
  styleUrls: ['./addbookform.component.css']
})
export class AddbookformComponent {

constructor(){}

  addBookForm = new FormGroup({
      title: new FormControl(''),
      publisher: new FormControl(''),
      author: new FormControl(''),
      pud: new FormControl('')
  });
}
