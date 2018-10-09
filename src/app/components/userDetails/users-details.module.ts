import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './users-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: UserDetailsComponent
    }
];


@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    entryComponents: [UserDetailsComponent],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class UserDetailsModule { }
