import { Route } from "@angular/router";



export const APP_MAIN_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full'
    },
    {
        path: 'users-list',
        loadChildren: './components/userList/users-list.module#UserListModule'
    },
    {
        path: 'users-details',
        loadChildren: './components/userDetails/users-details.module#UserDetailsModule'
    }
]