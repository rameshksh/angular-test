import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './users-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  declarations: [
    UserListComponent
  ],
  entryComponents: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class UserListModule { }
