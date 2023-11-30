import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookComponent } from './pages/viewbook/viewbook.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

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
    path: 'returnBook',
    component: AddbookComponent,
    title: 'ReturnBook Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
