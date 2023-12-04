import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewbookComponent } from './pages/viewbook/viewbook.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BorrowedBooksComponent } from './pages/borrowed-books/borrowed-books.component';
import { AddbookformComponent } from './components/addbookform/addbookform.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbookComponent,
    SidebarComponent,
    HomepageComponent,
    BookComponent,
    NavbarComponent,
    BorrowedBooksComponent,
    AddbookformComponent,
    LoginpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
