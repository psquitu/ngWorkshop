import { Iusers } from './users.interface';
import { Injectable } from '@angular/core';

@Injectable()

export class UserService {
    constructor(){

    }
    data: any = [
        {id: 1, fname: "Ramesh", lname: "Bogati", email: "ramesh@gmail.com", phone: 9841562364, address: "Ghattekulo-32, Kathmandu", status: "InActive"},
        {id: 2, fname: "Dinesh", lname: "Bade", email: "dinesh@gmail.com", phone: 9841852364, address: "New Baneshwor-02, Kathmandu", status: "Active"},
        {id: 3, fname: "Nikesh", lname: "Maharjan", email: "nikesh@gmail.com", phone: 9813552364, address: "Baudha-01, Kathmandu", status: "InActive"}
    ]
    
    getAllUser(): Iusers[]{
        return this.data;
    }
}