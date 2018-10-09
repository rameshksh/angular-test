import { Component, OnInit, OnDestroy } from '@angular/core'
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'user-details',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})

export class UserListComponent implements OnInit, OnDestroy {

    public users: Array<User>;
    private subscription: Subscription

    constructor(private userService: UserService, private router: Router) {
        this.users = new Array<User>();
    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this.subscription = this.userService.getUsers().subscribe((res) => {
            this.users = res;
        });
    }

    getUserDetails(user: User) {
        let params = <NavigationExtras>{};
        params.queryParams = {
            id: user.id
        };

        this.router.navigate(['./users-details'], params)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}