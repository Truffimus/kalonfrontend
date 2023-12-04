import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookComponent } from './pages/viewbook/viewbook.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { BorrowedBooksComponent } from './pages/borrowed-books/borrowed-books.component';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Homepage'
  },
  {
    path: 'addBook',
    component: AddbookComponent,
    title: 'AddBook Page'
  },
  {
    path: 'assignBook',
    component: AddbookComponent,
    title: 'AssignBook Page'
  },
  {
    path: 'borrowedBook',
    component: BorrowedBooksComponent,
    title: 'BorrowedBook Page'
  },
  {
    path: 'bookDetails',
    component: ViewbookComponent,
    title: 'Book Details'
  },
  {
    path: 'login',
    component: LoginpageComponent,
    title: 'Login Page'
  },
  {
    path: 'admin',
    component: AdminpageComponent,
    title: 'Admin Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
