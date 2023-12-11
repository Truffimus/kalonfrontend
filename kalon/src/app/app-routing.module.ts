import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookComponent } from './pages/viewbook/viewbook.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { BorrowedBooksComponent } from './pages/borrowed-books/borrowed-books.component';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Homepage'
  },
  {
    path: 'borrowedBook',
    component: BorrowedBooksComponent,
    title: 'BorrowedBook Page'
  },
  {
    path: 'bookDetails/:id',
    component: ViewbookComponent,
    title: 'Book Details'
  },
  {
    path: 'login',
    component: LoginpageComponent,
    title: 'Login Page'
  },
  {
    path: 'register',
    component: RegisterpageComponent,
    title: 'Register Page'
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
