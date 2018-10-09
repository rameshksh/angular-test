import { Component, OnInit, OnDestroy } from '@angular/core'
import { User } from '../../models/user';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.css']
})

export class UserDetailsComponent implements OnInit, OnDestroy {

    public user: User;
    public userId: number;

    private subscription: Subscription

    constructor(private route: ActivatedRoute, private userService: UserService) {
        this.user = new User();

        this.route.queryParams.subscribe((params) => {
            if (params["id"]) {
                this.userId = params["id"];
            }
        });
    }

    ngOnInit(): void {
        this.getUserDetail();
    }

    getUserDetail() {
        this.subscription = this.userService.getUser(this.userId).subscribe((res) => {
            this.user = res;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}