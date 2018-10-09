import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    /**
     *
     */

    private baseUrl: string = 'https://jsonplaceholder.typicode.com';


    constructor(private httpClient: HttpClient) {


    }

    getUsers(): Observable<Array<User>> {
        return this.httpClient.get<Array<User>>(this.baseUrl + '/users');
    }

    getUser(id: number): Observable<User> {
        return this.httpClient.get<User>(this.baseUrl + '/users/' + id);
    }
}